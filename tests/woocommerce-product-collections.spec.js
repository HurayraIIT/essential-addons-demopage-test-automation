"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/woocommerce-product-collections";
let heading = "Woo Product Collection";

test.describe("Woo Product Collection", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/dynamic-content-elements\/ea-woo-product-collections/
    );
  });

  test("Test Preset - Category", async ({ page, browserName }) => {
    const selector = ".elementor-element-78cdaff2"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(
      __dirname,
      `../snapshots/${slug.substring(1)}-${selector.substring(1)}-${browserName}.json`
    );

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Test Preset - Attributes", async ({ page, browserName }) => {
    const selector = ".elementor-element-292f71fa"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(
      __dirname,
      `../snapshots/${slug.substring(1)}-${selector.substring(1)}-${browserName}.json`
    );

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Test Preset - Animation", async ({ page, browserName }) => {
    const selector = ".elementor-element-20de34e2"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();

    const filePath = path.join(
      __dirname,
      `../snapshots/${slug.substring(1)}-${selector.substring(1)}-${browserName}.json`
    );

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });
});
