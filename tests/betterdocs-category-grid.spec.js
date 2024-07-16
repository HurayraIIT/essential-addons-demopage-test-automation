"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/betterdocs-category-grid";
let heading = "BetterDocs Category Grid";

test.describe("BetterDocs Category Grid", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation", exact: true })).toHaveAttribute(
      "href",
      /docs\/betterdocs-category-grid/
    );
  });

  test("Test Section: Stunning Grid", async ({ page }) => {
    await page.getByRole("heading", { name: "Stunning Grid" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Stunning Grid" })).toBeVisible();
    await expect(page.getByText("Make it available for any type of posts, besides")).toBeVisible();
  });
});

test.describe("BetterDocs Category Grid - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    { section_name: "EA BetterDocs Category Grid - Style 01", selector: ".elementor-element-36d08f5" },
    { section_name: "EA BetterDocs Category Grid - Style 02", selector: ".elementor-element-f5f1aeb" },
  ];

  target_selectors.forEach((target) => {
    test(target.section_name, async ({ page, browserName }) => {
      if (browserName.toLowerCase() === "webkit") return;

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
