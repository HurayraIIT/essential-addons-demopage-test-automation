/**
 * Page Object Model for WooCommerce Product List page
 * URL: https://eael.wpqa.site/woocommerce-elements/woo-product-list/
 */

class WooProductListPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = 'https://eael.wpqa.site/woocommerce-elements/woo-product-list/';

    // Default Style (Style 1) Locators
    this.defaultStyleHeading = this.page.getByRole('heading', { name: 'Default', exact: true });
    this.defaultStyleProducts = {
      // Product 1
      ecoZenChair: {
        container: this.page.locator(':has-text("EcoZen Lounge Comfy Chair")').first(),
        image: this.page.locator('img[alt="EcoZen Lounge Comfy Chair"]').first(),
        title: this.page.getByRole('heading', { name: 'EcoZen Lounge Comfy Chair' }).first(),
        titleLink: this.page.getByRole('link', { name: 'EcoZen Lounge Comfy Chair' }).first(),
        price: this.page.getByText('Original price was: 287.00৳ . Current price is: 220.00৳ .').first(),
        saleTag: this.page.locator(':has-text("Sale")').first(),
        rating: this.page.getByText('Rated 0 out of 5').first(),
        category: this.page.getByText('Chair').first(),
        addToCartButton: this.page.getByRole('link', { name: 'Add to cart: "EcoZen Lounge Comfy Chair"' }).first(),
        viewProductLink: this.page.getByText('View Product').first()
      },
      // Product 2
      saguaroChair: {
        container: this.page.locator(':has-text("Saguaro with Wooden stand")').first(),
        image: this.page.locator('img[alt="Saguaro with Wooden stand"]').first(),
        title: this.page.getByRole('heading', { name: 'Saguaro with Wooden stand' }).first(),
        titleLink: this.page.getByRole('link', { name: 'Saguaro with Wooden stand' }).first(),
        price: this.page.getByText('Original price was: 287.00৳ . Current price is: 200.00৳ .').first(),
        saleTag: this.page.locator(':has-text("Sale")').nth(1),
        rating: this.page.getByText('Rated 0 out of 5').nth(1),
        category: this.page.getByText('Chair').nth(1),
        addToCartButton: this.page.getByRole('link', { name: 'Add to cart: "Saguaro with Wooden stand"' }).first(),
        viewProductLink: this.page.getByText('View Product').nth(1)
      },
      // Product 3
      woodlandChair: {
        container: this.page.locator(':has-text("Woodland Bliss Lounge Chair")').first(),
        image: this.page.locator('img[alt="Woodland Bliss Lounge Chair"]').first(),
        title: this.page.getByRole('heading', { name: 'Woodland Bliss Lounge Chair' }).first(),
        titleLink: this.page.getByRole('link', { name: 'Woodland Bliss Lounge Chair' }).first(),
        price: this.page.getByText('190.00৳ – 300.00৳').first(),
        rating: this.page.getByText('Rated 0 out of 5').nth(2),
        category: this.page.getByText('Chair').nth(2),
        selectOptionsButton: this.page.getByRole('link', { name: 'Select options for "Woodland Bliss Lounge Chair"' }),
        viewProductLink: this.page.getByText('View Product').nth(2)
      },
      // Product 4
      menSneakers: {
        container: this.page.locator(':has-text("Men Casual Sport Shoes Light Sneakers")').first(),
        image: this.page.locator('img[alt="Men Casual Sport Shoes Light Sneakers"]').first(),
        title: this.page.getByRole('heading', { name: 'Men Casual Sport Shoes Light Sneakers' }).first(),
        titleLink: this.page.getByRole('link', { name: 'Men Casual Sport Shoes Light Sneakers' }).first(),
        price: this.page.getByText('Original price was: 287.00৳ . Current price is: 200.00৳ .').nth(1),
        saleTag: this.page.locator(':has-text("Sale")').nth(2),
        rating: this.page.getByText('Rated 0 out of 5').nth(3),
        category: this.page.getByText('Shoe').first(),
        addToCartButton: this.page.getByRole('link', { name: 'Add to cart: "Men Casual Sport Shoes Light Sneakers"' }).first(),
        viewProductLink: this.page.getByText('View Product').nth(3)
      }
    };

    // Style 2 Locators
    this.style2Heading = this.page.getByRole('heading', { name: 'Style 2', exact: true });
    this.style2Products = {
      // Product 1
      ecoZenChair: {
        container: this.page.locator(':has-text("EcoZen Lounge Comfy Chair")').nth(1),
        image: this.page.locator('img[alt="EcoZen Lounge Comfy Chair"]').nth(1),
        title: this.page.getByRole('heading', { name: 'EcoZen Lounge Comfy Chair' }).nth(1),
        titleLink: this.page.getByRole('link', { name: 'EcoZen Lounge Comfy Chair' }).nth(1),
        price: this.page.getByText('Original price was: 287.00৳ . Current price is: 220.00৳ .').nth(1),
        saleTag: this.page.getByText('Sale').nth(3),
        rating: this.page.getByText('Rated 0 out of 5').nth(4),
        category: this.page.getByText('Chair').nth(3),
        totalSold: this.page.getByText('Total Sold: 0'),
        remaining: this.page.getByText('Remaining: 1500'),
        addToCartButton: this.page.getByRole('link', { name: 'Add to cart: "EcoZen Lounge Comfy Chair"' }).nth(1),
        viewProductLink: this.page.getByText('View Product').nth(4)
      }
    };

    // Style 3 Locators
    this.style3Heading = this.page.getByRole('heading', { name: 'Style 3', exact: true });
    this.style3Products = {
      // Product 1 - Style 3
      ecoZenChair: {
        container: this.page.locator(':has-text("EcoZen Lounge Comfy Chair")').nth(2),
        image: this.page.locator('img[alt="EcoZen Lounge Comfy Chair"]').nth(2),
        title: this.page.getByRole('heading', { name: 'EcoZen Lounge Comfy Chair' }).nth(2),
        titleLink: this.page.getByRole('link', { name: 'EcoZen Lounge Comfy Chair' }).nth(2),
        price: this.page.getByText('Original price was: 287.00৳ . Current price is: 220.00৳ .').nth(2),
        saleTag: this.page.locator(':has-text("Sale")').nth(6),
        rating: this.page.getByText('Rated 0 out of 5 Experience the ultimate in relaxation'),
        category: this.page.getByText('Chair').nth(5),
        totalSold: this.page.getByText('Total Sold: 0 Item'),
        addToCartButton: this.page.getByRole('link', { name: 'Add to cart: "EcoZen Lounge Comfy Chair"' }).nth(2)
      }
    };

    // Preset 1 Hurayra Automation Locators
    this.preset1Heading = this.page.getByRole('heading', { name: 'Preset 1 Hurayra Automation 241109', exact: true });
    this.preset1Products = {
      // Product 1 - Preset 1
      hurayraProduct00: {
        container: this.page.locator(':has-text("Hurayra Automation Product 00")').first(),
        image: this.page.locator('img[alt="Hurayra Automation Product 00"]'),
        title: this.page.getByRole('heading', { name: 'Hurayra Automation Product 00' }),
        titleLink: this.page.getByRole('link', { name: 'Hurayra Automation Product 00' }).first(),
        price: this.page.getByText('Original price was: 100.00৳ . Current price is: 90.00৳ .'),
        stockOutTag: this.page.getByText('Stock Out241113'),
        rating: this.page.getByText('Rated 1.00 out of 5 based on 1 customer rating'),
        category: this.page.getByText('Hurayra Automation 241107 DONOTDELETE').first(),
        totalSold: this.page.getByText('Total Sold241113: 0'),
        viewMoreButton: this.page.getByRole('link', { name: 'View More' }),
        viewProductLink: this.page.getByText('View Product241113').first()
      }
    };

    // Preset Two Hurayra Automation Locators
    this.presetTwoHeading = this.page.getByRole('heading', { name: 'Preset Two Hurayra Automation 241212', exact: true });
    this.presetTwoProducts = {
      // Product 1 - Preset Two
      hurayraProduct05: {
        container: this.page.locator(':has-text("Hurayra Automation Product 05")').first(),
        image: this.page.locator('img[alt="Hurayra Automation Product 05"]'),
        title: this.page.getByRole('heading', { name: 'Hurayra Automation Product 05' }),
        titleLink: this.page.getByRole('link', { name: 'Hurayra Automation Product 05' }).first(),
        price: this.page.getByText('Original price was: 105.00৳ . Current price is: 95.00৳ .'),
        saleTag: this.page.getByText('Sale PTWO').first(),
        rating: this.page.getByText('Rated 5.00 out of 5 based on 1 customer rating'),
        category: this.page.getByText('Hurayra Automation 241107 DONOTDELETE').nth(1),
        totalSold: this.page.getByText('Total Sold PTWO: 0'),
        remaining: this.page.getByText('Remaining PTWO: 105'),
        buyNowButton: this.page.getByRole('link', { name: 'Buy Now PTWO' }).first(),
        viewProductLink: this.page.getByText('View Product PTWO').first()
      }
    };

    // Preset Three Hurayra Automation Locators
    this.presetThreeHeading = this.page.getByRole('heading', { name: 'Preset Three Hurayra Automation 241212', exact: true });
    this.presetThreeProducts = {
      // Product 1 - Preset Three
      hurayraProduct00: {
        container: this.page.locator(':has-text("Hurayra Automation Product 00")').nth(1),
        image: this.page.locator('img[alt="Hurayra Automation Product 00"]').nth(1),
        title: this.page.getByRole('heading', { name: 'Hurayra Automation Product 00', level: 3 }),
        titleLink: this.page.getByRole('link', { name: 'Hurayra Automation Product 00' }).nth(2),
        price: this.page.getByText('Original price was: 100.00৳ . Current price is: 90.00৳ .').nth(1),
        stockOutTag: this.page.getByText('Stock Out PTHR'),
        rating: this.page.getByText('Rated 1.00 out of 5 based on 1 customer rating').nth(1),
        totalSold: this.page.getByText('Total Sold PTHR: 0 Item'),
        viewMoreButton: this.page.getByRole('link', { name: 'View More' }).nth(1),
        category: this.page.getByText('Hurayra Automation 241107 DONOTDELETE').nth(3)
      }
    };

    // Load More Buttons
    this.loadMoreButton241113 = this.page.getByRole('button', { name: 'Load More241113' });
    this.loadMoreButtonPTHR = this.page.getByRole('button', { name: 'Load More PTHR' });
  }

  /**
   * Navigate to the WooCommerce Product List page
   */
  async goto() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Scroll to the Default Style section
   */
  async scrollToDefaultStyle() {
    await this.defaultStyleHeading.scrollIntoViewIfNeeded();
  }

  /**
   * Scroll to the Style 2 section
   */
  async scrollToStyle2() {
    await this.style2Heading.scrollIntoViewIfNeeded();
  }

  /**
   * Scroll to the Style 3 section
   */
  async scrollToStyle3() {
    await this.style3Heading.scrollIntoViewIfNeeded();
  }

  /**
   * Scroll to the Preset 1 Hurayra Automation section
   */
  async scrollToPreset1() {
    await this.preset1Heading.scrollIntoViewIfNeeded();
  }

  /**
   * Scroll to the Preset Two Hurayra Automation section
   */
  async scrollToPresetTwo() {
    await this.presetTwoHeading.scrollIntoViewIfNeeded();
  }

  /**
   * Scroll to the Preset Three Hurayra Automation section
   */
  async scrollToPresetThree() {
    await this.presetThreeHeading.scrollIntoViewIfNeeded();
  }

  /**
   * Check if Default Style section is visible
   * @returns {Promise<boolean>}
   */
  async isDefaultStyleVisible() {
    return await this.defaultStyleHeading.isVisible();
  }

  /**
   * Check if Style 2 section is visible
   * @returns {Promise<boolean>}
   */
  async isStyle2Visible() {
    return await this.style2Heading.isVisible();
  }

  /**
   * Check if Style 3 section is visible
   * @returns {Promise<boolean>}
   */
  async isStyle3Visible() {
    return await this.style3Heading.isVisible();
  }

  /**
   * Check if Preset 1 Hurayra Automation section is visible
   * @returns {Promise<boolean>}
   */
  async isPreset1Visible() {
    return await this.preset1Heading.isVisible();
  }

  /**
   * Check if Preset Two Hurayra Automation section is visible
   * @returns {Promise<boolean>}
   */
  async isPresetTwoVisible() {
    return await this.presetTwoHeading.isVisible();
  }

  /**
   * Check if Preset Three Hurayra Automation section is visible
   * @returns {Promise<boolean>}
   */
  async isPresetThreeVisible() {
    return await this.presetThreeHeading.isVisible();
  }

  /**
   * Check if a product is visible in the Default Style section
   * @param {string} productName - The name of the product to check
   * @returns {Promise<boolean>} - True if the product is visible
   */
  async isDefaultProductVisible(productName) {
    if (productName === 'EcoZen Lounge Comfy Chair') {
      return await this.defaultStyleProducts.ecoZenChair.container.isVisible();
    } else if (productName === 'Saguaro with Wooden stand') {
      return await this.defaultStyleProducts.saguaroChair.container.isVisible();
    } else if (productName === 'Woodland Bliss Lounge Chair') {
      return await this.defaultStyleProducts.woodlandChair.container.isVisible();
    } else if (productName === 'Men Casual Sport Shoes Light Sneakers') {
      return await this.defaultStyleProducts.menSneakers.container.isVisible();
    }
    return false;
  }

  /**
   * Check if a product is visible in the Style 2 section
   * @param {string} productName - The name of the product to check
   * @returns {Promise<boolean>} - True if the product is visible
   */
  async isStyle2ProductVisible(productName) {
    if (productName === 'EcoZen Lounge Comfy Chair') {
      return await this.style2Products.ecoZenChair.container.isVisible();
    }
    return false;
  }

  /**
   * Check if a product is visible in the Style 3 section
   * @param {string} productName - The name of the product to check
   * @returns {Promise<boolean>} - True if the product is visible
   */
  async isStyle3ProductVisible(productName) {
    if (productName === 'EcoZen Lounge Comfy Chair') {
      return await this.style3Products.ecoZenChair.container.isVisible();
    }
    return false;
  }

  /**
   * Check if a product is visible in the Preset 1 section
   * @param {string} productName - The name of the product to check
   * @returns {Promise<boolean>} - True if the product is visible
   */
  async isPreset1ProductVisible(productName) {
    if (productName === 'Hurayra Automation Product 00') {
      return await this.preset1Products.hurayraProduct00.container.isVisible();
    }
    return false;
  }

  /**
   * Check if a product is visible in the Preset Two section
   * @param {string} productName - The name of the product to check
   * @returns {Promise<boolean>} - True if the product is visible
   */
  async isPresetTwoProductVisible(productName) {
    if (productName === 'Hurayra Automation Product 05') {
      return await this.presetTwoProducts.hurayraProduct05.container.isVisible();
    }
    return false;
  }

  /**
   * Check if a product is visible in the Preset Three section
   * @param {string} productName - The name of the product to check
   * @returns {Promise<boolean>} - True if the product is visible
   */
  async isPresetThreeProductVisible(productName) {
    if (productName === 'Hurayra Automation Product 00') {
      return await this.presetThreeProducts.hurayraProduct00.container.isVisible();
    }
    return false;
  }

  /**
   * Check if the Load More button is visible in Preset 1 section
   * @returns {Promise<boolean>} - True if the button is visible
   */
  async isLoadMoreButton241113Visible() {
    return await this.loadMoreButton241113.isVisible();
  }

  /**
   * Check if the Load More button is visible in Preset Three section
   * @returns {Promise<boolean>} - True if the button is visible
   */
  async isLoadMoreButtonPTHRVisible() {
    return await this.loadMoreButtonPTHR.isVisible();
  }

  /**
   * Click on a product title link in the Default Style section
   * @param {string} productName - The name of the product to click
   */
  async clickDefaultProductTitle(productName) {
    if (productName === 'EcoZen Lounge Comfy Chair') {
      await this.defaultStyleProducts.ecoZenChair.titleLink.click();
    } else if (productName === 'Saguaro with Wooden stand') {
      await this.defaultStyleProducts.saguaroChair.titleLink.click();
    } else if (productName === 'Woodland Bliss Lounge Chair') {
      await this.defaultStyleProducts.woodlandChair.titleLink.click();
    } else if (productName === 'Men Casual Sport Shoes Light Sneakers') {
      await this.defaultStyleProducts.menSneakers.titleLink.click();
    }
  }

  /**
   * Click on Add to Cart button for a product in the Default Style section
   * @param {string} productName - The name of the product to add to cart
   */
  async addToCartDefaultProduct(productName) {
    if (productName === 'EcoZen Lounge Comfy Chair') {
      await this.defaultStyleProducts.ecoZenChair.addToCartButton.click();
    } else if (productName === 'Saguaro with Wooden stand') {
      await this.defaultStyleProducts.saguaroChair.addToCartButton.click();
    } else if (productName === 'Men Casual Sport Shoes Light Sneakers') {
      await this.defaultStyleProducts.menSneakers.addToCartButton.click();
    }
  }

  /**
   * Click on Select Options button for Woodland Bliss Lounge Chair
   */
  async selectOptionsForWoodlandChair() {
    await this.defaultStyleProducts.woodlandChair.selectOptionsButton.click();
  }

  /**
   * Click on View Product link for a product in the Default Style section
   * @param {string} productName - The name of the product to view
   */
  async viewDefaultProduct(productName) {
    if (productName === 'EcoZen Lounge Comfy Chair') {
      await this.defaultStyleProducts.ecoZenChair.viewProductLink.click();
    } else if (productName === 'Saguaro with Wooden stand') {
      await this.defaultStyleProducts.saguaroChair.viewProductLink.click();
    } else if (productName === 'Woodland Bliss Lounge Chair') {
      await this.defaultStyleProducts.woodlandChair.viewProductLink.click();
    } else if (productName === 'Men Casual Sport Shoes Light Sneakers') {
      await this.defaultStyleProducts.menSneakers.viewProductLink.click();
    }
  }

  /**
   * Click on Load More button in Preset 1 section
   */
  async clickLoadMore241113() {
    await this.loadMoreButton241113.click();
  }

  /**
   * Click on Load More button in Preset Three section
   */
  async clickLoadMorePTHR() {
    await this.loadMoreButtonPTHR.click();
  }

  /**
   * Click Buy Now button for a product in Preset Two section
   * @param {string} productName - The name of the product to buy
   */
  async buyNowPresetTwoProduct(productName) {
    if (productName === 'Hurayra Automation Product 05') {
      await this.presetTwoProducts.hurayraProduct05.buyNowButton.click();
    }
  }

  /**
   * Click View More button for a product in Preset Three section
   */
  async clickViewMorePresetThree() {
    await this.presetThreeProducts.hurayraProduct00.viewMoreButton.click();
  }

  /**
   * Check if product image is visible in Default Style section
   * @param {string} productName - The name of the product to check
   * @returns {Promise<boolean>} - True if the image is visible
   */
  async isDefaultProductImageVisible(productName) {
    if (productName === 'EcoZen Lounge Comfy Chair') {
      return await this.defaultStyleProducts.ecoZenChair.image.isVisible();
    } else if (productName === 'Saguaro with Wooden stand') {
      return await this.defaultStyleProducts.saguaroChair.image.isVisible();
    } else if (productName === 'Woodland Bliss Lounge Chair') {
      return await this.defaultStyleProducts.woodlandChair.image.isVisible();
    } else if (productName === 'Men Casual Sport Shoes Light Sneakers') {
      return await this.defaultStyleProducts.menSneakers.image.isVisible();
    }
    return false;
  }

  /**
   * Check if product price is visible in Default Style section
   * @param {string} productName - The name of the product to check
   * @returns {Promise<boolean>} - True if the price is visible
   */
  async isDefaultProductPriceVisible(productName) {
    if (productName === 'EcoZen Lounge Comfy Chair') {
      return await this.defaultStyleProducts.ecoZenChair.price.isVisible();
    } else if (productName === 'Saguaro with Wooden stand') {
      return await this.defaultStyleProducts.saguaroChair.price.isVisible();
    } else if (productName === 'Woodland Bliss Lounge Chair') {
      return await this.defaultStyleProducts.woodlandChair.price.isVisible();
    } else if (productName === 'Men Casual Sport Shoes Light Sneakers') {
      return await this.defaultStyleProducts.menSneakers.price.isVisible();
    }
    return false;
  }

  /**
   * Check if product sale tag is visible in Default Style section
   * @param {string} productName - The name of the product to check
   * @returns {Promise<boolean>} - True if the sale tag is visible
   */
  async isDefaultProductSaleTagVisible(productName) {
    if (productName === 'EcoZen Lounge Comfy Chair') {
      return await this.defaultStyleProducts.ecoZenChair.saleTag.isVisible();
    } else if (productName === 'Saguaro with Wooden stand') {
      return await this.defaultStyleProducts.saguaroChair.saleTag.isVisible();
    } else if (productName === 'Men Casual Sport Shoes Light Sneakers') {
      return await this.defaultStyleProducts.menSneakers.saleTag.isVisible();
    }
    return false;
  }
}

module.exports = WooProductListPage;
