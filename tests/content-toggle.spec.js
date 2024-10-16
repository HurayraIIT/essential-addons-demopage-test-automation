"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/toggle/";
let heading = "Content Toggle Hurayra Automation 241016";

test.describe("Content Toggle https://qa1.site/go/pb4317", () => {
  let toggle_loc = null;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    toggle_loc = page.locator(".elementor-element-6281f4d");
  });

  test("Test Content Tab & Toggle Should Work", async ({ page }) => {
    // Label & Switch
    await expect(page.getByText("Primary 241016")).toBeVisible();
    await expect(toggle_loc.locator(".eael-toggle-switch-rectangle")).toBeVisible();
    await expect(page.getByText("Secondary 241016")).toBeVisible();

    // Only Primary Content should be visible
    await expect(toggle_loc.locator(".eael-toggle-primary-wrap").locator("img")).toBeVisible();

    await expect(page.getByText("Secondary Content 241016")).toBeHidden();
    await expect(toggle_loc.locator(".eael-toggle-secondary-wrap").locator("img")).toBeHidden();

    // Perform toggle
    await toggle_loc.locator(".eael-toggle-switch-rectangle").click();
    await page.waitForTimeout(500);

    // Only Secondary Content should be visible
    await expect(page.getByText("Secondary Content 241016")).toBeVisible();
    await expect(toggle_loc.locator(".eael-toggle-secondary-wrap").locator("img")).toBeVisible();

    await expect(toggle_loc.locator(".eael-toggle-primary-wrap").locator("img")).toBeHidden();
  });

  test("Test Style Tab > Switch", async ({ page }) => {
    await expect(toggle_loc).toHaveAttribute("data-settings", '{"toggle_switch_alignment":"left"}');
    await expect(toggle_loc.locator(".eael-toggle-switch-container")).toHaveClass(/eael-toggle-switch-rectangle/);
    await expect(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("font-size", "31px");
    await expect(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("line-height", "31px");
    await expect(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("margin", "0px 32px");
    await expect(toggle_loc.locator(".eael-toggle-switch-wrap")).toHaveCSS("margin-bottom", "33px");

    // Primary is active
    await expect(toggle_loc.locator(".eael-toggle-slider")).toHaveCSS("background-color", "rgb(255, 0, 0)");
    await expect(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-style", "solid");
    await expect(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-width", "4px");
    await expect(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-radius", "5px");
    await expect(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-color", "rgb(2, 2, 2)");

    // Perform toggle
    await toggle_loc.locator(".eael-toggle-switch-rectangle").click();
    await page.waitForTimeout(500);

    // Secondary is active
    await expect(toggle_loc.locator(".eael-toggle-slider")).toHaveCSS("background-color", "rgb(0, 0, 255)");
    await expect(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-style", "dashed");
    await expect(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-width", "2px");
    await expect(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-radius", "3px");
    await expect(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-color", "rgb(0, 255, 255)");

    // Perform toggle again
    await toggle_loc.locator(".eael-toggle-switch-rectangle").click();
    await page.waitForTimeout(500);

    // Primary is active
    await expect(toggle_loc.locator(".eael-toggle-slider")).toHaveCSS("background-color", "rgb(255, 0, 0)");
    await expect(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-style", "solid");
    await expect(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-width", "4px");
    await expect(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-radius", "5px");
    await expect(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-color", "rgb(2, 2, 2)");

    // TODO: Need to access pseudo elements: https://reflect.run/articles/accessing-pseudo-elements-in-playwright/
    // Controller
    // Color #f0f0f0
    // Image image-02 150x150
    // Position center center
    // repeat no-repeat
    // display size cover
    // Border radius 11px
  });

  // test("Test Style Tab > Label", async ({ page }) => {
  //   //

  //   // Perform toggle
  //   await toggle_loc.locator(".eael-toggle-switch-rectangle").click();
  //   await page.waitForTimeout(500);
  // });
});
