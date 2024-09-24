"use strict";

import { test, expect } from "../global-setup";

let slug = "/woo-product-carousel";
let heading = "Woo Product Carousel";

// test.describe("Woo Product Carousel", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await page.waitForSelector(".elementor-element-382b38e");
//     await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
//       "href",
//       /docs\/woo-product-carousel/
//     );
//   });

//   test("Test Section: Use Ready Carousel Layouts & Advanced Styles", async ({ page }) => {
//     await page.getByRole("heading", { name: "Use Ready Carousel Layouts & Advanced Styles" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Use Ready Carousel Layouts & Advanced Styles" })).toBeVisible();
//   });
// });
