"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/betterdocs-search-form";
let heading = "BetterDocs Search Form";

test.describe("BetterDocs Search Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/betterdocs-search-form/
    );
  });

  test("Test Section: Amazing Live Search Form", async ({ page }) => {
    await page.getByRole("heading", { name: "Amazing Live Search Form" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Amazing Live Search Form" })).toBeVisible();
    await expect(
      page.getByText(
        "Add an advanced search form to make it easy for visitors to quickly search through your knowledge base"
      )
    ).toBeVisible();
  });
});

test.describe("BetterDocs Search Form - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    { section_name: "EA BetterDocs Search Form - Style 01", selector: ".elementor-element-3fafa7e6" },
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
