"use strict";
import { test, expect } from "../global-setup";

let slug = "/one-page-nav";
let heading = "One Page Navigation";

test.describe("One Page Navigation", () => {
    // Page Heading
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/creative-elements\/one-page-navigation/);
    });

    test("Test Section: Create One Page Navigation", async ({ page }) => {
        await page.getByRole("heading", { name: "Create One Page Navigation" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Create One Page Navigation" })).toBeVisible();
        await expect(page.getByText("Help your visitors navigate ")).toBeVisible();
        // Nav Menu - Icon and Text Visibility Check 
        await expect(page.getByRole('link', { name: '' })).toBeVisible();
        await page.getByRole('link', { name: '' }).hover();
        await expect(page.locator('#eael-one-page-nav-2221bcee').getByText('Home')).toBeVisible();
        await expect(page.locator('a').filter({ hasText: '.st0{fill:#1DA1F3;}' })).toBeVisible();
        await page.locator('a').filter({ hasText: '.st0{fill:#1DA1F3;}' }).hover();
        await expect(page.getByText('Features')).toBeVisible();
        await expect(page.locator('a').filter({ hasText: '.st0{fill:#3AD0BF;}' })).toBeVisible();
        await page.locator('a').filter({ hasText: '.st0{fill:#3AD0BF;}' }).hover();
        await expect(page.getByText('Services')).toBeVisible();
        await expect(page.locator('a').filter({ hasText: '.st0{fill:#E067B3;}' })).toBeVisible();
        await page.locator('a').filter({ hasText: '.st0{fill:#E067B3;}' }).hover();
        await expect(page.getByText('Pricing Plans')).toBeVisible();
        await expect(page.locator('a').filter({ hasText: '.st0{fill:#8562F8;}' })).toBeVisible();
        await page.locator('a').filter({ hasText: '.st0{fill:#8562F8;}' }).hover();
        await expect(page.locator('#eael-one-page-nav-2221bcee').getByText('Blog')).toBeVisible();
    });
});
