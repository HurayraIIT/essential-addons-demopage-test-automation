/**
 * Page Object Model for WooCommerce Cart page
 * URL: https://eael.wpqa.site/woocommerce-elements/woo-cart/
 */
import { captureComputedStyles } from '../utils/styleUtils.js';

class WooCartPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = '/woocommerce-elements/woo-cart/';

    // Style 1 Locators
    this.style1Heading = this.page.getByRole('heading', { name: 'Style 1', exact: true });
    this.style1Section = this.page.locator('article').filter({ hasText: 'Style 1' }).first();
    // Handle both empty and non-empty cart states
    this.style1CartWrapper = this.style1Section.locator('.eael-woo-cart-wrapper.eael-woo-default');

    // Style 1 Elements
    this.style1Elements = {
      // Table headers
      table: this.style1Section.locator('table').first(),
      tableHeaders: this.style1Section.locator('table').first().getByRole('row').first(),
      productHeader: this.style1Section.getByRole('cell', { name: 'Product' }),
      priceHeader: this.style1Section.getByRole('cell', { name: 'Price' }),
      quantityHeader: this.style1Section.getByRole('cell', { name: 'Quantity' }),
      totalHeader: this.style1Section.getByRole('cell', { name: 'Total' }),

      // Product rows
      productRows: this.style1Section.getByRole('row').filter({ hasText: 'Remove this item' }),
      removeItemLinks: this.style1Section.getByRole('link', { name: 'Remove this item' }),
      productImages: this.style1Section.locator('img').filter({ hasText: 'Hurayra Automation Product' }),
      productLinks: this.style1Section.getByRole('link').filter({ hasText: 'Hurayra Automation Product' }),
      quantityInputs: this.style1Section.getByRole('spinbutton', { name: 'Product quantity' }),

      // Cart actions
      couponLabel: this.style1Section.getByText('Coupon:'),
      couponInput: this.style1Section.locator('input[name="coupon_code"]'),
      applyCouponButton: this.style1Section.getByRole('button', { name: 'Apply Coupon' }),
      continueShoppingLink: this.style1Section.getByRole('link', { name: 'Continue Shopping' }),
      updateCartButton: this.style1Section.getByRole('button', { name: 'Update Cart' }),

      // Cart totals
      subtotalRow: this.style1Section.getByRole('row', { name: /Subtotal/ }),
      totalRow: this.style1Section.getByRole('row', { name: /Total/ }),
      proceedToCheckoutLink: this.style1Section.getByRole('link', { name: 'Proceed to Checkout' })
    };

    // Style 1 Empty Cart Elements
    this.style1EmptyElements = {
      emptyCartMessage: this.style1Section.locator('.cart-empty.woocommerce-info').first(),
      returnToShopLink: this.style1Section.getByRole('link', { name: 'Return to shop' })
    };

    // Style 2 Locators
    this.style2Heading = this.page.getByRole('heading', { name: 'Style 2', exact: true });
    this.style2Section = this.page.locator('article').filter({ hasText: 'Style 2' }).first();
    // Handle both empty and non-empty cart states
    this.style2CartWrapper = this.style2Section.locator('.eael-woo-cart-wrapper.eael-woo-style-2');

    // Style 2 Elements
    this.style2Elements = {
      // Headers
      headerText: this.style2Section.getByText(/Product Title Price Quantity Subtotal/),

      // Product details
      productImages: this.style2Section.locator('img').filter({ hasText: 'Hurayra Automation Product' }),
      productLinks: this.style2Section.getByRole('link').filter({ hasText: 'Hurayra Automation Product' }),
      productSKUs: this.style2Section.locator('p').filter({ hasText: /#\d+-\d+/ }),
      quantityInputs: this.style2Section.getByRole('spinbutton', { name: 'Product quantity' }),
      removeItemLinks: this.style2Section.getByRole('link', { name: 'Remove this item' }),

      // Cart actions
      couponLabel: this.style2Section.getByText('Coupon:'),
      couponInput: this.style2Section.locator('input[name="coupon_code"]'),
      applyCouponButton: this.style2Section.getByRole('button', { name: 'Apply Coupon' }),
      continueShoppingLink: this.style2Section.getByRole('link', { name: 'Continue Shopping' }),
      updateCartButton: this.style2Section.getByRole('button', { name: 'Update Cart' }),

      // Cart totals
      subtotalText: this.style2Section.getByText(/Subtotal/),
      totalText: this.style2Section.getByText(/Total/),
      proceedToCheckoutLink: this.style2Section.getByRole('link', { name: 'Proceed to Checkout' })
    };

    // Style 2 Empty Cart Elements
    this.style2EmptyElements = {
      emptyCartMessage: this.style2Section.locator('.cart-empty.woocommerce-info').first(),
      returnToShopLink: this.style2Section.getByRole('link', { name: 'Return to shop' })
    };
  }

  /**
   * Navigate to the WooCommerce Cart page
   */
  async goto() {
    const fullUrl = `https://eael.wpqa.site${this.url}`;
    await this.page.goto(fullUrl);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Login as a customer using credentials from .env file
   */
  async login() {
    // Go to login page
    await this.page.goto('https://eael.wpqa.site/my-account/');
    await this.page.waitForLoadState('networkidle');

    // Check if already logged in
    const isLoggedIn = await this.page.getByText('Hello').isVisible().catch(() => false);

    if (!isLoggedIn) {
      // Fill in login form with credentials from .env file
      await this.page.getByLabel('Username or email address').fill(process.env.CUSTOMER_EMAIL);
      await this.page.locator('#password').fill(process.env.CUSTOMER_PASSWORD);

      // Click login button
      await this.page.getByRole('button', { name: 'Log in' }).click();
      await this.page.waitForLoadState('networkidle');
    }
  }

  /**
   * Clear the cart
   * @returns {Promise<boolean>} - Whether the cart was successfully cleared
   */
  async clearCart() {
    try {
      // Go directly to the cart page
      await this.page.goto('https://eael.wpqa.site/cart/');
      await this.page.waitForLoadState('domcontentloaded');

      // Check if cart is already empty by looking for the empty cart message
      const emptyCartMessage = this.page.locator('.cart-empty.woocommerce-info');
      if (await emptyCartMessage.isVisible().catch(() => false)) {
        console.log('Cart is already empty');
        return true;
      }

      // If we have items, try to use the "Remove" links
      // But limit the number of attempts to avoid timeouts
      const maxRemovalAttempts = 5;
      let attempts = 0;

      while (attempts < maxRemovalAttempts) {
        attempts++;

        // Check if we have any remove links
        const removeLinks = await this.page.getByRole('link', { name: 'Remove' }).all();
        if (removeLinks.length === 0) {
          // No more items to remove
          break;
        }

        console.log(`Attempt ${attempts}: Found ${removeLinks.length} items to remove`);

        // Click the first remove link and wait for page to update
        try {
          await removeLinks[0].click();
          await this.page.waitForLoadState('domcontentloaded');
          console.log('Removed an item from cart');
        } catch (error) {
          console.log('Error removing item:', error.message);
          // If we can't click the link, try reloading the page
          await this.page.reload();
          await this.page.waitForLoadState('domcontentloaded');
        }
      }

      // Final check if cart is empty
      await this.page.reload();
      await this.page.waitForLoadState('domcontentloaded');

      const isEmptyNow = await emptyCartMessage.isVisible().catch(() => false);
      console.log(`Cart is ${isEmptyNow ? 'now empty' : 'still not empty after max attempts'}`);

      return isEmptyNow;
    } catch (error) {
      console.log('Error in clearCart method:', error.message);
      return false;
    }
  }

  /**
   * Add a product to the cart from the shop page
   * @param {string} productName - The name of the product to add
   * @returns {Promise<boolean>} - Whether the product was successfully added
   */
  async addProductToCart(productName) {
    // Navigate to the shop page
    await this.page.goto('https://eael.wpqa.site/shop/');
    await this.page.waitForLoadState('networkidle');

    // First, try to find the product by its name
    const productCard = this.page.locator('li.product').filter({ hasText: productName }).first();

    if (await productCard.isVisible()) {
      console.log(`Found product card for "${productName}"`);

      // Find the Add to Cart button within this product card
      const addToCartButton = productCard.locator('a.add_to_cart_button').first();

      if (await addToCartButton.isVisible()) {
        await addToCartButton.scrollIntoViewIfNeeded();
        await addToCartButton.click();

        // Wait for the cart to update
        await this.page.waitForTimeout(2000);

        // Check for success message (could be in different formats)
        const successMessage1 = this.page.getByText(`"${productName}" has been added to your cart`);
        const successMessage2 = this.page.getByText(`has been added to your cart`).filter({ hasText: productName });
        const successMessage3 = this.page.locator('.woocommerce-message');

        const isSuccess =
          await successMessage1.isVisible().catch(() => false) ||
          await successMessage2.isVisible().catch(() => false) ||
          (await successMessage3.isVisible().catch(() => false) &&
           await successMessage3.textContent().then(text => text.includes(productName)).catch(() => false));

        if (isSuccess) {
          console.log(`Successfully added "${productName}" to cart`);
          return true;
        }
      }
    }

    // If we couldn't find the specific product, try to find any Hurayra Automation product
    console.log(`Could not find or add "${productName}", trying any Hurayra Automation product`);

    // Find all Hurayra Automation product cards
    const hurayraProducts = await this.page.locator('li.product').filter({ hasText: 'Hurayra Automation Product' }).all();

    for (const productCard of hurayraProducts) {
      if (await productCard.isVisible()) {
        // Get the product name
        const productTitle = await productCard.locator('h2').textContent().catch(() => '');

        // Find the Add to Cart button
        const addToCartButton = productCard.locator('a.add_to_cart_button').first();

        if (await addToCartButton.isVisible()) {
          await addToCartButton.scrollIntoViewIfNeeded();
          await addToCartButton.click();

          // Wait for the cart to update
          await this.page.waitForTimeout(2000);

          // Check for success message
          const successMessage = this.page.locator('.woocommerce-message');
          const isSuccess = await successMessage.isVisible().catch(() => false);

          if (isSuccess) {
            console.log(`Successfully added "${productTitle}" to cart instead of "${productName}"`);
            return true;
          }
        }
      }
    }

    // If we still couldn't add any product, try a different approach with direct "Add to cart" links
    console.log(`Still couldn't add any product, trying direct "Add to cart" links`);

    // These are the direct "Add to cart" links that appear in the shop page
    const addToCartLinks = await this.page.getByRole('link', { name: 'Add to cart' }).all();

    for (const link of addToCartLinks) {
      if (await link.isVisible()) {
        // Try to get the product name from nearby elements
        const parentLi = link.locator('xpath=ancestor::li[contains(@class, "product")]');
        const productTitle = await parentLi.locator('h2').textContent().catch(() => 'Unknown product');

        await link.scrollIntoViewIfNeeded();
        await link.click();

        // Wait for the cart to update
        await this.page.waitForTimeout(2000);

        // Check for success message
        const successMessage = this.page.locator('.woocommerce-message');
        const isSuccess = await successMessage.isVisible().catch(() => false);

        if (isSuccess) {
          console.log(`Successfully added "${productTitle}" to cart using direct link`);
          return true;
        }
      }
    }

    console.log(`Failed to add any product to cart after trying all methods`);
    return false;
  }

  /**
   * Scroll to Style 1 section
   */
  async scrollToStyle1() {
    await this.style1Heading.scrollIntoViewIfNeeded();
  }

  /**
   * Scroll to Style 2 section
   */
  async scrollToStyle2() {
    await this.style2Heading.scrollIntoViewIfNeeded();
  }

  /**
   * Check if Style 1 section is visible
   * @returns {Promise<boolean>}
   */
  async isStyle1Visible() {
    return await this.style1Heading.isVisible();
  }

  /**
   * Check if Style 2 section is visible
   * @returns {Promise<boolean>}
   */
  async isStyle2Visible() {
    return await this.style2Heading.isVisible();
  }

  /**
   * Check if cart is empty for Style 1
   * @returns {Promise<boolean>}
   */
  async isStyle1CartEmpty() {
    try {
      // First check for the empty cart message
      const hasEmptyMessage = await this.style1EmptyElements.emptyCartMessage.isVisible().catch(() => false);
      if (hasEmptyMessage) {
        return true;
      }

      // Also check if the wrapper has the empty class
      const wrapperClasses = await this.style1CartWrapper.evaluate(el => el.className).catch(() => '');
      return wrapperClasses.includes('eael-woo-cart-empty');
    } catch (error) {
      console.log('Error checking if Style 1 cart is empty:', error.message);
      // If we can't determine, assume it's not empty to be safe
      return false;
    }
  }

  /**
   * Check if cart is empty for Style 2
   * @returns {Promise<boolean>}
   */
  async isStyle2CartEmpty() {
    try {
      // First check for the empty cart message
      const hasEmptyMessage = await this.style2EmptyElements.emptyCartMessage.isVisible().catch(() => false);
      if (hasEmptyMessage) {
        return true;
      }

      // Also check if the wrapper has the empty class
      const wrapperClasses = await this.style2CartWrapper.evaluate(el => el.className).catch(() => '');
      return wrapperClasses.includes('eael-woo-cart-empty');
    } catch (error) {
      console.log('Error checking if Style 2 cart is empty:', error.message);
      // If we can't determine, assume it's not empty to be safe
      return false;
    }
  }

  /**
   * Check if Style 1 elements are visible
   * @returns {Promise<Object>} Object with visibility status of each element
   */
  async getStyle1ElementsVisibility() {
    const isEmpty = await this.isStyle1CartEmpty();

    if (isEmpty) {
      return {
        emptyCartMessage: await this.style1EmptyElements.emptyCartMessage.isVisible(),
        returnToShopLink: await this.style1EmptyElements.returnToShopLink.isVisible()
      };
    } else {
      return {
        // Table
        table: await this.style1Elements.table.isVisible(),

        // Product rows
        productRows: await this.style1Elements.productRows.first().isVisible(),
        removeItemLinks: await this.style1Elements.removeItemLinks.first().isVisible(),
        productLinks: await this.style1Elements.productLinks.first().isVisible(),
        quantityInputs: await this.style1Elements.quantityInputs.first().isVisible(),

        // Cart actions
        couponLabel: await this.style1Elements.couponLabel.isVisible(),
        couponInput: await this.style1Elements.couponInput.isVisible(),
        applyCouponButton: await this.style1Elements.applyCouponButton.isVisible(),
        continueShoppingLink: await this.style1Elements.continueShoppingLink.isVisible(),
        updateCartButton: await this.style1Elements.updateCartButton.isVisible(),

        // Cart totals
        subtotalRow: await this.style1Elements.subtotalRow.isVisible(),
        totalRow: await this.style1Elements.totalRow.isVisible(),
        proceedToCheckoutLink: await this.style1Elements.proceedToCheckoutLink.isVisible()
      };
    }
  }

  /**
   * Check if Style 2 elements are visible
   * @returns {Promise<Object>} Object with visibility status of each element
   */
  async getStyle2ElementsVisibility() {
    const isEmpty = await this.isStyle2CartEmpty();

    if (isEmpty) {
      return {
        emptyCartMessage: await this.style2EmptyElements.emptyCartMessage.isVisible(),
        returnToShopLink: await this.style2EmptyElements.returnToShopLink.isVisible()
      };
    } else {
      return {
        // Headers
        headerText: await this.style2Elements.headerText.isVisible(),

        // Product details
        productImages: await this.style2Elements.productImages.first().isVisible(),
        productLinks: await this.style2Elements.productLinks.first().isVisible(),
        productSKUs: await this.style2Elements.productSKUs.first().isVisible(),
        quantityInputs: await this.style2Elements.quantityInputs.first().isVisible(),
        removeItemLinks: await this.style2Elements.removeItemLinks.first().isVisible(),

        // Cart actions
        couponLabel: await this.style2Elements.couponLabel.isVisible(),
        couponInput: await this.style2Elements.couponInput.isVisible(),
        applyCouponButton: await this.style2Elements.applyCouponButton.isVisible(),
        continueShoppingLink: await this.style2Elements.continueShoppingLink.isVisible(),
        updateCartButton: await this.style2Elements.updateCartButton.isVisible(),

        // Cart totals
        subtotalText: await this.style2Elements.subtotalText.isVisible(),
        totalText: await this.style2Elements.totalText.isVisible(),
        proceedToCheckoutLink: await this.style2Elements.proceedToCheckoutLink.isVisible()
      };
    }
  }

  /**
   * Get computed CSS styles for Style 1 cart wrapper
   * @returns {Promise<Object>} Object with computed CSS styles
   */
  async getStyle1ComputedStyles() {
    return {
      display: await this.style1CartWrapper.evaluate(el => window.getComputedStyle(el).display),
      position: await this.style1CartWrapper.evaluate(el => window.getComputedStyle(el).position),
      width: await this.style1CartWrapper.evaluate(el => window.getComputedStyle(el).width),
      margin: await this.style1CartWrapper.evaluate(el => window.getComputedStyle(el).margin),
      padding: await this.style1CartWrapper.evaluate(el => window.getComputedStyle(el).padding),
      backgroundColor: await this.style1CartWrapper.evaluate(el => window.getComputedStyle(el).backgroundColor),
      borderRadius: await this.style1CartWrapper.evaluate(el => window.getComputedStyle(el).borderRadius),
      boxShadow: await this.style1CartWrapper.evaluate(el => window.getComputedStyle(el).boxShadow)
    };
  }

  /**
   * Get computed CSS styles for Style 1 table
   * @returns {Promise<Object>} Object with computed CSS styles
   */
  async getStyle1TableStyles() {
    const table = this.style1Elements.table;
    return {
      display: await table.evaluate(el => window.getComputedStyle(el).display),
      width: await table.evaluate(el => window.getComputedStyle(el).width),
      borderCollapse: await table.evaluate(el => window.getComputedStyle(el).borderCollapse),
      margin: await table.evaluate(el => window.getComputedStyle(el).margin),
      textAlign: await table.evaluate(el => window.getComputedStyle(el).textAlign)
    };
  }

  /**
   * Get computed CSS styles for Style 2 cart wrapper
   * @returns {Promise<Object>} Object with computed CSS styles
   */
  async getStyle2ComputedStyles() {
    return {
      display: await this.style2CartWrapper.evaluate(el => window.getComputedStyle(el).display),
      position: await this.style2CartWrapper.evaluate(el => window.getComputedStyle(el).position),
      width: await this.style2CartWrapper.evaluate(el => window.getComputedStyle(el).width),
      margin: await this.style2CartWrapper.evaluate(el => window.getComputedStyle(el).margin),
      padding: await this.style2CartWrapper.evaluate(el => window.getComputedStyle(el).padding),
      backgroundColor: await this.style2CartWrapper.evaluate(el => window.getComputedStyle(el).backgroundColor),
      borderRadius: await this.style2CartWrapper.evaluate(el => window.getComputedStyle(el).borderRadius),
      boxShadow: await this.style2CartWrapper.evaluate(el => window.getComputedStyle(el).boxShadow)
    };
  }

  /**
   * Get computed CSS styles for Style 2 header text
   * @returns {Promise<Object>} Object with computed CSS styles
   */
  async getStyle2HeaderStyles() {
    const headerText = this.style2Elements.headerText;
    return {
      display: await headerText.evaluate(el => window.getComputedStyle(el).display),
      fontWeight: await headerText.evaluate(el => window.getComputedStyle(el).fontWeight),
      fontSize: await headerText.evaluate(el => window.getComputedStyle(el).fontSize),
      color: await headerText.evaluate(el => window.getComputedStyle(el).color),
      textAlign: await headerText.evaluate(el => window.getComputedStyle(el).textAlign)
    };
  }

  /**
   * Check if Style 1 cart wrapper has the required CSS classes
   * @returns {Promise<boolean>}
   */
  async hasStyle1RequiredClasses() {
    const classNames = await this.style1CartWrapper.evaluate(el => el.className);
    return classNames.includes('eael-woo-cart-wrapper') &&
           classNames.includes('eael-woo-default') &&
           classNames.includes('eael-auto-update');
  }

  /**
   * Check if Style 2 cart wrapper has the required CSS classes
   * @returns {Promise<boolean>}
   */
  async hasStyle2RequiredClasses() {
    const classNames = await this.style2CartWrapper.evaluate(el => el.className);
    return classNames.includes('eael-woo-cart-wrapper') &&
           classNames.includes('eael-woo-style-2') &&
           classNames.includes('eael-auto-update') &&
           classNames.includes('has-table-left-content') &&
           classNames.includes('has-table-right-content');
  }

  /**
   * Capture all computed styles for both Style 1 and Style 2
   * @returns {Promise<Object>} Object with all computed styles
   */
  async captureAllStyles() {
    // Navigate to the cart page
    await this.goto();
    await this.page.waitForLoadState('networkidle');

    // Check if cart is empty
    const style1CartEmpty = await this.isStyle1CartEmpty();
    const style2CartEmpty = await this.isStyle2CartEmpty();

    // Get wrapper class names
    const style1Classes = await this.style1CartWrapper.evaluate(el => el.className);
    const style2Classes = await this.style2CartWrapper.evaluate(el => el.className);

    // Initialize the styles object
    const allStyles = {
      cartState: {
        style1Empty: style1CartEmpty,
        style2Empty: style2CartEmpty
      },
      wrapperClasses: {
        style1: style1Classes,
        style2: style2Classes
      },
      style1: {
        wrapper: {}
      },
      style2: {
        wrapper: {}
      }
    };

    // Scroll to Style 1 section
    await this.scrollToStyle1();

    // Capture Style 1 wrapper styles
    allStyles.style1.wrapper = await captureComputedStyles(this.style1CartWrapper, [
      'display', 'position', 'width', 'margin', 'padding', 'backgroundColor',
      'borderRadius', 'boxShadow', 'fontFamily', 'fontSize', 'color'
    ]);

    // Capture Style 1 elements based on cart state
    if (!style1CartEmpty) {
      // Capture table styles
      const style1Table = this.style1Elements.table;
      if (await style1Table.count() > 0) {
        allStyles.style1.table = await captureComputedStyles(style1Table, [
          'display', 'width', 'borderCollapse', 'margin', 'textAlign'
        ]);

        // Capture table header styles
        const style1TableHeader = style1Table.locator('thead tr').first();
        if (await style1TableHeader.count() > 0) {
          allStyles.style1.tableHeader = await captureComputedStyles(style1TableHeader, [
            'backgroundColor', 'color', 'fontWeight', 'fontSize', 'textAlign'
          ]);
        }

        // Capture table row styles
        const style1TableRow = style1Table.locator('tbody tr').first();
        if (await style1TableRow.count() > 0) {
          allStyles.style1.tableRow = await captureComputedStyles(style1TableRow, [
            'borderBottom', 'padding', 'verticalAlign'
          ]);
        }

        // Capture product image styles
        const style1ProductImage = style1Table.locator('img').first();
        if (await style1ProductImage.count() > 0) {
          allStyles.style1.productImage = await captureComputedStyles(style1ProductImage, [
            'width', 'height', 'maxWidth', 'borderRadius'
          ]);
        }
      }
    } else {
      // Capture empty cart message styles
      const emptyMessage = this.style1EmptyElements.emptyCartMessage;
      if (await emptyMessage.count() > 0) {
        allStyles.style1.emptyMessage = await captureComputedStyles(emptyMessage, [
          'color', 'fontSize', 'fontWeight', 'textAlign', 'padding', 'margin'
        ]);
      }
    }

    // Capture button styles (works for both empty and non-empty carts)
    const style1Button = this.style1CartWrapper.locator('button, a.button').first();
    if (await style1Button.count() > 0) {
      allStyles.style1.button = await captureComputedStyles(style1Button, [
        'backgroundColor', 'color', 'padding', 'borderRadius', 'fontSize', 'fontWeight'
      ]);
    }

    // Scroll to Style 2 section
    await this.scrollToStyle2();

    // Capture Style 2 wrapper styles
    allStyles.style2.wrapper = await captureComputedStyles(this.style2CartWrapper, [
      'display', 'position', 'width', 'margin', 'padding', 'backgroundColor',
      'borderRadius', 'boxShadow', 'fontFamily', 'fontSize', 'color'
    ]);

    // Capture Style 2 elements based on cart state
    if (!style2CartEmpty) {
      // Try to capture header text styles
      if (this.style2Elements.headerText && await this.style2Elements.headerText.count() > 0) {
        allStyles.style2.headerText = await captureComputedStyles(this.style2Elements.headerText, [
          'display', 'fontWeight', 'fontSize', 'color', 'textAlign'
        ]);
      }

      // Try to capture product styles
      const style2ProductImage = this.style2Elements.productImages.first();
      if (await style2ProductImage.count() > 0) {
        allStyles.style2.productImage = await captureComputedStyles(style2ProductImage, [
          'width', 'height', 'maxWidth', 'borderRadius'
        ]);
      }
    } else {
      // Capture empty cart message styles
      const emptyMessage = this.style2EmptyElements.emptyCartMessage;
      if (await emptyMessage.count() > 0) {
        allStyles.style2.emptyMessage = await captureComputedStyles(emptyMessage, [
          'color', 'fontSize', 'fontWeight', 'textAlign', 'padding', 'margin'
        ]);
      }
    }

    // Capture button styles (works for both empty and non-empty carts)
    const style2Button = this.style2CartWrapper.locator('button, a.button').first();
    if (await style2Button.count() > 0) {
      allStyles.style2.button = await captureComputedStyles(style2Button, [
        'backgroundColor', 'color', 'padding', 'borderRadius', 'fontSize', 'fontWeight'
      ]);
    }

    return allStyles;
  }
}

export default WooCartPage;
