"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/simple-menu";
let heading = "Simple Menu";

test.describe("Simple Menu", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/content-elements\/simple-menu/
    );
  });

  test("Test Section: Style Default Skin & Horizontal Layout", async ({ page }) => {
    await page
      .getByTestId("3fcb4700")
      .getByRole("heading", { name: "Style Default Skin & Horizontal Layout" })
      .scrollIntoViewIfNeeded();
    await expect(
      page.getByTestId("3fcb4700").getByRole("heading", { name: "Style Default Skin & Horizontal Layout" })
    ).toBeVisible();
    await expect(
      page.getByTestId("48313d59").getByText("Add drop down menu icon, animation effect, hover effect")
    ).toBeVisible();
  });
});

test.describe("Simple Menu - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    { section_name: "Style 01", selector: ".elementor-element-7bdd1b2" },
    { section_name: "Style 02", selector: ".elementor-element-e360828" },
    { section_name: "Style 03", selector: ".elementor-element-25176ed" },
    { section_name: "Style 04", selector: ".elementor-element-1573e1b" },
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
