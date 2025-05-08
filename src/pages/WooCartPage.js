/**
 * Page Object Model for WooCommerce Cart page
 * URL: https://eael.wpqa.site/woocommerce-elements/woo-cart/
 */

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
    this.style1CartWrapper = this.style1Section.locator('.eael-woo-cart-wrapper.eael-woo-default.eael-auto-update');

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
      emptyCartMessage: this.style1Section.getByText('Your cart is currently empty.'),
      returnToShopLink: this.style1Section.getByRole('link', { name: 'Return to shop' })
    };

    // Style 2 Locators
    this.style2Heading = this.page.getByRole('heading', { name: 'Style 2', exact: true });
    this.style2Section = this.page.locator('article').filter({ hasText: 'Style 2' }).first();
    this.style2CartWrapper = this.style2Section.locator('.eael-woo-cart-wrapper.eael-woo-style-2.eael-auto-update.has-table-left-content.has-table-right-content');

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
      emptyCartMessage: this.style2Section.getByText('Your cart is currently empty.'),
      returnToShopLink: this.style2Section.getByRole('link', { name: 'Return to shop' })
    };
  }

  /**
   * Navigate to the WooCommerce Cart page
   */
  async goto() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Login as a customer using credentials from .env file
   */
  async login() {
    // Go to login page
    await this.page.goto('/my-account/');
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
   */
  async clearCart() {
    await this.goto();

    // Check if cart is empty
    const isEmpty = await this.isStyle1CartEmpty();
    if (!isEmpty) {
      // Find and click all remove item links
      const removeLinks = await this.page.getByRole('link', { name: 'Remove this item' }).all();
      for (const link of removeLinks) {
        await link.click();
        await this.page.waitForTimeout(1000); // Wait for cart to update
      }
    }
  }

  /**
   * Add a product to the cart from the shop page
   * @param {string} productName - The name of the product to add
   */
  async addProductToCart(productName) {
    // Navigate to the shop page
    await this.page.goto('/shop/');
    await this.page.waitForLoadState('networkidle');

    // Find and click the Add to Cart button for the specified product
    const addToCartButton = this.page.getByRole('link', { name: `Add to cart: "${productName}"` }).first();

    if (await addToCartButton.isVisible()) {
      await addToCartButton.scrollIntoViewIfNeeded();
      await addToCartButton.click();

      // Wait for the cart to update
      await this.page.waitForTimeout(1000);
    } else {
      // Try to find any Hurayra Automation product if the specific one is not found
      const anyAddToCartButton = this.page.getByRole('link', { name: /Add to cart: "Hurayra Automation Product/ }).first();
      if (await anyAddToCartButton.isVisible()) {
        await anyAddToCartButton.scrollIntoViewIfNeeded();
        await anyAddToCartButton.click();

        // Wait for the cart to update
        await this.page.waitForTimeout(1000);
      }
    }
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
      return await this.style1EmptyElements.emptyCartMessage.isVisible();
    } catch (error) {
      return false;
    }
  }

  /**
   * Check if cart is empty for Style 2
   * @returns {Promise<boolean>}
   */
  async isStyle2CartEmpty() {
    try {
      return await this.style2EmptyElements.emptyCartMessage.isVisible();
    } catch (error) {
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
}

export default WooCartPage;
