"use strict";
import { test, expect } from "../global-setup";

let slug = "/woo-product-gallery";
let heading = "Woo Product Gallery";

test.describe("Woo Product Gallery", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/woo-product-gallery/
    );
  });

  test("Test Section: Style Stunning Ready Layouts", async ({ page }) => {
    await page.getByRole("heading", { name: "Style Stunning Ready Layouts" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Style Stunning Ready Layouts" })).toBeVisible();
  });
});
