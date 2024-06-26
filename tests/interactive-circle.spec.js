"use strict";
import { test, expect } from "../global-setup";

let slug = "/interactive-circle";
let heading = "Interactive Circle";

test.describe("Interactive Circle", () => {
  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/interactive-circle/);
  });

  // Item 1 
  test("Test Section: Choose From Multiple Different Style Layouts", async ({ page }) => {
    // Stop TimeOut Issue 
    test.setTimeout(0);

    const section_root = page.getByTestId('8caf97c')
    const eael_circle_item_1 = page.getByTestId('e1d6ade');

    await section_root.getByRole("heading", { name: "Choose From Multiple Different Style Layouts" }).scrollIntoViewIfNeeded();
    await page.pause();
    await expect(section_root.getByRole("heading", { name: "Choose From Multiple Different Style Layouts" })).toBeVisible();
    await expect(section_root.getByText("Beautifully present your content in an attractive ")).toBeVisible();
    // Circle icon & Text Visibility Check 
    await expect(section_root.locator('.fas.fa-leaf')).toBeVisible();
    await expect(section_root.locator('.fas.fa-comment')).toBeVisible();
    await expect(section_root.locator('.fas.fa-map-marker-alt')).toBeVisible();
    await expect(section_root.locator('.fas.fa-rocket')).toBeVisible();
    await expect(section_root.locator('.fas.fa-hourglass-half')).toBeVisible();
    await expect(section_root.locator('.fas.fa-tag')).toBeVisible();
    await expect(eael_circle_item_1.locator('.eael-circle-btn-icon').getByText('Item 1')).toBeVisible();
    await expect(eael_circle_item_1.locator('.eael-circle-btn-icon').getByText('Item 2')).toBeVisible();
    await expect(eael_circle_item_1.locator('.eael-circle-btn-icon').getByText('Item 3')).toBeVisible();
    await expect(eael_circle_item_1.locator('.eael-circle-btn-icon').getByText('Item 4')).toBeVisible();
    await expect(eael_circle_item_1.locator('.eael-circle-btn-icon').getByText('Item 5')).toBeVisible();
    await expect(eael_circle_item_1.locator('.eael-circle-btn-icon').getByText('Item 6')).toBeVisible();
    // Circle Item Click And Visibility check 
    await eael_circle_item_1.locator('.fas.fa-leaf').click();
    await expect(eael_circle_item_1.locator('.eael-interactive-circle').getByText('item 1. You can highlight')).toBeVisible();
    await eael_circle_item_1.locator('.fas.fa-comment').click();
    await expect(eael_circle_item_1.locator('.eael-interactive-circle').getByText('item 2. You can highlight')).toBeVisible();
    await eael_circle_item_1.locator('.fas.fa-map-marker-alt').click();
    await expect(eael_circle_item_1.locator('.eael-interactive-circle').getByText('item 3. You can highlight')).toBeVisible();
    await eael_circle_item_1.locator('.fas.fa-rocket').click();
    await expect(eael_circle_item_1.locator('.eael-interactive-circle').getByText('item 4. You can highlight')).toBeVisible();
    await eael_circle_item_1.locator('.fas.fa-hourglass-half').click();
    await expect(eael_circle_item_1.locator('.eael-interactive-circle').getByText('item 5. You can highlight')).toBeVisible();
    await eael_circle_item_1.locator('.fas.fa-tag').click();
    await expect(eael_circle_item_1.locator('.eael-interactive-circle').getByText('item 6. You can highlight')).toBeVisible();
  });
});
