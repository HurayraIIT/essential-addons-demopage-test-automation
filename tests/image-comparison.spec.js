"use strict";

import { test, expect } from "../global-setup";

test.describe("Image Comparison - Live Demo Page", () => {
  let slug = "https://essential-addons.com/elementor/image-comparison";
  let heading = "Image Comparison";

  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect
      .soft(page.getByRole("link", { name: "Documentation" }))
      .toHaveAttribute("href", /docs\/image-comparison/);
  });

  test("Test Section: Create Perfect Product Comparison", async ({ page }) => {
    await page.getByRole("heading", { name: "Create Perfect Product Comparison" }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: "Create Perfect Product Comparison" })).toBeVisible();
    await expect.soft(page.getByText("Instantly upload preferred  ")).toBeVisible();

    await page.locator("#eael-image-comparison-23558b85 div").nth(2).click();
    await expect.soft(page.locator("#eael-image-comparison-23558b85 div").nth(3)).toBeVisible();
    await expect.soft(page.locator("#eael-image-comparison-23558b85 span").nth(1)).toBeVisible();
    await expect.soft(page.locator("#eael-image-comparison-23558b85 span").first()).toBeVisible();
    await page.locator("#eael-image-comparison-23558b85 div").nth(3).click();
  });
});
