"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/offcanvas/";
let heading = "Offcanvas Heading 241021 Automation";

test.describe("Offcanvas", () => {
  let offcanvasContainer = null;
  let offcanvasContent = null;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    offcanvasContainer = page.locator(".elementor-element-9d29aae.elementor-widget-eael-offcanvas");
    offcanvasContent = page.locator(".eael-offcanvas-content-9d29aae");
  });

  test("Test Content Tab", async ({ page }) => {
    await expect
      .soft(offcanvasContainer)
      .toHaveAttribute("data-settings", '{"direction":"right","content_transition":"slide"}');
    await expect
      .soft(offcanvasContainer.locator("div.eael-offcanvas-content-wrap"))
      .toHaveAttribute(
        "data-settings",
        '{"content_id":"9d29aae","direction":"right","transition":"slide","esc_close":"yes","body_click_close":"yes","open_offcanvas":"no"}'
      );
    await expect
      .soft(offcanvasContainer.locator("svg"))
      .toHaveClass("eael-offcanvas-toggle-icon e-font-icon-svg e-far-hand-point-right");
    await expect.soft(page.getByText("Click here 241021")).toBeVisible();

    // Sidebar Content Should not be visible initially
    await expect.soft(page.getByText("OC title 241021")).not.toBeVisible();
    await expect.soft(page.getByText("Box 1 241021")).not.toBeVisible();
    await expect.soft(page.getByText("Text box 1 description goes here 241021")).not.toBeVisible();
    await expect.soft(page.getByText("Box 2 241021")).not.toBeVisible();
    await expect.soft(page.getByText("Text box 2 description goes here 241021")).not.toBeVisible();
    await expect.soft(page.locator("div.eael-offcanvas-close-9d29aae svg")).not.toBeVisible();

    // Toggle the offcanvas
    await page.getByText("Click here 241021").click();
    await page.waitForTimeout(200);

    // Sidebar content should be visible now
    await expect.soft(page.getByText("OC title 241021")).toBeVisible();
    await expect.soft(page.getByText("Box 1 241021")).toBeVisible();
    await expect.soft(page.getByText("Text box 1 description goes here 241021")).toBeVisible();
    await expect.soft(page.getByText("Box 2 241021")).toBeVisible();
    await expect.soft(page.getByText("Text box 2 description goes here 241021")).toBeVisible();
    await expect.soft(page.locator("div.eael-offcanvas-close-9d29aae svg")).toBeVisible();

    // Close button should work and close the offcanvas
    await page.locator("div.eael-offcanvas-close-9d29aae svg").click();
    await page.waitForTimeout(200);

    // Sidebar content should be hidden again
    await expect.soft(page.getByText("OC title 241021")).not.toBeVisible();
    await expect.soft(page.getByText("Box 1 241021")).not.toBeVisible();
    await expect.soft(page.getByText("Box 2 241021")).not.toBeVisible();
    await expect.soft(page.locator("div.eael-offcanvas-close-9d29aae svg")).not.toBeVisible();

    // Reopen the offcanvas
    await page.getByText("Click here 241021").click();
    await page.waitForTimeout(200);
    await expect.soft(page.getByText("OC title 241021")).toBeVisible();
    await expect.soft(page.getByText("Box 1 241021")).toBeVisible();

    // Esc button should work and close the offcanvas
    await page.keyboard.press("Escape");
    await page.waitForTimeout(200);

    // Sidebar content should be hidden again
    await expect.soft(page.getByText("OC title 241021")).not.toBeVisible();
    await expect.soft(page.getByText("Box 1 241021")).not.toBeVisible();
    await expect.soft(page.getByText("Box 2 241021")).not.toBeVisible();
    await expect.soft(page.locator("div.eael-offcanvas-close-9d29aae svg")).not.toBeVisible();

    // Reopen the offcanvas
    await page.getByText("Click here 241021").click();
    await page.waitForTimeout(200);
    await expect.soft(page.getByText("OC title 241021")).toBeVisible();
    await expect.soft(page.getByText("Box 1 241021")).toBeVisible();

    // Clicking anywhere outside the offcanvas should close it
    await page.getByRole("heading", { name: heading, exact: true }).click();
    await page.waitForTimeout(200);

    // Sidebar content should be hidden again
    await expect.soft(page.getByText("OC title 241021")).not.toBeVisible();
    await expect.soft(page.getByText("Box 1 241021")).not.toBeVisible();
    await expect.soft(page.getByText("Box 2 241021")).not.toBeVisible();
    await expect.soft(page.locator("div.eael-offcanvas-close-9d29aae svg")).not.toBeVisible();
  });

  test("Test Style Tab > Offcanvas bar", async ({ page }) => {
    // width 301
    await expect.soft(offcanvasContent).toHaveCSS("width", "301px");
    // background red
    await expect.soft(offcanvasContent).toHaveCSS("background-color", "rgb(255, 0, 0)");
    // border solid
    await expect.soft(offcanvasContent).toHaveCSS("border-style", "solid");
    // border width 1px
    await expect.soft(offcanvasContent).toHaveCSS("border-width", "1px");
    // border color green
    await expect.soft(offcanvasContent).toHaveCSS("border-color", "rgb(0, 255, 0)");
    // border radius 2px
    await expect.soft(offcanvasContent).toHaveCSS("border-radius", "2px");
    // padding 3px
    await expect.soft(offcanvasContent.locator("div.eael-offcanvas-body")).toHaveCSS("padding", "3px");
    // box shadow rgba(0, 0, 0, 0.5) 1px 1px 11px 1px
    await expect.soft(offcanvasContent).toHaveCSS("box-shadow", "rgba(0, 0, 0, 0.5) 1px 1px 11px 1px");
  });

  test("Test Style Tab > Content", async ({ page }) => {
    let contentBox01 = offcanvasContent.locator("div.eael-offcanvas-custom-widget").nth(0);
    // alignment center
    await expect.soft(contentBox01).toHaveCSS("text-align", "center");
    // box background color blue
    await expect.soft(contentBox01).toHaveCSS("background-color", "rgb(0, 0, 255)");
    // Border type double
    await expect.soft(contentBox01).toHaveCSS("border-style", "double");
    // border width 2px
    await expect.soft(contentBox01).toHaveCSS("border-width", "2px");
    // border color yellow
    await expect.soft(contentBox01).toHaveCSS("border-color", "rgb(255, 255, 0)");
    // border radius 11px
    await expect.soft(contentBox01).toHaveCSS("border-radius", "11px");
    // bottom spacing 21px
    await expect.soft(contentBox01).toHaveCSS("margin-bottom", "21px");
    // padding 6px
    await expect.soft(contentBox01).toHaveCSS("padding", "6px");
    // Text color white
    await expect.soft(contentBox01).toHaveCSS("color", "rgb(255, 255, 255)");
    // Text font-family "Helvetica"
    await expect.soft(contentBox01).toHaveCSS("font-family", /Helvetica/);
    // Font Size 23px
    await expect.soft(contentBox01).toHaveCSS("font-size", "23px");
    // Font weight 300
    await expect.soft(contentBox01).toHaveCSS("font-weight", "300");
    // Transform uppercase
    await expect.soft(contentBox01).toHaveCSS("text-transform", "uppercase");
    // Style italic
    await expect.soft(contentBox01).toHaveCSS("font-style", "italic");
    // Decoration line through
    await expect.soft(contentBox01).toHaveCSS("text-decoration", "line-through solid rgb(255, 255, 255)");
    // Line height 23
    await expect.soft(contentBox01).toHaveCSS("line-height", "23px");
    // letter spacing 2.3
    await expect.soft(contentBox01).toHaveCSS("letter-spacing", "2.3px");
    // word spacing 3
    await expect.soft(contentBox01).toHaveCSS("word-spacing", "3px");
  });

  test("Test Style Tab > Offcanvas Title", async ({ page }) => {
    let contentBox01 = offcanvasContent.getByText("OC title 241021");

    // Text color ff00ff
    // Text font-family "Verdana"
    // Font Size 24px
    // Font weight 400
    // Transform lowercase
    // Style oblique
    // Decoration overline
    // Line height 24
    // letter spacing 2.4
    // word spacing 4

    await expect.soft(contentBox01).toHaveCSS("color", "rgb(255, 0, 255)");
    await expect.soft(contentBox01).toHaveCSS("font-family", /Verdana/);
    await expect.soft(contentBox01).toHaveCSS("font-size", "24px");
    await expect.soft(contentBox01).toHaveCSS("font-weight", "400");
    await expect.soft(contentBox01).toHaveCSS("text-transform", "lowercase");
    await expect.soft(contentBox01).toHaveCSS("font-style", "italic");
    await expect.soft(contentBox01).toHaveCSS("text-decoration", "overline solid rgb(255, 0, 255)");
    await expect.soft(contentBox01).toHaveCSS("line-height", "24px");
    await expect.soft(contentBox01).toHaveCSS("letter-spacing", "2.4px");
    await expect.soft(contentBox01).toHaveCSS("word-spacing", "4px");
  });

  test("Test Style Tab > Toggle Button", async ({ page }) => {
    let toggleButtonText = offcanvasContainer.getByText("Click here 241021");
    let toggleButtonSvg = offcanvasContainer.locator("svg");
    let toggleButton = offcanvasContainer.locator(".eael-offcanvas-toggle-wrap div.elementor-animation-shrink");

    await expect.soft(offcanvasContainer.locator(".eael-offcanvas-toggle-wrap")).toHaveCSS("text-align", "center");
    await expect.soft(toggleButton).toHaveClass(/elementor-size-lg/);

    // Icon related
    await expect.soft(toggleButtonSvg).toHaveCSS("height", "31px");
    await expect.soft(toggleButtonSvg).toHaveCSS("width", "31px");
    await expect.soft(toggleButtonSvg).toHaveCSS("font-size", "31px");
    await expect.soft(toggleButtonSvg).toHaveCSS("line-height", "31px");

    // Border related
    await expect.soft(toggleButton).toHaveCSS("border-style", "solid");
    await expect.soft(toggleButton).toHaveCSS("border-width", "11px");
    await expect.soft(toggleButton).toHaveCSS("border-radius", "12px");
    await expect.soft(toggleButton).toHaveCSS("border-color", "rgb(0, 255, 0)");

    // Button Related
    await expect.soft(toggleButton).toHaveCSS("box-shadow", "rgba(0, 0, 0, 0.5) 1px 2px 13px 4px inset");
    await expect.soft(toggleButton).toHaveCSS("padding", "13px 14px 15px 16px");
    await expect.soft(toggleButton).toHaveCSS("background-color", "rgb(0, 255, 255)");

    // Text color red
    // Text font-family "arial"
    // Font Size 21px
    // Font weight 600
    // Transform capitalizze
    // Style normal
    // Decoration underline
    // Line height 21
    // letter spacing 2.1
    // word spacing 1
    await expect.soft(toggleButtonText).toHaveCSS("color", "rgb(255, 0, 0)");
    await expect.soft(toggleButtonText).toHaveCSS("font-family", /Arial/);
    await expect.soft(toggleButtonText).toHaveCSS("font-size", "21px");
    await expect.soft(toggleButtonText).toHaveCSS("font-weight", "600");
    await expect.soft(toggleButtonText).toHaveCSS("text-transform", "capitalize");
    await expect.soft(toggleButtonText).toHaveCSS("font-style", "normal");
    await expect.soft(toggleButtonText).toHaveCSS("text-decoration", "underline solid rgb(255, 0, 0)");
    await expect.soft(toggleButtonText).toHaveCSS("line-height", "21px");
    await expect.soft(toggleButtonText).toHaveCSS("letter-spacing", "2.1px");
    await expect.soft(toggleButtonText).toHaveCSS("word-spacing", "1px");

    // Hover
    await toggleButton.hover();
  });
});
