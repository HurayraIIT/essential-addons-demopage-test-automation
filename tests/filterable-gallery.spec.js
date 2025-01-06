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


  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    gridOverlayLocator = page.locator(gridOverlayID);
    gridCardLocator = page.locator(gridCardID);
    gridSearchFilterLocator = page.locator(gridSearchFilterID);
    masonryOverlayLocator = page.locator(masonryOverlayID);
    masonryCardLocator = page.locator(masonryCardID);
    masonrySearchFilterLocator = page.locator(masonrySearchFilterID);
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

    await gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(2).click();
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(2)).toHaveClass("control active");
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(1)).not.toHaveClass("control active");
    await expect.soft(gridOverlayLocator.locator(".eael-filterable-gallery-item-wrap eael-cf-g7h8i9")).not.toBeVisible();


    await gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(3).click();
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(3)).toHaveClass("control active");
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(2)).not.toHaveClass("control active");
    await expect.soft(gridOverlayLocator.locator(".eael-filterable-gallery-item-wrap eael-cf-j10k11l12")).not.toBeVisible();

    await gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(4).click();
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(4)).toHaveClass("control active");
    await expect.soft(gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(3)).not.toHaveClass("control active");
    await expect.soft(gridOverlayLocator.locator(".eael-filterable-gallery-item-wrap eael-cf-a1b2c3")).not.toBeVisible();

    await gridOverlayLocator.locator(".eael-filter-gallery-control").locator('li').nth(0).click();

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
