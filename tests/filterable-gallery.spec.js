"use strict";
import { test, expect } from "../global-setup";

let slug = "/filterable-gallery";
let heading = "Filterable Gallery";

test.describe("Filterable Gallery", () => {
    // Page Heading
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/filterable-gallery/);
    });
    // Section 1
    test("Test Section: Filter Images With Gallery Layout", async ({ page }) => {
        test.setTimeout(0)
        const section_root = page.getByTestId('2a706842');

        await page.getByRole("heading", { name: "Filter Images With Gallery Layout" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Filter Images With Gallery Layout" })).toBeVisible();
        await expect(page.getByText("Display images with separate  ")).toBeVisible();

        // Button Visibility 
        await expect(section_root.locator('#eael-filter-gallery-wrapper-66fe3cdd').getByText('All')).toBeVisible();
        await expect(section_root.locator('#eael-filter-gallery-wrapper-66fe3cdd').getByText('NEWS')).toBeVisible();
        await expect(section_root.locator('#eael-filter-gallery-wrapper-66fe3cdd').getByText('MASONRY')).toBeVisible();

        // Image and Hover Text/icon Visibility Check 
        await expect(section_root.getByRole("img", { name: "Filterable Gallery for Elementor 102" })).toBeVisible();
        await expect(section_root.getByRole("img", { name: "Filterable Gallery for Elementor 103" })).toBeVisible();
        await expect(section_root.getByRole("img", { name: "Filterable Gallery for Elementor 104" })).toBeVisible();
        await expect(section_root.getByRole("img", { name: "Filterable Gallery for Elementor 105" })).toBeVisible();

        await section_root.locator('.eael-gallery-grid-item').first().hover();
        await expect(section_root.getByRole('heading', { name: 'Highly Delighted Present' })).toBeVisible();
        await expect(section_root.locator('.gallery-item-buttons .fas.fa-search')).toBeVisible();


        // Gallery Functionality Check
        await section_root.locator('#eael-filter-gallery-wrapper-66fe3cdd').getByText('NEWS').click();
        await section_root.locator('.eael-filterable-gallery-item-wrap.eael-cf-news').first().waitFor();

        const allItems = section_root.locator('.eael-filterable-gallery-item-wrap.eael-cf-news .eael-cf-updates .eael-cf-events .eael-cf-masonry');
        const allCount = await allItems.count();
        for (let i = 0; i < allCount; i++) {
            await expect(newsItems.nth(i)).toBeVisible();
        }

        await section_root.locator('#eael-filter-gallery-wrapper-66fe3cdd').getByText('NEWS').click();
        await section_root.locator('.eael-filterable-gallery-item-wrap.eael-cf-news').first().waitFor();

        const newsItems = section_root.locator('.eael-filterable-gallery-item-wrap.eael-cf-news');
        const newsCount = await newsItems.count();
        for (let i = 0; i < newsCount; i++) {
            await expect(newsItems.nth(i)).toBeVisible();
        }

        await section_root.locator('#eael-filter-gallery-wrapper-66fe3cdd').getByText('UPDATES').click();
        await section_root.locator('.eael-filterable-gallery-item-wrap.eael-cf-updates').first().waitFor();

        const updatesItems = section_root.locator('.eael-filterable-gallery-item-wrap.eael-cf-updates');
        const updatesCount = await updatesItems.count();
        for (let i = 0; i < updatesCount; i++) {
            await expect(updatesItems.nth(i)).toBeVisible();
        }
    });
});
