"use strict";

import { expect, test } from "../global-setup";
import WooCheckoutPage from "../src/pages/WooCheckoutPage";

test.describe("Woo Checkout - Visibility Tests", () => {
  let checkoutPage;

  // Increase timeout for these tests
  test.setTimeout(60000);

  test.beforeEach(async ({ page }) => {
    checkoutPage = new WooCheckoutPage(page);

    // Login as customer
    await checkoutPage.login();

    // Add a product to cart
    await checkoutPage.addProductToCart("Hurayra Automation Product 00");

    // Navigate to checkout page
    await checkoutPage.goto();
    await page.waitForLoadState("networkidle");
  });

  test("Default Layout - Should be visible", async () => {
    // Use the page object model to check if Default Layout is visible
    await checkoutPage.scrollToDefaultLayout();
    const isVisible = await checkoutPage.isDefaultLayoutVisible();
    expect(isVisible).toBeTruthy();
  });

  test("Multi Steps Layout - Should be visible", async () => {
    // Use the page object model to check if Multi Steps Layout is visible
    await checkoutPage.scrollToMultiStepsLayout();
    const isVisible = await checkoutPage.isMultiStepsLayoutVisible();
    expect(isVisible).toBeTruthy();
  });

  test("Split Layout - Should be visible", async () => {
    // Use the page object model to check if Split Layout is visible
    await checkoutPage.scrollToSplitLayout();
    const isVisible = await checkoutPage.isSplitLayoutVisible();
    expect(isVisible).toBeTruthy();
  });
});
