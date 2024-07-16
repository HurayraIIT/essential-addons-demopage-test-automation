"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/flip-box";
let heading = "Flip Box";

test.describe("Flip Box", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/flip-box/);
  });

  test("Test Section: Use Flip Top Style Of Flip Box", async ({ page }) => {
    await page.getByRole("heading", { name: "Use Flip Top Style Of Flip Box" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Use Flip Top Style Of Flip Box" })).toBeVisible();
    await expect(page.getByText("Choose ‘Flip Top’ as your ‘Flipbox Type’, add images")).toBeVisible();
  });
});

test.describe("Flip Box - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    { section_name: "Flip Box 01", selector: ".elementor-element-49650c6" },
    { section_name: "Flip Box 02", selector: ".elementor-element-6cea9a21" },
    { section_name: "Flip Box 03", selector: ".elementor-element-74b635b7" },
    { section_name: "Flip Box 04", selector: ".elementor-element-490dbf67" },
    { section_name: "Flip Box 05", selector: ".elementor-element-3b548f01" },
  ];

  target_selectors.forEach((target) => {
    test(target.section_name, async ({ page }) => {
      const selector = target.selector;
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
});
