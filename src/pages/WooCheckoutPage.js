/**
 * Page Object Model for WooCommerce Checkout page
 * URL: https://eael.wpqa.site/woocommerce-elements/woo-checkout/
 */

class WooCheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = '/woocommerce-elements/woo-checkout/';

    // Default Layout Locators
    this.defaultLayoutHeading = this.page.getByRole('heading', { name: 'Layout: Default', exact: true });
    this.defaultLayoutSection = this.page.locator('article').filter({ hasText: 'Layout: Default' });
    this.defaultLayoutWrapper = this.defaultLayoutSection.locator('.eael-woo-checkout');

    // Default Layout Elements
    this.defaultLayoutElements = {
      // Checkout Form
      billingDetailsHeading: this.defaultLayoutSection.getByRole('heading', { name: 'Billing Details' }),
      firstNameInput: this.defaultLayoutSection.locator('#billing_first_name'),
      lastNameInput: this.defaultLayoutSection.locator('#billing_last_name'),
      companyInput: this.defaultLayoutSection.locator('#billing_company'),
      countrySelect: this.defaultLayoutSection.locator('#billing_country'),
      addressInput: this.defaultLayoutSection.locator('#billing_address_1'),
      address2Input: this.defaultLayoutSection.locator('#billing_address_2'),
      cityInput: this.defaultLayoutSection.locator('#billing_city'),
      stateSelect: this.defaultLayoutSection.locator('#billing_state'),
      postcodeInput: this.defaultLayoutSection.locator('#billing_postcode'),
      phoneInput: this.defaultLayoutSection.locator('#billing_phone'),
      emailInput: this.defaultLayoutSection.locator('#billing_email'),

      // Order Summary
      orderSummaryHeading: this.defaultLayoutSection.getByRole('heading', { name: 'Your order' }),
      productItems: this.defaultLayoutSection.locator('.woocommerce-checkout-review-order-table .cart_item'),
      subtotalRow: this.defaultLayoutSection.getByText('Subtotal'),
      totalRow: this.defaultLayoutSection.getByText('Total'),

      // Payment Methods
      paymentMethodsHeading: this.defaultLayoutSection.getByRole('heading', { name: 'Payment methods' }),
      cashOnDeliveryOption: this.defaultLayoutSection.locator('#payment_method_cod'),
      placeOrderButton: this.defaultLayoutSection.getByRole('button', { name: 'Place order' })
    };

    // Multi Steps Layout Locators
    this.multiStepsLayoutHeading = this.page.getByRole('heading', { name: 'Layout: Multi Steps', exact: true });
    this.multiStepsLayoutSection = this.page.locator('article').filter({ hasText: 'Layout: Multi Steps' });
    this.multiStepsLayoutWrapper = this.multiStepsLayoutSection.locator('.eael-woo-checkout.layout-multi-steps');

    // Multi Steps Layout Elements
    this.multiStepsLayoutElements = {
      // Steps Navigation
      couponStep: this.multiStepsLayoutSection.locator('.ms-tab').filter({ hasText: 'Coupon' }).first(),
      billingShippingStep: this.multiStepsLayoutSection.locator('.ms-tab').filter({ hasText: 'Billing & Shipping' }).first(),
      paymentStep: this.multiStepsLayoutSection.locator('.ms-tab').filter({ hasText: 'Payment' }).first(),

      // Step Content
      stepContent: this.multiStepsLayoutSection.locator('.step-content'),

      // Order Summary
      orderSummaryHeading: this.multiStepsLayoutSection.getByRole('heading', { name: 'Your Order' }),
      productItems: this.multiStepsLayoutSection.locator('.product-name'),

      // Navigation Buttons
      nextButton: this.multiStepsLayoutSection.getByRole('button', { name: 'Next' }),

      // Continue Shopping
      continueShoppingLink: this.multiStepsLayoutSection.getByRole('link', { name: ' Continue Shopping' }),

      // Coupon
      couponLink: this.multiStepsLayoutSection.getByRole('link', { name: 'Click here to enter your code' })
    };

    // Split Layout Locators
    this.splitLayoutHeading = this.page.getByRole('heading', { name: 'Layout: Split', exact: true });
    this.splitLayoutSection = this.page.locator('article').filter({ hasText: 'Layout: Split' });
    this.splitLayoutWrapper = this.splitLayoutSection.locator('.eael-woo-checkout.layout-split');

    // Split Layout Elements
    this.splitLayoutElements = {
      // Steps Navigation
      couponStep: this.splitLayoutSection.locator('.split-tab').filter({ hasText: 'Coupon' }).first(),
      billingShippingStep: this.splitLayoutSection.locator('.split-tab').filter({ hasText: 'Billing & Shipping' }).first(),
      paymentStep: this.splitLayoutSection.locator('.split-tab').filter({ hasText: 'Payment' }).first(),

      // Order Summary
      orderSummaryHeading: this.splitLayoutSection.getByRole('heading', { name: 'Your Order' }),
      productItems: this.splitLayoutSection.locator('.product-name'),

      // Left Column (Customer Info)
      leftColumn: this.splitLayoutSection.locator('.split-left'),

      // Right Column (Order Summary)
      rightColumn: this.splitLayoutSection.locator('.split-right'),

      // Navigation Buttons
      nextButton: this.splitLayoutSection.getByRole('button', { name: 'Next' }),

      // Continue Shopping
      continueShoppingLink: this.splitLayoutSection.getByRole('link', { name: ' Continue Shopping' }),

      // Coupon
      couponLink: this.splitLayoutSection.getByRole('link', { name: 'Click here to enter your code' })
    };
  }

  /**
   * Navigate to the WooCommerce Checkout page
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
   * Scroll to Default Layout section
   */
  async scrollToDefaultLayout() {
    await this.defaultLayoutHeading.scrollIntoViewIfNeeded();
  }

  /**
   * Scroll to Multi Steps Layout section
   */
  async scrollToMultiStepsLayout() {
    await this.multiStepsLayoutHeading.scrollIntoViewIfNeeded();
  }

  /**
   * Scroll to Split Layout section
   */
  async scrollToSplitLayout() {
    await this.splitLayoutHeading.scrollIntoViewIfNeeded();
  }

  /**
   * Check if Default Layout section is visible
   * @returns {Promise<boolean>}
   */
  async isDefaultLayoutVisible() {
    return await this.defaultLayoutHeading.isVisible();
  }

  /**
   * Check if Multi Steps Layout section is visible
   * @returns {Promise<boolean>}
   */
  async isMultiStepsLayoutVisible() {
    return await this.multiStepsLayoutHeading.isVisible();
  }

  /**
   * Check if Split Layout section is visible
   * @returns {Promise<boolean>}
   */
  async isSplitLayoutVisible() {
    return await this.splitLayoutHeading.isVisible();
  }

  /**
   * Check if Default Layout elements are visible
   * @returns {Promise<Object>} Object with visibility status of each element
   */
  async getDefaultLayoutElementsVisibility() {
    return {
      // Checkout Form
      billingDetailsHeading: await this.defaultLayoutElements.billingDetailsHeading.isVisible(),
      firstNameInput: await this.defaultLayoutElements.firstNameInput.isVisible(),
      lastNameInput: await this.defaultLayoutElements.lastNameInput.isVisible(),
      companyInput: await this.defaultLayoutElements.companyInput.isVisible(),
      countrySelect: await this.defaultLayoutElements.countrySelect.isVisible(),
      addressInput: await this.defaultLayoutElements.addressInput.isVisible(),
      cityInput: await this.defaultLayoutElements.cityInput.isVisible(),
      postcodeInput: await this.defaultLayoutElements.postcodeInput.isVisible(),
      phoneInput: await this.defaultLayoutElements.phoneInput.isVisible(),
      emailInput: await this.defaultLayoutElements.emailInput.isVisible(),

      // Order Summary
      orderSummaryHeading: await this.defaultLayoutElements.orderSummaryHeading.isVisible(),

      // Payment Methods
      paymentMethodsHeading: await this.defaultLayoutElements.paymentMethodsHeading.isVisible(),
      placeOrderButton: await this.defaultLayoutElements.placeOrderButton.isVisible()
    };
  }

  /**
   * Check if Multi Steps Layout elements are visible
   * @returns {Promise<Object>} Object with visibility status of each element
   */
  async getMultiStepsLayoutElementsVisibility() {
    return {
      // Steps Navigation
      couponStep: await this.multiStepsLayoutElements.couponStep.isVisible(),
      billingShippingStep: await this.multiStepsLayoutElements.billingShippingStep.isVisible(),
      paymentStep: await this.multiStepsLayoutElements.paymentStep.isVisible(),

      // Step Content
      stepContent: await this.multiStepsLayoutElements.stepContent.isVisible(),

      // Order Summary
      orderSummaryHeading: await this.multiStepsLayoutElements.orderSummaryHeading.isVisible(),

      // Navigation Buttons
      nextButton: await this.multiStepsLayoutElements.nextButton.isVisible().catch(() => false),

      // Continue Shopping
      continueShoppingLink: await this.multiStepsLayoutElements.continueShoppingLink.isVisible().catch(() => false),

      // Coupon
      couponLink: await this.multiStepsLayoutElements.couponLink.isVisible().catch(() => false)
    };
  }

  /**
   * Check if Split Layout elements are visible
   * @returns {Promise<Object>} Object with visibility status of each element
   */
  async getSplitLayoutElementsVisibility() {
    return {
      // Steps Navigation
      couponStep: await this.splitLayoutElements.couponStep.isVisible(),
      billingShippingStep: await this.splitLayoutElements.billingShippingStep.isVisible(),
      paymentStep: await this.splitLayoutElements.paymentStep.isVisible(),

      // Order Summary
      orderSummaryHeading: await this.splitLayoutElements.orderSummaryHeading.isVisible(),

      // Left/Right Columns
      leftColumn: await this.splitLayoutElements.leftColumn.isVisible().catch(() => false),
      rightColumn: await this.splitLayoutElements.rightColumn.isVisible().catch(() => false),

      // Navigation Buttons
      nextButton: await this.splitLayoutElements.nextButton.isVisible().catch(() => false),

      // Continue Shopping
      continueShoppingLink: await this.splitLayoutElements.continueShoppingLink.isVisible().catch(() => false),

      // Coupon
      couponLink: await this.splitLayoutElements.couponLink.isVisible().catch(() => false)
    };
  }
}

export default WooCheckoutPage;
