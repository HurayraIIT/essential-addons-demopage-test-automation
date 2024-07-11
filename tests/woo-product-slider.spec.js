// "use strict";

// import path from "path";
// import { test, expect } from "../global-setup";
// import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

// let slug = "/woo-product-slider";
// let heading = "Woo Product Slider";

// test.describe("Woo Product Slider", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/woo-product-slider/);
//   });

//   test("Test Preset 1", async ({ page, browserName }) => {
//     const selector = ".elementor-element-349931a"; // Replace with your actual selector
//     await page.waitForSelector(selector);
//     await page.locator(selector).scrollIntoViewIfNeeded();

//     const filePath = path.join(
//       __dirname,
//       `../snapshots/${slug.substring(1)}-${selector.substring(1)}-${browserName}.json`
//     );

//     const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
//     saveStructure(nodeStructure, filePath);

//     const existingNodeStructure = getStructure(filePath);
//     expect(nodeStructure).toEqual(existingNodeStructure);
//   });

//   test("Test Preset 2", async ({ page, browserName }) => {
//     const selector = ".elementor-element-4943e05"; // Replace with your actual selector
//     await page.waitForSelector(selector);
//     await page.locator(selector).scrollIntoViewIfNeeded();

//     const filePath = path.join(
//       __dirname,
//       `../snapshots/${slug.substring(1)}-${selector.substring(1)}-${browserName}.json`
//     );

//     const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
//     saveStructure(nodeStructure, filePath);

//     const existingNodeStructure = getStructure(filePath);
//     expect(nodeStructure).toEqual(existingNodeStructure);
//   });

//   test("Test Preset 3", async ({ page, browserName }) => {
//     const selector = ".elementor-element-2382c99"; // Replace with your actual selector
//     await page.waitForSelector(selector);
//     await page.locator(selector).scrollIntoViewIfNeeded();

//     const filePath = path.join(
//       __dirname,
//       `../snapshots/${slug.substring(1)}-${selector.substring(1)}-${browserName}.json`
//     );

//     const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
//     saveStructure(nodeStructure, filePath);

//     const existingNodeStructure = getStructure(filePath);
//     expect(nodeStructure).toEqual(existingNodeStructure);
//   });

//   test("Test Preset 4", async ({ page, browserName }) => {
//     const selector = ".elementor-element-5e0a8fa"; // Replace with your actual selector
//     await page.waitForSelector(selector);
//     await page.locator(selector).scrollIntoViewIfNeeded();

//     const filePath = path.join(
//       __dirname,
//       `../snapshots/${slug.substring(1)}-${selector.substring(1)}-${browserName}.json`
//     );

//     const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
//     saveStructure(nodeStructure, filePath);

//     const existingNodeStructure = getStructure(filePath);
//     expect(nodeStructure).toEqual(existingNodeStructure);
//   });
// });
