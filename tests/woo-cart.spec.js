"use strict";

import { expect, test } from "../global-setup";
import WooCartPage from "../src/pages/WooCartPage";

test.describe("Woo Cart - Visibility Tests", () => {
  let wooCartPage;

  test.beforeEach(async ({ page }) => {
    // Initialize the page object
    wooCartPage = new WooCartPage(page);

    // Login as a customer using credentials from .env file
    await wooCartPage.login();

    // Add products to the cart
    await page.goto('https://eael.wpqa.site/shop/');
    await page.waitForLoadState('networkidle');

    // Add Hurayra Automation products to cart
    const addToCartButtons = await page.getByRole('link', { name: /Add to cart: "Hurayra Automation Product/ }).all();

    // Add at least two products
    for (let i = 0; i < Math.min(2, addToCartButtons.length); i++) {
      await addToCartButtons[i].click();
      await page.waitForTimeout(1000); // Wait for cart to update
    }

    // Navigate to the cart page
    await wooCartPage.goto();
    await page.waitForLoadState('networkidle');
  });

  test("Style 1 section should be visible", async () => {
    // Scroll to Style 1 section
    await wooCartPage.scrollToStyle1();

    // Check if Style 1 section is visible
    const isVisible = await wooCartPage.isStyle1Visible();
    expect(isVisible).toBeTruthy();

    // Check if cart is not empty
    const isEmpty = await wooCartPage.isStyle1CartEmpty();
    expect(isEmpty).toBeFalsy();
  });

  test("Style 2 section should be visible", async () => {
    // Scroll to Style 2 section
    await wooCartPage.scrollToStyle2();

    // Check if Style 2 section is visible
    const isVisible = await wooCartPage.isStyle2Visible();
    expect(isVisible).toBeTruthy();
  });

  test("Capture computed styles for Style 1 and Style 2", async ({ page }) => {
    // Login as a customer
    await wooCartPage.login();

    // Add products to the cart
    await wooCartPage.addProductToCart("Hurayra Automation Product 01");

    // Navigate to the Woo Cart page
    await page.goto('https://eael.wpqa.site/woocommerce-elements/woo-cart/');
    await page.waitForLoadState('networkidle');

    // Scroll to Style 1 section
    await wooCartPage.scrollToStyle1();

    // Get Style 1 section and its wrapper
    const style1Section = page.locator('article').filter({ hasText: 'Style 1' }).first();
    const style1Wrapper = style1Section.locator('.eael-woo-cart-wrapper.eael-woo-default').first();

    // Log Style 1 wrapper classes
    const style1Classes = await style1Wrapper.evaluate(el => el.className);
    console.log('Style 1 Wrapper Classes:', style1Classes);

    // Verify Style 1 has the required classes
    expect(style1Classes).toContain('eael-woo-cart-wrapper');
    expect(style1Classes).toContain('eael-woo-default');
    expect(style1Classes).toContain('eael-auto-update');

    // Get and log Style 1 computed styles
    const style1Styles = await style1Wrapper.evaluate(el => {
      const styles = window.getComputedStyle(el);
      return {
        display: styles.display,
        position: styles.position,
        width: styles.width,
        margin: styles.margin,
        padding: styles.padding,
        backgroundColor: styles.backgroundColor
      };
    });
    console.log('Style 1 Computed Styles:', style1Styles);

    // Get Style 1 table and its computed styles
    const style1Table = style1Wrapper.locator('table').first();
    const style1TableStyles = await style1Table.evaluate(el => {
      const styles = window.getComputedStyle(el);
      return {
        display: styles.display,
        width: styles.width,
        borderCollapse: styles.borderCollapse,
        margin: styles.margin,
        textAlign: styles.textAlign
      };
    });
    console.log('Style 1 Table Styles:', style1TableStyles);

    // Get Style 1 table header row styles
    const style1TableHeader = style1Table.locator('thead tr').first();
    const style1HeaderStyles = await style1TableHeader.evaluate(el => {
      const styles = window.getComputedStyle(el);
      return {
        backgroundColor: styles.backgroundColor,
        color: styles.color,
        fontWeight: styles.fontWeight,
        fontSize: styles.fontSize,
        textAlign: styles.textAlign
      };
    });
    console.log('Style 1 Table Header Styles:', style1HeaderStyles);

    // Get Style 1 table body row styles
    const style1TableRow = style1Table.locator('tbody tr').first();
    const style1RowStyles = await style1TableRow.evaluate(el => {
      const styles = window.getComputedStyle(el);
      return {
        borderBottom: styles.borderBottom,
        padding: styles.padding,
        verticalAlign: styles.verticalAlign
      };
    });
    console.log('Style 1 Table Row Styles:', style1RowStyles);

    // Get Style 1 product image styles
    const style1ProductImage = style1Table.locator('img').first();
    const style1ImageStyles = await style1ProductImage.evaluate(el => {
      const styles = window.getComputedStyle(el);
      return {
        width: styles.width,
        height: styles.height,
        maxWidth: styles.maxWidth,
        borderRadius: styles.borderRadius
      };
    });
    console.log('Style 1 Product Image Styles:', style1ImageStyles);

    // Get Style 1 buttons styles
    const style1Button = style1Wrapper.locator('button').first();
    const style1ButtonStyles = await style1Button.evaluate(el => {
      const styles = window.getComputedStyle(el);
      return {
        backgroundColor: styles.backgroundColor,
        color: styles.color,
        padding: styles.padding,
        borderRadius: styles.borderRadius,
        fontSize: styles.fontSize,
        fontWeight: styles.fontWeight
      };
    });
    console.log('Style 1 Button Styles:', style1ButtonStyles);

    // Scroll to Style 2 section
    await wooCartPage.scrollToStyle2();

    // Get Style 2 section and its wrapper
    const style2Section = page.locator('article').filter({ hasText: 'Style 2' }).first();
    const style2Wrapper = style2Section.locator('.eael-woo-cart-wrapper.eael-woo-style-2').first();

    // Log Style 2 wrapper classes
    const style2Classes = await style2Wrapper.evaluate(el => el.className);
    console.log('Style 2 Wrapper Classes:', style2Classes);

    // Verify Style 2 has the required classes
    expect(style2Classes).toContain('eael-woo-cart-wrapper');
    expect(style2Classes).toContain('eael-woo-style-2');
    expect(style2Classes).toContain('eael-auto-update');
    expect(style2Classes).toContain('has-table-left-content');
    expect(style2Classes).toContain('has-table-right-content');

    // Get and log Style 2 computed styles
    const style2Styles = await style2Wrapper.evaluate(el => {
      const styles = window.getComputedStyle(el);
      return {
        display: styles.display,
        position: styles.position,
        width: styles.width,
        margin: styles.margin,
        padding: styles.padding,
        backgroundColor: styles.backgroundColor
      };
    });
    console.log('Style 2 Computed Styles:', style2Styles);

    // Check if specific elements exist and get their styles
    try {
      // Try to get a button from Style 2
      const style2Button = style2Wrapper.locator('button').first();
      if (await style2Button.isVisible()) {
        const style2ButtonStyles = await style2Button.evaluate(el => {
          const styles = window.getComputedStyle(el);
          return {
            backgroundColor: styles.backgroundColor,
            color: styles.color,
            padding: styles.padding,
            borderRadius: styles.borderRadius,
            fontSize: styles.fontSize,
            fontWeight: styles.fontWeight
          };
        });
        console.log('Style 2 Button Styles:', style2ButtonStyles);
      }
    } catch (error) {
      console.log('Error getting Style 2 button styles:', error.message);
    }

    // Verify the has-table-left-content and has-table-right-content classes
    expect(style2Classes).toContain('has-table-left-content');
    expect(style2Classes).toContain('has-table-right-content');
  });


});