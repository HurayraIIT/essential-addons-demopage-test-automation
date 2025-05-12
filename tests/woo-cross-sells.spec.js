"use strict";

import { expect, test } from "../global-setup";
import WooCrossSellsPage from "../src/pages/WooCrossSellsPage";

test.describe("Woo Cross Sells - Visibility Tests", () => {
  let crossSellsPage;

  // Increase timeout for these tests
  test.setTimeout(60000);

  test.beforeEach(async ({ page }) => {
    crossSellsPage = new WooCrossSellsPage(page);

    // Login as customer
    await crossSellsPage.login();

    // Navigate to cross sells page
    await crossSellsPage.goto();
    await page.waitForLoadState("networkidle");
  });

  test("Style One - Should be visible", async () => {
    // Use the page object model to check if Style One is visible
    await crossSellsPage.scrollToStyleOne();
    const isVisible = await crossSellsPage.isStyleOneVisible();
    expect(isVisible).toBeTruthy();
  });

  test("Style Two - Should be visible", async () => {
    // Use the page object model to check if Style Two is visible
    await crossSellsPage.scrollToStyleTwo();
    const isVisible = await crossSellsPage.isStyleTwoVisible();
    expect(isVisible).toBeTruthy();
  });

  test("Style Three - Should be visible", async () => {
    // Use the page object model to check if Style Three is visible
    await crossSellsPage.scrollToStyleThree();
    const isVisible = await crossSellsPage.isStyleThreeVisible();
    expect(isVisible).toBeTruthy();
  });
});
