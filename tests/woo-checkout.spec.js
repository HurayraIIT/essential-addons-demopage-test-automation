// "use strict";

//
// import { test, expect } from "../global-setup";
//

// let slug = "/woo-checkout";
// let heading = "Woo Checkout";

// test.describe("Woo Checkout - Default", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/woo-checkout/);
//   });

//   test("Test Preset 1", async ({ page, browserName }) => {
//     const selector = ".elementor-element-5bc31047"; // Replace with your actual selector
//     await page.waitForSelector(selector);
//     await page.locator(selector).scrollIntoViewIfNeeded();

//     const filePath = path.join(
//       __dirname,
//       `../snapshots/${slug.substring(1)}-${selector.substring(1)}-default-${browserName}.json`
//     );

//     const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
//     saveStructure(nodeStructure, filePath);

//     const existingNodeStructure = getStructure(filePath);
//     expect(nodeStructure).toEqual(existingNodeStructure);
//   });
// });

// test.describe("Woo Checkout - Multi Step", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(`${slug}/woocommerce-checkout-multi-steps`);
//     // await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     // await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     // await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/woo-checkout/);
//   });

//   test("Test Preset 1", async ({ page, browserName }) => {
//     const selector = ".elementor-element-6a85f4c3"; // Replace with your actual selector
//     await page.waitForSelector(selector);
//     await page.locator(selector).scrollIntoViewIfNeeded();

//     const filePath = path.join(
//       __dirname,
//       `../snapshots/${slug.substring(1)}-${selector.substring(1)}-multistep-${browserName}.json`
//     );

//     const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
//     saveStructure(nodeStructure, filePath);

//     const existingNodeStructure = getStructure(filePath);
//     expect(nodeStructure).toEqual(existingNodeStructure);
//   });
// });

// test.describe("Woo Checkout - Split", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(`${slug}/woocommerce-checkout-split`);
//     // await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     // await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     // await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/woo-checkout/);
//   });

//   test("Test Preset 1", async ({ page, browserName }) => {
//     const selector = ".elementor-element-dcb8860"; // Replace with your actual selector
//     await page.waitForSelector(selector);
//     await page.locator(selector).scrollIntoViewIfNeeded();

//     const filePath = path.join(
//       __dirname,
//       `../snapshots/${slug.substring(1)}-${selector.substring(1)}-split-${browserName}.json`
//     );

//     const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
//     saveStructure(nodeStructure, filePath);

//     const existingNodeStructure = getStructure(filePath);
//     expect(nodeStructure).toEqual(existingNodeStructure);
//   });
// });
