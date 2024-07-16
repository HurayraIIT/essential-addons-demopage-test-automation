"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/price-menu";
let heading = "Price Menu";

test.describe("Price Menu", () => {
  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/marketing-elements\/price-menu/
    );
  });
  // Preset 1
  test("Test Section: Showcase Price Menu in Stylish Way", async ({ page }) => {
    const section_root = page.getByTestId("33048ed7");

    await page.getByRole("heading", { name: "Showcase Price Menu in Stylish Way" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Showcase Price Menu in Stylish Way" })).toBeVisible();
    await expect(page.getByText("Get ready to design stunning Price Menu within a few mintues")).toBeVisible();
    await expect(section_root.getByRole("img", { name: "Price Menu 102" })).toBeVisible();
    await expect(section_root.getByRole("heading", { name: "Breakfast Menu" })).toBeVisible();
    await expect(section_root.getByText("Fig and lemon cake")).toBeVisible();
    await expect(section_root.getByText("$25")).toBeVisible();
    const connectors = section_root.locator(".eael-price-title-connector");
    const isAnyVisible = await connectors.evaluateAll((elements) =>
      elements.some((element) => element.offsetParent !== null)
    );
    expect(isAnyVisible).toBe(true);
  });

  // Preset 2
  test("Test Section: Full Customization Freedom", async ({ page }) => {
    const section_root = page.getByTestId("33048ed7");

    await page.getByRole("heading", { name: "Full Customization Freedom" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Full Customization Freedom" })).toBeVisible();
    await expect(page.getByText("Customize your Price Menu any ")).toBeVisible();

    // await expect(page.getByTestId('20a131d9').locator('section:nth-child(2) > .elementor-container > div > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .eael-restaurant-menu > .eael-restaurant-menu-items > div > .eael-restaurant-menu-item')).toBeVisible();
  });
});

test.describe("Price Menu - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    { section_name: "Price Menu - Style 01", selector: ".elementor-element-3603799f" },
    { section_name: "Price Menu - Style 04", selector: ".elementor-element-20a131d9" },
    { section_name: "Price Menu - Style 06", selector: ".elementor-element-4a3e6371" },
    { section_name: "Price Menu - Style 12", selector: ".elementor-element-3346f85f" },
    { section_name: "Price Menu - Style 13", selector: ".elementor-element-23a43c0b" },
    { section_name: "Price Menu - Style 14", selector: ".elementor-element-3817aa49" },
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