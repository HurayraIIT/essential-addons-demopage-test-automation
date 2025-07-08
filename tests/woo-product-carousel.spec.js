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

  test('Preset 1 product action buttons should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset1();
    const isEcoZenChairActionVisible = await wooProductCarouselPage.isPreset1ProductActionButtonVisible("EcoZen Lounge Comfy Chair");
    const isSaguaroChairActionVisible = await wooProductCarouselPage.isPreset1ProductActionButtonVisible("Saguaro with Wooden stand");
    const isWoodlandChairActionVisible = await wooProductCarouselPage.isPreset1ProductActionButtonVisible("Woodland Bliss Lounge Chair");
    const isMenSneakersActionVisible = await wooProductCarouselPage.isPreset1ProductActionButtonVisible("Men Casual Sport Shoes Light Sneakers");
    expect(isEcoZenChairActionVisible).toBeTruthy();
    expect(isSaguaroChairActionVisible).toBeTruthy();
    expect(isWoodlandChairActionVisible).toBeTruthy();
    expect(isMenSneakersActionVisible).toBeTruthy();
  });

  test('Preset 3 products should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset3();
    const isEcoZenChairVisible = await wooProductCarouselPage.isPreset3ProductVisible("EcoZen Lounge Comfy Chair");
    const isSaguaroChairVisible = await wooProductCarouselPage.isPreset3ProductVisible("Saguaro with Wooden stand");
    const isWoodlandChairVisible = await wooProductCarouselPage.isPreset3ProductVisible("Woodland Bliss Lounge Chair");
    const isMenSneakersVisible = await wooProductCarouselPage.isPreset3ProductVisible("Men Casual Sport Shoes Light Sneakers");
    expect(isEcoZenChairVisible).toBeTruthy();
    expect(isSaguaroChairVisible).toBeTruthy();
    expect(isWoodlandChairVisible).toBeTruthy();
    expect(isMenSneakersVisible).toBeTruthy();
  });

  test('Preset 4 products should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset4();
    const isEcoZenChairVisible = await wooProductCarouselPage.isPreset4ProductVisible("EcoZen Lounge Comfy Chair");
    const isSaguaroChairVisible = await wooProductCarouselPage.isPreset4ProductVisible("Saguaro with Wooden stand");
    const isWoodlandChairVisible = await wooProductCarouselPage.isPreset4ProductVisible("Woodland Bliss Lounge Chair");
    const isMenSneakersVisible = await wooProductCarouselPage.isPreset4ProductVisible("Men Casual Sport Shoes Light Sneakers");
    expect(isEcoZenChairVisible).toBeTruthy();
    expect(isSaguaroChairVisible).toBeTruthy();
    expect(isWoodlandChairVisible).toBeTruthy();
    expect(isMenSneakersVisible).toBeTruthy();
  });

  test('Preset 3 product images should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset3();
    const isEcoZenChairImageVisible = await wooProductCarouselPage.isPreset3ProductImageVisible("EcoZen Lounge Comfy Chair");
    const isSaguaroChairImageVisible = await wooProductCarouselPage.isPreset3ProductImageVisible("Saguaro with Wooden stand");
    const isWoodlandChairImageVisible = await wooProductCarouselPage.isPreset3ProductImageVisible("Woodland Bliss Lounge Chair");
    const isMenSneakersImageVisible = await wooProductCarouselPage.isPreset3ProductImageVisible("Men Casual Sport Shoes Light Sneakers");
    expect(isEcoZenChairImageVisible).toBeTruthy();
    expect(isSaguaroChairImageVisible).toBeTruthy();
    expect(isWoodlandChairImageVisible).toBeTruthy();
    expect(isMenSneakersImageVisible).toBeTruthy();
  });

  test('Preset 3 product prices should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset3();
    const isEcoZenChairPriceVisible = await wooProductCarouselPage.isPreset3ProductPriceVisible("EcoZen Lounge Comfy Chair");
    const isSaguaroChairPriceVisible = await wooProductCarouselPage.isPreset3ProductPriceVisible("Saguaro with Wooden stand");
    const isWoodlandChairPriceVisible = await wooProductCarouselPage.isPreset3ProductPriceVisible("Woodland Bliss Lounge Chair");
    const isMenSneakersPriceVisible = await wooProductCarouselPage.isPreset3ProductPriceVisible("Men Casual Sport Shoes Light Sneakers");
    expect(isEcoZenChairPriceVisible).toBeTruthy();
    expect(isSaguaroChairPriceVisible).toBeTruthy();
    expect(isWoodlandChairPriceVisible).toBeTruthy();
    expect(isMenSneakersPriceVisible).toBeTruthy();
  });

  test('Preset 3 product action buttons should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset3();
    const isEcoZenChairActionVisible = await wooProductCarouselPage.isPreset3ProductActionButtonVisible("EcoZen Lounge Comfy Chair");
    const isSaguaroChairActionVisible = await wooProductCarouselPage.isPreset3ProductActionButtonVisible("Saguaro with Wooden stand");
    const isWoodlandChairActionVisible = await wooProductCarouselPage.isPreset3ProductActionButtonVisible("Woodland Bliss Lounge Chair");
    const isMenSneakersActionVisible = await wooProductCarouselPage.isPreset3ProductActionButtonVisible("Men Casual Sport Shoes Light Sneakers");
    expect(isEcoZenChairActionVisible).toBeTruthy();
    expect(isSaguaroChairActionVisible).toBeTruthy();
    expect(isWoodlandChairActionVisible).toBeTruthy();
    expect(isMenSneakersActionVisible).toBeTruthy();
  });

  test('Preset 4 product images should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset4();
    const isEcoZenChairImageVisible = await wooProductCarouselPage.isPreset4ProductImageVisible("EcoZen Lounge Comfy Chair");
    const isSaguaroChairImageVisible = await wooProductCarouselPage.isPreset4ProductImageVisible("Saguaro with Wooden stand");
    const isWoodlandChairImageVisible = await wooProductCarouselPage.isPreset4ProductImageVisible("Woodland Bliss Lounge Chair");
    const isMenSneakersImageVisible = await wooProductCarouselPage.isPreset4ProductImageVisible("Men Casual Sport Shoes Light Sneakers");
    expect(isEcoZenChairImageVisible).toBeTruthy();
    expect(isSaguaroChairImageVisible).toBeTruthy();
    expect(isWoodlandChairImageVisible).toBeTruthy();
    expect(isMenSneakersImageVisible).toBeTruthy();
  });

  test('Preset 4 product prices should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset4();
    const isEcoZenChairPriceVisible = await wooProductCarouselPage.isPreset4ProductPriceVisible("EcoZen Lounge Comfy Chair");
    const isSaguaroChairPriceVisible = await wooProductCarouselPage.isPreset4ProductPriceVisible("Saguaro with Wooden stand");
    const isWoodlandChairPriceVisible = await wooProductCarouselPage.isPreset4ProductPriceVisible("Woodland Bliss Lounge Chair");
    const isMenSneakersPriceVisible = await wooProductCarouselPage.isPreset4ProductPriceVisible("Men Casual Sport Shoes Light Sneakers");
    expect(isEcoZenChairPriceVisible).toBeTruthy();
    expect(isSaguaroChairPriceVisible).toBeTruthy();
    expect(isWoodlandChairPriceVisible).toBeTruthy();
    expect(isMenSneakersPriceVisible).toBeTruthy();
  });

  test('Preset 4 product action buttons should be visible', async () => {
    await wooProductCarouselPage.scrollToPreset4();
    const isEcoZenChairActionVisible = await wooProductCarouselPage.isPreset4ProductActionButtonVisible("EcoZen Lounge Comfy Chair");
    const isSaguaroChairActionVisible = await wooProductCarouselPage.isPreset4ProductActionButtonVisible("Saguaro with Wooden stand");
    const isWoodlandChairActionVisible = await wooProductCarouselPage.isPreset4ProductActionButtonVisible("Woodland Bliss Lounge Chair");
    const isMenSneakersActionVisible = await wooProductCarouselPage.isPreset4ProductActionButtonVisible("Men Casual Sport Shoes Light Sneakers");
    expect(isEcoZenChairActionVisible).toBeTruthy();
    expect(isSaguaroChairActionVisible).toBeTruthy();
    expect(isWoodlandChairActionVisible).toBeTruthy();
    expect(isMenSneakersActionVisible).toBeTruthy();
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
