"use strict";
import { test, expect } from "../global-setup";

let slug = "/woo-product-grid";
let heading = "Woo Product Grid";

test.describe("Woo Product Grid", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/dynamic-content-elements\/woocommerce-product-grid/
    );
  });

  test("Test Section: WooCommerce Product Grid", async ({ page }) => {
    await page.getByRole("heading", { name: "WooCommerce Product Grid" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "WooCommerce Product Grid" })).toBeVisible();
  });
});
