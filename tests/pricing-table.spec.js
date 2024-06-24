"use strict";
import { test, expect } from "../global-setup";

let slug = "/pricing-table";
let heading = "Pricing Table";

test.describe("Pricing Table", () => {
    // Page Heading
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/pricing-table/);
    });

    // Pricing Table Style 01
    test("Test Section: Pricing Table Style 01", async ({ page }) => {
        await page.getByRole("heading", { name: "Pricing Table Style 01" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Pricing Table Style 01" })).toBeVisible();
        await expect(page.getByText("Display product pricing table using default style")).toBeVisible();

        const section_root_1 = page.getByTestId('4f6430e6');
        const price_table_1_basic = page.getByTestId('d7c427d');

        await expect(section_root_1.getByRole('heading', { name: 'Basic' })).toBeVisible();
        await expect(section_root_1.getByRole('heading', { name: 'Standard' })).toBeVisible();
        await expect(section_root_1.getByRole('heading', { name: 'Enterprise' })).toBeVisible();
        await expect(price_table_1_basic.locator('.price-currency')).toContainText('$');
        await expect(price_table_1_basic.locator('.price-period')).toContainText('/Mo');
        await expect(price_table_1_basic.locator('.elementor-repeater-item-6264dc5 > .li-icon > .fas')).toBeVisible();
        await expect(price_table_1_basic.locator('.elementor-repeater-item-e478261 > .li-icon > .fas')).toBeVisible();
        await expect(price_table_1_basic.locator('.eael-pricing-button')).toBeVisible();

    });
});
