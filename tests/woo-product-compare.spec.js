"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/woo-product-compare";
let heading = "Woo Product Compare";

test.describe("Woo Product Compare", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/woo-product-compare/
    );
  });

  test("Test Preset 1", async ({ page }) => {
    const selector = ".elementor-element-3a8feff"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Test Preset 2", async ({ page }) => {
    const selector = ".elementor-element-9084e78"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Test Preset 3", async ({ page }) => {
    const selector = ".elementor-element-253a509"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Test Preset 4", async ({ page }) => {
    const selector = ".elementor-element-f8150f4"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Test Preset 5", async ({ page }) => {
    const selector = ".elementor-element-073881b"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Test Preset 6", async ({ page }) => {
    const selector = ".elementor-element-e2905fd"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });
});
