"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/contact-form-7";
let heading = "Contact Form 7";

test.describe("Contact Form 7", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/contact-form-7/);
  });

  test("Test Section: Style Your Form Container", async ({ page }) => {
    await page.getByRole("heading", { name: "Style Your Form Container" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Style Your Form Container" })).toBeVisible();
    await expect(page.getByText("Make your form unique by changing the style of container")).toBeVisible();

    await expect(page.locator('section:nth-child(8) > div > div:nth-child(2) > div > .elementor-section > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .eael-contact-form-7-wrapper > .eael-contact-form')).toBeVisible();
    await expect(page.locator('#wpcf7-f277430-p1231-o8 > .wpcf7-form')).toBeVisible();
    await expect(page.locator('#wpcf7-f277430-p1231-o8 > .wpcf7-form > p > label').first()).toBeVisible();
    await expect(page.locator('#wpcf7-f277430-p1231-o8 > .wpcf7-form > p > label > .wpcf7-form-control-wrap > .wpcf7-form-control').first()).toBeVisible();
    await expect(page.locator('#wpcf7-f277430-p1231-o8 > .wpcf7-form > p:nth-child(3) > label')).toBeVisible();
    await expect(page.locator('#wpcf7-f277430-p1231-o8 > .wpcf7-form > p:nth-child(3) > label > .wpcf7-form-control-wrap > .wpcf7-form-control')).toBeVisible();
    await expect(page.locator('#wpcf7-f277430-p1231-o8 > .wpcf7-form > p:nth-child(4) > label')).toBeVisible();
    await expect(page.locator('#wpcf7-f277430-p1231-o8 > .wpcf7-form > p:nth-child(4) > label > .wpcf7-form-control-wrap > .wpcf7-form-control')).toBeVisible();
    await expect(page.locator('#wpcf7-f277430-p1231-o8 > .wpcf7-form > p:nth-child(5) > label')).toBeVisible();
    await expect(page.locator('#wpcf7-f277430-p1231-o8 > .wpcf7-form > p:nth-child(5) > label > .wpcf7-form-control-wrap > .wpcf7-form-control')).toBeVisible();
    await expect(page.locator('#wpcf7-f277430-p1231-o8 > .wpcf7-form > p:nth-child(6)')).toBeVisible();
  });
});

test.describe("Contact Form 7 - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    {
      section_name: "Style 07",
      selector: ".elementor-element-1f7a53b5",
    },
    {
      section_name: "Style 08",
      selector: ".elementor-element-e257087",
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