/**
 * Utility functions for handling computed styles in tests
 */
import fs from 'fs';
import path from 'path';

/**
 * Capture computed styles for an element
 * @param {import('@playwright/test').Locator} locator - Playwright locator for the element
 * @param {string[]} styleProperties - Array of CSS properties to capture
 * @returns {Promise<Object>} - Object with computed styles
 */
async function captureComputedStyles(locator, styleProperties) {
  return await locator.evaluate((el, properties) => {
    const styles = window.getComputedStyle(el);
    const result = {};

    for (const prop of properties) {
      result[prop] = styles[prop];
    }

    return result;
  }, styleProperties);
}

/**
 * Save computed styles to a JSON file
 * @param {Object} styles - Object containing all captured styles
 * @param {string} fileName - Name of the file to save (without extension)
 * @param {boolean} [isEnvironmentSpecific=false] - Whether to save as environment-specific baseline
 */
function saveStylesToFile(styles, fileName, isEnvironmentSpecific = false) {
  const baselinePath = path.join(process.cwd(), 'test-baselines');

  // Create the directory if it doesn't exist
  if (!fs.existsSync(baselinePath)) {
    fs.mkdirSync(baselinePath, { recursive: true });
  }

  // Add environment suffix if needed
  let finalFileName = fileName;
  if (isEnvironmentSpecific) {
    const environment = process.env.CI === 'true' ? 'ci' : 'local';
    finalFileName = `${fileName}-${environment}`;
  }

  const filePath = path.join(baselinePath, `${finalFileName}.json`);
  fs.writeFileSync(filePath, JSON.stringify(styles, null, 2));

  console.log(`Saved baseline styles to ${filePath}`);
}

/**
 * Load computed styles from a JSON file
 * @param {string} fileName - Name of the file to load (without extension)
 * @param {boolean} [useEnvironmentSpecific=false] - Whether to load environment-specific baseline
 * @returns {Object|null} - Object containing all captured styles or null if file doesn't exist
 */
function loadStylesFromFile(fileName, useEnvironmentSpecific = false) {
  let filePath;

  if (useEnvironmentSpecific) {
    // Try to load environment-specific baseline first
    const environment = process.env.CI === 'true' ? 'ci' : 'local';
    const envSpecificFileName = `${fileName}-${environment}`;
    filePath = path.join(process.cwd(), 'test-baselines', `${envSpecificFileName}.json`);

    if (fs.existsSync(filePath)) {
      console.log(`Loading environment-specific baseline: ${envSpecificFileName}`);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContent);
    }

    console.log(`Environment-specific baseline not found, falling back to generic baseline`);
  }

  // Fall back to generic baseline
  filePath = path.join(process.cwd(), 'test-baselines', `${fileName}.json`);

  if (!fs.existsSync(filePath)) {
    console.log(`Baseline file ${filePath} does not exist`);
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
}

/**
 * Compare current styles with baseline styles
 * @param {Object} currentStyles - Current computed styles
 * @param {Object} baselineStyles - Baseline styles from file
 * @param {Object} [options] - Comparison options
 * @param {Object} [options.tolerances] - Tolerance values for specific properties
 * @param {boolean} [options.strictMode=true] - Whether to use strict comparison
 * @returns {Object} - Object with comparison results
 */
function compareStyles(currentStyles, baselineStyles, options = {}) {
  const {
    tolerances = {
      // Default tolerances for common properties that might vary between environments
      'width': 5, // 5px tolerance for width
      'height': 5, // 5px tolerance for height
      'font-size': 1, // 1px tolerance for font size
      'line-height': 1, // 1px tolerance for line height
      'margin': 2, // 2px tolerance for margins
      'padding': 2, // 2px tolerance for padding
      'border-radius': 1 // 1px tolerance for border radius
    },
    strictMode = true
  } = options;

  const results = {
    matches: true,
    differences: {}
  };

  // Compare each section
  for (const section in currentStyles) {
    if (!baselineStyles[section]) {
      results.matches = false;
      results.differences[section] = { error: 'Section missing in baseline' };
      continue;
    }

    results.differences[section] = {};

    // Compare each property in the section
    for (const prop in currentStyles[section]) {
      const currentValue = currentStyles[section][prop];
      const baselineValue = baselineStyles[section][prop];

      // Skip if values are exactly the same
      if (currentValue === baselineValue) {
        continue;
      }

      // Check if this property has a tolerance defined
      let isWithinTolerance = false;

      // Try to extract numeric values for comparison with tolerance
      const currentNumeric = parseNumericValue(currentValue);
      const baselineNumeric = parseNumericValue(baselineValue);

      if (currentNumeric !== null && baselineNumeric !== null) {
        // Find the appropriate tolerance for this property
        const tolerance = findToleranceForProperty(prop, tolerances);

        if (tolerance !== null) {
          // Check if the difference is within tolerance
          const difference = Math.abs(currentNumeric - baselineNumeric);
          isWithinTolerance = difference <= tolerance;

          if (isWithinTolerance && !strictMode) {
            // If within tolerance and not in strict mode, consider it a match
            continue;
          }
        }
      }

      // If we got here, values are different and either:
      // 1. We couldn't extract numeric values
      // 2. No tolerance was defined for this property
      // 3. The difference exceeds the tolerance
      // 4. We're in strict mode and want to report all differences
      results.matches = results.matches && isWithinTolerance && !strictMode;

      results.differences[section][prop] = {
        current: currentValue,
        baseline: baselineValue,
        withinTolerance: isWithinTolerance
      };
    }

    // If no differences in this section, remove the empty object
    if (Object.keys(results.differences[section]).length === 0) {
      delete results.differences[section];
    }
  }

  return results;
}

/**
 * Parse a CSS value to extract its numeric component
 * @param {string} value - CSS value to parse
 * @returns {number|null} - Numeric value or null if parsing failed
 */
function parseNumericValue(value) {
  if (typeof value !== 'string') return null;

  // Try to extract a number with optional unit (px, em, rem, etc.)
  const match = value.match(/^(-?\d+(\.\d+)?)(?:px|em|rem|%|vh|vw|pt)?$/);

  if (match) {
    return parseFloat(match[1]);
  }

  return null;
}

/**
 * Find the appropriate tolerance for a CSS property
 * @param {string} property - CSS property name
 * @param {Object} tolerances - Tolerance definitions
 * @returns {number|null} - Tolerance value or null if not found
 */
function findToleranceForProperty(property, tolerances) {
  // Check for exact match
  if (tolerances[property] !== undefined) {
    return tolerances[property];
  }

  // Check for partial matches (e.g., 'margin-top' should match 'margin' tolerance)
  for (const key in tolerances) {
    if (property.startsWith(key)) {
      return tolerances[key];
    }
  }

  return null;
}

/**
 * Determine if style tests should be skipped in the current environment
 * @returns {boolean} - True if style tests should be skipped
 */
function shouldSkipStyleTests() {
  // Skip style tests if explicitly set to true
  if (process.env.SKIP_STYLE_TESTS === 'true') {
    return true;
  }

  // Skip style tests in CI by default unless explicitly set to false
  if (process.env.CI === 'true' && process.env.RUN_STYLE_TESTS_IN_CI !== 'true') {
    return true;
  }

  return false;
}

export {
    captureComputedStyles, compareStyles, loadStylesFromFile, saveStylesToFile, shouldSkipStyleTests
};

