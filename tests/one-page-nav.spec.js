"use strict";

import { test, expect } from "../global-setup";

let slug = "https://essential-addons.com/elementor/one-page-nav";
let heading = "One Page Navigation";

test.describe("One Page Navigation", () => {
  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/creative-elements\/one-page-navigation/
    );
  });

  // Nav Menu - Icon and Text Visibility Check

  test("Test Section: Icon and Text Visibility", async ({ page }) => {
    await expect(page.getByRole("link", { name: "" })).toBeVisible();
    await page.getByRole("link", { name: "" }).hover();
    await expect(page.locator("#eael-one-page-nav-2221bcee").getByText("Home")).toBeVisible();
    await expect(page.locator("a").filter({ hasText: ".st0{fill:#1DA1F3;}" })).toBeVisible();
    await page.locator("a").filter({ hasText: ".st0{fill:#1DA1F3;}" }).hover();
    await expect(page.getByText("Features")).toBeVisible();
    await expect(page.locator("a").filter({ hasText: ".st0{fill:#3AD0BF;}" })).toBeVisible();
    await expect(page.locator("a").filter({ hasText: ".st0{fill:#E067B3;}" })).toBeVisible();
    await expect(page.locator("a").filter({ hasText: ".st0{fill:#8562F8;}" })).toBeVisible();
  });

  // Click Nav Menu to Scroll Specific Section Check
  test("Test Section: Scroll Specific Section", async ({ page }) => {
    await page.locator('a[data-row-id="hero-area"]').click();
    await page.waitForTimeout(700);
    await expect(page.getByTestId("3b429615")).toBeInViewport();
    await page.locator('a[data-row-id="features-section"]').click();
    await page.waitForTimeout(700);
    await expect(page.getByTestId("751ac69")).toBeInViewport();
    await page.locator('a[data-row-id="blog-posts-section"]').click();
    await page.waitForTimeout(700);
    await expect(page.getByTestId("226fd8a7")).toBeInViewport();
  });
});
