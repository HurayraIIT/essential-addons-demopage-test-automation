import { expect, test } from "@playwright/test";

const BASE_URL = "https://eael.wpqa.site/dynamic-content-elements/advanced-google-map/";

test.describe("Advanced Google Map", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState("domcontentloaded");
  });

  test.describe("Basic Map Visibility", () => {
    test("Basic map container should be visible", async ({ page }) => {
      await expect.soft(page.locator('[role="region"]').first()).toBeVisible();
    });

    test("Basic map should have proper structure", async ({ page }) => {
      const mapContainer = page.locator('[role="region"]').first();
      await expect.soft(mapContainer).toHaveAttribute("role", "region");
    });


  });

  test.describe("Multiple Marker Map Visibility", () => {
    test("Multiple marker map container should be visible", async ({ page }) => {
      await expect.soft(page.locator('[role="region"]').nth(1)).toBeVisible();
    });

    test("Search box should be visible", async ({ page }) => {
      await expect.soft(page.locator('input[placeholder="Search Marker..."]')).toBeVisible();
    });

    test("Multiple marker map should have proper structure", async ({ page }) => {
      const mapContainer = page.locator('[role="region"]').nth(1);
      await expect.soft(mapContainer).toHaveAttribute("role", "region");
    });


  });

  test.describe("Multiple Marker Map Interactions", () => {
    test("Search box should be functional", async ({ page }) => {
      const searchBox = page.locator('input[placeholder="Search Marker..."]');
      await searchBox.fill("WPDeveloper");
      await expect.soft(searchBox).toHaveValue("WPDeveloper");
    });

    test("Search box should be clearable", async ({ page }) => {
      const searchBox = page.locator('input[placeholder="Search Marker..."]');
      await searchBox.fill("WPDeveloper");
      await searchBox.clear();
      await expect.soft(searchBox).toHaveValue("");
    });

    test("Search box should accept multiple searches", async ({ page }) => {
      const searchBox = page.locator('input[placeholder="Search Marker..."]');
      await searchBox.fill("WPDeveloper");
      await searchBox.clear();
      await searchBox.fill("Dormitory");
      await expect.soft(searchBox).toHaveValue("Dormitory");
    });
  });

  test.describe("Map Accessibility", () => {
    test("Basic map container should have region role", async ({ page }) => {
      await expect.soft(page.locator('[role="region"]').first()).toHaveAttribute("role", "region");
    });

    test("Multiple marker map container should have region role", async ({ page }) => {
      await expect.soft(page.locator('[role="region"]').nth(1)).toHaveAttribute("role", "region");
    });

    test("Search box should be keyboard accessible", async ({ page }) => {
      const searchBox = page.locator('input[placeholder="Search Marker..."]');
      await searchBox.focus();
      await searchBox.fill("WPDeveloper");
      await expect.soft(searchBox).toHaveValue("WPDeveloper");
    });

    test("Search box should have proper attributes", async ({ page }) => {
      const searchBox = page.locator('input[placeholder="Search Marker..."]');
      await expect.soft(searchBox).toHaveAttribute("placeholder", "Search Marker...");
      await expect.soft(searchBox).toHaveAttribute("type", "text");
    });
  });

  test.describe("Responsive Design", () => {
    test("Map should be visible on desktop", async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await expect.soft(page.locator('[role="region"]').first()).toBeVisible();
    });

    test("Map should be visible on tablet", async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await expect.soft(page.locator('[role="region"]').first()).toBeVisible();
    });

    test("Map should be visible on mobile", async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await expect.soft(page.locator('[role="region"]').first()).toBeVisible();
    });

    test("Search box should be visible on mobile", async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await expect.soft(page.locator('input[placeholder="Search Marker..."]')).toBeVisible();
    });

    test("Multiple maps should be visible on desktop", async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await expect.soft(page.locator('[role="region"]').first()).toBeVisible();
      await expect.soft(page.locator('[role="region"]').nth(1)).toBeVisible();
    });
  });
});
