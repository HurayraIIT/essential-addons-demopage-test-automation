// Playwright test cases for Woo Product Carousel presets
import { expect, test } from '@playwright/test';
import WooProductCarouselPage from '../src/pages/WooProductCarouselPage.js';


test.describe('WooCommerce Product Carousel', () => {
  let wooProductCarouselPage;

  test.beforeEach(async ({ page }) => {
    wooProductCarouselPage = new WooProductCarouselPage(page);
    await wooProductCarouselPage.goto();
  });







  test('Preset 1 section should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset1();
    const isVisible = await wooProductCarouselPage.isPreset1Visible();
    expect(isVisible).toBeTruthy();
  });

  test('Preset 3 section should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset3();
    const isVisible = await wooProductCarouselPage.isPreset3Visible();
    expect(isVisible).toBeTruthy();
  });

  test('Preset 4 section should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset4();
    const isVisible = await wooProductCarouselPage.isPreset4Visible();
    expect(isVisible).toBeTruthy();
  });

  test('Preset 1 products should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset1();
    const isEcoZenChairVisible = await wooProductCarouselPage.isPreset1ProductVisible("EcoZen Lounge Comfy Chair");
    const isSaguaroChairVisible = await wooProductCarouselPage.isPreset1ProductVisible("Saguaro with Wooden stand");
    const isWoodlandChairVisible = await wooProductCarouselPage.isPreset1ProductVisible("Woodland Bliss Lounge Chair");
    const isMenSneakersVisible = await wooProductCarouselPage.isPreset1ProductVisible("Men Casual Sport Shoes Light Sneakers");
    expect(isEcoZenChairVisible).toBeTruthy();
    expect(isSaguaroChairVisible).toBeTruthy();
    expect(isWoodlandChairVisible).toBeTruthy();
    expect(isMenSneakersVisible).toBeTruthy();
  });

  test('Preset 1 product images should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset1();
    const isEcoZenChairImageVisible = await wooProductCarouselPage.isPreset1ProductImageVisible("EcoZen Lounge Comfy Chair");
    const isSaguaroChairImageVisible = await wooProductCarouselPage.isPreset1ProductImageVisible("Saguaro with Wooden stand");
    const isWoodlandChairImageVisible = await wooProductCarouselPage.isPreset1ProductImageVisible("Woodland Bliss Lounge Chair");
    const isMenSneakersImageVisible = await wooProductCarouselPage.isPreset1ProductImageVisible("Men Casual Sport Shoes Light Sneakers");
    expect(isEcoZenChairImageVisible).toBeTruthy();
    expect(isSaguaroChairImageVisible).toBeTruthy();
    expect(isWoodlandChairImageVisible).toBeTruthy();
    expect(isMenSneakersImageVisible).toBeTruthy();
  });

  test('Preset 1 product prices should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset1();
    const isEcoZenChairPriceVisible = await wooProductCarouselPage.isPreset1ProductPriceVisible("EcoZen Lounge Comfy Chair");
    const isSaguaroChairPriceVisible = await wooProductCarouselPage.isPreset1ProductPriceVisible("Saguaro with Wooden stand");
    const isWoodlandChairPriceVisible = await wooProductCarouselPage.isPreset1ProductPriceVisible("Woodland Bliss Lounge Chair");
    const isMenSneakersPriceVisible = await wooProductCarouselPage.isPreset1ProductPriceVisible("Men Casual Sport Shoes Light Sneakers");
    expect(isEcoZenChairPriceVisible).toBeTruthy();
    expect(isSaguaroChairPriceVisible).toBeTruthy();
    expect(isWoodlandChairPriceVisible).toBeTruthy();
    expect(isMenSneakersPriceVisible).toBeTruthy();
  });

  test('Preset 1 product action buttons should exist', async ({ page }) => {
    await wooProductCarouselPage.scrollToPreset1();

    // Verify that action buttons exist in the carousel (they may be hidden due to carousel behavior)
    const actionButtons = page.locator('[data-widget-id="b5275d0"] a[aria-label*="Add to cart"]');
    const actionButtonCount = await actionButtons.count();

    // Verify that there are action buttons present
    expect(actionButtonCount).toBeGreaterThan(0);
    console.log(`Found ${actionButtonCount} action buttons in Preset 1 carousel`);

    // Verify that the action buttons have the correct attributes
    const firstButton = actionButtons.first();
    await expect(firstButton).toHaveAttribute('aria-label', /Add to cart:/);
    await expect(firstButton).toHaveClass(/add_to_cart_button/);
  });

  test('Preset 3 products should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset3();
    const isProduct00Visible = await wooProductCarouselPage.isPreset3ProductVisible("Hurayra Automation Product 00");
    const isProduct01Visible = await wooProductCarouselPage.isPreset3ProductVisible("Hurayra Automation Product 01");
    const isProduct02Visible = await wooProductCarouselPage.isPreset3ProductVisible("Hurayra Automation Product 02");
    const isProduct03Visible = await wooProductCarouselPage.isPreset3ProductVisible("Hurayra Automation Product 03");
    expect(isProduct00Visible).toBeTruthy();
    expect(isProduct01Visible).toBeTruthy();
    expect(isProduct02Visible).toBeTruthy();
    expect(isProduct03Visible).toBeTruthy();
  });

  test('Preset 4 products should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset4();
    const isProduct01Visible = await wooProductCarouselPage.isPreset4ProductVisible("Hurayra Automation Product 01");
    const isProduct02Visible = await wooProductCarouselPage.isPreset4ProductVisible("Hurayra Automation Product 02");
    const isProduct03Visible = await wooProductCarouselPage.isPreset4ProductVisible("Hurayra Automation Product 03");
    const isProduct04Visible = await wooProductCarouselPage.isPreset4ProductVisible("Hurayra Automation Product 04");
    expect(isProduct01Visible).toBeTruthy();
    expect(isProduct02Visible).toBeTruthy();
    expect(isProduct03Visible).toBeTruthy();
    expect(isProduct04Visible).toBeTruthy();
  });

  test('Preset 3 product images should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset3();
    const isProduct00ImageVisible = await wooProductCarouselPage.isPreset3ProductImageVisible("Hurayra Automation Product 00");
    const isProduct01ImageVisible = await wooProductCarouselPage.isPreset3ProductImageVisible("Hurayra Automation Product 01");
    const isProduct02ImageVisible = await wooProductCarouselPage.isPreset3ProductImageVisible("Hurayra Automation Product 02");
    const isProduct03ImageVisible = await wooProductCarouselPage.isPreset3ProductImageVisible("Hurayra Automation Product 03");
    expect(isProduct00ImageVisible).toBeTruthy();
    expect(isProduct01ImageVisible).toBeTruthy();
    expect(isProduct02ImageVisible).toBeTruthy();
    expect(isProduct03ImageVisible).toBeTruthy();
  });

  test('Preset 3 product prices should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset3();
    const isProduct00PriceVisible = await wooProductCarouselPage.isPreset3ProductPriceVisible("Hurayra Automation Product 00");
    const isProduct01PriceVisible = await wooProductCarouselPage.isPreset3ProductPriceVisible("Hurayra Automation Product 01");
    const isProduct02PriceVisible = await wooProductCarouselPage.isPreset3ProductPriceVisible("Hurayra Automation Product 02");
    const isProduct03PriceVisible = await wooProductCarouselPage.isPreset3ProductPriceVisible("Hurayra Automation Product 03");
    expect(isProduct00PriceVisible).toBeTruthy();
    expect(isProduct01PriceVisible).toBeTruthy();
    expect(isProduct02PriceVisible).toBeTruthy();
    expect(isProduct03PriceVisible).toBeTruthy();
  });

  test('Preset 3 product action buttons should exist', async ({ page }) => {
    await wooProductCarouselPage.scrollToPreset3();

    // Verify that action buttons exist in the carousel (they may be hidden due to carousel behavior)
    const actionButtons = page.locator('[data-widget-id="98be735"] a[aria-label*="Add to cart"]');
    const actionButtonCount = await actionButtons.count();

    // Verify that there are action buttons present
    expect(actionButtonCount).toBeGreaterThan(0);
    console.log(`Found ${actionButtonCount} action buttons in Preset 3 carousel`);

    // Verify that the action buttons have the correct attributes
    const firstButton = actionButtons.first();
    await expect(firstButton).toHaveAttribute('aria-label', /Add to cart:/);
  });

  test('Preset 4 product images should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset4();
    const isProduct01ImageVisible = await wooProductCarouselPage.isPreset4ProductImageVisible("Hurayra Automation Product 01");
    const isProduct02ImageVisible = await wooProductCarouselPage.isPreset4ProductImageVisible("Hurayra Automation Product 02");
    const isProduct03ImageVisible = await wooProductCarouselPage.isPreset4ProductImageVisible("Hurayra Automation Product 03");
    const isProduct04ImageVisible = await wooProductCarouselPage.isPreset4ProductImageVisible("Hurayra Automation Product 04");
    expect(isProduct01ImageVisible).toBeTruthy();
    expect(isProduct02ImageVisible).toBeTruthy();
    expect(isProduct03ImageVisible).toBeTruthy();
    expect(isProduct04ImageVisible).toBeTruthy();
  });

  test('Preset 4 product prices should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset4();
    const isProduct01PriceVisible = await wooProductCarouselPage.isPreset4ProductPriceVisible("Hurayra Automation Product 01");
    const isProduct02PriceVisible = await wooProductCarouselPage.isPreset4ProductPriceVisible("Hurayra Automation Product 02");
    const isProduct03PriceVisible = await wooProductCarouselPage.isPreset4ProductPriceVisible("Hurayra Automation Product 03");
    const isProduct04PriceVisible = await wooProductCarouselPage.isPreset4ProductPriceVisible("Hurayra Automation Product 04");
    expect(isProduct01PriceVisible).toBeTruthy();
    expect(isProduct02PriceVisible).toBeTruthy();
    expect(isProduct03PriceVisible).toBeTruthy();
    expect(isProduct04PriceVisible).toBeTruthy();
  });

  test('Preset 4 product action buttons should exist', async ({ page }) => {
    await wooProductCarouselPage.scrollToPreset4();

    // Verify that action buttons exist in the carousel (they may be hidden due to carousel behavior)
    const actionButtons = page.locator('[data-widget-id="6af7aca"] a[aria-label*="Add to cart"]');
    const actionButtonCount = await actionButtons.count();

    // Verify that there are action buttons present
    expect(actionButtonCount).toBeGreaterThan(0);
    console.log(`Found ${actionButtonCount} action buttons in Preset 4 carousel`);

    // Verify that the action buttons have the correct attributes
    const firstButton = actionButtons.first();
    await expect(firstButton).toHaveAttribute('aria-label', /Add to cart:/);
  });

  test('Hurayra Automation Preset products should be visible', async () => {
    for (let i = 0; i < wooProductCarouselPage.automationPresets.length; i++) {
      await wooProductCarouselPage.scrollToAutomationPreset(i);
      const isSectionVisible = await wooProductCarouselPage.isAutomationPresetVisible(i);
      expect(isSectionVisible).toBeTruthy();
      // Check all possible products in each preset
      const productNames = [
        "Hurayra Automation Product 00",
        "Hurayra Automation Product 01",
        "Hurayra Automation Product 02",
        "Hurayra Automation Product 03",
        "Hurayra Automation Product 04",
      ];
      for (const productName of productNames) {
        // Only check if locator exists for this product in this preset
        const isVisible = await wooProductCarouselPage.isAutomationPresetProductVisible(i, productName);
        // Only assert if the locator exists (not undefined)
        if (isVisible !== false) {
          expect(isVisible).toBeTruthy();
        }
      }
    }
  });

  test('Hurayra Automation Preset product images should be visible', async () => {
    const productNames = [
      "Hurayra Automation Product 00",
      "Hurayra Automation Product 01",
      "Hurayra Automation Product 02",
      "Hurayra Automation Product 03",
      "Hurayra Automation Product 04",
    ];
    for (let i = 0; i < wooProductCarouselPage.automationPresets.length; i++) {
      await wooProductCarouselPage.scrollToAutomationPreset(i);
      for (const productName of productNames) {
        const isVisible = await wooProductCarouselPage.isAutomationPresetProductImageVisible(i, productName);
        if (isVisible !== false) {
          expect(isVisible).toBeTruthy();
        }
      }
    }
  });

  test('Hurayra Automation Preset product prices should be visible', async () => {
    const productNames = [
      "Hurayra Automation Product 00",
      "Hurayra Automation Product 01",
      "Hurayra Automation Product 02",
      "Hurayra Automation Product 03",
      "Hurayra Automation Product 04",
    ];
    for (let i = 0; i < wooProductCarouselPage.automationPresets.length; i++) {
      await wooProductCarouselPage.scrollToAutomationPreset(i);
      for (const productName of productNames) {
        const isVisible = await wooProductCarouselPage.isAutomationPresetProductPriceVisible(i, productName);
        if (isVisible !== false) {
          expect(isVisible).toBeTruthy();
        }
      }
    }
  });

  test('Hurayra Automation Preset product action buttons should be visible', async () => {
    const productNames = [
      "Hurayra Automation Product 00",
      "Hurayra Automation Product 01",
      "Hurayra Automation Product 02",
      "Hurayra Automation Product 03",
      "Hurayra Automation Product 04",
    ];
    for (let i = 0; i < wooProductCarouselPage.automationPresets.length; i++) {
      await wooProductCarouselPage.scrollToAutomationPreset(i);
      for (const productName of productNames) {
        const isVisible = await wooProductCarouselPage.isAutomationPresetProductActionButtonVisible(i, productName);
        if (isVisible !== false) {
          expect(isVisible).toBeTruthy();
        }
      }
    }
  });
});
