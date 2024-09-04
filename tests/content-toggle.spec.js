"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/content-toggle";
let heading = "Content Toggle";

test.describe("Content Toggle", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/content-toggle/);
  });

  test("Test Section: Display Save Template For Content Toggle", async ({ page }) => {
    await page.getByRole("heading", { name: "Display Save Template For Content Toggle" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Display Save Template For Content Toggle" })).toBeVisible();
    await expect(page.getByText("Choose your save template designs & set")).toBeVisible();
  });
});

test.describe("Content Toggle - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    {
      section_name: "Style 01",
      selector: ".elementor-element-a815d9a",
    },
    {
      section_name: "Style 02",
      selector: ".elementor-element-373dbd4c",
    },
    {
      section_name: "Style 03",
      selector: ".elementor-element-3eddd514",
    },
    {
      section_name: "Style 04",
      selector: ".elementor-element-22081b76",
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
