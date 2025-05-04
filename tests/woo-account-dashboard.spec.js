"use strict";

import { expect, test } from "../global-setup";
import WooAccountDashboardPage from "../src/pages/WooAccountDashboardPage";

test.describe("Woo Account Dashboard", () => {
  let wooAccountDashboardPage;

  test.beforeEach(async ({ page }) => {
    wooAccountDashboardPage = new WooAccountDashboardPage(page);
    await wooAccountDashboardPage.goto();
  });

  test("Preset 1", async () => {
    // Check if Preset 1 section is visible
    const isVisible = await wooAccountDashboardPage.isPreset1Visible();
    expect(isVisible).toBeTruthy();
  });

  test("Preset 2", async () => {
    // Check if Preset 2 section is visible
    const isVisible = await wooAccountDashboardPage.isPreset2Visible();
    expect(isVisible).toBeTruthy();
  });

  test("Preset 3", async () => {
    // Check if Preset 3 section is visible
    const isVisible = await wooAccountDashboardPage.isPreset3Visible();
    expect(isVisible).toBeTruthy();
  });
});