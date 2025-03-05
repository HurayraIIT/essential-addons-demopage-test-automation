"use strict";

import { test, expect } from "../global-setup";

let slug = "/woocommerce-elements/woo-product-compare/";

test.describe("Woo Product Compare", () => {
  // All Presets Unique ID
  let themeDefaultID = "#theme-default-preset";
  let theme1ID = "#theme-1-preset";
  

  // All Presets Unique Locator
  let themeDefaultLocator = null;
  let theme1Locator = null;
  

  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    themeDefaultLocator = page.locator(themeDefaultID);
    theme1Locator = page.locator(theme1ID);
    
  });

  // Presets Visibility Test Start

  // Preset: Theme Default
  test("Preset - Theme Default", async ({ page }) => {
    await expect.soft(page.getByText("Theme Default")).toBeVisible();
    await expect.soft(themeDefaultLocator).toBeVisible();
    await expect.soft(themeDefaultLocator).toHaveClass(/elementor-widget-eael-woo-product-compare/);
  });

  // Preset: Theme 1
  test("Preset - Theme 1", async ({ page }) => {
    await expect.soft(page.getByText("Theme 1")).toBeVisible();
    await expect.soft(theme1Locator).toBeVisible();
    await expect.soft(theme1Locator).toHaveClass(/elementor-widget-eael-woo-product-compare/);
  });
});