"use strict";

import { test, expect } from "../global-setup";

let slug = "/woo-thank-you";
let heading = "Woo Thank You";

// test.describe("Woo Thank You", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/ea-woo-thank-you/);
//   });

//   test("Test Preset 1", async ({ page }) => {
//     const selector = ".elementor-element-ea9c8b4"; // Replace with your actual selector
//     await page.waitForSelector(selector);
//     await page.locator(selector).scrollIntoViewIfNeeded();

//     const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

//     const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
//     saveStructure(nodeStructure, filePath);

//     const existingNodeStructure = getStructure(filePath);
//     expect(nodeStructure).toEqual(existingNodeStructure);
//   });

//   test("Test Preset 2", async ({ page }) => {
//     const selector = ".elementor-element-4c4ceb2"; // Replace with your actual selector
//     await page.waitForSelector(selector);
//     await page.locator(selector).scrollIntoViewIfNeeded();

//     const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

//     const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
//     saveStructure(nodeStructure, filePath);

//     const existingNodeStructure = getStructure(filePath);
//     expect(nodeStructure).toEqual(existingNodeStructure);
//   });

//   test("Test Preset 3", async ({ page }) => {
//     const selector = ".elementor-element-754cc9b"; // Replace with your actual selector
//     await page.waitForSelector(selector);
//     await page.locator(selector).scrollIntoViewIfNeeded();

//     const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

//     const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
//     saveStructure(nodeStructure, filePath);

//     const existingNodeStructure = getStructure(filePath);
//     expect(nodeStructure).toEqual(existingNodeStructure);
//   });
// });
