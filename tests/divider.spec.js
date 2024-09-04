"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/divider";
let heading = "Divider";

test.describe("Divider", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/creative-elements\/divider/);
    });

    test("Test Section: Style Divider With Image", async ({ page }) => {
        await page.getByRole("heading", { name: "Style Divider With Image" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Style Divider With Image" })).toBeVisible();
        await expect(page.getByText("Style divider element   ")).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Icon Divider Style 01' })).toBeVisible();
        await expect(page.getByRole('img', { name: 'Divider' }).nth(2)).toBeVisible();
        await expect(page.locator('span:nth-child(3) > .divider-border').first()).toBeVisible();
        await expect(page.locator('.divider-border').first()).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Icon Divider Style 02' })).toBeVisible();
        await expect(page.locator('div:nth-child(2) > .elementor-widget-wrap > div:nth-child(2) > .elementor-widget-container > .eael-divider-wrap > .divider-text-container > .divider-text-wrap > span:nth-child(3) > .divider-border')).toBeVisible();
        await expect(page.locator('div:nth-child(2) > .elementor-widget-wrap > div:nth-child(2) > .elementor-widget-container > .eael-divider-wrap > .divider-text-container > .divider-text-wrap > span > .divider-border').first()).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Icon Divider Style 03' })).toBeVisible();
        await expect(page.locator('div:nth-child(3) > .elementor-widget-wrap > div:nth-child(2) > .elementor-widget-container > .eael-divider-wrap > .divider-text-container > .divider-text-wrap > span:nth-child(3) > .divider-border')).toBeVisible();
        await expect(page.locator('div:nth-child(3) > .elementor-widget-wrap > div:nth-child(2) > .elementor-widget-container > .eael-divider-wrap > .divider-text-container > .divider-text-wrap > span > .divider-border').first()).toBeVisible();
        await expect(page.getByRole('img', { name: 'Divider' }).nth(4)).toBeVisible();

    });
});

test.describe("Divider - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    {
      section_name: "Style 01",
      selector: ".elementor-element-42c4414d",
    },
    {
      section_name: "Style 02",
      selector: ".elementor-element-2a55bd60",
    },
    {
      section_name: "Style 03",
      selector: ".elementor-element-c1117e1",
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