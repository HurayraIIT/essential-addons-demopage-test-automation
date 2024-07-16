"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/advanced-search";
let heading = "Advanced Search";

test.describe("Advanced Search - Stunning Advanced Live Search Bar", () => {
  let adv_search = "";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/advanced-search/);

    adv_search = page.getByTestId("5374321b");
    adv_search.scrollIntoViewIfNeeded();
  });

  test("All sections should be present", async ({ page }) => {
    await expect(adv_search).toBeVisible();
    await expect(adv_search.locator(".eael-adv-search-wrapper").first()).toBeVisible();

    await expect(adv_search.locator(".fas.fa-search")).toBeVisible();
    await expect(adv_search.getByPlaceholder("Enter Search Keyword")).toBeVisible();
    await expect(adv_search.getByRole("button", { name: "Search" })).toBeVisible();
  });

  test("Search with invalid string should return no result", async ({ page }) => {
    await expect(adv_search).toBeVisible();

    await adv_search.getByPlaceholder("Enter Search Keyword").click();
    await adv_search.getByPlaceholder("Enter Search Keyword").type("asdasdasdasdasd123123");
    await page.waitForTimeout(1500);

    // Verify the result
    await expect(adv_search.getByText("No Record Found")).toBeVisible();
    await expect(adv_search.locator(".eael-adv-search-close > .fas.fa-times")).toBeVisible();

    // Clear the search
    await adv_search.locator(".eael-adv-search-close > .fas.fa-times").click();
    await page.waitForTimeout(100);
    await expect(adv_search.getByText("No Record Found")).toBeHidden();
  });
});

test.describe("Advanced Search - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    { section_name: "Style 01", selector: ".elementor-element-5374321b" },
    { section_name: "Style 02", selector: ".elementor-element-4ccceaa9" },
    { section_name: "Style 03", selector: ".elementor-element-23533c88" },
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
