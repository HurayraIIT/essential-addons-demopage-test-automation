/**
 * Page Object Model for Post Grid page
 * URL: https://eael.wpqa.site/dynamic-content-elements/post-grid/
 */
import { captureComputedStyles } from '../utils/styleUtils.js';

class PostGridPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = '/dynamic-content-elements/post-grid/';

    // Common elements
    this.startHeading = this.page.getByRole('heading', { name: '>>> Layout & Style Combinations Start <<<', exact: true });
    this.endHeading = this.page.getByRole('heading', { name: '>>> Layout & Style Combinations End <<<', exact: true });

    // Grid Layout with Default Style
    this.gridDefaultHeading = this.page.getByRole('heading', { name: 'Layout: Gird | Style: Default', exact: true });
    this.gridDefaultSection = this.page.locator('article').filter({ hasText: 'Layout: Gird | Style: Default' }).first();
    this.gridDefaultPosts = this.gridDefaultSection.locator('article.eael-grid-post');

    // Grid Layout with Style Two
    this.gridTwoHeading = this.page.getByRole('heading', { name: 'Layout: Grid | Style: Two', exact: true });
    this.gridTwoSection = this.page.locator('article').filter({ hasText: 'Layout: Grid | Style: Two' }).first();
    this.gridTwoPosts = this.gridTwoSection.locator('article.eael-grid-post');

    // Grid Layout with Style Three
    this.gridThreeHeading = this.page.getByRole('heading', { name: 'Layout: Grid | Style: Three', exact: true });
    this.gridThreeSection = this.page.locator('article').filter({ hasText: 'Layout: Grid | Style: Three' }).first();
    this.gridThreePosts = this.gridThreeSection.locator('article.eael-grid-post');

    // Masonry Layout with Default Style
    this.masonryDefaultHeading = this.page.getByRole('heading', { name: 'Layout: Masonry | Style: Default', exact: true });
    this.masonryDefaultSection = this.page.locator('article').filter({ hasText: 'Layout: Masonry | Style: Default' }).first();
    this.masonryDefaultPosts = this.masonryDefaultSection.locator('article.eael-grid-post');

    // Masonry Layout with Style Two
    this.masonryTwoHeading = this.page.getByRole('heading', { name: 'Layout: Masonry | Style: Two', exact: true });
    this.masonryTwoSection = this.page.locator('article').filter({ hasText: 'Layout: Masonry | Style: Two' }).first();
    this.masonryTwoPosts = this.masonryTwoSection.locator('article.eael-grid-post');

    // Masonry Layout with Style Three
    this.masonryThreeHeading = this.page.getByRole('heading', { name: 'Layout: Masonry | Style: Three', exact: true });
    this.masonryThreeSection = this.page.locator('article').filter({ hasText: 'Layout: Masonry | Style: Three' }).first();
    this.masonryThreePosts = this.masonryThreeSection.locator('article.eael-grid-post');

    // Post elements for each layout and style
    this.postElements = {
      // Grid Default
      gridDefault: {
        postTitle: this.gridDefaultPosts.first().locator('h2.eael-entry-title'),
        postContent: this.gridDefaultPosts.first().locator('.eael-grid-post-excerpt p'),
        readMoreLink: this.gridDefaultPosts.first().locator('a.eael-post-elements-readmore-btn'),
        authorName: this.gridDefaultPosts.first().locator('a').filter({ hasText: 'Md Nahid Hasan' }).first(),
        postDate: this.gridDefaultPosts.first().locator('time')
      },
      // Grid Style Two
      gridTwo: {
        postTitle: this.gridTwoPosts.first().locator('h2.eael-entry-title'),
        postContent: this.gridTwoPosts.first().locator('.eael-grid-post-excerpt p'),
        readMoreLink: this.gridTwoPosts.first().locator('a.eael-post-elements-readmore-btn'),
        postDate: this.gridTwoPosts.first().locator('time')
      },
      // Grid Style Three
      gridThree: {
        postTitle: this.gridThreePosts.first().locator('h2.eael-entry-title'),
        postContent: this.gridThreePosts.first().locator('.eael-grid-post-excerpt p'),
        readMoreLink: this.gridThreePosts.first().locator('a.eael-post-elements-readmore-btn'),
        authorName: this.gridThreePosts.first().locator('a').filter({ hasText: 'Md Nahid Hasan' }).first(),
        postDate: this.gridThreePosts.first().locator('time')
      },
      // Masonry Default
      masonryDefault: {
        postTitle: this.masonryDefaultPosts.first().locator('h2.eael-entry-title'),
        postContent: this.masonryDefaultPosts.first().locator('.eael-grid-post-excerpt p'),
        readMoreLink: this.masonryDefaultPosts.first().locator('a.eael-post-elements-readmore-btn'),
        authorName: this.masonryDefaultPosts.first().locator('a').filter({ hasText: 'Md Nahid Hasan' }).first(),
        postDate: this.masonryDefaultPosts.first().locator('time')
      },
      // Masonry Style Two
      masonryTwo: {
        postTitle: this.masonryTwoPosts.first().locator('h2.eael-entry-title'),
        postContent: this.masonryTwoPosts.first().locator('.eael-grid-post-excerpt p'),
        readMoreLink: this.masonryTwoPosts.first().locator('a.eael-post-elements-readmore-btn'),
        postDate: this.masonryTwoPosts.first().locator('time')
      },
      // Masonry Style Three
      masonryThree: {
        postTitle: this.masonryThreePosts.first().locator('h2.eael-entry-title'),
        postContent: this.masonryThreePosts.first().locator('.eael-grid-post-excerpt p'),
        readMoreLink: this.masonryThreePosts.first().locator('a.eael-post-elements-readmore-btn'),
        authorName: this.masonryThreePosts.first().locator('a').filter({ hasText: 'Md Nahid Hasan' }).first(),
        postDate: this.masonryThreePosts.first().locator('time')
      }
    };
  }

  /**
   * Navigate to the Post Grid page
   */
  async goto() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Scroll to Grid Default section
   */
  async scrollToGridDefault() {
    await this.gridDefaultHeading.scrollIntoViewIfNeeded();
  }

  /**
   * Scroll to Grid Style Two section
   */
  async scrollToGridTwo() {
    await this.gridTwoHeading.scrollIntoViewIfNeeded();
  }

  /**
   * Scroll to Grid Style Three section
   */
  async scrollToGridThree() {
    await this.gridThreeHeading.scrollIntoViewIfNeeded();
  }

  /**
   * Scroll to Masonry Default section
   */
  async scrollToMasonryDefault() {
    await this.masonryDefaultHeading.scrollIntoViewIfNeeded();
  }

  /**
   * Scroll to Masonry Style Two section
   */
  async scrollToMasonryTwo() {
    await this.masonryTwoHeading.scrollIntoViewIfNeeded();
  }

  /**
   * Scroll to Masonry Style Three section
   */
  async scrollToMasonryThree() {
    await this.masonryThreeHeading.scrollIntoViewIfNeeded();
  }

  /**
   * Check if Grid Default section is visible
   * @returns {Promise<boolean>}
   */
  async isGridDefaultVisible() {
    return await this.gridDefaultHeading.isVisible();
  }

  /**
   * Check if Grid Style Two section is visible
   * @returns {Promise<boolean>}
   */
  async isGridTwoVisible() {
    return await this.gridTwoHeading.isVisible();
  }

  /**
   * Check if Grid Style Three section is visible
   * @returns {Promise<boolean>}
   */
  async isGridThreeVisible() {
    return await this.gridThreeHeading.isVisible();
  }

  /**
   * Check if Masonry Default section is visible
   * @returns {Promise<boolean>}
   */
  async isMasonryDefaultVisible() {
    return await this.masonryDefaultHeading.isVisible();
  }

  /**
   * Check if Masonry Style Two section is visible
   * @returns {Promise<boolean>}
   */
  async isMasonryTwoVisible() {
    return await this.masonryTwoHeading.isVisible();
  }

  /**
   * Check if Masonry Style Three section is visible
   * @returns {Promise<boolean>}
   */
  async isMasonryThreeVisible() {
    return await this.masonryThreeHeading.isVisible();
  }

  /**
   * Capture all computed styles for all sections
   * @returns {Promise<Object>} Object with all computed styles
   */
  async captureAllStyles() {
    // Navigate to the page
    await this.goto();
    await this.page.waitForLoadState('networkidle');

    // Initialize the styles object
    const allStyles = {
      gridDefault: {},
      gridTwo: {},
      gridThree: {},
      masonryDefault: {},
      masonryTwo: {},
      masonryThree: {}
    };

    // Capture Grid Default styles
    await this.scrollToGridDefault();
    allStyles.gridDefault = await captureComputedStyles(this.gridDefaultPosts.first(), [
      'display', 'position', 'width', 'margin', 'padding', 'backgroundColor',
      'borderRadius', 'boxShadow', 'fontFamily', 'fontSize', 'color'
    ]);

    // Capture Grid Style Two styles
    await this.scrollToGridTwo();
    allStyles.gridTwo = await captureComputedStyles(this.gridTwoPosts.first(), [
      'display', 'position', 'width', 'margin', 'padding', 'backgroundColor',
      'borderRadius', 'boxShadow', 'fontFamily', 'fontSize', 'color'
    ]);

    // Capture Grid Style Three styles
    await this.scrollToGridThree();
    allStyles.gridThree = await captureComputedStyles(this.gridThreePosts.first(), [
      'display', 'position', 'width', 'margin', 'padding', 'backgroundColor',
      'borderRadius', 'boxShadow', 'fontFamily', 'fontSize', 'color'
    ]);

    // Capture Masonry Default styles
    await this.scrollToMasonryDefault();
    allStyles.masonryDefault = await captureComputedStyles(this.masonryDefaultPosts.first(), [
      'display', 'position', 'width', 'margin', 'padding', 'backgroundColor',
      'borderRadius', 'boxShadow', 'fontFamily', 'fontSize', 'color'
    ]);

    // Capture Masonry Style Two styles
    await this.scrollToMasonryTwo();
    allStyles.masonryTwo = await captureComputedStyles(this.masonryTwoPosts.first(), [
      'display', 'position', 'width', 'margin', 'padding', 'backgroundColor',
      'borderRadius', 'boxShadow', 'fontFamily', 'fontSize', 'color'
    ]);

    // Capture Masonry Style Three styles
    await this.scrollToMasonryThree();
    allStyles.masonryThree = await captureComputedStyles(this.masonryThreePosts.first(), [
      'display', 'position', 'width', 'margin', 'padding', 'backgroundColor',
      'borderRadius', 'boxShadow', 'fontFamily', 'fontSize', 'color'
    ]);

    return allStyles;
  }
}

export default PostGridPage;
