// //"use strict";

// import path from "path";
// import { test, expect } from "../global-setup";
// import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

// let slug = "/advanced-tabs";

// test("Test Section", async ({ page }) => {
//   await page.goto(slug);
//   const selector = ".elementor-element-73ca6f31"; // Replace with your actual selector
//   await page.waitForSelector(selector);
//   await page.locator(selector).scrollIntoViewIfNeeded();

//   const filePath = path.join(__dirname, `../snapshots/${selector.substring(1)}.json`);

//   const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
//   saveStructure(nodeStructure, filePath);

//   const existingNodeStructure = getStructure(filePath);
//   expect(nodeStructure).toEqual(existingNodeStructure);
// });
