"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/table";
let heading = "Data Table";

test.describe("Data Table", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/content-elements\/data-table/);
  });

  test("Test Section: Data Table Style 01", async ({ page }) => {
    await page.getByRole("heading", { name: "Data Table Style 01" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Data Table Style 01" })).toBeVisible();
    await expect(page.getByText("Add table headers with icon, include table row,")).toBeVisible();
  });
});

test.describe("Data Table - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    {
      section_name: "Style 01",
      selector: ".elementor-element-36eeb442",
    },
    {
      section_name: "Style 02",
      selector: ".elementor-element-8b49e34",
    },
    {
      section_name: "Style 03",
      selector: ".elementor-element-66d9ef61",
    },
    {
      section_name: "Style 04",
      selector: ".elementor-element-1c75c528",
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
