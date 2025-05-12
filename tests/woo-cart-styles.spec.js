"use strict";

import { expect, test } from "../global-setup";
import WooCartPage from "../src/pages/WooCartPage.js";
import { compareStyles, loadStylesFromFile, saveStylesToFile } from "../src/utils/styleUtils.js";

// Flag to regenerate baseline styles
const REGENERATE_BASELINE = process.env.REGENERATE_BASELINE === 'true';

test.describe("Woo Cart - Style Tests", () => {
  let wooCartPage;

  // We'll use beforeEach instead of beforeAll to avoid timeout issues
  test.beforeEach(async ({ page }) => {
    // Initialize the page object for each test
    wooCartPage = new WooCartPage(page);

    // Navigate directly to the cart page
    await page.goto('https://eael.wpqa.site/woocommerce-elements/woo-cart/');
    await page.waitForLoadState('domcontentloaded');

    // If we're regenerating the baseline, capture all styles and save them
    if (REGENERATE_BASELINE) {
      console.log('Regenerating baseline styles...');
      const allStyles = await wooCartPage.captureAllStyles();
      saveStylesToFile(allStyles, 'woo-cart-styles-baseline');
      console.log('Baseline styles regenerated successfully');
    }
  });

  test("Style 1 section should match baseline styles", async ({ page }) => {
    // We already have the page object from beforeEach

    // Scroll to Style 1 section
    await wooCartPage.scrollToStyle1();

    // Check if Style 1 section is visible
    const isVisible = await wooCartPage.isStyle1Visible();
    expect(isVisible).toBeTruthy();

    // Load baseline styles
    const baselineStyles = loadStylesFromFile('woo-cart-styles-baseline');
    expect(baselineStyles).not.toBeNull();

    // Check if cart is empty or not
    const isEmpty = await wooCartPage.isStyle1CartEmpty();
    console.log('Is Style 1 Cart Empty:', isEmpty);

    // Get wrapper class names
    const style1Classes = await wooCartPage.style1CartWrapper.evaluate(el => el.className);

    // Verify required classes are present
    expect(style1Classes).toContain('eael-woo-cart-wrapper');
    expect(style1Classes).toContain('eael-woo-default');
    expect(style1Classes).toContain('eael-auto-update');

    // If cart is empty, verify empty cart message is visible
    if (isEmpty) {
      const emptyMessage = wooCartPage.style1EmptyElements.emptyCartMessage;
      const isMessageVisible = await emptyMessage.isVisible();
      expect(isMessageVisible).toBeTruthy();
    }

    // Capture current styles
    const currentStyles = {
      style1: {
        wrapper: await wooCartPage.getStyle1ComputedStyles()
      }
    };

    // Compare current wrapper styles with baseline
    const wrapperComparison = compareStyles(
      { wrapper: currentStyles.style1.wrapper },
      { wrapper: baselineStyles.style1.wrapper }
    );

    // Log any differences
    if (!wrapperComparison.matches) {
      console.log('Style differences found in Style 1 wrapper:', wrapperComparison.differences);
    }

    // Expect styles to match
    expect(wrapperComparison.matches).toBeTruthy();
  });

  test("Style 2 section should match baseline styles", async ({ page }) => {
    // We already have the page object from beforeEach

    // Scroll to Style 2 section
    await wooCartPage.scrollToStyle2();

    // Check if Style 2 section is visible
    const isVisible = await wooCartPage.isStyle2Visible();
    expect(isVisible).toBeTruthy();

    // Load baseline styles
    const baselineStyles = loadStylesFromFile('woo-cart-styles-baseline');
    expect(baselineStyles).not.toBeNull();

    // Check if cart is empty or not
    const isEmpty = await wooCartPage.isStyle2CartEmpty();
    console.log('Is Style 2 Cart Empty:', isEmpty);

    // Get wrapper class names
    const style2Classes = await wooCartPage.style2CartWrapper.evaluate(el => el.className);

    // Verify required classes are present
    expect(style2Classes).toContain('eael-woo-cart-wrapper');
    expect(style2Classes).toContain('eael-woo-style-2');
    expect(style2Classes).toContain('eael-auto-update');

    // If cart is not empty, verify additional classes
    if (!isEmpty) {
      expect(style2Classes).toContain('has-table-left-content');
      expect(style2Classes).toContain('has-table-right-content');
    }

    // Capture current styles
    const currentStyles = {
      style2: {
        wrapper: await wooCartPage.getStyle2ComputedStyles()
      }
    };

    // Compare current wrapper styles with baseline
    const wrapperComparison = compareStyles(
      { wrapper: currentStyles.style2.wrapper },
      { wrapper: baselineStyles.style2.wrapper }
    );

    // Log any differences
    if (!wrapperComparison.matches) {
      console.log('Style differences found in Style 2 wrapper:', wrapperComparison.differences);
    }

    // Expect styles to match
    expect(wrapperComparison.matches).toBeTruthy();
  });

  test("Comprehensive style comparison with baseline", async ({ page }) => {
    // We already have the page object from beforeEach

    // Capture all current styles
    const currentStyles = await wooCartPage.captureAllStyles();

    // Load baseline styles
    const baselineStyles = loadStylesFromFile('woo-cart-styles-baseline');
    expect(baselineStyles).not.toBeNull();

    // Compare Style 1 styles
    const style1Comparison = compareStyles(
      { wrapper: currentStyles.style1.wrapper },
      { wrapper: baselineStyles.style1.wrapper }
    );

    // Log any differences in Style 1
    if (!style1Comparison.matches) {
      console.log('Style differences found in Style 1:', style1Comparison.differences);
    }

    // Compare Style 2 styles
    const style2Comparison = compareStyles(
      { wrapper: currentStyles.style2.wrapper },
      { wrapper: baselineStyles.style2.wrapper }
    );

    // Log any differences in Style 2
    if (!style2Comparison.matches) {
      console.log('Style differences found in Style 2:', style2Comparison.differences);
    }

    // Expect both style comparisons to match
    expect(style1Comparison.matches).toBeTruthy();
    expect(style2Comparison.matches).toBeTruthy();
  });
});
