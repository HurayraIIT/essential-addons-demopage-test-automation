"use strict";

import { expect, test } from "../global-setup";

let slug = "/woocommerce-elements/woo-product-grid/";

test.describe("Woo Product Grid - Layout & Style Preset Combinations", () => {
    // All Presets Unique ID
    let gridPresetDefaultID = "#gridPresetDefault";
    let gridPresetSimpleID = "#gridPresetSimple";
    let gridPresetRevealID = "#gridPresetReveal";
    let gridPresetOverlayID = "#gridPresetOverlay";
    let gridPreset5ID = "#gridPreset5";
    let gridPreset6ID = "#gridPreset6";
    let gridPreset7ID = "#gridPreset7";
    let gridPreset8ID = "#gridPreset8";
    
  
    // All Presets Unique Locator
    let gridPresetDefaultLocator = null;
    let gridPresetSimpleLocator = null;
    let gridPresetRevealLocator = null;
    let gridPresetOverlayLocator = null;
    let gridPreset5Locator = null;
    let gridPreset6Locator = null;
    let gridPreset7Locator = null;
    let gridPreset8Locator = null;
    

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    gridPresetDefaultLocator = page.locator(gridPresetDefaultID);
    gridPresetSimpleLocator = page.locator(gridPresetSimpleID);
    gridPresetRevealLocator = page.locator(gridPresetRevealID);
    gridPresetOverlayLocator = page.locator(gridPresetOverlayID);
    gridPreset5Locator = page.locator(gridPreset5ID);
    gridPreset6Locator = page.locator(gridPreset6ID);
    gridPreset7Locator = page.locator(gridPreset7ID);
    gridPreset8Locator = page.locator(gridPreset8ID);
    
  });

  test("Check Visibility", async ({ page }) => {
    await expect.soft(page.getByText("Layout: Grid | Style Preset: Default")).toBeVisible();
    await expect.soft(gridPresetDefaultLocator).toBeVisible();
    
    await expect.soft(page.getByText("Layout: Grid | Style Preset: Simple")).toBeVisible();
    await expect.soft(gridPresetSimpleLocator).toBeVisible();

    await expect.soft(page.getByText("Layout: Grid | Style Preset: Reveal")).toBeVisible();
    await expect.soft(gridPresetRevealLocator).toBeVisible();

    await expect.soft(page.getByText("Layout: Grid | Style Preset: Overlay")).toBeVisible();
    await expect.soft(gridPresetOverlayLocator).toBeVisible();

    await expect.soft(page.getByText("Layout: Grid | Style Preset: Preset 5")).toBeVisible();
    await expect.soft(gridPreset5Locator).toBeVisible();

    await expect.soft(page.getByText("Layout: Grid | Style Preset: Preset 6")).toBeVisible();
    await expect.soft(gridPreset6Locator).toBeVisible();

    await expect.soft(page.getByText("Layout: Grid | Style Preset: Preset 7")).toBeVisible();
    await expect.soft(gridPreset7Locator).toBeVisible();

    await expect.soft(page.getByText("Layout: Grid | Style Preset: Preset 8")).toBeVisible();
    await expect.soft(gridPreset8Locator).toBeVisible();
  });
});
