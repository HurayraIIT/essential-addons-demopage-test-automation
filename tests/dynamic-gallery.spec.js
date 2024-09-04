"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/dynamic-gallery";
let heading = "Dynamic Gallery";

test.describe("Dynamic Gallery", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    // await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/dynamic-content-elements\/dynamic-filterable-gallery/);
  });

  test("Test Section: Attractive Grid Layout To Showcase All Of Your Posts", async ({ page }) => {
    await page.getByRole("heading", { name: "Attractive Grid Layout To Showcase All Of Your Posts" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Attractive Grid Layout To Showcase All Of Your Posts" })).toBeVisible();
    await expect(page.getByText("Choose the Grid Layout option to showcase your blog")).toBeVisible();

    await expect(page.locator('#eael-filter-gallery-wrapper-3990f5c div').filter({ hasText: 'AllElementorWordPressTemplates' })).toBeVisible();
    await expect(page.locator('#eael-filter-gallery-wrapper-3990f5c').getByText('All', { exact: true })).toBeVisible();
    await expect(page.locator('#eael-filter-gallery-wrapper-3990f5c').getByText('Elementor', { exact: true })).toBeVisible();
    await expect(page.locator('#eael-filter-gallery-wrapper-3990f5c').getByText('WordPress', { exact: true })).toBeVisible();
    await expect(page.locator('#eael-filter-gallery-wrapper-3990f5c').getByText('Templates')).toBeVisible();
    
    await page.locator('#eael-filter-gallery-wrapper-3990f5c').getByText('Elementor', { exact: true }).click();
    await page.locator('#eael-filter-gallery-wrapper-3990f5c').getByText('WordPress', { exact: true }).click();
    await page.locator('#eael-filter-gallery-wrapper-3990f5c').getByText('Templates', { exact: true }).click();
    await expect(page.locator('#eael-load-more-btn-3990f5c')).toBeVisible();
    await page.locator('#eael-load-more-btn-3990f5c').click();
  });
});

// Not suitable for structure tests