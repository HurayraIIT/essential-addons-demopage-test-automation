"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/woo-cross-sells";
let heading = "Woo Cross Sells";

test.describe("Woo Cross Sells", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/ea-woo-cross-sells/);
  });

  test("Test Preset 1", async ({ page }) => {
    const selector = ".elementor-element-69e41c91"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Test Preset 2", async ({ page }) => {
    const selector = ".elementor-element-6f15a5a"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Test Preset 3", async ({ page }) => {
    const selector = ".elementor-element-19a8b08c"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });
});
