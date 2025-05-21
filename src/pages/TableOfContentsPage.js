/**
 * Page Object Model for Table of Contents page
 * URL: https://eael.wpqa.site/extensions/table-of-contents
 */
import { captureComputedStyles } from '../utils/styleUtils.js';

class TableOfContentsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = '/extensions/table-of-contents/';

    // Main elements
    this.pageTitle = this.page.getByRole('heading', { name: 'Table Of Contents Demo 1', exact: true });
    this.pageDescription = this.page.locator('p').filter({ hasText: 'Choose the supported headers types of blogs like H2, H3, H4 or others and it will automatically take those in a table list view' });

    // Table of Contents container - using more specific selectors for the floating TOC
    this.tocContainer = this.page.locator('.eael-toc');
    this.tocHeader = this.page.locator('.eael-toc-header');
    this.tocTitle = this.page.locator('.eael-toc-title');
    this.tocToggleButton = this.page.locator('.eael-toc-button');
    this.tocBody = this.page.locator('.eael-toc-body');
    this.tocList = this.page.locator('.eael-toc-list');

    // Table of Contents items
    this.tocItems = this.page.locator('.eael-toc-list li');
    this.tocLinks = this.page.locator('.eael-toc-list a');

    // Content headings that should be in the TOC
    this.h3Headings = this.page.locator('h3');
    this.h4Headings = this.page.locator('h4');

    // Specific headings
    this.eaDuplicatorHeading = this.page.getByRole('heading', { name: 'EA Duplicator', exact: true });
    this.eaReadingProgressBarHeading = this.page.getByRole('heading', { name: 'EA Reading Progress Bar', exact: true });
    this.eaContentProtectionHeading = this.page.getByRole('heading', { name: 'EA Content Protection', exact: true });
    this.upgradeLicenseHeading = this.page.getByRole('heading', { name: 'Upgrade License', exact: true });
    this.printInvoiceHeading = this.page.getByRole('heading', { name: 'Print Invoice', exact: true });
    this.loremIpsumHeading = this.page.getByRole('heading', { name: 'Lorem ipsum, or lipsum as it is sometimes known', exact: true });
  }

  /**
   * Navigate to the Table of Contents page
   */
  async goto() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Scroll down to make the Table of Contents visible
   * @param {number} scrollAmount - Amount to scroll in pixels
   */
  async scrollDown(scrollAmount = 500) {
    await this.page.evaluate((amount) => {
      window.scrollBy(0, amount);
    }, scrollAmount);
    await this.page.waitForTimeout(1000); // Wait for any animations to complete
  }

  /**
   * Make the Table of Contents visible and expand it
   * This method scrolls down to make the TOC appear, then clicks the toggle button to expand it
   */
  async makeTableOfContentsVisible() {
    // Scroll down to make the Table of Contents appear
    await this.scrollDown(500);

    // Wait for the Table of Contents to appear
    await this.page.waitForTimeout(1000);

    // Check if the toggle button is visible
    const isToggleButtonVisible = await this.tocToggleButton.isVisible().catch(() => false);

    if (isToggleButtonVisible) {
      // Take a screenshot before clicking the toggle button
      await this.page.screenshot({ path: 'toc-before-expand.png' });

      // Click the toggle button to expand the Table of Contents
      await this.tocToggleButton.click();

      // Wait for the Table of Contents to expand
      await this.page.waitForTimeout(1000);

      // Take a screenshot after clicking the toggle button
      await this.page.screenshot({ path: 'toc-after-expand.png' });
    } else {
      console.log('Toggle button not visible after scrolling');
    }
  }

  /**
   * Check if the Table of Contents container is visible
   * @returns {Promise<boolean>}
   */
  async isTocContainerVisible() {
    return await this.tocContainer.isVisible();
  }

  /**
   * Check if the Table of Contents header is visible
   * @returns {Promise<boolean>}
   */
  async isTocHeaderVisible() {
    return await this.tocHeader.isVisible();
  }

  /**
   * Check if the Table of Contents title is visible
   * @returns {Promise<boolean>}
   */
  async isTocTitleVisible() {
    return await this.tocTitle.isVisible();
  }

  /**
   * Check if the Table of Contents toggle button is visible
   * @returns {Promise<boolean>}
   */
  async isTocToggleButtonVisible() {
    return await this.tocToggleButton.isVisible();
  }

  /**
   * Check if the Table of Contents body is visible
   * @returns {Promise<boolean>}
   */
  async isTocBodyVisible() {
    return await this.tocBody.isVisible();
  }

  /**
   * Check if the Table of Contents list is visible
   * @returns {Promise<boolean>}
   */
  async isTocListVisible() {
    return await this.tocList.isVisible();
  }

  /**
   * Get the count of Table of Contents items
   * @returns {Promise<number>}
   */
  async getTocItemsCount() {
    return await this.tocItems.count();
  }

  /**
   * Get the text of all Table of Contents links
   * @returns {Promise<string[]>}
   */
  async getTocLinksText() {
    const count = await this.tocLinks.count();
    const texts = [];

    for (let i = 0; i < count; i++) {
      texts.push(await this.tocLinks.nth(i).textContent());
    }

    return texts;
  }

  /**
   * Click on a Table of Contents link by index
   * @param {number} index - The index of the link to click
   */
  async clickTocLinkByIndex(index) {
    await this.tocLinks.nth(index).click();
  }

  /**
   * Click on a Table of Contents link by text
   * @param {string} text - The text of the link to click
   */
  async clickTocLinkByText(text) {
    await this.tocLinks.filter({ hasText: text }).first().click();
  }

  /**
   * Toggle the Table of Contents
   */
  async toggleToc() {
    await this.tocToggleButton.click();
  }

  /**
   * Check if a heading is visible in the viewport
   * @param {import('@playwright/test').Locator} heading - The heading to check
   * @returns {Promise<boolean>}
   */
  async isHeadingInViewport(heading) {
    return await heading.isVisible();
  }

  /**
   * Capture all computed styles for the Table of Contents
   * @returns {Promise<Object>} Object with all computed styles
   */
  async captureAllStyles() {
    // Navigate to the page
    await this.goto();
    await this.page.waitForLoadState('networkidle');

    // Initialize the styles object
    const allStyles = {
      container: {},
      header: {},
      title: {},
      toggleButton: {},
      body: {},
      list: {},
      items: {}
    };

    // Capture container styles
    allStyles.container = await captureComputedStyles(this.tocContainer, [
      'display', 'position', 'width', 'margin', 'padding', 'backgroundColor',
      'borderRadius', 'boxShadow', 'fontFamily', 'fontSize', 'color'
    ]);

    // Capture header styles
    allStyles.header = await captureComputedStyles(this.tocHeader, [
      'display', 'position', 'width', 'margin', 'padding', 'backgroundColor',
      'borderRadius', 'boxShadow', 'fontFamily', 'fontSize', 'color'
    ]);

    // Capture title styles
    allStyles.title = await captureComputedStyles(this.tocTitle, [
      'display', 'position', 'width', 'margin', 'padding', 'backgroundColor',
      'fontFamily', 'fontSize', 'color', 'fontWeight'
    ]);

    // Capture toggle button styles
    allStyles.toggleButton = await captureComputedStyles(this.tocToggleButton, [
      'display', 'position', 'width', 'height', 'margin', 'padding', 'backgroundColor',
      'borderRadius', 'boxShadow', 'fontFamily', 'fontSize', 'color'
    ]);

    // Capture body styles
    allStyles.body = await captureComputedStyles(this.tocBody, [
      'display', 'position', 'width', 'margin', 'padding', 'backgroundColor',
      'borderRadius', 'boxShadow', 'fontFamily', 'fontSize', 'color'
    ]);

    // Capture list styles
    allStyles.list = await captureComputedStyles(this.tocList, [
      'display', 'position', 'width', 'margin', 'padding', 'backgroundColor',
      'listStyleType', 'fontFamily', 'fontSize', 'color'
    ]);

    // Capture first item styles
    if (await this.tocItems.count() > 0) {
      allStyles.items = await captureComputedStyles(this.tocItems.first(), [
        'display', 'position', 'width', 'margin', 'padding', 'backgroundColor',
        'fontFamily', 'fontSize', 'color', 'lineHeight'
      ]);
    }

    return allStyles;
  }
}

export default TableOfContentsPage;
