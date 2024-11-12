"use strict";

import { test, expect } from "../global-setup";

let slug = "https://essential-addons.com/elementor/interactive-cards";
let heading = "Interactive Cards";

test.describe("Interactive Cards", () => {
  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect
      .soft(page.getByRole("link", { name: "Documentation" }))
      .toHaveAttribute("href", /docs\/interactive-cards/);
  });

  // Limitless Flexible Design
  test("Test Section: Limitless Flexible Design", async ({ page }) => {
    const section_root = page.getByTestId("182b845");

    await page.getByRole("heading", { name: "Limitless Flexible Design" }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: "Limitless Flexible Design" })).toBeVisible();
    await expect.soft(page.getByText("Take your Elementor web design")).toBeVisible();
    // Preset 1 Visibility and Functionility Test Case
    await expect.soft(section_root.locator(".image-screen")).toBeVisible();
    await section_root.locator(".image-screen").click();
    await expect.soft(section_root.locator(".image")).toBeVisible();
    await expect.soft(section_root.getByRole("heading", { name: "Amazing Colorful City" })).toBeVisible();
    await expect.soft(section_root.getByText("We have only one earth to")).toBeVisible();
    await expect.soft(section_root.getByRole("link", { name: "Read More" })).toBeVisible();
    await expect.soft(section_root.locator(".fas.fa-times")).toBeVisible();
    await section_root.locator(".fas.fa-times").click();
    await expect.soft(section_root.locator(".image-screen")).toBeVisible();
  });
});
