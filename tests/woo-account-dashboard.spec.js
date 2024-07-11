"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/woo-account-dashboard";
let heading = "Woo Account Dashboard";

test.describe("Woo Account Dashboard - Dashboard", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/ea-woo-account-dashboard/
    );
  });

  test("Test Preset 1", async ({ page }) => {
    const selector = ".elementor-element-347d980c"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Test Preset 2", async ({ page }) => {
    const selector = ".elementor-element-70de5570"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Test Preset 3", async ({ page }) => {
    const selector = ".elementor-element-6b48756e"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });
});

test.describe("Woo Account Dashboard - Orders", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${slug}/orders`);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/ea-woo-account-dashboard/
    );
  });

  test("Test Preset 1", async ({ page }) => {
    const selector = ".elementor-element-347d980c"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-orders-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Test Preset 2", async ({ page }) => {
    const selector = ".elementor-element-70de5570"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-orders-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Test Preset 3", async ({ page }) => {
    const selector = ".elementor-element-6b48756e"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-orders-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });
});

test.describe("Woo Account Dashboard - Downloads", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${slug}/downloads`);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/ea-woo-account-dashboard/
    );
  });

  test("Test Preset 1", async ({ page }) => {
    const selector = ".elementor-element-347d980c"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-downloads-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Test Preset 2", async ({ page }) => {
    const selector = ".elementor-element-70de5570"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-downloads-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Test Preset 3", async ({ page }) => {
    const selector = ".elementor-element-6b48756e"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-downloads-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });
});

test.describe("Woo Account Dashboard - Addresses", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${slug}/edit-address`);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/ea-woo-account-dashboard/
    );
  });

  test("Test Preset 1", async ({ page }) => {
    const selector = ".elementor-element-347d980c"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-addresses-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Test Preset 2", async ({ page }) => {
    const selector = ".elementor-element-70de5570"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-addresses-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Test Preset 3", async ({ page }) => {
    const selector = ".elementor-element-6b48756e"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-addresses-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });
});

test.describe("Woo Account Dashboard - Account Details", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${slug}/edit-account`);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/ea-woo-account-dashboard/
    );
  });

  test("Test Preset 1", async ({ page }) => {
    const selector = ".elementor-element-347d980c"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-account-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Test Preset 2", async ({ page }) => {
    const selector = ".elementor-element-70de5570"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-account-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Test Preset 3", async ({ page }) => {
    const selector = ".elementor-element-6b48756e"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-account-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });
});
