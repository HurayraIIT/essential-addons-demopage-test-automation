"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/toggle/";
let heading = "Content Toggle Hurayra Automation 241016";

test.describe("Content Toggle https://qa1.site/go/pb4317", () => {
  let toggle_loc = null;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    toggle_loc = page.locator(".elementor-element-6281f4d");
  });

  test("Test Content Tab & Toggle Should Work", async ({ page }) => {
    // Label & Switch
    await expect(page.getByText('Primary 241016')).toBeVisible();
    await expect(toggle_loc.locator(".eael-toggle-switch-rectangle")).toBeVisible();
    await expect(page.getByText('Secondary 241016')).toBeVisible();

    // Only Primary Content should be visible
    await expect(toggle_loc.locator(".eael-toggle-primary-wrap").locator("img")).toBeVisible();

    await expect(page.getByText("Secondary Content 241016")).toBeHidden();
    await expect(toggle_loc.locator(".eael-toggle-secondary-wrap").locator("img")).toBeHidden();

    // Perform toggle
    await toggle_loc.locator(".eael-toggle-switch-rectangle").click();
    await page.waitForTimeout(500);

    // Only Secondary Content should be visible
    await expect(page.getByText('Secondary Content 241016')).toBeVisible();
    await expect(toggle_loc.locator(".eael-toggle-secondary-wrap").locator("img")).toBeVisible();

    await expect(toggle_loc.locator(".eael-toggle-primary-wrap").locator("img")).toBeHidden();
  });
});
