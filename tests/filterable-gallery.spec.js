"use strict";
import { test, expect } from "../global-setup";

let slug = "/filterable-gallery";
let heading = "Filterable Gallery";

test.describe("Filterable Gallery", () => {
    // Page Heading
    test.beforeEach(async ({ page }) => {
        await page.goto(slug, {
            waitUntil: 'networkidle2',
        });

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
        await expect(section_root.getByRole('link', { name: '' })).toBeVisible();

        // Gallery Functionality Check

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

        await section_root.locator('#eael-filter-gallery-wrapper-66fe3cdd').getByText('ALL').click();
        await section_root.locator('.eael-filterable-gallery-item-wrap.eael-cf-news').first().waitFor();

        const allItems = section_root.locator('.eael-filterable-gallery-item-wrap.eael-cf-news .eael-cf-updates .eael-cf-events .eael-cf-masonry');
        const allCount = await allItems.count();
        for (let i = 0; i < allCount; i++) {
            await expect(newsItems.nth(i)).toBeVisible();
        }

        // Click Search Icon And Open Image to check everyting works fine





        // await page.locator('div:nth-child(2) > .eael-gallery-grid-item > .gallery-item-caption-wrap > .gallery-item-caption-over > .gallery-item-buttons').click();
        await page.locator("//body/div[@class='eael-offcanvas-container eael-offcanvas-container-3eb106b']/div[@id='page']/div[@id='content']/div[@class='flexia-wrapper flexia-blank-container']/div[@id='primary']/main[@id='main']/article[@id='post-1925']/div[@class='entry-content']/div[@class='elementor elementor-1925 elementor-motion-effects-parent']/section[@class='elementor-section elementor-top-section elementor-element elementor-element-2a706842 elementor-section-content-middle elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default']/div[@class='elementor-container elementor-column-gap-default']/div[@class='elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-93dda78']/div[@class='elementor-widget-wrap elementor-element-populated']/div[@class='elementor-element elementor-element-66fe3cdd eael-fg-hoverer-content-align-center elementor-widget elementor-widget-eael-filterable-gallery']/div[@class='elementor-widget-container']/div[@id='eael-filter-gallery-wrapper-66fe3cdd']/div[@class='eael-filter-gallery-container masonry']/div[1]/div[1]").hover();
        await page.locator("//div[@id='eael-filter-gallery-wrapper-66fe3cdd']//div[1]//div[1]//div[2]//div[2]//div[1]//a[1]//span[1]//i[1]").click();

        await expect(page.getByRole('figure', { name: 'of 8' }).getByRole('img')).toBeVisible();
        await expect(page.getByRole('button', { name: 'Next (Right arrow key)' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Previous (Left arrow key)' })).toBeVisible();
        await expect(page.getByText('of 8')).toBeVisible();
        await expect(page.getByRole('button', { name: '×' })).toBeVisible();
        await expect(page.getByText('of 8')).toBeVisible();

        await page.getByRole('button', { name: 'Next (Right arrow key)' }).click();
        await expect(page.getByRole('figure', { name: 'of 8' }).getByRole('img')).toBeVisible();
        await expect(page.getByText('of 8')).toBeVisible();
        await page.getByRole('button', { name: 'Previous (Left arrow key)' }).click();
        await expect(page.getByRole('figure', { name: 'of 8' }).getByRole('img')).toBeVisible();
        await expect(page.getByText('of 8')).toBeVisible();
        await page.getByRole('button', { name: '×' }).click();
    });
});
