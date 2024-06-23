"use strict";
import { test, expect } from "../global-setup";

let slug = "/advanced-data-table";
let heading = "Advanced Data Table";

test.describe("Advanced Data Table", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page).toHaveTitle(/Advanced Data Table | Essential Addons for Elementor/);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/advanced-data-table/);
  });

  test("Test Section: Data Table Style 01", async ({ page }) => {
    await expect(page.getByTestId('71abafbd')).toBeVisible();
    await page.getByTestId('71abafbd').scrollIntoViewIfNeeded();

    // Heading of Data Table Style 01
    await expect(page.getByText('Data Table Style 01')).toBeVisible();
    await expect(page.getByText('Insert Data straight from the Elementor Editor with real-time AJAX Live Search')).toBeVisible();
    
    // Search on Data Table Style 01
    await expect(page.getByPlaceholder('Search here . . .')).toBeVisible();
    await page.getByPlaceholder('Search here . . .').fill('Brittany');
    await expect(page.locator('//*[@id="post-256377"]/div/div/section[3]/div/div/div/div/div/div/div[2]/table/tbody/tr[22]/td[2]')).toHaveText("Brittany");
    await page.getByPlaceholder('Search here . . .').clear();

    // Table Header style check of Data Table Style 01
    await expect(page.locator('//*[@id="post-256377"]/div/div/section[3]/div/div/div/div/div/div/div[2]/table/thead')).toHaveCSS('background-color', 'rgb(44, 133, 254)');
    await expect(page.locator('//*[@id="post-256377"]/div/div/section[3]/div/div/div/div/div/div/div[2]/table/thead/tr/th[1]')).toHaveCSS('font-family', 'Poppins, sans-serif');
    await expect(page.locator('//*[@id="post-256377"]/div/div/section[3]/div/div/div/div/div/div/div[2]/table/thead/tr/th[1]')).toHaveCSS('color', 'rgb(255, 255, 255)');

    // Pagination
    await expect(page.locator('//*[@id="post-256377"]/div/div/section[3]/div/div/div/div/div/div/div[3]')).toBeVisible();
    await page.locator('//*[@id="post-256377"]/div/div/section[3]/div/div/div/div/div/div/div[3]/a[7]').click();
    await expect(page.locator('//*[@id="post-256377"]/div/div/section[3]/div/div/div/div/div/div/div[2]/table/tbody/tr[48]/td[2]')).toHaveText('Ryan');
  });
});
