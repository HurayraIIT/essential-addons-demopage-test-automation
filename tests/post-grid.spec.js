"use strict";

import { expect, test } from "../global-setup";
import PostGridPage from "../src/pages/PostGridPage";
import { compareStyles, loadStylesFromFile, saveStylesToFile, shouldSkipStyleTests } from '../src/utils/styleUtils.js';

test.describe("Post Grid - Layout & Style Combinations", () => {
  let postGridPage;

  test.beforeEach(async ({ page }) => {
    postGridPage = new PostGridPage(page);
    await postGridPage.goto();
    await page.waitForLoadState("networkidle");
  });

  // Visibility Tests
  test("Grid Layout with Default Style should be visible", async () => {
    await postGridPage.scrollToGridDefault();
    const isVisible = await postGridPage.isGridDefaultVisible();
    expect(isVisible).toBeTruthy();
  });

  test("Grid Layout with Style Two should be visible", async () => {
    await postGridPage.scrollToGridTwo();
    const isVisible = await postGridPage.isGridTwoVisible();
    expect(isVisible).toBeTruthy();
  });

  test("Grid Layout with Style Three should be visible", async () => {
    await postGridPage.scrollToGridThree();
    const isVisible = await postGridPage.isGridThreeVisible();
    expect(isVisible).toBeTruthy();
  });

  test("Masonry Layout with Default Style should be visible", async () => {
    await postGridPage.scrollToMasonryDefault();
    const isVisible = await postGridPage.isMasonryDefaultVisible();
    expect(isVisible).toBeTruthy();
  });

  test("Masonry Layout with Style Two should be visible", async () => {
    await postGridPage.scrollToMasonryTwo();
    const isVisible = await postGridPage.isMasonryTwoVisible();
    expect(isVisible).toBeTruthy();
  });

  test("Masonry Layout with Style Three should be visible", async () => {
    await postGridPage.scrollToMasonryThree();
    const isVisible = await postGridPage.isMasonryThreeVisible();
    expect(isVisible).toBeTruthy();
  });

  // Content Tests for Grid Layout with Default Style
  test("Grid Layout with Default Style should have correct content", async ({ page }) => {
    await postGridPage.scrollToGridDefault();

    // Check post title
    await expect(postGridPage.postElements.gridDefault.postTitle).toBeVisible();

    // Check post content
    await expect(postGridPage.postElements.gridDefault.postContent).toBeVisible();

    // Check read more link
    await expect(postGridPage.postElements.gridDefault.readMoreLink).toBeVisible();
    await expect(postGridPage.postElements.gridDefault.readMoreLink).toHaveText("Read More");

    // Check author information
    await expect(postGridPage.postElements.gridDefault.authorName).toBeVisible();
    await expect(postGridPage.postElements.gridDefault.authorName).toHaveText("Md Nahid Hasan");

    // Check date information
    await expect(postGridPage.postElements.gridDefault.postDate).toBeVisible();
  });

  // Content Tests for Grid Layout with Style Two
  test("Grid Layout with Style Two should have correct content", async ({ page }) => {
    await postGridPage.scrollToGridTwo();

    // Check post title
    await expect(postGridPage.postElements.gridTwo.postTitle).toBeVisible();

    // Check post content
    await expect(postGridPage.postElements.gridTwo.postContent).toBeVisible();

    // Check read more link
    await expect(postGridPage.postElements.gridTwo.readMoreLink).toBeVisible();
    await expect(postGridPage.postElements.gridTwo.readMoreLink).toHaveText("Read More");

    // Check date information
    await expect(postGridPage.postElements.gridTwo.postDate).toBeVisible();
  });

  // Content Tests for Grid Layout with Style Three
  test("Grid Layout with Style Three should have correct content", async ({ page }) => {
    await postGridPage.scrollToGridThree();

    // Check post title
    await expect(postGridPage.postElements.gridThree.postTitle).toBeVisible();

    // Check post content
    await expect(postGridPage.postElements.gridThree.postContent).toBeVisible();

    // Check read more link
    await expect(postGridPage.postElements.gridThree.readMoreLink).toBeVisible();
    await expect(postGridPage.postElements.gridThree.readMoreLink).toHaveText("Read More");

    // Check author information
    await expect(postGridPage.postElements.gridThree.authorName).toBeVisible();
    await expect(postGridPage.postElements.gridThree.authorName).toHaveText("Md Nahid Hasan");

    // Check date information
    await expect(postGridPage.postElements.gridThree.postDate).toBeVisible();
  });

  // Content Tests for Masonry Layout with Default Style
  test("Masonry Layout with Default Style should have correct content", async ({ page }) => {
    await postGridPage.scrollToMasonryDefault();

    // Check post title
    await expect(postGridPage.postElements.masonryDefault.postTitle).toBeVisible();

    // Check post content
    await expect(postGridPage.postElements.masonryDefault.postContent).toBeVisible();

    // Check read more link
    await expect(postGridPage.postElements.masonryDefault.readMoreLink).toBeVisible();
    await expect(postGridPage.postElements.masonryDefault.readMoreLink).toHaveText("Read More");

    // Check author information
    await expect(postGridPage.postElements.masonryDefault.authorName).toBeVisible();
    await expect(postGridPage.postElements.masonryDefault.authorName).toHaveText("Md Nahid Hasan");

    // Check date information
    await expect(postGridPage.postElements.masonryDefault.postDate).toBeVisible();
  });

  // Content Tests for Masonry Layout with Style Two
  test("Masonry Layout with Style Two should have correct content", async ({ page }) => {
    await postGridPage.scrollToMasonryTwo();

    // Check post title
    await expect(postGridPage.postElements.masonryTwo.postTitle).toBeVisible();

    // Check post content
    await expect(postGridPage.postElements.masonryTwo.postContent).toBeVisible();

    // Check read more link
    await expect(postGridPage.postElements.masonryTwo.readMoreLink).toBeVisible();
    await expect(postGridPage.postElements.masonryTwo.readMoreLink).toHaveText("Read More");

    // Check date information
    await expect(postGridPage.postElements.masonryTwo.postDate).toBeVisible();
  });

  // Content Tests for Masonry Layout with Style Three
  test("Masonry Layout with Style Three should have correct content", async ({ page }) => {
    await postGridPage.scrollToMasonryThree();

    // Check post title
    await expect(postGridPage.postElements.masonryThree.postTitle).toBeVisible();

    // Check post content
    await expect(postGridPage.postElements.masonryThree.postContent).toBeVisible();

    // Check read more link
    await expect(postGridPage.postElements.masonryThree.readMoreLink).toBeVisible();
    await expect(postGridPage.postElements.masonryThree.readMoreLink).toHaveText("Read More");

    // Check author information
    await expect(postGridPage.postElements.masonryThree.authorName).toBeVisible();
    await expect(postGridPage.postElements.masonryThree.authorName).toHaveText("Md Nahid Hasan");

    // Check date information
    await expect(postGridPage.postElements.masonryThree.postDate).toBeVisible();
  });

  // Style Tests
  test("Capture and compare styles with baseline", async ({ page }) => {
    // Check if we should skip style tests
    if (shouldSkipStyleTests()) {
      console.log('Skipping style tests as configured by environment variables');
      return;
    }
    
    // Check if we need to regenerate the baseline
    const regenerateBaseline = process.env.REGENERATE_BASELINE === 'true';
    const isCI = process.env.CI === 'true';

    // Capture current styles
    const currentStyles = await postGridPage.captureAllStyles();

    if (regenerateBaseline) {
      // Save current styles as baseline - both generic and environment-specific
      saveStylesToFile(currentStyles, 'post-grid-styles-baseline');
      saveStylesToFile(currentStyles, 'post-grid-styles-baseline', true);
      console.log('Baseline styles regenerated for Post Grid (generic and environment-specific)');
    } else if (isCI) {
      // In CI, use environment-specific baseline with tolerances
      console.log('Running in CI environment - using environment-specific baseline with tolerances');
      
      // Load environment-specific baseline
      const baselineStyles = loadStylesFromFile('post-grid-styles-baseline', true);
      
      // If environment-specific baseline doesn't exist yet, create it
      if (!baselineStyles) {
        saveStylesToFile(currentStyles, 'post-grid-styles-baseline', true);
        console.log('Environment-specific baseline styles created for Post Grid');
        return;
      }
      
      // Define comparison options with relaxed tolerances for CI
      const comparisonOptions = {
        strictMode: false,
        tolerances: {
          'width': 10,
          'height': 10,
          'font-size': 2,
          'line-height': 2,
          'margin': 5,
          'padding': 5,
          'border-radius': 2,
          'top': 10,
          'left': 10,
          'right': 10,
          'bottom': 10
        }
      };
      
      // Run comparisons with tolerances
      runStyleComparisons(currentStyles, baselineStyles, comparisonOptions);
    } else {
      // Local environment - use standard comparison
      
      // Load baseline styles (preferring environment-specific if available)
      const baselineStyles = loadStylesFromFile('post-grid-styles-baseline', true);
      
      // If baseline doesn't exist yet, create it
      if (!baselineStyles) {
        saveStylesToFile(currentStyles, 'post-grid-styles-baseline');
        saveStylesToFile(currentStyles, 'post-grid-styles-baseline', true);
        console.log('Baseline styles created for Post Grid (generic and environment-specific)');
        return;
      }
      
      // Run comparisons with standard tolerances
      runStyleComparisons(currentStyles, baselineStyles);
    }
    
    // Helper function to run all style comparisons
    function runStyleComparisons(currentStyles, baselineStyles, options = {}) {
      // Compare Grid Default styles
      const gridDefaultComparison = compareStyles(
        { post: currentStyles.gridDefault },
        { post: baselineStyles.gridDefault },
        options
      );

      // Compare Grid Style Two styles
      const gridTwoComparison = compareStyles(
        { post: currentStyles.gridTwo },
        { post: baselineStyles.gridTwo },
        options
      );

      // Compare Grid Style Three styles
      const gridThreeComparison = compareStyles(
        { post: currentStyles.gridThree },
        { post: baselineStyles.gridThree },
        options
      );

      // Compare Masonry Default styles
      const masonryDefaultComparison = compareStyles(
        { post: currentStyles.masonryDefault },
        { post: baselineStyles.masonryDefault },
        options
      );

      // Compare Masonry Style Two styles
      const masonryTwoComparison = compareStyles(
        { post: currentStyles.masonryTwo },
        { post: baselineStyles.masonryTwo },
        options
      );

      // Compare Masonry Style Three styles
      const masonryThreeComparison = compareStyles(
        { post: currentStyles.masonryThree },
        { post: baselineStyles.masonryThree },
        options
      );

      // Log any differences
      if (!gridDefaultComparison.matches) {
        console.log('Style differences found in Grid Default:', gridDefaultComparison.differences);
      }

      if (!gridTwoComparison.matches) {
        console.log('Style differences found in Grid Style Two:', gridTwoComparison.differences);
      }

      if (!gridThreeComparison.matches) {
        console.log('Style differences found in Grid Style Three:', gridThreeComparison.differences);
      }

      if (!masonryDefaultComparison.matches) {
        console.log('Style differences found in Masonry Default:', masonryDefaultComparison.differences);
      }

      if (!masonryTwoComparison.matches) {
        console.log('Style differences found in Masonry Style Two:', masonryTwoComparison.differences);
      }

      if (!masonryThreeComparison.matches) {
        console.log('Style differences found in Masonry Style Three:', masonryThreeComparison.differences);
      }

      // Assert that styles match
      expect(gridDefaultComparison.matches).toBeTruthy();
      expect(gridTwoComparison.matches).toBeTruthy();
      expect(gridThreeComparison.matches).toBeTruthy();
      expect(masonryDefaultComparison.matches).toBeTruthy();
      expect(masonryTwoComparison.matches).toBeTruthy();
      expect(masonryThreeComparison.matches).toBeTruthy();
    }
  });
});
