// "use strict";

// import path from "path";
// import { test, expect } from "../global-setup";
// import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

// let slug = "/woo-product-grid";
// let heading = "Woo Product Grid";

// test.describe("Woo Product Grid", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
//       "href",
//       /docs\/dynamic-content-elements\/woocommerce-product-grid/
//     );
//   });

//   test("Test Preset 1", async ({ page, browserName }) => {
//     const selector = ".elementor-element-7b2risg"; // Replace with your actual selector
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
//     const selector = ".elementor-element-2a8ceca"; // Replace with your actual selector
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
//     const selector = ".elementor-element-0y97pyy"; // Replace with your actual selector
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
