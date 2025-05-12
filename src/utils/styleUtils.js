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
 */
function saveStylesToFile(styles, fileName) {
  const baselinePath = path.join(process.cwd(), 'test-baselines');

  // Create the directory if it doesn't exist
  if (!fs.existsSync(baselinePath)) {
    fs.mkdirSync(baselinePath, { recursive: true });
  }

  const filePath = path.join(baselinePath, `${fileName}.json`);
  fs.writeFileSync(filePath, JSON.stringify(styles, null, 2));

  console.log(`Saved baseline styles to ${filePath}`);
}

/**
 * Load computed styles from a JSON file
 * @param {string} fileName - Name of the file to load (without extension)
 * @returns {Object|null} - Object containing all captured styles or null if file doesn't exist
 */
function loadStylesFromFile(fileName) {
  const filePath = path.join(process.cwd(), 'test-baselines', `${fileName}.json`);

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
 * @returns {Object} - Object with comparison results
 */
function compareStyles(currentStyles, baselineStyles) {
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
      if (baselineStyles[section][prop] !== currentStyles[section][prop]) {
        results.matches = false;
        results.differences[section][prop] = {
          current: currentStyles[section][prop],
          baseline: baselineStyles[section][prop]
        };
      }
    }

    // If no differences in this section, remove the empty object
    if (Object.keys(results.differences[section]).length === 0) {
      delete results.differences[section];
    }
  }

  return results;
}

export {
    captureComputedStyles, compareStyles, loadStylesFromFile, saveStylesToFile
};

