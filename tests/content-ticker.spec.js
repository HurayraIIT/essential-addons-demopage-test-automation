"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/content-ticker";
let heading = "Content Ticker";

test.describe("Content Ticker", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/content-ticker/);
  });

  test("Test Section: Custom Ticker With Animation", async ({ page }) => {
    await page.getByRole("heading", { name: "Custom Ticker With Animation" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Custom Ticker With Animation" })).toBeVisible();
    await expect(page.getByText("Choose from the various ‘Ticker Type’, modify content and include some animations")).toBeVisible();

    await expect(page.locator('section:nth-child(2) > div > div > div > section:nth-child(2) > .elementor-container > .elementor-column > .elementor-widget-wrap')).toBeVisible();
    await expect(page.locator('#eael-ticker-wrap-5107a1de div').filter({ hasText: 'Trending Today' })).toBeVisible();
    await expect(page.locator('#eael-ticker-wrap-5107a1de').getByText('Trending Today')).toBeVisible();
    await expect(page.locator('#eael-ticker-wrap-5107a1de').getByLabel('Previous slide')).toBeVisible();
    await expect(page.locator('#eael-ticker-wrap-5107a1de').getByLabel('Next slide')).toBeVisible();
  });
});

// Not suitable for structure tests