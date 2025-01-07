"use strict";

import { test, expect } from "../global-setup";

let slug = "creative-elements/filterable-gallery";

test.describe("Filterable Gallery", () => {
  // All Styles & Layouts Unique ID
  let gridOverlayID = "#grid-overlay";
  let gridCardID = "#grid-card";
  let gridSearchFilterID = "#grid-search-filter";
  let masonryOverlayID = "#masonry-overlay";
  let masonryCardID = "#masonry-card";
  let masonrySearchFilterID = "#masonry-search-filter";


  // All Styles & Layouts Unique Locator
  let gridOverlayLocator = null;
  let gridCardLocator = null;
  let gridSearchFilterLocator = null;
  let masonryOverlayLocator = null;
  let masonryCardLocator = null;
  let masonrySearchFilterLocator = null;

  let galleryItem1 = null;
  let galleryItem2 = null;
  let galleryItem3 = null;
  let galleryItem4 = null;
  let galleryItem5 = null;
  let galleryItem6 = null;
  let galleryItem7 = null;
  let galleryItem8 = null;
  let galleryItem9 = null;
  let galleryItem10 = null;
  let galleryItem11 = null;
  let galleryItem12 = null;

  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    gridOverlayLocator = page.locator(gridOverlayID);
    gridCardLocator = page.locator(gridCardID);
    gridSearchFilterLocator = page.locator(gridSearchFilterID);
    masonryOverlayLocator = page.locator(masonryOverlayID);
    masonryCardLocator = page.locator(masonryCardID);
    masonrySearchFilterLocator = page.locator(masonrySearchFilterID);

    galleryItem1 = page.locator(".eael-filterable-gallery-item-wrap.eael-cf-a1b2c3").nth(0);
    galleryItem2 = page.locator(".eael-filterable-gallery-item-wrap.eael-cf-a1b2c3").nth(1);
    galleryItem3 = page.locator(".eael-filterable-gallery-item-wrap.eael-cf-a1b2c3").nth(2);
    galleryItem4 = page.locator(".eael-filterable-gallery-item-wrap.eael-cf-d4e5f6").nth(0);
    galleryItem5 = page.locator(".eael-filterable-gallery-item-wrap.eael-cf-d4e5f6").nth(1);
    galleryItem6 = page.locator(".eael-filterable-gallery-item-wrap.eael-cf-d4e5f6").nth(2);
    galleryItem7 = page.locator(".eael-filterable-gallery-item-wrap.eael-cf-g7h8i9").nth(0);
    galleryItem8 = page.locator(".eael-filterable-gallery-item-wrap.eael-cf-g7h8i9").nth(1);
    galleryItem9 = page.locator(".eael-filterable-gallery-item-wrap.eael-cf-g7h8i9").nth(2);
    galleryItem10 = page.locator(".eael-filterable-gallery-item-wrap.eael-cf-j10k11l12").nth(0);
    galleryItem11 = page.locator(".eael-filterable-gallery-item-wrap.eael-cf-j10k11l12").nth(1);
    galleryItem12 = page.locator(".eael-filterable-gallery-item-wrap.eael-cf-j10k11l12").nth(2);


  });

  // Grid Style & Layout Combinations Start

  // Grid Style: Grid | Layout: Overlay
  test("Grid Style: Grid | Layout: Overlay", async ({ page }) => {
    await expect.soft(page.getByText("Grid Style: Grid | Layout: Overlay")).toBeVisible();
    await expect.soft(gridOverlayLocator).toBeVisible();
    await expect.soft(gridOverlayLocator).toHaveClass(/elementor-widget-eael-filterable-gallery/);

    // Check Controls
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control")).toBeVisible();
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control")).toHaveClass("eael-filter-gallery-control");
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li')).toHaveCount(5);
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(0)).toHaveClass("control all-control  active ");
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(1)).toHaveId("A1B2C3");
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(2)).toHaveId("D4E5F6");
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(3)).toHaveId("G7H8I9");
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(4)).toHaveId("J10K11L12");

    // Perform Filter using Controls (A1B2C3, D4E5F6, G7H8I9, J10K11L12) and Check Current Active Controls Contents
    await gridOverlayLocator.locator(".eael-filter-gallery-control").scrollIntoViewIfNeeded();

    await gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(1).click();
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(1)).toHaveClass("control active");
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(2)).not.toHaveClass("control active");
    await expect.soft(gridOverlayLocator.locator(".eael-filterable-gallery-item-wrap eael-cf-d4e5f6")).not.toBeVisible();

    await galleryItem1.hover(); //Grid Overlay Item 1
    await page.waitForTimeout(500);
    await expect.soft(gridOverlayLocator.getByRole('heading', {name: 'Grid Overlay Item 1'})).toBeVisible();
    await expect.soft(gridOverlayLocator.getByText('Content of Grid Overlay Item 1.')).toBeVisible();
    await expect(galleryItem1.locator('img')).toHaveAttribute('src', /image-01\.png/);

    await galleryItem2.hover(); //Grid Overlay Item 2
    await page.waitForTimeout(500);
    await expect.soft(gridOverlayLocator.getByRole('heading', {name: 'Grid Overlay Item 2'})).toBeVisible();
    await expect.soft(gridOverlayLocator.getByText('Content of Grid Overlay Item 2.')).toBeVisible();
    await expect(galleryItem2.locator('img')).toHaveAttribute('src', /image-02\.png/);

    await galleryItem3.hover(); //Grid Overlay Item 3
    await page.waitForTimeout(500);
    await expect.soft(gridOverlayLocator.getByRole('heading', {name: 'Grid Overlay Item 3'})).toBeVisible();
    await expect.soft(gridOverlayLocator.getByText('Content of Grid Overlay Item 3.')).toBeVisible();
    await expect(galleryItem3.locator('img')).toHaveAttribute('src', /image-03\.png/);

    await gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(2).click();
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(2)).toHaveClass("control active");
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(1)).not.toHaveClass("control active");
    await expect.soft(gridOverlayLocator.locator(".eael-filterable-gallery-item-wrap eael-cf-g7h8i9")).not.toBeVisible();

    await galleryItem4.hover(); //Grid Overlay Item 4
    await page.waitForTimeout(500);
    await expect.soft(gridOverlayLocator.getByRole('heading', {name: 'Grid Overlay Item 4'})).toBeVisible();
    await expect.soft(gridOverlayLocator.getByText('Content of Grid Overlay Item 4.')).toBeVisible();
    await expect(galleryItem4.locator('img')).toHaveAttribute('src', /image-04\.png/);

    await galleryItem5.hover(); //Grid Overlay Item 5
    await page.waitForTimeout(500);
    await expect.soft(gridOverlayLocator.getByRole('heading', {name: 'Grid Overlay Item 5'})).toBeVisible();
    await expect.soft(gridOverlayLocator.getByText('Content of Grid Overlay Item 5.')).toBeVisible();
    await expect(galleryItem5.locator('img')).toHaveAttribute('src', /image-05\.png/);

    await galleryItem6.hover(); //Grid Overlay Item 6
    await page.waitForTimeout(500);
    await expect.soft(gridOverlayLocator.getByRole('heading', {name: 'Grid Overlay Item 6'})).toBeVisible();
    await expect.soft(gridOverlayLocator.getByText('Content of Grid Overlay Item 6.')).toBeVisible();
    await expect(galleryItem6.locator('img')).toHaveAttribute('src', /image-06\.png/);

    await gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(3).click();
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(3)).toHaveClass("control active");
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(2)).not.toHaveClass("control active");
    await expect.soft(gridOverlayLocator.locator(".eael-filterable-gallery-item-wrap eael-cf-j10k11l12")).not.toBeVisible();

    await galleryItem7.hover(); //Grid Overlay Item 7
    await page.waitForTimeout(500);
    await expect.soft(gridOverlayLocator.getByRole('heading', {name: 'Grid Overlay Item 7'})).toBeVisible();
    await expect.soft(gridOverlayLocator.getByText('Content of Grid Overlay Item 7.')).toBeVisible();
    await expect(galleryItem7.locator('img')).toHaveAttribute('src', /7\.png/);

    await galleryItem8.hover(); //Grid Overlay Item 8
    await page.waitForTimeout(500);
    await expect.soft(gridOverlayLocator.getByRole('heading', {name: 'Grid Overlay Item 8'})).toBeVisible();
    await expect.soft(gridOverlayLocator.getByText('Content of Grid Overlay Item 8.')).toBeVisible();
    await expect(galleryItem8.locator('img')).toHaveAttribute('src', /8\.png/);

    await galleryItem9.hover(); //Grid Overlay Item 9
    await page.waitForTimeout(500);
    await expect.soft(gridOverlayLocator.getByRole('heading', {name: 'Grid Overlay Item 9'})).toBeVisible();
    await expect.soft(gridOverlayLocator.getByText('Content of Grid Overlay Item 9.')).toBeVisible();
    await expect(galleryItem9.locator('img')).toHaveAttribute('src', /9\.png/);

    await gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(4).click();
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(4)).toHaveClass("control active");
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(3)).not.toHaveClass("control active");
    await expect.soft(gridOverlayLocator.locator(".eael-filterable-gallery-item-wrap eael-cf-a1b2c3")).not.toBeVisible();

    await galleryItem10.hover(); //Grid Overlay Item 10
    await page.waitForTimeout(500);
    await expect.soft(gridOverlayLocator.getByRole('heading', {name: 'Grid Overlay Item 10'})).toBeVisible();
    await expect.soft(gridOverlayLocator.getByText('Content of Grid Overlay Item 10.')).toBeVisible();
    await expect(galleryItem10.locator('img')).toHaveAttribute('src', /10\.png/);

    await galleryItem11.hover(); //Grid Overlay Item 11
    await page.waitForTimeout(500);
    await expect.soft(gridOverlayLocator.getByRole('heading', {name: 'Grid Overlay Item 11'})).toBeVisible();
    await expect.soft(gridOverlayLocator.getByText('Content of Grid Overlay Item 11.')).toBeVisible();
    await expect(galleryItem11.locator('img')).toHaveAttribute('src', /11\.png/);

    await galleryItem12.hover(); //Grid Overlay Item 12
    await page.waitForTimeout(500);
    await expect.soft(gridOverlayLocator.getByRole('heading', {name: 'Grid Overlay Item 12'})).toBeVisible();
    await expect.soft(gridOverlayLocator.getByText('Content of Grid Overlay Item 12.')).toBeVisible();
    await expect(galleryItem12.locator('img')).toHaveAttribute('src', /12\.png/);

    // Perform Filter using Control (All) and Check All Gallery Items are Visible
    await gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(0).click();
    await galleryItem1.hover(); //Grid Overlay Item 1
    await page.waitForTimeout(500);
    await expect.soft(gridOverlayLocator.getByRole('heading', {name: 'Grid Overlay Item 1'})).toBeVisible();
    await expect.soft(gridOverlayLocator.getByText('Content of Grid Overlay Item 1.')).toBeVisible();
    await expect(galleryItem1.locator('img')).toHaveAttribute('src', /image-01\.png/);
    await galleryItem5.hover(); //Grid Overlay Item 5
    await page.waitForTimeout(500);
    await expect.soft(gridOverlayLocator.getByRole('heading', {name: 'Grid Overlay Item 5'})).toBeVisible();
    await expect.soft(gridOverlayLocator.getByText('Content of Grid Overlay Item 5.')).toBeVisible();
    await expect(galleryItem5.locator('img')).toHaveAttribute('src', /image-05\.png/);
    await galleryItem9.hover(); //Grid Overlay Item 9
    await page.waitForTimeout(500);
    await expect.soft(gridOverlayLocator.getByRole('heading', {name: 'Grid Overlay Item 9'})).toBeVisible();
    await expect.soft(gridOverlayLocator.getByText('Content of Grid Overlay Item 9.')).toBeVisible();
    await expect(galleryItem9.locator('img')).toHaveAttribute('src', /9\.png/);
    await galleryItem12.hover(); //Grid Overlay Item 12
    await page.waitForTimeout(500);
    await expect.soft(gridOverlayLocator.getByRole('heading', {name: 'Grid Overlay Item 12'})).toBeVisible();
    await expect.soft(gridOverlayLocator.getByText('Content of Grid Overlay Item 12.')).toBeVisible();
    await expect(galleryItem12.locator('img')).toHaveAttribute('src', /12\.png/);

    await expect(galleryItem1).toBeVisible();
    await galleryItem1.click();
    await page.waitForTimeout(1000);
    await page.keyboard.press('Escape');
  });

  // Grid Style: Grid | Layout: Card
  test("Grid Style: Grid | Layout: Card", async ({ page }) => {
    await expect.soft(page.getByText("Grid Style: Grid | Layout: Card")).toBeVisible();
    await expect.soft(gridCardLocator).toBeVisible();
    await expect.soft(gridCardLocator).toHaveClass(/elementor-widget-eael-filterable-gallery/);
  });

  // Grid Style: Grid | Layout: Search & Filter
  test("Grid Style: Grid | Layout: Search & Filter", async ({ page }) => {
    await expect.soft(page.getByText("Grid Style: Grid | Layout: Search & Filter")).toBeVisible();
    await expect.soft(gridSearchFilterLocator).toBeVisible();
    await expect.soft(gridSearchFilterLocator).toHaveClass(/elementor-widget-eael-filterable-gallery/);
  });

  // Grid Style: Masonry | Layout: Overlay
  test("Grid Style: Masonry | Layout: Overlay", async ({ page }) => {
    await expect.soft(page.getByText("Grid Style: Masonry | Layout: Overlay")).toBeVisible();
    await expect.soft(masonryOverlayLocator).toBeVisible();
    await expect.soft(masonryOverlayLocator).toHaveClass(/elementor-widget-eael-filterable-gallery/);
  });

  // Grid Style: Masonry | Layout: Card
  test("Grid Style: Masonry | Layout: Card", async ({ page }) => {
    await expect.soft(page.getByText("Grid Style: Masonry | Layout: Card")).toBeVisible();
    await expect.soft(masonryCardLocator).toBeVisible();
    await expect.soft(masonryCardLocator).toHaveClass(/elementor-widget-eael-filterable-gallery/);
  });

  // Grid Style: Masonry | Layout: Search & Filter
  test("Grid Style: Masonry | Layout: Search & Filter", async ({ page }) => {
    await expect.soft(page.getByText("Grid Style: Masonry | Layout: Search & Filter")).toBeVisible();
    await expect.soft(masonrySearchFilterLocator).toBeVisible();
    await expect.soft(masonrySearchFilterLocator).toHaveClass(/elementor-widget-eael-filterable-gallery/);
  });

});

// Grid Style & Layout Combinations End
