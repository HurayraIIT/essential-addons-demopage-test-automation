/**
 * Page Object Model for WooCommerce Thank You page
 * URL: https://eael.wpqa.site/woocommerce-elements/woo-thank-you/
 */

class WooThankYouPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = '/woocommerce-elements/woo-thank-you/';

    // Preset 1 Locators
    this.preset1Heading = this.page.getByRole('heading', { name: 'Hurayra Automation Woo Thank You Preset 01', exact: true });
    this.preset1Widget = this.page.getByTestId('17f63d8');
    this.preset1Elements = {
      thankYouMessage: this.preset1Widget.getByText(/Thank you\. Your order has been received\./, { exact: false }),
      orderList: this.preset1Widget.locator('ul.woocommerce-order-overview').first(),
      orderNumber: this.preset1Widget.getByText(/Order number/, { exact: false }).first(),
      orderDate: this.preset1Widget.getByText(/Date/, { exact: false }).first(),
      orderTotal: this.preset1Widget.getByRole('list').getByText(/Total/, { exact: false }).first(),
      paymentMethod: this.preset1Widget.getByText(/Payment Method/, { exact: false }).first(),
      paymentInstructions: this.preset1Widget.getByText('Pay with cash upon delivery.', { exact: false }),
      orderDetailsHeading: this.preset1Widget.getByRole('heading', { name: /Order Details/, exact: false }).first(),
      billingAddressHeading: this.preset1Widget.getByRole('heading', { name: /Billing Address/, exact: false }).first(),
      shippingAddressHeading: this.preset1Widget.getByRole('heading', { name: /Shipping Address/, exact: false }).first(),
      productTable: this.preset1Widget.locator('table.shop_table').first(),
      orderSummaryTable: this.preset1Widget.locator('table.shop_table').last()
    };

    // Preset 2 Locators
    this.preset2Heading = this.page.getByRole('heading', { name: 'Hurayra Automation Woo Thank You Preset 02', exact: true });
    this.preset2Widget = this.page.getByTestId('8542733');
    this.preset2Elements = {
      helloMessage: this.preset2Widget.getByText(/Hello/, { exact: false }).first(),
      thankYouMessage: this.preset2Widget.getByText(/Thank you\. Your order has been received\./, { exact: false }).first(),
      orderDetailsHeading: this.preset2Widget.getByRole('heading', { name: /Order Details/, exact: false }).first(),
      orderList: this.preset2Widget.locator('ul.woocommerce-order-overview').first(),
      orderNumber: this.preset2Widget.getByText(/Order number/, { exact: false }).first(),
      orderDate: this.preset2Widget.getByText(/Date/, { exact: false }).first(),
      orderTotal: this.preset2Widget.getByRole('list').getByText(/Total/, { exact: false }).first(),
      paymentMethod: this.preset2Widget.getByText(/Payment Method/, { exact: false }).first(),
      paymentInstructions: this.preset2Widget.getByText('Pay with cash upon delivery.', { exact: false }).first(),
      productTable: this.preset2Widget.locator('table.shop_table').first(),
      billingAddressHeading: this.preset2Widget.getByRole('heading', { name: /Billing Address/, exact: false }).first(),
      shippingAddressHeading: this.preset2Widget.getByRole('heading', { name: /Shipping Address/, exact: false }).first(),
      orderSummaryTable: this.preset2Widget.locator('table.shop_table').last()
    };

    // Preset 3 Locators
    this.preset3Heading = this.page.getByRole('heading', { name: 'Hurayra Automation Woo Thank You Preset 03', exact: true });
    this.preset3Widget = this.page.getByTestId('1087283');
    this.preset3Elements = {
      thankYouTitle: this.preset3Widget.getByText(/Thank you 03 !/, { exact: false }).first(),
      thankYouMessage: this.preset3Widget.getByText(/Thank you\. Your order has been received\. 03/, { exact: false }).first(),
      orderOverviewHeading: this.preset3Widget.getByRole('heading', { name: /Order Overview 03:/, exact: false }).first(),
      orderList: this.preset3Widget.locator('ul.woocommerce-order-overview').first(),
      orderNumber: this.preset3Widget.getByText(/Order number/, { exact: false }).first(),
      orderDate: this.preset3Widget.getByText(/Date/, { exact: false }).first(),
      orderTotal: this.preset3Widget.getByRole('list').getByText(/Total/, { exact: false }).first(),
      paymentMethod: this.preset3Widget.getByText(/Payment Method/, { exact: false }).first(),
      paymentInstructions: this.preset3Widget.getByText('Pay with cash upon delivery.', { exact: false }).first(),
      billingAddressHeading: this.preset3Widget.getByRole('heading', { name: /Billing Address/, exact: false }).first(),
      shippingAddressHeading: this.preset3Widget.getByRole('heading', { name: /Shipping Address/, exact: false }).first(),
      productTable: this.preset3Widget.locator('table.shop_table').first(),
      orderSummaryTable: this.preset3Widget.locator('table.shop_table').last()
    };
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
   * Add products to cart and place an order
   */
  async addProductsToCartAndPlaceOrder() {
    // Navigate to the shop page
    await this.page.goto('/shop/');
    await this.page.waitForLoadState('networkidle');

    // Add first product to cart
    const addToCartButton1 = this.page.getByRole('link', { name: /Add to cart/ }).first();
    await addToCartButton1.scrollIntoViewIfNeeded();
    await addToCartButton1.click();
    await this.page.waitForTimeout(1000);

    // Add second product to cart
    const addToCartButton2 = this.page.getByRole('link', { name: /Add to cart/ }).nth(1);
    await addToCartButton2.scrollIntoViewIfNeeded();
    await addToCartButton2.click();
    await this.page.waitForTimeout(1000);

    // Go to cart
    await this.page.goto('/cart/');
    await this.page.waitForLoadState('networkidle');

    // Proceed to checkout
    await this.page.getByRole('link', { name: 'Proceed to checkout' }).click();
    await this.page.waitForLoadState('networkidle');

    // Fill billing details if needed
    const placeOrderButton = this.page.getByRole('button', { name: 'Place order' });
    await placeOrderButton.scrollIntoViewIfNeeded();
    await placeOrderButton.click();

    // Wait for order to be processed
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Navigate to the thank you page with the given order ID and key
   * @param {string} orderId - The order ID
   * @param {string} orderKey - The order key
   */
  async gotoThankYouPage(orderId, orderKey) {
    await this.page.goto(`/woocommerce-elements/woo-thank-you/order-received/${orderId}/?key=wc_order_${orderKey}`);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Scroll to Preset 1 section
   */
  async scrollToPreset1() {
    await this.preset1Heading.scrollIntoViewIfNeeded();
    await this.preset1Heading.click();
  }

  /**
   * Scroll to Preset 2 section
   */
  async scrollToPreset2() {
    await this.preset2Heading.scrollIntoViewIfNeeded();
    await this.preset2Heading.click();
  }

  /**
   * Scroll to Preset 3 section
   */
  async scrollToPreset3() {
    await this.preset3Heading.scrollIntoViewIfNeeded();
    await this.preset3Heading.click();
  }
}

export default WooThankYouPage;
