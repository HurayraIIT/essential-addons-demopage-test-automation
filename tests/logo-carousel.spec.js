"use strict";
import { test, expect } from "../global-setup";

let slug = "/logo-carousel";
let heading = "Logo Carousel";

test.describe("Logo Carousel", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/content-elements\/logo-carousel/);
  });

  test("Test Section: Unique Logo Carousel Styles", async ({ page }) => {
    await page.getByRole("heading", { name: "Unique Logo Carousel Styles" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Unique Logo Carousel Styles" })).toBeVisible();
    await expect(page.getByText("Try out different Logo Carousel Effects like Slide")).toBeVisible();
  });
});
