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
