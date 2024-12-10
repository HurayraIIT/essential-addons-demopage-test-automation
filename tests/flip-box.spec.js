"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/flip-box/";
let heading = "Flip Box Hurayra 241014 Content > Settings";

test.describe("Flip Box", () => {
  let box01 = null;
  let box02 = null;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    box01 = page.locator(".elementor-element-ef2686c");
    box02 = page.locator(".elementor-element-45d2693");
  });

  // TODO: Incomplete Test
  test("Test Content Tab > Settings, Content", async ({ page }) => {
    // Hover Box
    await expect.soft(box01.getByText("Box01 Front Title Hover 241015")).toBeVisible();
    await expect.soft(box01.getByText("Box01 This is front side content. 241015.")).toBeVisible();
    await expect.soft(box01.getByText("Box01 Back Title Hover 241015")).toBeVisible();
    await expect.soft(box01.getByText("Box01 This is back side content. 241015.")).toBeVisible();

    await expect
      .soft(box01.locator(".eael-elements-flip-box-container"))
      .toHaveClass(
        "eael-elements-flip-box-container eael-animate-flip eael-animate-left eael-content eael-flip-box-hover"
      );

    await expect.soft(box01.locator(".elementor-widget-container")).toHaveCSS("height", "302px");

    // Click Box
    await expect.soft(box02.getByText("Box02 Front Title Click 241015")).toBeVisible();
    await expect.soft(box02.getByText("Box02 This is front side content. 241015.")).toBeVisible();
    await expect.soft(box02.getByText("Box02 Back Title Click 241015")).toBeVisible();
    await expect.soft(box02.getByText("Box02 This is back side content. 241015.")).toBeVisible();

    await expect
      .soft(box02.locator(".eael-elements-flip-box-container"))
      .toHaveClass(
        "eael-elements-flip-box-container eael-animate-flip eael-animate-right eael-content eael-flip-box-click"
      );

    await expect.soft(box02.locator(".elementor-widget-container")).toHaveCSS("height", "302px");
  });

  // TODO: Incomplete Test
  test("Test Content Tab > Link", async ({ page }) => {
    await page
      .getByRole("heading", { name: "Flip Box Hurayra 241014 Content > Link", exact: true })
      .scrollIntoViewIfNeeded();

    // Link Type - Box
    await expect
      .soft(page.locator(".elementor-element-7cd8202").locator("a.eael-elements-flip-box-flip-card"))
      .toHaveAttribute("href", /click-me/);

    // Link Type - title
    // Link Type - Button
  });

  test("Test Style Tab > Flip Box Style", async ({ page }) => {
    let box01_front = box01.locator(".eael-elements-flip-box-front-container");
    await expect.soft(box01_front).toHaveCSS("background-color", "rgb(92, 139, 109)");
    await expect.soft(box01_front).toHaveCSS("padding", "11px 10px 9px 8px");
    await expect.soft(box01_front).toHaveCSS("border-style", "dashed");
    await expect.soft(box01_front).toHaveCSS("border-width", "5px");
    await expect.soft(box01_front).toHaveCSS("border-radius", "21px");
    await expect.soft(box01_front).toHaveCSS("border-color", "rgb(2, 1, 1)");
    await expect.soft(box01_front).toHaveCSS("box-shadow", "rgba(36, 82, 183, 0.57) 1px 2px 13px 4px");

    let box01_back = box01.locator(".eael-elements-flip-box-rear-container");
    await expect.soft(box01_back).toHaveCSS("background-color", "rgb(227, 15, 35)");
    await expect.soft(box01_back).toHaveCSS("padding", "11px 10px 9px 8px");
    await expect.soft(box01_back).toHaveCSS("border-style", "dashed");
    await expect.soft(box01_back).toHaveCSS("border-width", "5px");
    await expect.soft(box01_back).toHaveCSS("border-radius", "21px");
    await expect.soft(box01_back).toHaveCSS("border-color", "rgb(2, 1, 1)");
    await expect.soft(box01_back).toHaveCSS("box-shadow", "rgba(36, 82, 183, 0.57) 1px 2px 13px 4px");
  });

  test("Test Style Tab > Icon Style", async ({ page }) => {
    // Front Icon
    let box01_front_icon = box01
      .locator(".eael-elements-flip-box-front-container")
      .locator(".eael-elements-flip-box-icon-image");
    await expect.soft(box01_front_icon).toHaveCSS("border-color", "rgb(255, 0, 255)");
    await expect.soft(box01_front_icon).toHaveCSS("border-radius", "42px");
    await expect.soft(box01_front_icon).toHaveCSS("border-style", "solid");
    await expect.soft(box01_front_icon).toHaveCSS("border-width", "2px 3px 4px 5px");
    await expect.soft(box01_front_icon).toHaveCSS("padding", "3px 4px 5px 6px");
    await expect.soft(box01_front_icon.locator("svg")).toHaveCSS("height", "41px");
    await expect.soft(box01_front_icon.locator("svg")).toHaveCSS("width", "41px");
    await expect.soft(box01_front_icon.locator("svg")).toHaveCSS("font-size", "41px");
    await expect.soft(box01_front_icon.locator("svg")).toHaveCSS("line-height", "41px");
    await expect.soft(box01_front_icon.locator("svg")).toHaveCSS("color", "rgb(255, 255, 0)");

    // Back Icon
    let box01_back_icon = box01
      .locator(".eael-elements-flip-box-rear-container")
      .locator(".eael-elements-flip-box-icon-image");
    await expect.soft(box01_back_icon).toHaveCSS("border-color", "rgb(0, 0, 255)");
    await expect.soft(box01_back_icon).toHaveCSS("border-radius", "44px");
    await expect.soft(box01_back_icon).toHaveCSS("border-style", "dotted");
    await expect.soft(box01_back_icon).toHaveCSS("border-width", "5px 6px 7px 8px");
    await expect.soft(box01_back_icon).toHaveCSS("padding", "1px 2px 3px 4px");
    await expect.soft(box01_back_icon.locator("svg")).toHaveCSS("height", "43px");
    await expect.soft(box01_back_icon.locator("svg")).toHaveCSS("width", "43px");
    await expect.soft(box01_back_icon.locator("svg")).toHaveCSS("font-size", "43px");
    await expect.soft(box01_back_icon.locator("svg")).toHaveCSS("line-height", "43px");
    await expect.soft(box01_back_icon.locator("svg")).toHaveCSS("color", "rgb(0, 255, 255)");
  });

  test("Test Style Tab > Color & Typography", async ({ page }) => {
    // Box 01 Front Title
    let box01_front_title = box01.getByText("Box01 Front Title Hover 241015");
    await expect.soft(box01_front_title).toHaveCSS("color", "rgb(255, 0, 0)");
    await expect.soft(box01_front_title).toHaveCSS("font-family", /Arial/);
    await expect.soft(box01_front_title).toHaveCSS("font-size", "21px");
    await expect.soft(box01_front_title).toHaveCSS("font-weight", "600");
    await expect.soft(box01_front_title).toHaveCSS("text-transform", "uppercase");
    await expect.soft(box01_front_title).toHaveCSS("font-style", "italic");
    await expect.soft(box01_front_title).toHaveCSS("text-decoration-line", "underline");
    await expect.soft(box01_front_title).toHaveCSS("line-height", "21px");
    await expect.soft(box01_front_title).toHaveCSS("letter-spacing", "2.1px");
    await expect.soft(box01_front_title).toHaveCSS("word-spacing", "1px");

    // Box 01 Front Content
    let box01_front_content = box01.getByText("Box01 This is front side content. 241015.");
    await expect.soft(box01_front_content).toHaveCSS("color", "rgb(0, 255, 0)");
    await expect.soft(box01_front_content).toHaveCSS("font-family", /Tahoma/);
    await expect.soft(box01_front_content).toHaveCSS("font-size", "22px");
    await expect.soft(box01_front_content).toHaveCSS("font-weight", "700");
    await expect.soft(box01_front_content).toHaveCSS("text-transform", "lowercase");
    await expect.soft(box01_front_content).toHaveCSS("font-style", "normal");
    await expect.soft(box01_front_content.locator("..")).toHaveCSS("text-decoration-line", "overline");
    await expect.soft(box01_front_content).toHaveCSS("line-height", "22px");
    await expect.soft(box01_front_content).toHaveCSS("letter-spacing", "2.2px");
    await expect.soft(box01_front_content).toHaveCSS("word-spacing", "2px");

    // Box 01 Back title
    let box01_back_title = box01.getByText("Box01 Back Title Hover 241015");
    await expect.soft(box01_back_title).toHaveCSS("color", "rgb(0, 0, 255)");
    await expect.soft(box01_back_title).toHaveCSS("font-family", /Verdana/);
    await expect.soft(box01_back_title).toHaveCSS("font-size", "23px");
    await expect.soft(box01_back_title).toHaveCSS("font-weight", "800");
    await expect.soft(box01_back_title).toHaveCSS("text-transform", "capitalize");
    await expect.soft(box01_back_title).toHaveCSS("font-style", "italic");
    await expect.soft(box01_back_title).toHaveCSS("text-decoration-line", "line-through");
    await expect.soft(box01_back_title).toHaveCSS("line-height", "23px");
    await expect.soft(box01_back_title).toHaveCSS("letter-spacing", "2.3px");
    await expect.soft(box01_back_title).toHaveCSS("word-spacing", "3px");

    // Box 01 Back Content
    let box01_back_content = box01.getByText("Box01 This is back side content. 241015.");
    await expect.soft(box01_back_content).toHaveCSS("color", "rgb(255, 0, 255)");
    await expect.soft(box01_back_content).toHaveCSS("font-family", /Helvetica/);
    await expect.soft(box01_back_content).toHaveCSS("font-size", "24px");
    await expect.soft(box01_back_content).toHaveCSS("font-weight", "900");
    await expect.soft(box01_back_content).toHaveCSS("text-transform", "none");
    await expect.soft(box01_back_content).toHaveCSS("font-style", "normal");
    await expect.soft(box01_back_content.locator("..")).toHaveCSS("text-decoration-line", "none");
    await expect.soft(box01_back_content).toHaveCSS("line-height", "24px");
    await expect.soft(box01_back_content).toHaveCSS("letter-spacing", "2.4px");
    await expect.soft(box01_back_content).toHaveCSS("word-spacing", "4px");
  });
});
