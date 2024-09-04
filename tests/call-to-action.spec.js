"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/call-to-action";
let heading = "Call To Action";

test.describe("Call To Action", () => {
  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/call-to-action/);
  });

  // Preset 1
  test("Test Section: Preset 1", async ({ page }) => {
    const section_root = page.getByTestId("514ccb5e");

    await section_root.getByRole("heading", { name: "Essential Addons for Elementor" }).scrollIntoViewIfNeeded();
    await expect(section_root.getByRole("heading", { name: "Essential Addons for Elementor" })).toBeVisible();
    await expect(section_root.locator(".cta-preset-1")).toContainText(
      "Enhance your Elementor page building experience with 57+ creative "
    );
    await expect(section_root.getByRole("link", { name: "Purchase Now" })).toBeVisible();
    await expect(section_root.getByRole("img", { name: "Call To Action 102" })).toBeVisible();
  });
});

test.describe("Call To Action - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    {
      section_name: "Call To Action - Style 01",
      selector: ".elementor-element-c17a59b",
    },
    {
      section_name: "Call To Action - Style 02",
      selector: ".elementor-element-d3ab026",
    },
    {
      section_name: "Call To Action - Style 03",
      selector: ".elementor-element-6d4cf7bf",
    },
    {
      section_name: "Call To Action - Style 04",
      selector: ".elementor-element-7292933",
    },
    {
      section_name: "Call To Action - Style 05",
      selector: ".elementor-element-1b6127",
    },
    {
      section_name: "Call To Action - Style 06",
      selector: ".elementor-element-20af5722",
    },
    {
      section_name: "Call To Action - Style 07",
      selector: ".elementor-element-4a012174",
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
