"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/business-reviews";
let heading = "Business Reviews";

test.describe("Business Reviews", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/ea-business-reviews/);
  });

  test("Test Section: Style Reviews With Preset 2", async ({ page }) => {
    await page.getByRole("heading", { name: "Style Reviews With Preset 2" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Style Reviews With Preset 2" })).toBeVisible();
  });
});

test.describe("Business Reviews - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    { section_name: "Business Reviews - Style 01", selector: ".elementor-element-36d08f5" },
    { section_name: "Business Reviews - Style 02", selector: ".elementor-element-f5f1aeb" },
  ];

  target_selectors.forEach((target) => {
    test(target.section_name, async ({ page, browserName }) => {
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