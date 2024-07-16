"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/static-product";
let heading = "Static Product";

test.describe("Static Product", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/static-product/);
  });

  test("Test Section: Hover Effect On Static Product Image", async ({ page }) => {
    await page.getByRole("heading", { name: "Hover Effect On Static Product Image" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Hover Effect On Static Product Image" })).toBeVisible();
    await expect(page.getByText("Display your product images with preferred content")).toBeVisible();
  });
});

test.describe("Static Product - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    { section_name: "Style 01", selector: ".elementor-element-7808a0d7" },
    { section_name: "Style 02", selector: ".elementor-element-1262f1f5" },
    { section_name: "Style 03", selector: ".elementor-element-bb4e271" },
    { section_name: "Style 04", selector: ".elementor-element-37d17c3" },
    { section_name: "Style 05", selector: ".elementor-element-64a150a4" },
    { section_name: "Style 06", selector: ".elementor-element-684de1c7" },
    { section_name: "Style 07", selector: ".elementor-element-57aa1058" },
    { section_name: "Style 08", selector: ".elementor-element-57aa1058" },
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
