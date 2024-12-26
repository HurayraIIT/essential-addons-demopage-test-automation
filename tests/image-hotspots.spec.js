"use strict";

import { test, expect } from "../global-setup";

test.describe("Filterable Gallery - Live Demo Page", () => {
  let slug = "https://essential-addons.com/elementor/image-hotspots";
  let heading = "Image Hotspot";

  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect
      .soft(page.getByRole("link", { name: "Documentation" }))
      .toHaveAttribute("href", /docs\/creative-elements\/image-hotspots/);
  });

  test("Test Section: Make Image Interactive Using Hotspots", async ({ page }) => {
    await page.getByRole("heading", { name: "Make Image Interactive Using Hotspots" }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: "Make Image Interactive Using Hotspots" })).toBeVisible();
    await expect.soft(page.getByText("Put hotspots on the ")).toBeVisible();
    // Image,icon and hover visibility test case
    await expect.soft(page.getByRole("img", { name: "Image Hotspots 102" })).toBeVisible();
    await expect.soft(page.locator(".eael-hot-spot-wrap").first()).toBeVisible();
    await page.locator(".eael-hot-spot-wrap").first().hover();
    await expect.soft(page.getByText("Bag")).toBeVisible();
    await expect.soft(page.locator("a:nth-child(4)").first()).toBeVisible();
    await page.locator("a:nth-child(4)").first().hover();
    await expect.soft(page.locator("div").filter({ hasText: "Mug" }).nth(1)).toBeVisible();
    await expect.soft(page.locator("a:nth-child(5)").first()).toBeVisible();
    await page.locator("a:nth-child(5)").first().hover();
    await expect.soft(page.locator("div").filter({ hasText: "T-shirt" }).nth(1)).toBeVisible();
  });
});
