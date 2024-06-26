"use strict";
import { test, expect } from "../global-setup";

let slug = "/interactive-cards";
let heading = "Interactive Cards";

test.describe("Interactive Cards", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/interactive-cards/);
    });

    test("Test Section: Limitless Flexible Design", async ({ page }) => {

        const section_root = page.getByTestId('182b845')

        await page.getByRole("heading", { name: "Limitless Flexible Design" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Limitless Flexible Design" })).toBeVisible();
        await expect(page.getByText("Take your Elementor web design")).toBeVisible();

        await expect(section_root.locator('.image-screen')).toBeVisible();
        await section_root.locator('.image-screen').click();
        await expect(section_root.locator('.image')).toBeVisible();
        await expect(section_root.locator('#interactive-card-368e06c7').getByRole('heading', { name: 'Amazing Colorful City' })).toBeVisible();
        await expect(section_root.locator('#interactive-card-368e06c7').getByText('We have only one earth to')).toBeVisible();
        await expect(section_root.locator('#interactive-card-368e06c7').getByRole('link', { name: 'Read More' })).toBeVisible();
        await expect(section_root.locator('.fas.fa-times')).toBeVisible();
        await section_root.locator('.fas.fa-times').click();
        await expect(section_root.locator('.image-screen')).toBeVisible();
    });

});
