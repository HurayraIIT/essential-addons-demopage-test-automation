"use strict";

import { expect, test } from "../global-setup";

test.describe("Woo Account Dashboard", () => {

  test.beforeEach(async ({ page }) => {
    // Login as a customer
    await page.goto("/wp-admin/");
    await page.waitForLoadState("networkidle");
    await page.locator("#user_login").fill(`${process.env.CUSTOMER_EMAIL}`);
    await page.locator("#user_pass").fill(`${process.env.CUSTOMER_PASSWORD}`);
    await page.locator("#wp-submit").first().click();
    await page.waitForLoadState("networkidle");

  });

  test("Preset 1", async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Preset 1' })).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset1 > .elementor-widget-container > .eael-account-dashboard-wrap > .eael-account-dashboard-wrapper > .eael-account-dashboard-body > .eael-account-dashboard-container')).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset1').getByRole('link', { name: ' Dashboard' })).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset1').getByRole('link', { name: ' Orders' })).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset1').getByRole('link', { name: ' Downloads' })).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset1').getByRole('link', { name: ' Addresses' })).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset1').getByRole('link', { name: ' Account Details' })).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset1').getByRole('link', { name: ' Logout' })).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset1').getByText('Welcome,')).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset1').getByRole('heading', { name: 'ACustomerF ACustomerL' })).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset1 img')).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset1').getByText('Hello ACustomerF ACustomerL (')).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset1').getByText('From your account dashboard')).toBeVisible();
  });
  test("Preset 2", async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Preset 2' })).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset2 > .elementor-widget-container > .eael-account-dashboard-wrap > .eael-account-dashboard-wrapper > .eael-account-dashboard-body > .eael-account-dashboard-container')).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset2 img')).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset2').getByText('Welcome,')).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset2').getByRole('heading', { name: 'ACustomerF ACustomerL' })).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset2').getByText('Hello ACustomerF ACustomerL (')).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset2').getByText('From your account dashboard')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Dashboard', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Orders', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Addresses', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Downloads', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Account Details', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Logout', exact: true })).toBeVisible();
  });
  test("Preset 3", async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Preset 3' })).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset3 > .elementor-widget-container > .eael-account-dashboard-wrap > .eael-account-dashboard-wrapper > .eael-account-dashboard-body > .eael-account-dashboard-container')).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset3 img')).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset3').getByText('Welcome,')).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset3').getByRole('heading', { name: 'ACustomerF ACustomerL' })).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset3').getByText('Hello ACustomerF ACustomerL (')).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset3').getByText('From your account dashboard')).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset3').getByRole('link', { name: ' Dashboard' })).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset3').getByRole('link', { name: ' Orders' })).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset3').getByRole('link', { name: ' Downloads' })).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset3').getByRole('link', { name: ' Addresses' })).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset3').getByRole('link', { name: ' Account Details' })).toBeVisible();
    await expect(page.locator('#woo-account-dashboard-preset3').getByRole('link', { name: ' Logout' })).toBeVisible();
  });
});
