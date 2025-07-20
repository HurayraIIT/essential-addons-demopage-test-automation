/**
 * Page Object Model for WooCommerce Product Carousel page
 * URL: https://eael.wpqa.site/woocommerce-elements/woo-product-carousel/
 */

export default class WooProductCarouselPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = 'https://eael.wpqa.site/woocommerce-elements/woo-product-carousel/';

    // Preset 1 Section - Use specific data-widget-id to avoid conflicts
    this.preset1Section = this.page.locator('[data-widget-id="b5275d0"]');
    this.preset1Products = {
      ecoZenChair: {
        container: this.preset1Section.locator('.eael-product-title:has-text("EcoZen Lounge Comfy Chair")').first(),
        image: this.preset1Section.locator('img[alt="EcoZen Lounge Comfy Chair"]').first(),
        price: this.preset1Section.locator('.eael-product-title:has-text("EcoZen Lounge Comfy Chair")').locator('xpath=../../..').locator('.eael-product-price').first(),
        actionButton: this.preset1Section.locator('a[aria-label*="Add to cart"]').first(),
      },
      saguaroChair: {
        container: this.preset1Section.locator('.eael-product-title:has-text("Saguaro with Wooden stand")').first(),
        image: this.preset1Section.locator('img[alt="Saguaro with Wooden stand"]').first(),
        price: this.preset1Section.locator('.eael-product-title:has-text("Saguaro with Wooden stand")').locator('xpath=../../..').locator('.eael-product-price').first(),
        actionButton: this.preset1Section.locator('a[aria-label*="Add to cart"]').nth(1),
      },
      woodlandChair: {
        container: this.preset1Section.locator('.eael-product-title:has-text("Woodland Bliss Lounge Chair")').first(),
        image: this.preset1Section.locator('img[alt="Woodland Bliss Lounge Chair"]').first(),
        price: this.preset1Section.locator('.eael-product-title:has-text("Woodland Bliss Lounge Chair")').locator('xpath=../../..').locator('.eael-product-price').first(),
        actionButton: this.preset1Section.locator('a[aria-label*="Add to cart"]').nth(2),
      },
      menSneakers: {
        container: this.preset1Section.locator('.eael-product-title:has-text("Men Casual Sport Shoes Light Sneakers")').first(),
        image: this.preset1Section.locator('img[alt="Men Casual Sport Shoes Light Sneakers"]').first(),
        price: this.preset1Section.locator('.eael-product-title:has-text("Men Casual Sport Shoes Light Sneakers")').locator('xpath=../../..').locator('.eael-product-price').first(),
        actionButton: this.preset1Section.locator('a[aria-label*="Add to cart"]').nth(3),
      },
    };

    // Preset 3 Section - Use specific data-widget-id to avoid conflicts (contains Hurayra Automation products)
    this.preset3Section = this.page.locator('[data-widget-id="98be735"]');
    this.preset3Products = {
      product00: {
        container: this.preset3Section.locator('.eael-product-title:has-text("Hurayra Automation Product 00")').first(),
        image: this.preset3Section.locator('img[alt*="Hurayra Automation Product 00"]').first(),
        price: this.preset3Section.locator('.eael-product-title:has-text("Hurayra Automation Product 00")').locator('xpath=../../..').locator('.eael-product-price').first(),
        actionButton: this.preset3Section.locator('.eael-product-title:has-text("Hurayra Automation Product 00")').locator('xpath=../../..').locator('a[aria-label*="Add to cart"]').first(),
      },
      product01: {
        container: this.preset3Section.locator('.eael-product-title:has-text("Hurayra Automation Product 01")').first(),
        image: this.preset3Section.locator('img[alt*="Hurayra Automation Product 01"]').first(),
        price: this.preset3Section.locator('.eael-product-title:has-text("Hurayra Automation Product 01")').locator('xpath=../../..').locator('.eael-product-price').first(),
        actionButton: this.preset3Section.locator('.eael-product-title:has-text("Hurayra Automation Product 01")').locator('xpath=../../..').locator('a[aria-label*="Add to cart"]').first(),
      },
      product02: {
        container: this.preset3Section.locator('.eael-product-title:has-text("Hurayra Automation Product 02")').first(),
        image: this.preset3Section.locator('img[alt*="Hurayra Automation Product 02"]').first(),
        price: this.preset3Section.locator('.eael-product-title:has-text("Hurayra Automation Product 02")').locator('xpath=../../..').locator('.eael-product-price').first(),
        actionButton: this.preset3Section.locator('.eael-product-title:has-text("Hurayra Automation Product 02")').locator('xpath=../../..').locator('a[aria-label*="Add to cart"]').first(),
      },
      product03: {
        container: this.preset3Section.locator('.eael-product-title:has-text("Hurayra Automation Product 03")').first(),
        image: this.preset3Section.locator('img[alt*="Hurayra Automation Product 03"]').first(),
        price: this.preset3Section.locator('.eael-product-title:has-text("Hurayra Automation Product 03")').locator('xpath=../../..').locator('.eael-product-price').first(),
        actionButton: this.preset3Section.locator('.eael-product-title:has-text("Hurayra Automation Product 03")').locator('xpath=../../..').locator('a[aria-label*="Add to cart"]').first(),
      },
    };

    // Preset 4 Section - Use specific data-widget-id to avoid conflicts (contains Hurayra Automation products)
    this.preset4Section = this.page.locator('[data-widget-id="6af7aca"]');
    this.preset4Products = {
      product01: {
        container: this.preset4Section.locator('.eael-product-title:has-text("Hurayra Automation Product 01")').first(),
        image: this.preset4Section.locator('img[alt*="Hurayra Automation Product 01"]').first(),
        price: this.preset4Section.locator('.eael-product-title:has-text("Hurayra Automation Product 01")').locator('xpath=../../..').locator('.eael-product-price').first(),
        actionButton: this.preset4Section.locator('.eael-product-title:has-text("Hurayra Automation Product 01")').locator('xpath=../../..').locator('a[aria-label*="Add to cart"]').first(),
      },
      product02: {
        container: this.preset4Section.locator('.eael-product-title:has-text("Hurayra Automation Product 02")').first(),
        image: this.preset4Section.locator('img[alt*="Hurayra Automation Product 02"]').first(),
        price: this.preset4Section.locator('.eael-product-title:has-text("Hurayra Automation Product 02")').locator('xpath=../../..').locator('.eael-product-price').first(),
        actionButton: this.preset4Section.locator('.eael-product-title:has-text("Hurayra Automation Product 02")').locator('xpath=../../..').locator('a[aria-label*="Add to cart"]').first(),
      },
      product03: {
        container: this.preset4Section.locator('.eael-product-title:has-text("Hurayra Automation Product 03")').first(),
        image: this.preset4Section.locator('img[alt*="Hurayra Automation Product 03"]').first(),
        price: this.preset4Section.locator('.eael-product-title:has-text("Hurayra Automation Product 03")').locator('xpath=../../..').locator('.eael-product-price').first(),
        actionButton: this.preset4Section.locator('.eael-product-title:has-text("Hurayra Automation Product 03")').locator('xpath=../../..').locator('a[aria-label*="Add to cart"]').first(),
      },
      product04: {
        container: this.preset4Section.locator('.eael-product-title:has-text("Hurayra Automation Product 04")').first(),
        image: this.preset4Section.locator('img[alt*="Hurayra Automation Product 04"]').first(),
        price: this.preset4Section.locator('.eael-product-title:has-text("Hurayra Automation Product 04")').locator('xpath=../../..').locator('.eael-product-price').first(),
        actionButton: this.preset4Section.locator('.eael-product-title:has-text("Hurayra Automation Product 04")').locator('xpath=../../..').locator('a[aria-label*="Add to cart"]').first(),
      },
    };

    // Hurayra Automation Presets
    this.automationPresets = [
      'Hurayra Automation 241212 Preset One',
      'Hurayra Automation 241212 Preset Two',
      'Hurayra Automation 241212 Preset Three',
      'Hurayra Automation 241212 Preset Four',
    ];
    this.automationPresetHeadings = this.automationPresets.map(
      preset => this.page.getByRole('heading', { name: preset, exact: true })
    );
    this.automationPresetProducts = [
      // Preset One - Use specific data-widget-id
      {
        product00: this.page.locator('[data-widget-id="4cd20f3"] .eael-product-carousel-item:has-text("Hurayra Automation Product 00")').first(),
        product01: this.page.locator('[data-widget-id="4cd20f3"] .eael-product-carousel-item:has-text("Hurayra Automation Product 01")').first(),
        product02: this.page.locator('[data-widget-id="4cd20f3"] .eael-product-carousel-item:has-text("Hurayra Automation Product 02")').first(),
        product03: this.page.locator('[data-widget-id="4cd20f3"] .eael-product-carousel-item:has-text("Hurayra Automation Product 03")').first(),
      },
      // Preset Two - Use specific data-widget-id
      {
        product04: this.page.locator('[data-widget-id="078d89d"] .eael-product-carousel-item:has-text("Hurayra Automation Product 04")').first(),
        product03: this.page.locator('[data-widget-id="078d89d"] .eael-product-carousel-item:has-text("Hurayra Automation Product 03")').first(),
        product02: this.page.locator('[data-widget-id="078d89d"] .eael-product-carousel-item:has-text("Hurayra Automation Product 02")').first(),
        product01: this.page.locator('[data-widget-id="078d89d"] .eael-product-carousel-item:has-text("Hurayra Automation Product 01")').first(),
      },
      // Preset Three - Use specific data-widget-id
      {
        product00: this.page.locator('[data-widget-id="98be735"] .eael-product-carousel-item:has-text("Hurayra Automation Product 00")').first(),
        product01: this.page.locator('[data-widget-id="98be735"] .eael-product-carousel-item:has-text("Hurayra Automation Product 01")').first(),
        product02: this.page.locator('[data-widget-id="98be735"] .eael-product-carousel-item:has-text("Hurayra Automation Product 02")').first(),
        product03: this.page.locator('[data-widget-id="98be735"] .eael-product-carousel-item:has-text("Hurayra Automation Product 03")').first(),
      },
      // Preset Four - Use specific data-widget-id
      {
        product04: this.page.locator('[data-widget-id="6af7aca"] .eael-product-carousel-item:has-text("Hurayra Automation Product 04")').first(),
        product03: this.page.locator('[data-widget-id="6af7aca"] .eael-product-carousel-item:has-text("Hurayra Automation Product 03")').first(),
        product02: this.page.locator('[data-widget-id="6af7aca"] .eael-product-carousel-item:has-text("Hurayra Automation Product 02")').first(),
        product01: this.page.locator('[data-widget-id="6af7aca"] .eael-product-carousel-item:has-text("Hurayra Automation Product 01")').first(),
      },
    ];
  }

  /**
   * Navigate to the WooCommerce Product Carousel page
   */
  async goto() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('networkidle');
  }

  async scrollToPreset1() {
    await this.preset1Section.scrollIntoViewIfNeeded();
  }
  async scrollToPreset3() {
    await this.preset3Section.scrollIntoViewIfNeeded();
  }
  async scrollToPreset4() {
    await this.preset4Section.scrollIntoViewIfNeeded();
  }
  async scrollToAutomationPreset(index) {
    await this.automationPresetHeadings[index].scrollIntoViewIfNeeded();
  }

  async isPreset1Visible() {
    return await this.preset1Section.isVisible();
  }
  async isPreset3Visible() {
    return await this.preset3Section.isVisible();
  }
  async isPreset4Visible() {
    return await this.preset4Section.isVisible();
  }
  async isAutomationPresetVisible(index) {
    return await this.automationPresetHeadings[index].isVisible();
  }

  async isPreset1ProductVisible(productName) {
    if (productName === 'EcoZen Lounge Comfy Chair') {
      return await this.preset1Products.ecoZenChair.container.isVisible();
    } else if (productName === 'Saguaro with Wooden stand') {
      return await this.preset1Products.saguaroChair.container.isVisible();
    } else if (productName === 'Woodland Bliss Lounge Chair') {
      return await this.preset1Products.woodlandChair.container.isVisible();
    } else if (productName === 'Men Casual Sport Shoes Light Sneakers') {
      return await this.preset1Products.menSneakers.container.isVisible();
    }
    return false;
  }

  async isPreset3ProductVisible(productName) {
    if (productName === 'Hurayra Automation Product 00') {
      return await this.preset3Products.product00.container.isVisible();
    } else if (productName === 'Hurayra Automation Product 01') {
      return await this.preset3Products.product01.container.isVisible();
    } else if (productName === 'Hurayra Automation Product 02') {
      return await this.preset3Products.product02.container.isVisible();
    } else if (productName === 'Hurayra Automation Product 03') {
      return await this.preset3Products.product03.container.isVisible();
    }
    return false;
  }

  async isPreset4ProductVisible(productName) {
    if (productName === 'Hurayra Automation Product 01') {
      return await this.preset4Products.product01.container.isVisible();
    } else if (productName === 'Hurayra Automation Product 02') {
      return await this.preset4Products.product02.container.isVisible();
    } else if (productName === 'Hurayra Automation Product 03') {
      return await this.preset4Products.product03.container.isVisible();
    } else if (productName === 'Hurayra Automation Product 04') {
      return await this.preset4Products.product04.container.isVisible();
    }
    return false;
  }

  async isAutomationPresetProductVisible(presetIndex, productName) {
    const preset = this.automationPresetProducts[presetIndex];
    if (!preset) return false;
    if (productName === 'Hurayra Automation Product 00') {
      return preset.product00 ? await preset.product00.isVisible() : false;
    } else if (productName === 'Hurayra Automation Product 01') {
      return preset.product01 ? await preset.product01.isVisible() : false;
    } else if (productName === 'Hurayra Automation Product 02') {
      return preset.product02 ? await preset.product02.isVisible() : false;
    } else if (productName === 'Hurayra Automation Product 03') {
      return preset.product03 ? await preset.product03.isVisible() : false;
    } else if (productName === 'Hurayra Automation Product 04') {
      return preset.product04 ? await preset.product04.isVisible() : false;
    }
    return false;
  }

  async isPreset1ProductImageVisible(productName) {
    const product = this.preset1Products;
    if (productName === 'EcoZen Lounge Comfy Chair') {
      return await product.ecoZenChair.image.isVisible();
    } else if (productName === 'Saguaro with Wooden stand') {
      return await product.saguaroChair.image.isVisible();
    } else if (productName === 'Woodland Bliss Lounge Chair') {
      return await product.woodlandChair.image.isVisible();
    } else if (productName === 'Men Casual Sport Shoes Light Sneakers') {
      return await product.menSneakers.image.isVisible();
    }
    return false;
  }

  async isPreset1ProductPriceVisible(productName) {
    const product = this.preset1Products;
    if (productName === 'EcoZen Lounge Comfy Chair') {
      return await product.ecoZenChair.price.isVisible();
    } else if (productName === 'Saguaro with Wooden stand') {
      return await product.saguaroChair.price.isVisible();
    } else if (productName === 'Woodland Bliss Lounge Chair') {
      return await product.woodlandChair.price.isVisible();
    } else if (productName === 'Men Casual Sport Shoes Light Sneakers') {
      return await product.menSneakers.price.isVisible();
    }
    return false;
  }

  async isPreset1ProductActionButtonVisible(productName) {
    const product = this.preset1Products;
    if (productName === 'EcoZen Lounge Comfy Chair') {
      return await product.ecoZenChair.actionButton.isVisible();
    } else if (productName === 'Saguaro with Wooden stand') {
      return await product.saguaroChair.actionButton.isVisible();
    } else if (productName === 'Woodland Bliss Lounge Chair') {
      return await product.woodlandChair.actionButton.isVisible();
    } else if (productName === 'Men Casual Sport Shoes Light Sneakers') {
      return await product.menSneakers.actionButton.isVisible();
    }
    return false;
  }

  // Preset 3
  async isPreset3ProductImageVisible(productName) {
    const product = this.preset3Products;
    if (productName === 'Hurayra Automation Product 00') {
      return await product.product00.image.isVisible();
    } else if (productName === 'Hurayra Automation Product 01') {
      return await product.product01.image.isVisible();
    } else if (productName === 'Hurayra Automation Product 02') {
      return await product.product02.image.isVisible();
    } else if (productName === 'Hurayra Automation Product 03') {
      return await product.product03.image.isVisible();
    }
    return false;
  }
  async isPreset3ProductPriceVisible(productName) {
    const product = this.preset3Products;
    if (productName === 'Hurayra Automation Product 00') {
      return await product.product00.price.isVisible();
    } else if (productName === 'Hurayra Automation Product 01') {
      return await product.product01.price.isVisible();
    } else if (productName === 'Hurayra Automation Product 02') {
      return await product.product02.price.isVisible();
    } else if (productName === 'Hurayra Automation Product 03') {
      return await product.product03.price.isVisible();
    }
    return false;
  }
  async isPreset3ProductActionButtonVisible(productName) {
    const product = this.preset3Products;
    if (productName === 'Hurayra Automation Product 00') {
      return await product.product00.actionButton.isVisible();
    } else if (productName === 'Hurayra Automation Product 01') {
      return await product.product01.actionButton.isVisible();
    } else if (productName === 'Hurayra Automation Product 02') {
      return await product.product02.actionButton.isVisible();
    } else if (productName === 'Hurayra Automation Product 03') {
      return await product.product03.actionButton.isVisible();
    }
    return false;
  }

  // Preset 4
  async isPreset4ProductImageVisible(productName) {
    const product = this.preset4Products;
    if (productName === 'Hurayra Automation Product 01') {
      return await product.product01.image.isVisible();
    } else if (productName === 'Hurayra Automation Product 02') {
      return await product.product02.image.isVisible();
    } else if (productName === 'Hurayra Automation Product 03') {
      return await product.product03.image.isVisible();
    } else if (productName === 'Hurayra Automation Product 04') {
      return await product.product04.image.isVisible();
    }
    return false;
  }
  async isPreset4ProductPriceVisible(productName) {
    const product = this.preset4Products;
    if (productName === 'Hurayra Automation Product 01') {
      return await product.product01.price.isVisible();
    } else if (productName === 'Hurayra Automation Product 02') {
      return await product.product02.price.isVisible();
    } else if (productName === 'Hurayra Automation Product 03') {
      return await product.product03.price.isVisible();
    } else if (productName === 'Hurayra Automation Product 04') {
      return await product.product04.price.isVisible();
    }
    return false;
  }
  async isPreset4ProductActionButtonVisible(productName) {
    const product = this.preset4Products;
    if (productName === 'Hurayra Automation Product 01') {
      return await product.product01.actionButton.isVisible();
    } else if (productName === 'Hurayra Automation Product 02') {
      return await product.product02.actionButton.isVisible();
    } else if (productName === 'Hurayra Automation Product 03') {
      return await product.product03.actionButton.isVisible();
    } else if (productName === 'Hurayra Automation Product 04') {
      return await product.product04.actionButton.isVisible();
    }
    return false;
  }

  // Hurayra Automation Presets (generic)
  async isAutomationPresetProductImageVisible(presetIndex, productName) {
    const preset = this.automationPresetProducts[presetIndex];
    if (!preset) return false;
    const key = this._automationProductKey(productName);
    if (preset[key] && preset[key].image) {
      return await preset[key].image.isVisible();
    }
    return false;
  }
  async isAutomationPresetProductPriceVisible(presetIndex, productName) {
    const preset = this.automationPresetProducts[presetIndex];
    if (!preset) return false;
    const key = this._automationProductKey(productName);
    if (preset[key] && preset[key].price) {
      return await preset[key].price.isVisible();
    }
    return false;
  }
  async isAutomationPresetProductActionButtonVisible(presetIndex, productName) {
    const preset = this.automationPresetProducts[presetIndex];
    if (!preset) return false;
    const key = this._automationProductKey(productName);
    if (preset[key] && preset[key].actionButton) {
      return await preset[key].actionButton.isVisible();
    }
    return false;
  }
  _automationProductKey(productName) {
    // Map product name to key, e.g. 'Hurayra Automation Product 00' => 'product00'
    const match = productName.match(/Product (\d+)/);
    if (match) {
      return `product${match[1].padStart(2, '0')}`;
    }
    return '';
  }

  // Helper to check if next button is visible and enabled
  async isNextButtonAvailable() {
    const nextBtn = this.page.locator('.swiper-button-next');
    return await nextBtn.isVisible() && await nextBtn.isEnabled();
  }

  // Helper to perform a drag/swipe gesture on the carousel
  async dragCarousel(preset) {
    // Find the carousel container for the given preset
    let carouselSelector;
    if (preset === 1) carouselSelector = this.preset1CarouselSelector;
    else if (preset === 3) carouselSelector = this.preset3CarouselSelector;
    else if (preset === 4) carouselSelector = this.preset4CarouselSelector;
    else throw new Error('Invalid preset number');
    const carousel = this.page.locator(carouselSelector);
    const box = await carousel.boundingBox();
    if (!box) throw new Error('Carousel not found for preset ' + preset);
    // Drag from right to left (simulate swipe left)
    await this.page.mouse.move(box.x + box.width - 10, box.y + box.height / 2);
    await this.page.mouse.down();
    await this.page.mouse.move(box.x + 10, box.y + box.height / 2, { steps: 10 });
    await this.page.mouse.up();
    await this.page.waitForTimeout(500);
  }

  // Helper to slide carousel to a product by name
  async slideToProduct(preset, productName, maxSlides = 10) {
    let productLocator;
    let carouselSelector;
    if (preset === 1) {
      productLocator = this.preset1Products;
      carouselSelector = this.preset1CarouselSelector;
    } else if (preset === 3) {
      productLocator = this.preset3Products;
      carouselSelector = this.preset3CarouselSelector;
    } else if (preset === 4) {
      productLocator = this.preset4Products;
      carouselSelector = this.preset4CarouselSelector;
    } else {
      throw new Error('Invalid preset number');
    }
    let locatorObj;
    if (productName === 'EcoZen Lounge Comfy Chair') locatorObj = productLocator.ecoZenChair.container;
    else if (productName === 'Saguaro with Wooden stand') locatorObj = productLocator.saguaroChair.container;
    else if (productName === 'Woodland Bliss Lounge Chair') locatorObj = productLocator.woodlandChair.container;
    else if (productName === 'Men Casual Sport Shoes Light Sneakers') locatorObj = productLocator.menSneakers.container;
    else throw new Error('Unknown product name: ' + productName);

    for (let i = 0; i < maxSlides; i++) {
      if (await locatorObj.isVisible({ timeout: 1000 })) {
        return true;
      }
      if (await this.isNextButtonAvailable()) {
        await this.page.locator('.swiper-button-next').click({ timeout: 2000 });
      } else {
        await this.dragCarousel(preset);
      }
      await this.page.waitForTimeout(500); // Wait for slide animation
    }
    return false;
  }
} 