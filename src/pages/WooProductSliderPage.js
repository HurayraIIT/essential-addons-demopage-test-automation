class WooProductSliderPage {
  constructor(page) {
    this.page = page;
    
    // Default/Preset 1 Section - data-widget-id="1ba7f0d"
    this.preset1Section = this.page.locator('[data-widget-id="1ba7f0d"]');
    this.preset1Container = this.preset1Section; // The widget itself is the container
    this.preset1Slider = this.preset1Section.locator('.eael-woo-product-slider');
    this.preset1Products = this.preset1Section.locator('.eael-product-slider');
    this.preset1Navigation = {
      prevButton: this.preset1Section.locator('.swiper-button-prev'),
      nextButton: this.preset1Section.locator('.swiper-button-next'),
      pagination: this.preset1Section.locator('.swiper-pagination'),
      dots: this.preset1Section.locator('.swiper-pagination-bullet')
    };
    
    // Preset 2 Section - data-widget-id="1e94c28"
    this.preset2Section = this.page.locator('[data-widget-id="1e94c28"]');
    this.preset2Container = this.preset2Section; // The widget itself is the container
    this.preset2Slider = this.preset2Section.locator('.eael-woo-product-slider');
    this.preset2Products = this.preset2Section.locator('.eael-product-slider');
    this.preset2Navigation = {
      prevButton: this.preset2Section.locator('.swiper-button-prev'),
      nextButton: this.preset2Section.locator('.swiper-button-next'),
      pagination: this.preset2Section.locator('.swiper-pagination'),
      dots: this.preset2Section.locator('.swiper-pagination-bullet')
    };
    
    // Preset 3 Section - data-widget-id="7d4fb79"
    this.preset3Section = this.page.locator('[data-widget-id="7d4fb79"]');
    this.preset3Container = this.preset3Section; // The widget itself is the container
    this.preset3Slider = this.preset3Section.locator('.eael-woo-product-slider');
    this.preset3Products = this.preset3Section.locator('.eael-product-slider');
    this.preset3Navigation = {
      prevButton: this.preset3Section.locator('.swiper-button-prev'),
      nextButton: this.preset3Section.locator('.swiper-button-next'),
      pagination: this.preset3Section.locator('.swiper-pagination'),
      dots: this.preset3Section.locator('.swiper-pagination-bullet')
    };
    
    // Preset 4 Section - data-widget-id="b48271a"
    this.preset4Section = this.page.locator('[data-widget-id="b48271a"]');
    this.preset4Container = this.preset4Section; // The widget itself is the container
    this.preset4Slider = this.preset4Section.locator('.eael-woo-product-slider');
    this.preset4Products = this.preset4Section.locator('.eael-product-slider');
    this.preset4Navigation = {
      prevButton: this.preset4Section.locator('.swiper-button-prev'),
      nextButton: this.preset4Section.locator('.swiper-button-next'),
      pagination: this.preset4Section.locator('.swiper-pagination'),
      dots: this.preset4Section.locator('.swiper-pagination-bullet')
    };
    
    // Hurayra Automation Preset 1 - data-widget-id="f3cb245"
    this.automationPreset1Section = this.page.locator('[data-widget-id="f3cb245"]');
    this.automationPreset1Container = this.automationPreset1Section; // The widget itself is the container
    this.automationPreset1Slider = this.automationPreset1Section.locator('.eael-woo-product-slider');
    this.automationPreset1Products = this.automationPreset1Section.locator('.eael-product-slider');

    // Hurayra Automation Preset 2 - data-widget-id="306d1d1"
    this.automationPreset2Section = this.page.locator('[data-widget-id="306d1d1"]');
    this.automationPreset2Container = this.automationPreset2Section; // The widget itself is the container
    this.automationPreset2Slider = this.automationPreset2Section.locator('.eael-woo-product-slider');
    this.automationPreset2Products = this.automationPreset2Section.locator('.eael-product-slider');

    // Hurayra Automation Preset 3 - data-widget-id="81c14f0"
    this.automationPreset3Section = this.page.locator('[data-widget-id="81c14f0"]');
    this.automationPreset3Container = this.automationPreset3Section; // The widget itself is the container
    this.automationPreset3Slider = this.automationPreset3Section.locator('.eael-woo-product-slider');
    this.automationPreset3Products = this.automationPreset3Section.locator('.eael-product-slider');

    // Hurayra Automation Preset 4 - data-widget-id="62840c6"
    this.automationPreset4Section = this.page.locator('[data-widget-id="62840c6"]');
    this.automationPreset4Container = this.automationPreset4Section; // The widget itself is the container
    this.automationPreset4Slider = this.automationPreset4Section.locator('.eael-woo-product-slider');
    this.automationPreset4Products = this.automationPreset4Section.locator('.eael-product-slider');
    
    // Common product elements for all sliders (based on actual structure)
    this.productElements = {
      title: '.eael-product-title h2', // Actual structure uses .eael-product-title h2
      image: 'img', // Images are directly in the product
      price: '.eael-product-price', // Actual structure uses .eael-product-price
      addToCartButton: '.add_to_cart_button',
      saleLabel: '.sale', // Actual structure uses .sale (not .onsale)
      rating: '.eael-star-rating'
    };
  }

  async goto() {
    await this.page.goto('https://eael.wpqa.site/woocommerce-elements/woo-product-slider/');
  }

  // Scroll to specific preset sections
  async scrollToPreset1() {
    await this.preset1Section.scrollIntoViewIfNeeded();
  }

  async scrollToPreset2() {
    await this.preset2Section.scrollIntoViewIfNeeded();
  }

  async scrollToPreset3() {
    await this.preset3Section.scrollIntoViewIfNeeded();
  }

  async scrollToPreset4() {
    await this.preset4Section.scrollIntoViewIfNeeded();
  }

  async scrollToAutomationPreset1() {
    await this.automationPreset1Section.scrollIntoViewIfNeeded();
  }

  async scrollToAutomationPreset2() {
    await this.automationPreset2Section.scrollIntoViewIfNeeded();
  }

  async scrollToAutomationPreset3() {
    await this.automationPreset3Section.scrollIntoViewIfNeeded();
  }

  async scrollToAutomationPreset4() {
    await this.automationPreset4Section.scrollIntoViewIfNeeded();
  }

  // Navigation methods for Preset 1
  async clickPreset1NextButton() {
    await this.preset1Navigation.nextButton.click();
  }

  async clickPreset1PrevButton() {
    await this.preset1Navigation.prevButton.click();
  }

  async clickPreset1Dot(index) {
    await this.preset1Navigation.dots.nth(index).click();
  }

  // Navigation methods for Preset 2
  async clickPreset2NextButton() {
    await this.preset2Navigation.nextButton.click();
  }

  async clickPreset2PrevButton() {
    await this.preset2Navigation.prevButton.click();
  }

  // Get product count for each preset
  async getPreset1ProductCount() {
    return await this.preset1Products.count();
  }

  async getPreset2ProductCount() {
    return await this.preset2Products.count();
  }

  async getPreset3ProductCount() {
    return await this.preset3Products.count();
  }

  async getPreset4ProductCount() {
    return await this.preset4Products.count();
  }

  // Get product titles for verification
  async getPreset1ProductTitles() {
    return await this.preset1Products.locator(this.productElements.title).allTextContents();
  }

  async getPreset2ProductTitles() {
    return await this.preset2Products.locator(this.productElements.title).allTextContents();
  }

  // Check if slider is functional (can navigate)
  async isPreset1SliderFunctional() {
    const initialActiveSlide = await this.preset1Slider.locator('.swiper-slide-active').count();
    if (await this.preset1Navigation.nextButton.isVisible()) {
      await this.clickPreset1NextButton();
      await this.page.waitForTimeout(500); // Wait for animation
      const newActiveSlide = await this.preset1Slider.locator('.swiper-slide-active').count();
      return newActiveSlide > 0;
    }
    return false;
  }

  // Check if products have required elements
  async checkPreset1ProductElements() {
    const firstProduct = this.preset1Products.first();
    return {
      hasTitle: await firstProduct.locator(this.productElements.title).isVisible(),
      hasImage: await firstProduct.locator(this.productElements.image).isVisible(),
      hasPrice: await firstProduct.locator(this.productElements.price).isVisible(),
      hasAddToCart: await firstProduct.locator(this.productElements.addToCartButton).isVisible()
    };
  }

  // Check for sale labels in preset 2
  async hasPreset2SaleLabels() {
    // Look for sale labels in the entire preset2 section, not just products
    return await this.preset2Section.locator(this.productElements.saleLabel).count() > 0;
  }

  // Responsive design checks
  async checkResponsiveDesign() {
    const viewports = [
      { width: 1200, height: 800 }, // Desktop
      { width: 768, height: 1024 }, // Tablet
      { width: 375, height: 667 }   // Mobile
    ];

    const results = {};
    
    for (const viewport of viewports) {
      await this.page.setViewportSize(viewport);
      await this.page.waitForTimeout(500);
      
      const deviceType = viewport.width >= 1024 ? 'desktop' : viewport.width >= 768 ? 'tablet' : 'mobile';
      results[deviceType] = {
        preset1Visible: await this.preset1Container.isVisible(),
        preset1ProductCount: await this.getPreset1ProductCount(),
        navigationVisible: await this.preset1Navigation.nextButton.isVisible()
      };
    }
    
    return results;
  }
}

export default WooProductSliderPage;
