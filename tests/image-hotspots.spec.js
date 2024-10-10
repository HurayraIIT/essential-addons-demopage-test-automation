"use strict";

import { test, expect } from "../global-setup";

let slug = "https://essential-addons.com/elementor/image-hotspots";
let heading = "Image Hotspot";

test.describe("Filterable Gallery", () => {
  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/creative-elements\/image-hotspots/
    );
  });

  test("Test Section: Make Image Interactive Using Hotspots", async ({ page }) => {
    await page.getByRole("heading", { name: "Make Image Interactive Using Hotspots" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Make Image Interactive Using Hotspots" })).toBeVisible();
    await expect(page.getByText("Put hotspots on the ")).toBeVisible();
    // Image,icon and hover visibility test case
    await expect(page.getByRole("img", { name: "Image Hotspots 102" })).toBeVisible();
    await expect(page.locator(".eael-hot-spot-wrap").first()).toBeVisible();
    await page.locator(".eael-hot-spot-wrap").first().hover();
    await expect(page.getByText("Bag")).toBeVisible();
    await expect(page.locator("a:nth-child(4)").first()).toBeVisible();
    await page.locator("a:nth-child(4)").first().hover();
    await expect(page.locator("div").filter({ hasText: "Mug" }).nth(1)).toBeVisible();
    await expect(page.locator("a:nth-child(5)").first()).toBeVisible();
    await page.locator("a:nth-child(5)").first().hover();
    await expect(page.locator("div").filter({ hasText: "T-shirt" }).nth(1)).toBeVisible();
  });
});
