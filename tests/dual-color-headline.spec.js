"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/dual-color-headline";
let heading = "Dual Color Heading";

test.describe("Dual Color Heading", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/dual-color-headline/
    );
  });

  test("Test Section: Dual Headers With Icon", async ({ page }) => {
    await page.getByRole("heading", { name: "Dual Headers With Icon" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Dual Headers With Icon" })).toBeVisible();
  });
});

test.describe("Dual Color Heading - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    {
      section_name: "Style 01",
      selector: ".elementor-element-1a367022",
    },
    {
      section_name: "Style 02",
      selector: ".elementor-element-51e71f1f",
    },
    {
      section_name: "Style 03",
      selector: ".elementor-element-2a4150af",
    },
    {
      section_name: "Style 04",
      selector: ".elementor-element-163b95da",
    },
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