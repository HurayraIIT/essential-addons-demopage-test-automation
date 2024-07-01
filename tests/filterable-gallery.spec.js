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

        const section_root = page.getByTestId('2a706842')

        await page.getByRole("heading", { name: "Filter Images With Gallery Layout" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Filter Images With Gallery Layout" })).toBeVisible();
        await expect(page.getByText("Display images with separate  ")).toBeVisible();
        // Button Visibility 
        await expect(section_root.locator('#eael-filter-gallery-wrapper-66fe3cdd').getByText('All')).toBeVisible();
        await expect(section_root.locator('#eael-filter-gallery-wrapper-66fe3cdd').getByText('NEWS')).toBeVisible();
        await expect(section_root.locator('#eael-filter-gallery-wrapper-66fe3cdd').getByText('MASONRY')).toBeVisible();

        // Click Functionility Check 
        await section_root.locator('#eael-filter-gallery-wrapper-66fe3cdd').getByText('NEWS').click();
        // Click a button and check this button products are visibile or not
    });
});
