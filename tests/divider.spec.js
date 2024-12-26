"use strict";

import { test, expect } from "../global-setup";

test.describe("Divider - Live Demo Page", () => {
  let slug = "https://essential-addons.com/elementor/divider";
  let heading = "Divider";

  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect
      .soft(page.getByRole("link", { name: "Documentation" }))
      .toHaveAttribute("href", /docs\/creative-elements\/divider/);
  });

  test("Test Section: Style Divider With Image", async ({ page }) => {
    await page.getByRole("heading", { name: "Style Divider With Image" }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: "Style Divider With Image" })).toBeVisible();
    await expect.soft(page.getByText("Style divider element   ")).toBeVisible();
    await expect.soft(page.getByRole("heading", { name: "Icon Divider Style 01" })).toBeVisible();
    await expect.soft(page.getByRole("img", { name: "Divider" }).nth(2)).toBeVisible();
    await expect.soft(page.locator("span:nth-child(3) > .divider-border").first()).toBeVisible();
    await expect.soft(page.locator(".divider-border").first()).toBeVisible();
    await expect.soft(page.getByRole("heading", { name: "Icon Divider Style 02" })).toBeVisible();
    await expect
      .soft(
        page.locator(
          "div:nth-child(2) > .elementor-widget-wrap > div:nth-child(2) > .elementor-widget-container > .eael-divider-wrap > .divider-text-container > .divider-text-wrap > span:nth-child(3) > .divider-border"
        )
      )
      .toBeVisible();
    await expect
      .soft(
        page
          .locator(
            "div:nth-child(2) > .elementor-widget-wrap > div:nth-child(2) > .elementor-widget-container > .eael-divider-wrap > .divider-text-container > .divider-text-wrap > span > .divider-border"
          )
          .first()
      )
      .toBeVisible();
    await expect.soft(page.getByRole("heading", { name: "Icon Divider Style 03" })).toBeVisible();
    await expect
      .soft(
        page.locator(
          "div:nth-child(3) > .elementor-widget-wrap > div:nth-child(2) > .elementor-widget-container > .eael-divider-wrap > .divider-text-container > .divider-text-wrap > span:nth-child(3) > .divider-border"
        )
      )
      .toBeVisible();
    await expect
      .soft(
        page
          .locator(
            "div:nth-child(3) > .elementor-widget-wrap > div:nth-child(2) > .elementor-widget-container > .eael-divider-wrap > .divider-text-container > .divider-text-wrap > span > .divider-border"
          )
          .first()
      )
      .toBeVisible();
    await expect.soft(page.getByRole("img", { name: "Divider" }).nth(4)).toBeVisible();
  });
});
