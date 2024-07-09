"use strict";

import fs from "fs";
import path from "path";
import { test, expect } from "../global-setup";

let slug = "/flip-box";

test("Test Section", async ({ page, browserName }) => {
  let browser_name = browserName.toLowerCase();
  await page.goto(slug);
  const selector = ".elementor-element-6dded39"; // Replace with your actual selector
  await page.waitForSelector(selector);

  // Define the combined function to evaluate on the page
  const evaluateNodeStructure = async (selector) => {
    const node = document.querySelector(selector);

    function getNodeStructure(node) {
      if (!node) return null; // Handle case where selector doesn't match any element

      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent.trim();
        return text ? { text } : null;
      }

      const getComputedStyleProperties = (node) => {
        const computedStyle = window.getComputedStyle(node);
        return Array.from(computedStyle).reduce((style, property) => {
          if (!property.startsWith("-")) {
            style[property] = computedStyle.getPropertyValue(property);
          }
          return style;
        }, {});
      }

      const structure = {
        tag: node.tagName.toLowerCase(),
        attributes: Array.from(node.attributes).reduce((attrs, attr) => {
          attrs[attr.name] = attr.value;
          return attrs;
        }, {}),
        computedStyle: getComputedStyleProperties(node),
        children: Array.from(node.childNodes).map(getNodeStructure).filter(Boolean),
      };

      return structure;
    }

    return getNodeStructure(node);
  };

  // Execute the function on a specific selector
  const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);

  // Write nodeStructure to json file
  const filePath = path.join(__dirname, `../snapshots/${selector.substring(1)}-${browser_name}.json`);

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(nodeStructure, null, 2));
    console.log(`File written successfully: ${filePath}`);
  } else {
    // verify that the nodestructure matches the existing structure
    const existingNodeStructure = JSON.parse(fs.readFileSync(filePath, "utf8"));
    expect(nodeStructure).toEqual(existingNodeStructure);
    console.log(`Node structure matches the existing structure: ${filePath}`);
  }
});
