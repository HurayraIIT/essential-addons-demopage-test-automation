"use strict";

import { expect, test } from "../global-setup";
import WooCartPage from "../src/pages/WooCartPage";

test.describe("Woo Cart - Visibility Tests", () => {
  let wooCartPage;

  // Use beforeEach instead of beforeAll to avoid timeout issues
  test.beforeEach(async ({ page }) => {
    // Initialize the page object for each test
    wooCartPage = new WooCartPage(page);

    // Navigate directly to the cart page
    await page.goto('https://eael.wpqa.site/woocommerce-elements/woo-cart/');
    await page.waitForLoadState('domcontentloaded');
  });

  test("Style 1 section should be visible", async () => {
    // Scroll to Style 1 section
    await wooCartPage.scrollToStyle1();

    // Check if Style 1 section is visible
    const isVisible = await wooCartPage.isStyle1Visible();
    expect(isVisible).toBeTruthy();

    // Check if cart is empty or not
    const isEmpty = await wooCartPage.isStyle1CartEmpty();
    console.log('Is Style 1 Cart Empty in visibility test:', isEmpty);

    // If cart is empty, check for empty cart message
    if (isEmpty) {
      // Use a more specific selector to avoid strict mode violations
      const emptyMessage = wooCartPage.style1Section.locator('.cart-empty.woocommerce-info').first();
      const isMessageVisible = await emptyMessage.isVisible();
      const messageText = await emptyMessage.textContent();

      expect(isMessageVisible).toBeTruthy();
      expect(messageText).toContain('Your cart is currently empty');
      console.log('Empty cart message is visible for Style 1 in visibility test');
    } else {
      // If cart is not empty, check for product rows
      const productRows = wooCartPage.style1Section.getByRole('row').filter({ hasText: 'Remove this item' });
      const areProductsVisible = await productRows.first().isVisible().catch(() => false);
      expect(areProductsVisible).toBeTruthy();
      console.log('Product rows are visible for Style 1 in visibility test');
    }
  });

  test("Style 2 section should be visible", async () => {
    // Scroll to Style 2 section
    await wooCartPage.scrollToStyle2();

    // Check if Style 2 section is visible
    const isVisible = await wooCartPage.isStyle2Visible();
    expect(isVisible).toBeTruthy();

    // Check if cart is empty or not
    const isEmpty = await wooCartPage.isStyle2CartEmpty();
    console.log('Is Style 2 Cart Empty in visibility test:', isEmpty);

    // If cart is empty, check for empty cart message
    if (isEmpty) {
      // Use a more specific selector to avoid strict mode violations
      const emptyMessage = wooCartPage.style2Section.locator('.cart-empty.woocommerce-info').first();
      const isMessageVisible = await emptyMessage.isVisible();
      const messageText = await emptyMessage.textContent();

      expect(isMessageVisible).toBeTruthy();
      expect(messageText).toContain('Your cart is currently empty');
      console.log('Empty cart message is visible for Style 2 in visibility test');
    } else {
      // If cart is not empty, check for product details
      const productLinks = wooCartPage.style2Section.getByRole('link').filter({ hasText: 'Hurayra Automation Product' });
      const areProductsVisible = await productLinks.first().isVisible().catch(() => false);
      expect(areProductsVisible).toBeTruthy();
      console.log('Product links are visible for Style 2 in visibility test');
    }
  });

  test("Capture computed styles for Style 1 and Style 2", async ({ page }) => {
    // We're already on the cart page from beforeEach
    console.log('Capturing styles with empty cart');

    // Navigate to the Woo Cart page
    await page.goto('https://eael.wpqa.site/woocommerce-elements/woo-cart/');
    await page.waitForLoadState('networkidle');

    // Scroll to Style 1 section
    await wooCartPage.scrollToStyle1();

    // Get Style 1 section and its wrapper (handle both empty and non-empty states)
    const style1Section = page.locator('article').filter({ hasText: 'Style 1' }).first();

    // Check if cart is empty for Style 1
    const style1CartEmpty = await wooCartPage.isStyle1CartEmpty();
    console.log('Is Style 1 Cart Empty:', style1CartEmpty);

    // Use the appropriate selector based on cart state
    const style1Wrapper = style1CartEmpty
      ? style1Section.locator('.eael-woo-cart-wrapper.eael-woo-cart-empty.eael-woo-default').first()
      : style1Section.locator('.eael-woo-cart-wrapper.eael-woo-default').first();

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

    // Only check table-related elements if cart is not empty
    if (!style1CartEmpty) {
      // Get Style 1 table and its computed styles
      const style1Table = style1Wrapper.locator('table').first();

      // Check if table exists before evaluating
      const tableExists = await style1Table.count() > 0;
      if (tableExists) {
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
        if (await style1TableHeader.count() > 0) {
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
        }

        // Get Style 1 table body row styles
        const style1TableRow = style1Table.locator('tbody tr').first();
        if (await style1TableRow.count() > 0) {
          const style1RowStyles = await style1TableRow.evaluate(el => {
            const styles = window.getComputedStyle(el);
            return {
              borderBottom: styles.borderBottom,
              padding: styles.padding,
              verticalAlign: styles.verticalAlign
            };
          });
          console.log('Style 1 Table Row Styles:', style1RowStyles);
        }

        // Get Style 1 product image styles
        const style1ProductImage = style1Table.locator('img').first();
        if (await style1ProductImage.count() > 0) {
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
        }
      } else {
        console.log('Style 1 Table not found - cart may be empty');
      }
    } else {
      console.log('Style 1 Cart is empty, skipping table-related style checks');

      // Check for empty cart message
      const emptyCartMessage = style1Wrapper.getByText('Your cart is currently empty.');
      if (await emptyCartMessage.isVisible()) {
        console.log('Empty cart message is visible for Style 1');
      }
    }

    // Get Style 1 buttons styles (works for both empty and non-empty carts)
    const style1Button = style1Wrapper.locator('button, a.button').first();
    if (await style1Button.count() > 0) {
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
    }

    // Scroll to Style 2 section
    await wooCartPage.scrollToStyle2();

    // Get Style 2 section and check if cart is empty
    const style2Section = page.locator('article').filter({ hasText: 'Style 2' }).first();
    const style2CartEmpty = await wooCartPage.isStyle2CartEmpty();
    console.log('Is Style 2 Cart Empty:', style2CartEmpty);

    // Use the appropriate selector based on cart state
    const style2Wrapper = style2CartEmpty
      ? style2Section.locator('.eael-woo-cart-wrapper.eael-woo-cart-empty.eael-woo-style-2').first()
      : style2Section.locator('.eael-woo-cart-wrapper.eael-woo-style-2').first();

    // Log Style 2 wrapper classes
    const style2Classes = await style2Wrapper.evaluate(el => el.className);
    console.log('Style 2 Wrapper Classes:', style2Classes);

    // Verify Style 2 has the required classes
    expect(style2Classes).toContain('eael-woo-cart-wrapper');
    expect(style2Classes).toContain('eael-woo-style-2');
    expect(style2Classes).toContain('eael-auto-update');

    // Only check for these classes if cart is not empty
    if (!style2CartEmpty) {
      expect(style2Classes).toContain('has-table-left-content');
      expect(style2Classes).toContain('has-table-right-content');
    } else {
      // Skip this check if cart is empty
      console.log('Style 2 Cart is empty, skipping has-table-left-content and has-table-right-content class checks');
      test.skip();
    }

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
      const style2Button = style2Wrapper.locator('button, a.button').first();
      if (await style2Button.count() > 0) {
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

    // We already checked these classes above, so just log the status
    console.log('Style 2 Cart is empty:', style2CartEmpty);
    if (style2CartEmpty) {
      console.log('Style 2 Cart is empty, skipping table-related class checks');
    }
  });


});