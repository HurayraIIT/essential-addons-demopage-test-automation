"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/feature-list";
let heading = "Feature List";

test.describe("Feature List", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/creative-elements\/ea-feature-list/
    );
  });

  test("Test Section: Feature List Style 01", async ({ page }) => {
    await page.getByRole("heading", { name: "Feature List Style 01" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Feature List Style 01" })).toBeVisible();
    await expect(page.getByText("Applying advance design of feature list to")).toBeVisible();

    let section_root = page.getByTestId("2686bb44");

    // Verify if all sections has loaded
    await expect(section_root.locator(".fas.fa-laptop")).toBeVisible();
    await expect(section_root.locator(".far.fa-chart-bar")).toBeVisible();
    await expect(section_root.locator(".far.fa-clock")).toBeVisible();
    await expect(section_root.locator(".fas.fa-shield-alt")).toBeVisible();

    await expect(section_root.getByRole("heading", { name: "Easy To Use" })).toBeVisible();
    await expect(section_root.getByRole("heading", { name: "Daily Report" })).toBeVisible();
    await expect(section_root.getByRole("heading", { name: "Real Time" })).toBeVisible();
    await expect(section_root.getByRole("heading", { name: "Extreme Security" })).toBeVisible();

    await expect(section_root.getByText("Configure content settings by")).toBeVisible();
    await expect(section_root.getByText("Influence your potential buyers")).toBeVisible();
    await expect(section_root.getByText("Add as much as key aspects")).toBeVisible();
    await expect(section_root.getByText("Style your icon, content and")).toBeVisible();
  });
});

test.describe("Feature List - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  test("Style 1", async ({ page }) => {
    const selector = ".elementor-element-6318a604"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Style 2", async ({ page }) => {
    const selector = ".elementor-element-7fc80de4"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Style 3", async ({ page }) => {
    const selector = ".elementor-element-70184f78"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Style 4", async ({ page }) => {
    const selector = ".elementor-element-9c40028"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Style 5", async ({ page }) => {
    const selector = ".elementor-element-312c18ac"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });

  test("Style 6", async ({ page }) => {
    const selector = ".elementor-element-4ecaa585"; // Replace with your actual selector
    await page.waitForSelector(selector);
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);

    const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

    const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
    saveStructure(nodeStructure, filePath);

    const existingNodeStructure = getStructure(filePath);
    expect(nodeStructure).toEqual(existingNodeStructure);
  });
});
