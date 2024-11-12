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
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    toggle_loc = page.locator(".elementor-element-6281f4d");
  });

  test("Test Content Tab & Toggle Should Work", async ({ page }) => {
    // Label & Switch
    await expect.soft(page.getByText("Primary 241016")).toBeVisible();
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-rectangle")).toBeVisible();
    await expect.soft(page.getByText("Secondary 241016")).toBeVisible();

    // Only Primary Content should be visible
    await expect.soft(toggle_loc.locator(".eael-toggle-primary-wrap").locator("img")).toBeVisible();

    await expect.soft(page.getByText("Secondary Content 241016")).toBeHidden();
    await expect.soft(toggle_loc.locator(".eael-toggle-secondary-wrap").locator("img")).toBeHidden();

    // Perform toggle
    await toggle_loc.locator(".eael-toggle-switch-rectangle").click();
    await page.waitForTimeout(500);

    // Only Secondary Content should be visible
    await expect.soft(page.getByText("Secondary Content 241016")).toBeVisible();
    await expect.soft(toggle_loc.locator(".eael-toggle-secondary-wrap").locator("img")).toBeVisible();

    await expect.soft(toggle_loc.locator(".eael-toggle-primary-wrap").locator("img")).toBeHidden();
  });

  test("Test Style Tab > Switch", async ({ page }) => {
    await expect.soft(toggle_loc).toHaveAttribute("data-settings", '{"toggle_switch_alignment":"left"}');
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-container")).toHaveClass(/eael-toggle-switch-rectangle/);
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("font-size", "31px");
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("line-height", "31px");
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("margin", "0px 32px");
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-wrap")).toHaveCSS("margin-bottom", "33px");

    // Primary is active
    await expect.soft(toggle_loc.locator(".eael-toggle-slider")).toHaveCSS("background-color", "rgb(255, 0, 0)");
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-style", "solid");
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-width", "4px");
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-radius", "5px");
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-color", "rgb(2, 2, 2)");

    // Perform toggle
    await toggle_loc.locator(".eael-toggle-switch-rectangle").click();
    await page.waitForTimeout(500);

    // Secondary is active
    await expect.soft(toggle_loc.locator(".eael-toggle-slider")).toHaveCSS("background-color", "rgb(0, 0, 255)");
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-style", "dashed");
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-width", "2px");
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-radius", "3px");
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-color", "rgb(0, 255, 255)");

    // Perform toggle again
    await toggle_loc.locator(".eael-toggle-switch-rectangle").click();
    await page.waitForTimeout(500);

    // Primary is active
    await expect.soft(toggle_loc.locator(".eael-toggle-slider")).toHaveCSS("background-color", "rgb(255, 0, 0)");
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-style", "solid");
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-width", "4px");
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-radius", "5px");
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-container")).toHaveCSS("border-color", "rgb(2, 2, 2)");

    // TODO: Need to access pseudo elements: https://reflect.run/articles/accessing-pseudo-elements-in-playwright/
    // Controller
    // Color #f0f0f0
    // Image image-02 150x150
    // Position center center
    // repeat no-repeat
    // display size cover
    // Border radius 11px
  });

  test("Test Style Tab > Label", async ({ page }) => {
    // Position right top
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-inner")).toHaveCSS("align-items", "flex-start");
    await expect.soft(toggle_loc.locator(".eael-toggle-switch-inner")).toHaveCSS("text-align", "start");

    // Primary
    let primary_loc = toggle_loc.getByText("Primary 241016");
    // Color #ff0000
    // Activa text color  #00ff00
    await expect.soft(primary_loc).toHaveCSS("color", "rgb(0, 255, 0)");
    await expect.soft(primary_loc).toHaveCSS("font-family", /Times New Roman/);
    await expect.soft(primary_loc).toHaveCSS("font-size", "24px");
    await expect.soft(primary_loc).toHaveCSS("font-weight", "400");
    await expect.soft(primary_loc).toHaveCSS("text-transform", "uppercase");
    await expect.soft(primary_loc).toHaveCSS("font-style", "italic");
    await expect.soft(primary_loc).toHaveCSS("text-decoration", "underline solid rgb(0, 255, 0)");
    await expect.soft(primary_loc).toHaveCSS("line-height", "24px");
    await expect.soft(primary_loc).toHaveCSS("letter-spacing", "2.4px");
    await expect.soft(primary_loc).toHaveCSS("word-spacing", "4px");

    // Secondary
    let secondary_loc = toggle_loc.getByText("Secondary 241016");
    // Color #0000ff
    // Activa text color  #00ff00
    await expect.soft(secondary_loc).toHaveCSS("color", "rgb(0, 0, 255)");
    await expect.soft(secondary_loc).toHaveCSS("font-family", /Verdana/);
    await expect.soft(secondary_loc).toHaveCSS("font-size", "25px");
    await expect.soft(secondary_loc).toHaveCSS("font-weight", "500");
    await expect.soft(secondary_loc).toHaveCSS("text-transform", "lowercase");
    await expect.soft(secondary_loc).toHaveCSS("font-style", "italic");
    await expect.soft(secondary_loc).toHaveCSS("text-decoration", "overline solid rgb(0, 0, 255)");
    await expect.soft(secondary_loc).toHaveCSS("line-height", "25px");
    await expect.soft(secondary_loc).toHaveCSS("letter-spacing", "2.5px");
    await expect.soft(secondary_loc).toHaveCSS("word-spacing", "5px");

    // Perform toggle
    await toggle_loc.locator(".eael-toggle-switch-rectangle").click();
    await page.waitForTimeout(500);

    // Colors should be changed
    await expect.soft(primary_loc).toHaveCSS("color", "rgb(255, 0, 0)");
    await expect.soft(secondary_loc).toHaveCSS("color", "rgb(0, 255, 0)");
  });

  test("Test Style Tab > Content", async ({ page }) => {
    // Perform toggle
    await toggle_loc.locator(".eael-toggle-switch-rectangle").click();
    await page.waitForTimeout(500);

    let text_loc = toggle_loc.getByText("Secondary Content 241016");

    // alignment should be right
    await expect.soft(toggle_loc.locator(".eael-toggle-content-wrap")).toHaveCSS("text-align", "right");
    await expect.soft(toggle_loc.locator(".eael-toggle-primary-wrap")).toHaveCSS("text-align", "right");
    await expect.soft(toggle_loc.locator(".eael-toggle-secondary-wrap")).toHaveCSS("text-align", "right");
    await expect.soft(text_loc).toHaveCSS("text-align", "right");

    // Text Color Should be blue
    await expect.soft(text_loc).toHaveCSS("color", "rgb(0, 0, 255)");
    await expect.soft(text_loc).toHaveCSS("font-family", /Helvetica/);
    await expect.soft(text_loc).toHaveCSS("font-size", "21px");
    await expect.soft(text_loc).toHaveCSS("font-weight", "700");
    await expect.soft(text_loc).toHaveCSS("text-transform", "uppercase");
    await expect.soft(text_loc).toHaveCSS("font-style", "italic");
    await expect.soft(toggle_loc.locator(".eael-toggle-content-wrap")).toHaveCSS(
      "text-decoration",
      "underline solid rgb(0, 0, 255)"
    );
    await expect.soft(text_loc).toHaveCSS("line-height", "21px");
    await expect.soft(text_loc).toHaveCSS("letter-spacing", "2.1px");
    await expect.soft(text_loc).toHaveCSS("word-spacing", "1px");
  });
});
