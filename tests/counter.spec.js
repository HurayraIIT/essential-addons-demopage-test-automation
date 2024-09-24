"use strict";

import { test, expect } from "../global-setup";

let slug = "/counter";
let heading = "Counter";

test.describe("Counter", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/creative-elements\/counter/
    );
  });

  test("Test Section: Highlight Special Achievements", async ({ page }) => {
    await page.getByRole("heading", { name: "Highlight Special Achievements" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Highlight Special Achievements" })).toBeVisible();
    await expect(page.getByText("Beautifully represent Numerical ")).toBeVisible();

    await expect(
      page
        .locator(
          "section:nth-child(2) > div > div > div > section:nth-child(2) > .elementor-container > div > .elementor-widget-wrap"
        )
        .first()
    ).toBeVisible();
    await expect(page.locator(".eael-counter-icon").first()).toBeVisible();
    await expect(page.locator(".eael-counter-svg-icon > .fas").first()).toBeVisible();
    await expect(page.locator(".eael-counter-number-wrap").first()).toBeVisible();
    await expect(page.locator(".eael-counter-title").first()).toBeVisible();
  });
});