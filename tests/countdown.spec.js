"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/countdown";
let heading = "Countdown";

test.describe("Countdown", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/creative-elements\/ea-countdown/);
    });

    test("Test Section: Showcase Stunning Countdown Effects", async ({ page }) => {
        await page.getByRole("heading", { name: "Showcase Stunning Countdown Effects" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Showcase Stunning Countdown Effects" })).toBeVisible();
        await expect(page.getByText("Build and design")).toBeVisible();

        await expect(page.locator('.eael-countdown-days').first()).toBeVisible();
        await expect(page.locator('.eael-countdown-digits').first()).toBeVisible();
        await expect(page.locator('.eael-countdown-label').first()).toBeVisible();

        const cssChecket = page.locator('.eael-countdown-days').first();
        await expect(cssChecket).toHaveCSS('text-align', 'center');
        // await expect(cssChecket).toHaveCSS('background', '#fff');
        await expect(cssChecket).toHaveCSS('margin-right', '15px');
        await expect(cssChecket).toHaveCSS('margin-left', '15px');
        await expect(cssChecket).toHaveCSS('border-style', 'solid');
        await expect(cssChecket).toHaveCSS('border-width', '1px');
        await expect(cssChecket).toHaveCSS('border-color', 'rgba(168, 160, 245, 0.4)');
        await expect(cssChecket).toHaveCSS('border-radius', '5px');
        await expect(cssChecket).toHaveCSS('box-shadow', 'rgba(14, 22, 116, 0.17) 8px 23px 22px 0px');

        await expect(page.locator('.eael-countdown-days').first()).toBeVisible();
        await expect(page.locator('li:nth-child(2) > .eael-countdown-hours').first()).toBeVisible();
        await expect(page.locator('li:nth-child(3) > .eael-countdown-minutes').first()).toBeVisible();
        await expect(page.locator('li:nth-child(4) > .eael-countdown-seconds').first()).toBeVisible();
        await expect(page.locator('.eael-countdown-days > .eael-countdown-digits').first()).toBeVisible();
        await expect(page.locator('.eael-countdown-days > .eael-countdown-label').first()).toBeVisible();
        await expect(page.locator('li:nth-child(2) > .eael-countdown-hours > .eael-countdown-digits').first()).toBeVisible();
        await expect(page.locator('li:nth-child(2) > .eael-countdown-hours > .eael-countdown-label').first()).toBeVisible();
        await expect(page.locator('li:nth-child(3) > .eael-countdown-minutes > .eael-countdown-digits').first()).toBeVisible();
        await expect(page.locator('li:nth-child(3) > .eael-countdown-minutes > .eael-countdown-label').first()).toBeVisible();
        await expect(page.locator('li:nth-child(4) > .eael-countdown-seconds > .eael-countdown-digits').first()).toBeVisible();
        await expect(page.locator('li:nth-child(4) > .eael-countdown-seconds > .eael-countdown-label').first()).toBeVisible();
    });
});

test.describe("Countdown - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.clock.install({ time: new Date("2024-02-02T08:00:00") });
    await page.goto(slug);
    await page.clock.pauseAt(new Date("2024-02-02T08:30:00"));
  });

  const target_selectors = [
    {
      section_name: "Style 01",
      selector: ".elementor-element-287f5454",
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