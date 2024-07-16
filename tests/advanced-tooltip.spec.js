"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/advanced-tooltip";
let heading = "Advanced Tooltip";

test.describe("Advanced Tooltips Style 01", () => {
  let tooltip = "";
  let outside = "";
  let inside = "";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/extensions\/ea-advanced-tooltip/
    );

    tooltip = page.getByText("Save 10% in Basic Plan");
    outside = page.getByRole("heading", { name: "Advanced Tooltips Style 01" });
    inside = page.locator("#eael-section-tooltip-4b0da25c");

    await outside.scrollIntoViewIfNeeded();
  });

  test("Tooltip should appear on hover", async ({ page }) => {
    await expect(outside).toBeVisible();

    // Hover inside and verify tooltip
    await inside.hover();
    await page.waitForTimeout(200);
    await expect(tooltip).toBeVisible();

    // Hover outside and verify tooltip is hidden
    await outside.hover();
    await page.waitForTimeout(200);
    await expect(tooltip).toBeHidden();
  });
});

test.describe("Advanced Tooltip - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    {
      section_name: "Style 01",
      selector: ".elementor-element-4b0da25c",
    },
    {
      section_name: "Style 02",
      selector: ".elementor-element-5d1bbead",
    },
    {
      section_name: "Style 03",
      selector: ".elementor-element-3115bce3",
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
