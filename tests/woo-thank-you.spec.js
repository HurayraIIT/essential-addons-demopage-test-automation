"use strict";

import { expect, test } from "../global-setup";
import WooThankYouPage from "../src/pages/WooThankYouPage";

// This URL might need to be updated with a valid order ID and key
let slug = "/woocommerce-elements/woo-thank-you/order-received/283179/?key=wc_order_gcRFGNUHdprcn";

test.describe("Woo Thank You - Preset 1", () => {
  let thankYouPage;

  test.beforeEach(async ({ page }) => {
    thankYouPage = new WooThankYouPage(page);

    // First login as a customer
    await thankYouPage.login();

    // Navigate to the thank you page
    await page.goto(slug);
    await page.waitForLoadState("networkidle");

    // Scroll to the preset 1 section
    await thankYouPage.scrollToPreset1();
  });

  test("Test Contents", async () => {
    // Check thank you message
    await expect(thankYouPage.preset1Elements.thankYouMessage).toBeVisible();

    // Check order details list
    await expect(thankYouPage.preset1Elements.orderList).toBeVisible();
    await expect(thankYouPage.preset1Elements.orderNumber).toBeVisible();
    await expect(thankYouPage.preset1Elements.orderDate).toBeVisible();
    await expect(thankYouPage.preset1Elements.orderTotal).toBeVisible();
    await expect(thankYouPage.preset1Elements.paymentMethod).toBeVisible();

    // Check payment instructions
    await expect(thankYouPage.preset1Elements.paymentInstructions).toBeVisible();

    // Check section headings
    await expect(thankYouPage.preset1Elements.orderDetailsHeading).toBeVisible();
    await expect(thankYouPage.preset1Elements.billingAddressHeading).toBeVisible();
    await expect(thankYouPage.preset1Elements.shippingAddressHeading).toBeVisible();
  });
});

test.describe("Woo Thank You - Preset 2", () => {
  let thankYouPage;

  test.beforeEach(async ({ page }) => {
    thankYouPage = new WooThankYouPage(page);

    // First login as a customer
    await thankYouPage.login();

    // Navigate to the thank you page
    await page.goto(slug);
    await page.waitForLoadState("networkidle");

    // Scroll to the preset 2 section
    await thankYouPage.scrollToPreset2();
  });

  test("Test Contents", async () => {
    // Check hello and thank you messages
    await expect(thankYouPage.preset2Elements.helloMessage).toBeVisible();
    await expect(thankYouPage.preset2Elements.thankYouMessage).toBeVisible();

    // Check order details heading and list
    await expect(thankYouPage.preset2Elements.orderDetailsHeading).toBeVisible();
    await expect(thankYouPage.preset2Elements.orderList).toBeVisible();
    await expect(thankYouPage.preset2Elements.orderNumber).toBeVisible();
    await expect(thankYouPage.preset2Elements.orderDate).toBeVisible();
    await expect(thankYouPage.preset2Elements.orderTotal).toBeVisible();
    await expect(thankYouPage.preset2Elements.paymentMethod).toBeVisible();

    // Check payment instructions
    await expect(thankYouPage.preset2Elements.paymentInstructions).toBeVisible();

    // Check address headings
    await expect(thankYouPage.preset2Elements.billingAddressHeading).toBeVisible();
    await expect(thankYouPage.preset2Elements.shippingAddressHeading).toBeVisible();
  });
});

test.describe("Woo Thank You - Preset 3", () => {
  let thankYouPage;

  test.beforeEach(async ({ page }) => {
    thankYouPage = new WooThankYouPage(page);

    // First login as a customer
    await thankYouPage.login();

    // Navigate to the thank you page
    await page.goto(slug);
    await page.waitForLoadState("networkidle");

    // Scroll to the preset 3 section
    await thankYouPage.scrollToPreset3();
  });

  test("Test Contents", async () => {
    // Check thank you title and message
    await expect(thankYouPage.preset3Elements.thankYouTitle).toBeVisible();
    await expect(thankYouPage.preset3Elements.thankYouMessage).toBeVisible();

    // Check order overview heading and list
    await expect(thankYouPage.preset3Elements.orderOverviewHeading).toBeVisible();
    await expect(thankYouPage.preset3Elements.orderList).toBeVisible();
    await expect(thankYouPage.preset3Elements.orderNumber).toBeVisible();
    await expect(thankYouPage.preset3Elements.orderDate).toBeVisible();
    await expect(thankYouPage.preset3Elements.orderTotal).toBeVisible();
    await expect(thankYouPage.preset3Elements.paymentMethod).toBeVisible();

    // Check payment instructions
    await expect(thankYouPage.preset3Elements.paymentInstructions).toBeVisible();

    // Check address headings
    await expect(thankYouPage.preset3Elements.billingAddressHeading).toBeVisible();
    await expect(thankYouPage.preset3Elements.shippingAddressHeading).toBeVisible();
  });
});
