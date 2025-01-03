"use strict";

import { test, expect } from "../global-setup";

test.describe("Counter - Live Demo Page", () => {
  let slug = "https://essential-addons.com/elementor/counter";
  let heading = "Counter";

  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect
      .soft(page.getByRole("link", { name: "Documentation" }))
      .toHaveAttribute("href", /docs\/creative-elements\/counter/);
  });

  test("Test Section: Highlight Special Achievements", async ({ page }) => {
    await page.getByRole("heading", { name: "Highlight Special Achievements" }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: "Highlight Special Achievements" })).toBeVisible();
    await expect.soft(page.getByText("Beautifully represent Numerical ")).toBeVisible();

    await expect
      .soft(
        page
          .locator(
            "section:nth-child(2) > div > div > div > section:nth-child(2) > .elementor-container > div > .elementor-widget-wrap"
          )
          .first()
      )
      .toBeVisible();
    await expect.soft(page.locator(".eael-counter-icon").first()).toBeVisible();
    await expect.soft(page.locator(".eael-counter-svg-icon > .fas").first()).toBeVisible();
    await expect.soft(page.locator(".eael-counter-number-wrap").first()).toBeVisible();
    await expect.soft(page.locator(".eael-counter-title").first()).toBeVisible();
  });
});
