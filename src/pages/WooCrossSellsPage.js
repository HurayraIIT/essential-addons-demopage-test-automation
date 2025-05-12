/**
 * Page Object Model for WooCommerce Cross Sells page
 * URL: https://eael.wpqa.site/woocommerce-elements/woo-cross-sells/
 */

class WooCrossSellsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = '/woocommerce-elements/woo-cross-sells/';

    // Style One Locators
    this.styleOneHeading = this.page.getByRole('heading', { name: /Hurayra Automation .* Style One/ });
    this.styleOneSection = this.page.locator('section').filter({ hasText: 'Style One' }).first();
    this.styleOneWrapper = this.styleOneSection;
    this.styleOneSubHeading = this.page.getByRole('heading', { name: 'You may be interested in… FONE' });

    // Style One Elements
    this.styleOneElements = {
      // Products
      products: this.page.locator('.eael-woo-cross-sells-wrap.preset-1 .eael-cs-product'),
      productImages: this.page.locator('.eael-woo-cross-sells-wrap.preset-1 .eael-cs-product img'),
      productTitles: this.page.locator('.eael-woo-cross-sells-wrap.preset-1 .eael-cs-product .eael-cs-product-title'),
      productPrices: this.page.locator('.eael-woo-cross-sells-wrap.preset-1 .eael-cs-product .eael-cs-product-price'),
      viewProductButtons: this.page.getByRole('link', { name: / View Product FONE/ }),
      addToCartButtons: this.page.getByRole('link', { name: / Add to Cart FONE/ })
    };

    // Style Two Locators
    this.styleTwoHeading = this.page.getByRole('heading', { name: /Hurayra Automation .* Style Two/ });
    this.styleTwoSection = this.page.locator('section').filter({ hasText: 'Style Two' }).first();
    this.styleTwoWrapper = this.styleTwoSection;
    this.styleTwoSubHeading = this.page.getByRole('heading', { name: 'You may be interested in… FTWO' });

    // Style Two Elements
    this.styleTwoElements = {
      // Products
      products: this.page.locator('.eael-woo-cross-sells-wrap.preset-2 .eael-cs-product'),
      productImages: this.page.locator('.eael-woo-cross-sells-wrap.preset-2 .eael-cs-product img'),
      productTitles: this.page.locator('.eael-woo-cross-sells-wrap.preset-2 .eael-cs-product .eael-cs-product-title'),
      productPrices: this.page.locator('.eael-woo-cross-sells-wrap.preset-2 .eael-cs-product .eael-cs-product-price'),
      viewProductLinks: this.page.locator('.eael-woo-cross-sells-wrap.preset-2 .eael-cs-product .eael-cs-product-image a').first(),
      addToCartLinks: this.page.locator('.eael-woo-cross-sells-wrap.preset-2 .eael-cs-product .add_to_cart_button')
    };

    // Style Three Locators
    this.styleThreeHeading = this.page.getByRole('heading', { name: /Hurayra Automation .* Style Three/ });
    this.styleThreeSection = this.page.locator('section').filter({ hasText: 'Style Three' }).first();
    this.styleThreeWrapper = this.styleThreeSection;
    this.styleThreeSubHeading = this.page.getByRole('heading', { name: 'You may be interested in… FTHR' });

    // Style Three Elements
    this.styleThreeElements = {
      // Products
      products: this.page.locator('.eael-woo-cross-sells-wrap.preset-3 .eael-cs-product'),
      productImages: this.page.locator('.eael-woo-cross-sells-wrap.preset-3 .eael-cs-product img'),
      productTitles: this.page.locator('.eael-woo-cross-sells-wrap.preset-3 .eael-cs-product .eael-cs-product-title'),
      productPrices: this.page.locator('.eael-woo-cross-sells-wrap.preset-3 .eael-cs-product .eael-cs-product-price'),
      productDescriptions: this.page.locator('.eael-woo-cross-sells-wrap.preset-3 .eael-cs-product .eael-cs-product-description'),
      viewProductButtons: this.page.getByRole('link', { name: / View Product FTHR/ }),
      addToCartButtons: this.page.getByRole('link', { name: / Add to Cart FTHR/ })
    };
  }

  /**
   * Navigate to the WooCommerce Cross Sells page
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
   * Scroll to Style One section
   */
  async scrollToStyleOne() {
    await this.styleOneHeading.scrollIntoViewIfNeeded();
  }

  /**
   * Scroll to Style Two section
   */
  async scrollToStyleTwo() {
    await this.styleTwoHeading.scrollIntoViewIfNeeded();
  }

  /**
   * Scroll to Style Three section
   */
  async scrollToStyleThree() {
    await this.styleThreeHeading.scrollIntoViewIfNeeded();
  }

  /**
   * Check if Style One section is visible
   * @returns {Promise<boolean>}
   */
  async isStyleOneVisible() {
    return await this.styleOneHeading.isVisible();
  }

  /**
   * Check if Style Two section is visible
   * @returns {Promise<boolean>}
   */
  async isStyleTwoVisible() {
    return await this.styleTwoHeading.isVisible();
  }

  /**
   * Check if Style Three section is visible
   * @returns {Promise<boolean>}
   */
  async isStyleThreeVisible() {
    return await this.styleThreeHeading.isVisible();
  }

  /**
   * Check if Style One elements are visible
   * @returns {Promise<Object>} Object with visibility status of each element
   */
  async getStyleOneElementsVisibility() {
    return {
      heading: await this.styleOneHeading.isVisible(),
      subHeading: await this.styleOneSubHeading.isVisible(),
      products: await this.styleOneElements.products.first().isVisible(),
      productImages: await this.styleOneElements.productImages.first().isVisible(),
      productTitles: await this.styleOneElements.productTitles.first().isVisible(),
      productPrices: await this.styleOneElements.productPrices.first().isVisible(),
      viewProductButtons: await this.styleOneElements.viewProductButtons.first().isVisible(),
      addToCartButtons: await this.styleOneElements.addToCartButtons.first().isVisible().catch(() => false)
    };
  }

  /**
   * Check if Style Two elements are visible
   * @returns {Promise<Object>} Object with visibility status of each element
   */
  async getStyleTwoElementsVisibility() {
    return {
      heading: await this.styleTwoHeading.isVisible(),
      subHeading: await this.styleTwoSubHeading.isVisible(),
      products: await this.styleTwoElements.products.first().isVisible(),
      productImages: await this.styleTwoElements.productImages.first().isVisible(),
      productTitles: await this.styleTwoElements.productTitles.first().isVisible(),
      productPrices: await this.styleTwoElements.productPrices.first().isVisible(),
      viewProductLinks: await this.styleTwoElements.viewProductLinks.isVisible().catch(() => false),
      addToCartLinks: await this.styleTwoElements.addToCartLinks.first().isVisible().catch(() => false)
    };
  }

  /**
   * Check if Style Three elements are visible
   * @returns {Promise<Object>} Object with visibility status of each element
   */
  async getStyleThreeElementsVisibility() {
    return {
      heading: await this.styleThreeHeading.isVisible(),
      subHeading: await this.styleThreeSubHeading.isVisible(),
      products: await this.styleThreeElements.products.first().isVisible(),
      productImages: await this.styleThreeElements.productImages.first().isVisible(),
      productTitles: await this.styleThreeElements.productTitles.first().isVisible(),
      productPrices: await this.styleThreeElements.productPrices.first().isVisible(),
      productDescriptions: await this.styleThreeElements.productDescriptions.first().isVisible().catch(() => false),
      viewProductButtons: await this.styleThreeElements.viewProductButtons.first().isVisible(),
      addToCartButtons: await this.styleThreeElements.addToCartButtons.first().isVisible().catch(() => false)
    };
  }
}

export default WooCrossSellsPage;
