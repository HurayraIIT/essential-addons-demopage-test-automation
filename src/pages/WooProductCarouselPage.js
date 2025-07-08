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

    // Preset 1 Section
    this.preset1Section = this.page.locator('.eael-woo-product-carousel-container.preset-1');
    this.preset1Products = {
      ecoZenChair: {
        container: this.preset1Section.locator('.eael-product-title:has-text("EcoZen Lounge Comfy Chair")'),
        image: this.preset1Section.locator('img[alt="EcoZen Lounge Comfy Chair"]'),
        price: this.preset1Section.locator('.eael-product-title:has-text("EcoZen Lounge Comfy Chair")').locator('xpath=../../..').locator('.eael-product-price'),
        actionButton: this.preset1Section.locator('.add-to-cart a[aria-label*="EcoZen Lounge Comfy Chair"]'),
      },
      saguaroChair: {
        container: this.preset1Section.locator('.eael-product-title:has-text("Saguaro with Wooden stand")'),
        image: this.preset1Section.locator('img[alt="Saguaro with Wooden stand"]'),
        price: this.preset1Section.locator('.eael-product-title:has-text("Saguaro with Wooden stand")').locator('xpath=../../..').locator('.eael-product-price'),
        actionButton: this.preset1Section.locator('.add-to-cart a[aria-label*="Saguaro with Wooden stand"]'),
      },
      woodlandChair: {
        container: this.preset1Section.locator('.eael-product-title:has-text("Woodland Bliss Lounge Chair")'),
        image: this.preset1Section.locator('img[alt="Woodland Bliss Lounge Chair"]'),
        price: this.preset1Section.locator('.eael-product-title:has-text("Woodland Bliss Lounge Chair")').locator('xpath=../../..').locator('.eael-product-price'),
        actionButton: this.preset1Section.locator('.add-to-cart a[aria-label*="Woodland Bliss Lounge Chair"]'),
      },
      menSneakers: {
        container: this.preset1Section.locator('.eael-product-title:has-text("Men Casual Sport Shoes Light Sneakers")'),
        image: this.preset1Section.locator('img[alt="Men Casual Sport Shoes Light Sneakers"]'),
        price: this.preset1Section.locator('.eael-product-title:has-text("Men Casual Sport Shoes Light Sneakers")').locator('xpath=../../..').locator('.eael-product-price'),
        actionButton: this.preset1Section.locator('.add-to-cart a[aria-label*="Men Casual Sport Shoes Light Sneakers"]'),
      },
    };

    // Preset 3 Section
    this.preset3Section = this.page.locator('.eael-woo-product-carousel-container.preset-3');
    this.preset3Products = {
      ecoZenChair: {
        container: this.preset3Section.locator('.eael-product-title:has-text("EcoZen Lounge Comfy Chair")'),
        image: this.preset3Section.locator('img[alt="EcoZen Lounge Comfy Chair"]'),
        price: this.preset3Section.locator('.eael-product-title:has-text("EcoZen Lounge Comfy Chair")').locator('xpath=../../..').locator('.eael-product-price'),
        actionButton: this.preset3Section.locator('.add-to-cart a[aria-label*="EcoZen Lounge Comfy Chair"]'),
      },
      saguaroChair: {
        container: this.preset3Section.locator('.eael-product-title:has-text("Saguaro with Wooden stand")'),
        image: this.preset3Section.locator('img[alt="Saguaro with Wooden stand"]'),
        price: this.preset3Section.locator('.eael-product-title:has-text("Saguaro with Wooden stand")').locator('xpath=../../..').locator('.eael-product-price'),
        actionButton: this.preset3Section.locator('.add-to-cart a[aria-label*="Saguaro with Wooden stand"]'),
      },
      woodlandChair: {
        container: this.preset3Section.locator('.eael-product-title:has-text("Woodland Bliss Lounge Chair")'),
        image: this.preset3Section.locator('img[alt="Woodland Bliss Lounge Chair"]'),
        price: this.preset3Section.locator('.eael-product-title:has-text("Woodland Bliss Lounge Chair")').locator('xpath=../../..').locator('.eael-product-price'),
        actionButton: this.preset3Section.locator('.add-to-cart a[aria-label*="Woodland Bliss Lounge Chair"]'),
      },
      menSneakers: {
        container: this.preset3Section.locator('.eael-product-title:has-text("Men Casual Sport Shoes Light Sneakers")'),
        image: this.preset3Section.locator('img[alt="Men Casual Sport Shoes Light Sneakers"]'),
        price: this.preset3Section.locator('.eael-product-title:has-text("Men Casual Sport Shoes Light Sneakers")').locator('xpath=../../..').locator('.eael-product-price'),
        actionButton: this.preset3Section.locator('.add-to-cart a[aria-label*="Men Casual Sport Shoes Light Sneakers"]'),
      },
    };

    // Preset 4 Section
    this.preset4Section = this.page.locator('.eael-woo-product-carousel-container.preset-4');
    this.preset4Products = {
      ecoZenChair: {
        container: this.preset4Section.locator('.eael-product-title:has-text("EcoZen Lounge Comfy Chair")'),
        image: this.preset4Section.locator('img[alt="EcoZen Lounge Comfy Chair"]'),
        price: this.preset4Section.locator('.eael-product-title:has-text("EcoZen Lounge Comfy Chair")').locator('xpath=../../..').locator('.eael-product-price'),
        actionButton: this.preset4Section.locator('.add-to-cart a[aria-label*="EcoZen Lounge Comfy Chair"]'),
      },
      saguaroChair: {
        container: this.preset4Section.locator('.eael-product-title:has-text("Saguaro with Wooden stand")'),
        image: this.preset4Section.locator('img[alt="Saguaro with Wooden stand"]'),
        price: this.preset4Section.locator('.eael-product-title:has-text("Saguaro with Wooden stand")').locator('xpath=../../..').locator('.eael-product-price'),
        actionButton: this.preset4Section.locator('.add-to-cart a[aria-label*="Saguaro with Wooden stand"]'),
      },
      woodlandChair: {
        container: this.preset4Section.locator('.eael-product-title:has-text("Woodland Bliss Lounge Chair")'),
        image: this.preset4Section.locator('img[alt="Woodland Bliss Lounge Chair"]'),
        price: this.preset4Section.locator('.eael-product-title:has-text("Woodland Bliss Lounge Chair")').locator('xpath=../../..').locator('.eael-product-price'),
        actionButton: this.preset4Section.locator('.add-to-cart a[aria-label*="Woodland Bliss Lounge Chair"]'),
      },
      menSneakers: {
        container: this.preset4Section.locator('.eael-product-title:has-text("Men Casual Sport Shoes Light Sneakers")'),
        image: this.preset4Section.locator('img[alt="Men Casual Sport Shoes Light Sneakers"]'),
        price: this.preset4Section.locator('.eael-product-title:has-text("Men Casual Sport Shoes Light Sneakers")').locator('xpath=../../..').locator('.eael-product-price'),
        actionButton: this.preset4Section.locator('.add-to-cart a[aria-label*="Men Casual Sport Shoes Light Sneakers"]'),
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
      // Preset One
      {
        product00: this.page.locator('section:has-text("Hurayra Automation 241212 Preset One") .eael-product-carousel-item:has-text("Hurayra Automation Product 00")'),
        product01: this.page.locator('section:has-text("Hurayra Automation 241212 Preset One") .eael-product-carousel-item:has-text("Hurayra Automation Product 01")'),
        product02: this.page.locator('section:has-text("Hurayra Automation 241212 Preset One") .eael-product-carousel-item:has-text("Hurayra Automation Product 02")'),
        product03: this.page.locator('section:has-text("Hurayra Automation 241212 Preset One") .eael-product-carousel-item:has-text("Hurayra Automation Product 03")'),
      },
      // Preset Two
      {
        product04: this.page.locator('section:has-text("Hurayra Automation 241212 Preset Two") .eael-product-carousel-item:has-text("Hurayra Automation Product 04")'),
        product03: this.page.locator('section:has-text("Hurayra Automation 241212 Preset Two") .eael-product-carousel-item:has-text("Hurayra Automation Product 03")'),
        product02: this.page.locator('section:has-text("Hurayra Automation 241212 Preset Two") .eael-product-carousel-item:has-text("Hurayra Automation Product 02")'),
        product01: this.page.locator('section:has-text("Hurayra Automation 241212 Preset Two") .eael-product-carousel-item:has-text("Hurayra Automation Product 01")'),
      },
      // Preset Three
      {
        product00: this.page.locator('section:has-text("Hurayra Automation 241212 Preset Three") .eael-product-carousel-item:has-text("Hurayra Automation Product 00")'),
        product01: this.page.locator('section:has-text("Hurayra Automation 241212 Preset Three") .eael-product-carousel-item:has-text("Hurayra Automation Product 01")'),
        product02: this.page.locator('section:has-text("Hurayra Automation 241212 Preset Three") .eael-product-carousel-item:has-text("Hurayra Automation Product 02")'),
        product03: this.page.locator('section:has-text("Hurayra Automation 241212 Preset Three") .eael-product-carousel-item:has-text("Hurayra Automation Product 03")'),
      },
      // Preset Four
      {
        product04: this.page.locator('section:has-text("Hurayra Automation 241212 Preset Four") .eael-product-carousel-item:has-text("Hurayra Automation Product 04")'),
        product03: this.page.locator('section:has-text("Hurayra Automation 241212 Preset Four") .eael-product-carousel-item:has-text("Hurayra Automation Product 03")'),
        product02: this.page.locator('section:has-text("Hurayra Automation 241212 Preset Four") .eael-product-carousel-item:has-text("Hurayra Automation Product 02")'),
        product01: this.page.locator('section:has-text("Hurayra Automation 241212 Preset Four") .eael-product-carousel-item:has-text("Hurayra Automation Product 01")'),
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
    if (productName === 'EcoZen Lounge Comfy Chair') {
      return await this.preset3Products.ecoZenChair.container.isVisible();
    } else if (productName === 'Saguaro with Wooden stand') {
      return await this.preset3Products.saguaroChair.container.isVisible();
    } else if (productName === 'Woodland Bliss Lounge Chair') {
      return await this.preset3Products.woodlandChair.container.isVisible();
    } else if (productName === 'Men Casual Sport Shoes Light Sneakers') {
      return await this.preset3Products.menSneakers.container.isVisible();
    }
    return false;
  }

  async isPreset4ProductVisible(productName) {
    if (productName === 'EcoZen Lounge Comfy Chair') {
      return await this.preset4Products.ecoZenChair.container.isVisible();
    } else if (productName === 'Saguaro with Wooden stand') {
      return await this.preset4Products.saguaroChair.container.isVisible();
    } else if (productName === 'Woodland Bliss Lounge Chair') {
      return await this.preset4Products.woodlandChair.container.isVisible();
    } else if (productName === 'Men Casual Sport Shoes Light Sneakers') {
      return await this.preset4Products.menSneakers.container.isVisible();
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
  async isPreset3ProductPriceVisible(productName) {
    const product = this.preset3Products;
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
  async isPreset3ProductActionButtonVisible(productName) {
    const product = this.preset3Products;
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

  // Preset 4
  async isPreset4ProductImageVisible(productName) {
    const product = this.preset4Products;
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
  async isPreset4ProductPriceVisible(productName) {
    const product = this.preset4Products;
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
  async isPreset4ProductActionButtonVisible(productName) {
    const product = this.preset4Products;
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