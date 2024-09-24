"use strict";

import { test, expect } from "../global-setup";

let slug = "/woo-cart";
let heading = "Woo Cart";

// test.describe("Woo Cart", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/woocommerce-cart/);
//   });

//   test("Test Section: Design An Attractive Cart Page With Ready Layouts", async ({ page }) => {
//     await page
//       .getByRole("heading", { name: "Design An Attractive Cart Page With Ready Layouts" })
//       .scrollIntoViewIfNeeded();
//     await expect(
//       page.getByRole("heading", { name: "Design An Attractive Cart Page With Ready Layouts" })
//     ).toBeVisible();
//   });
// });
