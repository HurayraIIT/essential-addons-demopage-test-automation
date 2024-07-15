"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/advanced-menu";
let heading = "Advanced Menu";

test.describe("Advanced Menu - Style Default Skin & Horizontal Layout", () => {
  let menu = "";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/content-elements\/ea-advanced-menu/
    );

    menu = page.getByTestId("6a863ab4");
    await menu.scrollIntoViewIfNeeded();
  });

  test("All sections should be present", async ({ page }) => {
    await expect(menu).toBeVisible();

    await expect(menu.locator("#menu-item-4842").getByRole("link", { name: "Home" })).toBeVisible();
    await expect(menu.locator("#menu-item-4843").getByRole("link", { name: "Elements" })).toBeVisible();
    await expect(menu.locator("#menu-item-4859").getByRole("link", { name: "Support" })).toBeVisible();
    await expect(menu.locator("#menu-item-4861").getByRole("link", { name: "Blog" })).toBeVisible();
    await expect(menu.locator("#menu-item-4862").getByRole("link", { name: "Contact Us" })).toBeVisible();
    await expect(menu.locator("#menu-item-4843").getByRole("link", { name: "Elements" })).toBeVisible();

    // Submenu should be hidden
    await expect(menu.getByRole("link", { name: "Advanced Accordion for" })).toBeHidden();
    await expect(menu.getByRole("link", { name: "Advanced Menu" })).toBeHidden();

    // Hover the menu item to reveal submenu
    await menu.locator("#menu-item-4843").getByRole("link", { name: "Elements" }).hover();
    await expect(menu.getByRole("link", { name: "Advanced Accordion for" })).toBeVisible();
    await expect(menu.getByRole("link", { name: "Advanced Menu" })).toBeVisible();
  });
});

test.describe("Advanced Menu - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  test("Style 1", async ({ page }) => {
    const selector = ".elementor-element-6a863ab4"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Style 2", async ({ page }) => {
    const selector = ".elementor-element-529f18dc"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Style 3", async ({ page }) => {
    const selector = ".elementor-element-25174124"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Style 4", async ({ page }) => {
    const selector = ".elementor-element-1f756f77"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Style 5", async ({ page }) => {
    const selector = ".elementor-element-43c92a5d"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Style 6", async ({ page }) => {
    const selector = ".elementor-element-6d6ae8bd"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Style 7", async ({ page }) => {
    const selector = ".elementor-element-1bcb0b1e"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Style 8", async ({ page }) => {
    const selector = ".elementor-element-60971be4"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Style 9", async ({ page }) => {
    const selector = ".elementor-element-59e78009"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Style 10", async ({ page }) => {
    const selector = ".elementor-element-780d2b34"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Style 11", async ({ page }) => {
    const selector = ".elementor-element-580e5e1b"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });
});
