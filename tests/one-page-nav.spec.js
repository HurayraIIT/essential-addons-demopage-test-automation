"use strict";

import { test, expect } from "../global-setup";

let slug = "creative-elements/one-page-navigation";

test.describe("One Page Navigation", () => {

  // Load Page Before Each Test
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
  });

  // Navigation Menu - Icon and Text Visibility Check

  test("Icon and Text Visibility", async ({ page }) => {
    await expect.soft(page.getByLabel('Home')).toBeVisible();
    await expect.soft(page.locator(".eael-nav-dot.e-font-icon-svg.e-fas-home")).toBeVisible();
    await expect.soft(page.getByLabel('Features')).toBeVisible();
    await expect.soft(page.locator(".eael-nav-dot.e-font-icon-svg.e-far-star")).toBeVisible();
    await expect.soft(page.getByLabel('Services')).toBeVisible();
    await expect.soft(page.locator(".eael-nav-dot.e-font-icon-svg.e-fas-mouse")).toBeVisible();
    await expect.soft(page.getByLabel('Pricing Plans')).toBeVisible();
    await expect.soft(page.locator(".eael-nav-dot.e-font-icon-svg.e-fas-dollar-sign")).toBeVisible();
    await expect.soft(page.getByLabel('Blog')).toBeVisible();
    await expect.soft(page.locator(".eael-nav-dot.e-font-icon-svg.e-fas-blog")).toBeVisible();
  });

  // Click Navigation Menu to Scroll Into Specific Section & Check Contents
  test("Scroll Into Specific Section & Check Contents", async ({ page }) => {
    await page.getByLabel('Home').click();
    await expect.soft(page.locator('#hero-area')).toBeVisible();
    await page.getByLabel('Features').click();
    await expect.soft(page.locator('#features-section')).toBeVisible();
    await page.getByLabel('Services').click();
    await expect.soft(page.locator('#services-section')).toBeVisible();
    await page.getByLabel('Pricing Plans').click();
    await expect.soft(page.locator('#pricing-plans-section')).toBeVisible();
    await page.getByLabel('Blog').click();
    await expect.soft(page.locator('#blog-posts-section')).toBeVisible();
  });
});
