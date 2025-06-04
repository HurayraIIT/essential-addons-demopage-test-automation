"use strict";

import { expect, test } from "../global-setup";

let slug = "/woocommerce-elements/woo-product-gallery/";

test.describe("Woo Product Gallery - Preset 1 Layout Grid", () => {
  let heading = "Skin: Preset 1 | Layout: Grid";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();

    // Find the widget container - use the main article element that contains the product gallery
    widget = page.locator('main article');
  });

  test("Test Preset 1 Grid Layout Visibility", async ({ page }) => {
    // Test that the main heading is visible
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    // Test that the widget container is visible
    await expect(widget).toBeVisible();

    // Test that the filter navigation is visible
    const filterNav = widget.locator('ul').first();
    await expect(filterNav).toBeVisible();

    // Test filter links using data-testid attributes
    await expect(page.getByTestId('["34","29","26","27","24"]')).toBeVisible(); // All filter
    await expect(page.getByTestId('34')).toBeVisible(); // Chair filter
    await expect(page.getByTestId('29')).toBeVisible(); // Shoe filter
    await expect(page.getByTestId('26')).toBeVisible(); // Fashion filter
    await expect(page.getByTestId('27')).toBeVisible(); // Men filter
    await expect(page.getByTestId('24')).toBeVisible(); // Women filter

    // Test that product grid is visible
    const productGrid = widget.locator('ul').nth(1);
    await expect(productGrid).toBeVisible();

    // Test that at least some products are visible
    const products = productGrid.locator('li');
    await expect(products.first()).toBeVisible();

    // Test specific products that are visible on the page
    await expect(page.getByRole('heading', { name: 'Mens Black Shirt' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Mens Comfy T Shirt' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Men Casual Sport Shoes Light Sneakers' })).toBeVisible();

    // Test that product images are visible
    await expect(page.getByRole('img', { name: 'Mens Black Shirt' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Mens Comfy T Shirt' })).toBeVisible();

    // Test that add to cart buttons are visible (using partial text match)
    await expect(page.getByText('Add to cart').first()).toBeVisible();

    // Test that prices are visible
    await expect(page.getByText('45.00৳').first()).toBeVisible();
    await expect(page.getByText('20.00৳').first()).toBeVisible();

    // Test sale badges
    await expect(page.getByText('Sale!').first()).toBeVisible();
  });
});