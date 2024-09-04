"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/content-timeline";
let heading = "Content Timeline";

test.describe("Content Timeline", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/content-timeline/);
  });

  test("Test Section: Center Layout With Custom Source", async ({ page }) => {
    await page.getByRole("heading", { name: "Center Layout With Custom Source" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Center Layout With Custom Source" })).toBeVisible();
    await expect(
      page.getByText(
        "Choose custom source from ‘Timeline Content’ and style each section of it to make it look standout"
      )
    ).toBeVisible();

    const widget = page.locator(
      ".elementor-element-72c859bb > .elementor-widget-container > #eael-content-timeline-72c859bb"
    );
    await expect(widget).toHaveAttribute("data-slide_to_scroll", '{"desktop":1,"mobile":1,"tablet":1}');

    await expect(page.locator('.eael-content-timeline-img').first()).toBeVisible();
    await expect(page.locator('.eael-content-timeline-inner').first()).toBeVisible();
    await expect(page.locator('div:nth-child(2) > .eael-content-timeline-img').first()).toBeVisible();
    await expect(page.locator('div:nth-child(2) > .eael-content-timeline-line').first()).toBeVisible();
    await expect(page.locator('div:nth-child(3) > .eael-content-timeline-img').first()).toBeVisible();
    await expect(page.locator('div:nth-child(4) > .eael-content-timeline-img').first()).toBeVisible();
  });
});

test.describe("Content Timeline - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    {
      section_name: "Style 01",
      selector: ".elementor-element-72c859bb",
    },
  ];

  target_selectors.forEach((target) => {
    test(target.section_name, async ({ page }) => {
      const selector = target.selector;
      await page.waitForSelector(selector);
      await page.waitForTimeout(400);

      const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

      const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
      saveStructure(nodeStructure, filePath);

      const existingNodeStructure = getStructure(filePath);
      expect(nodeStructure).toEqual(existingNodeStructure);
    });
  });
});