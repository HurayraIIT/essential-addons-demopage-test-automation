"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/creative-buttons";
let heading = "Creative Buttons";

test.describe("Creative Buttons", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/creative-buttons/);
  });

  test("Test Section: Primary & Secondary Content Settings", async ({ page }) => {
    await page.getByRole("heading", { name: "Primary & Secondary Content Settings" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Primary & Secondary Content Settings" })).toBeVisible();
    await expect(page.getByText("Make your button look appealing towards visitors by")).toBeVisible();
  });
});

test.describe("Creative Buttons - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    { section_name: "Style 01", selector: ".elementor-element-2b5ab2ba" },
    { section_name: "Style 02", selector: ".elementor-element-2b4251da" },
    { section_name: "Style 03", selector: ".elementor-element-5b575267" },
    { section_name: "Style 04", selector: ".elementor-element-12ff426a" },
    { section_name: "Style 05", selector: ".elementor-element-141f1a90" },
    { section_name: "Style 06", selector: ".elementor-element-25be6eb3" },
    { section_name: "Style 07", selector: ".elementor-element-2b3094a0" },
    { section_name: "Style 08", selector: ".elementor-element-31152dc0" },
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
