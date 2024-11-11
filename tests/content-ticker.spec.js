"use strict";

import { test, expect } from "../global-setup";

let slug = "https://essential-addons.com/elementor/content-ticker";
let heading = "Content Ticker";

test.describe("Content Ticker", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect
      .soft(page.getByRole("link", { name: "Documentation" }))
      .toHaveAttribute("href", /docs\/content-ticker/);
  });

  test("Test Section: Custom Ticker With Animation", async ({ page }) => {
    await page.getByRole("heading", { name: "Custom Ticker With Animation" }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: "Custom Ticker With Animation" })).toBeVisible();
    await expect
      .soft(page.getByText("Choose from the various ‘Ticker Type’, modify content and include some animations"))
      .toBeVisible();

    await expect
      .soft(
        page.locator(
          "section:nth-child(2) > div > div > div > section:nth-child(2) > .elementor-container > .elementor-column > .elementor-widget-wrap"
        )
      )
      .toBeVisible();
    await expect
      .soft(page.locator("#eael-ticker-wrap-5107a1de div").filter({ hasText: "Trending Today" }))
      .toBeVisible();
    await expect.soft(page.locator("#eael-ticker-wrap-5107a1de").getByText("Trending Today")).toBeVisible();
    await expect.soft(page.locator("#eael-ticker-wrap-5107a1de").getByLabel("Previous slide")).toBeVisible();
    await expect.soft(page.locator("#eael-ticker-wrap-5107a1de").getByLabel("Next slide")).toBeVisible();
  });
});
