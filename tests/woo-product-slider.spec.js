"use strict";
import { test, expect } from "../global-setup";

let slug = "/woo-product-slider";
let heading = "Woo Product Slider";

test.describe("Woo Product Slider", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/woo-product-slider/);
  });

  test("Test Section: Style Amazing Ready Layouts", async ({ page }) => {
    await page.getByRole("heading", { name: "Style Amazing Ready Layouts" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Style Amazing Ready Layouts" })).toBeVisible();
  });
});
