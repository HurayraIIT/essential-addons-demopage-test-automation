"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/counter";
let heading = "Counter";

test.describe("Counter", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/creative-elements\/counter/);
    });

    test("Test Section: Highlight Special Achievements", async ({ page }) => {
        await page.getByRole("heading", { name: "Highlight Special Achievements" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Highlight Special Achievements" })).toBeVisible();
        await expect(page.getByText("Beautifully represent Numerical ")).toBeVisible();

        await expect(page.locator('section:nth-child(2) > div > div > div > section:nth-child(2) > .elementor-container > div > .elementor-widget-wrap').first()).toBeVisible();
        await expect(page.locator('.eael-counter-icon').first()).toBeVisible();
        await expect(page.locator('.eael-counter-svg-icon > .fas').first()).toBeVisible();
        await expect(page.locator('.eael-counter-number-wrap').first()).toBeVisible();
        await expect(page.locator('.eael-counter-title').first()).toBeVisible();
    });
});

test.describe("Counter - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    {
      section_name: "Style 01",
      selector: ".elementor-element-1e9613ad",
    },
    {
      section_name: "Style 02",
      selector: ".elementor-element-4e212fba",
    },
    {
      section_name: "Style 03",
      selector: ".elementor-element-10acc9d7",
    },
  ];

  target_selectors.forEach((target) => {
    test(target.section_name, async ({ page }) => {
      const selector = target.selector;
      await page.waitForSelector(selector);
      await page.locator(selector).scrollIntoViewIfNeeded();
      await page.waitForTimeout(2500);

      const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

      const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
      saveStructure(nodeStructure, filePath);

      const existingNodeStructure = getStructure(filePath);
      expect(nodeStructure).toEqual(existingNodeStructure);
    });
  });
});