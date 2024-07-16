"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/pricing-table";
let heading = "Pricing Table";

test.describe("Pricing Table", () => {
  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/pricing-table/);
  });

  // Pricing Table Style 01
  test("Test Section: Pricing Table Style 01", async ({ page }) => {
    await page.getByRole("heading", { name: "Pricing Table Style 01" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Pricing Table Style 01" })).toBeVisible();
    await expect(page.getByText("Display product pricing table using default style")).toBeVisible();

    const section_root_1 = page.getByTestId("4f6430e6");
    const price_table_1_basic = page.getByTestId("d7c427d");

    await expect(section_root_1.getByRole("heading", { name: "Basic" })).toBeVisible();
    await expect(section_root_1.getByRole("heading", { name: "Standard" })).toBeVisible();
    await expect(section_root_1.getByRole("heading", { name: "Enterprise" })).toBeVisible();
    await expect(price_table_1_basic.locator(".price-currency")).toContainText("$");
    await expect(price_table_1_basic.locator(".price-period")).toContainText("/Mo");
    await expect(price_table_1_basic.locator(".elementor-repeater-item-6264dc5 > .li-icon > .fas")).toBeVisible();
    await expect(price_table_1_basic.locator(".elementor-repeater-item-e478261 > .li-icon > .fas")).toBeVisible();
    await expect(price_table_1_basic.locator(".eael-pricing-button")).toBeVisible();
  });

  test("Structure Test Style 1", async ({ page }) => {
    const selector = ".elementor-element-4f6430e6"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    const filePath = path.join(
      __dirname,
      `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`
    );

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Structure Test Style 2", async ({ page }) => {
    const selector = ".elementor-element-50efced7"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    const filePath = path.join(
      __dirname,
      `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`
    );

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Structure Test Style 3", async ({ page }) => {
    const selector = ".elementor-element-88e53fc"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    const filePath = path.join(
      __dirname,
      `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`
    );

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Structure Test Style 4", async ({ page }) => {
    const selector = ".elementor-element-1ad6147"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    const filePath = path.join(
      __dirname,
      `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`
    );

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Structure Test Style 5", async ({ page }) => {
    const selector = ".elementor-element-411e4933"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    const filePath = path.join(
      __dirname,
      `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`
    );

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });
});

test.describe("Pricing Table - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    { section_name: "Pricing Table - Style 01", selector: ".elementor-element-2e22fef7" },
    { section_name: "Pricing Table - Style 02", selector: ".elementor-element-4f5840d9" },
    { section_name: "Pricing Table - Style 03", selector: ".elementor-element-10296ce2" },
    { section_name: "Pricing Table - Style 04", selector: ".elementor-element-533cbb2b" },
    { section_name: "Pricing Table - Style 05", selector: ".elementor-element-2e34ab74" },
  ];

  target_selectors.forEach((target) => {
    test(target.section_name, async ({ page }) => {
      const selector = target.selector;
      await page.waitForSelector(selector);
      await page.locator(selector).scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);

      const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

      const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
      saveStructure(nodeStructure, filePath);

      const existingNodeStructure = getStructure(filePath);
      expect(nodeStructure).toEqual(existingNodeStructure);
    });
  });
});