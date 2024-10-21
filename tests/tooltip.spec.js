"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/tooltip/";
let heading = "Tooltip Heading 241020 Automation";

test.describe("Tooltip https://qa1.site/go/u3m9108", () => {
  let icon_tooltip = null;
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await page.getByRole("heading", { name: heading, exact: true }).click();

    icon_tooltip = page.locator(".elementor-element-a2ba82c div.eael-tooltip");
  });

  test("Test Content Tab", async ({ page }) => {
    // Icon should be present, icon type is face and size is 51px
    await expect(icon_tooltip.locator("svg")).toHaveClass("e-font-icon-svg e-fas-meh");
    await expect(icon_tooltip.locator("svg")).toHaveCSS("width", "51px");
    await expect(icon_tooltip.locator("svg")).toHaveCSS("height", "51px");
    await expect(icon_tooltip.locator("svg")).toHaveCSS("line-height", "51px");
    // alignment is left
    await expect(icon_tooltip).toHaveCSS("text-align", "left");
    // link is enabled and is https://eael.site/click-me/
    await expect(icon_tooltip.getByRole("link")).toHaveAttribute("href", /.*click-me/);
    // Tooltip content is "First Tooltip content 241020"
    await icon_tooltip.getByRole("link").hover();
    await expect(icon_tooltip.getByRole("tooltip", { name: "First Tooltip content 241020" })).toBeVisible();
    // Hover direction is right
    await expect(icon_tooltip.getByRole("tooltip", { name: "First Tooltip content 241020" })).toHaveClass(
      /eael-tooltip-right/
    );
    // Hover speed is 251
  });

  test("Test Style Tab > Content Style", async ({ page }) => {
    await expect(icon_tooltip).toHaveCSS("width", "126px");
    await expect(icon_tooltip).toHaveCSS("padding", "21px");
    await expect(icon_tooltip).toHaveCSS("margin", "22px");

    // Content style - normal
    // BG red, text green
    // Box shadow 1 2 13 4
    // Border solid
    // border width 3
    // Border color blue
    // border radius 25px
    await expect(icon_tooltip).toHaveCSS("background-color", "rgb(255, 0, 0)");
    await expect(icon_tooltip).toHaveCSS("color", "rgb(0, 255, 0)");
    await expect(icon_tooltip).toHaveCSS("box-shadow", "rgba(0, 0, 0, 0.5) 1px 2px 13px 4px");
    await expect(icon_tooltip).toHaveCSS("border-style", "solid");
    await expect(icon_tooltip).toHaveCSS("border-width", "3px");
    await expect(icon_tooltip).toHaveCSS("border-color", "rgb(0, 0, 255)");
    await expect(icon_tooltip).toHaveCSS("border-radius", "25px");

    // Hover
    await icon_tooltip.getByRole("link").hover();
    await page.waitForTimeout(300);
    // Content style - hover
    // BG ffff00, text 0000ff
    // Box shadow rgba(0, 0, 0, 0.5) 2px 3px 14px 5px
    // Border double
    // border width 5
    // Border color red
    // border radius 25px
    await expect(icon_tooltip).toHaveCSS("background-color", "rgb(255, 255, 0)");
    await expect(icon_tooltip).toHaveCSS("color", "rgb(0, 0, 255)");
    await expect(icon_tooltip).toHaveCSS("box-shadow", "rgba(0, 0, 0, 0.5) 2px 3px 14px 5px");
    await expect(icon_tooltip).toHaveCSS("border-style", "double");
    await expect(icon_tooltip).toHaveCSS("border-width", "5px");
    await expect(icon_tooltip).toHaveCSS("border-color", "rgb(255, 0, 0)");
    await expect(icon_tooltip).toHaveCSS("border-radius", "25px");
  });

  test("Test Style Tab > Tooltip Style", async ({ page }) => {
    // Hover
    await icon_tooltip.getByRole("link").hover();
    await page.waitForTimeout(300);

    // width 151px
    await expect(icon_tooltip.getByRole("tooltip", { name: "First Tooltip content 241020" })).toHaveCSS(
      "width",
      "151px"
    );
    // padding 12
    await expect(icon_tooltip.getByRole("tooltip", { name: "First Tooltip content 241020" })).toHaveCSS(
      "padding",
      "12px"
    );
    // margin 11
    await expect(icon_tooltip.getByRole("tooltip", { name: "First Tooltip content 241020" })).toHaveCSS(
      "margin",
      "11px"
    );

    // background ff00ff, text black
    await expect(icon_tooltip.getByRole("tooltip", { name: "First Tooltip content 241020" })).toHaveCSS(
      "background-color",
      "rgb(255, 0, 255)"
    );
    await expect(icon_tooltip.getByRole("tooltip", { name: "First Tooltip content 241020" })).toHaveCSS(
      "color",
      "rgb(0, 0, 0)"
    );

    // Font Verdana
    // Font size 11px
    // Font weight 700
    // Text transform uppercase, style italic, decoration underline
    // Line height 11, letter spacing 1.1, word spacing 1
    // box shadow rgba(0, 0, 0, 0.5) 3px 4px 15px 6px
    await expect(icon_tooltip.getByRole("tooltip", { name: "First Tooltip content 241020" })).toHaveCSS(
      "font-family",
      /Verdana/
    );
    await expect(icon_tooltip.getByRole("tooltip", { name: "First Tooltip content 241020" })).toHaveCSS(
      "font-size",
      "11px"
    );
    await expect(icon_tooltip.getByRole("tooltip", { name: "First Tooltip content 241020" })).toHaveCSS(
      "font-weight",
      "700"
    );
    await expect(icon_tooltip.getByRole("tooltip", { name: "First Tooltip content 241020" })).toHaveCSS(
      "text-transform",
      "uppercase"
    );
    await expect(icon_tooltip.getByRole("tooltip", { name: "First Tooltip content 241020" })).toHaveCSS(
      "font-style",
      "italic"
    );
    await expect(icon_tooltip.getByRole("tooltip", { name: "First Tooltip content 241020" })).toHaveCSS(
      "text-decoration",
      "underline solid rgb(0, 0, 0)"
    );
    await expect(icon_tooltip.getByRole("tooltip", { name: "First Tooltip content 241020" })).toHaveCSS(
      "line-height",
      "11px"
    );
    await expect(icon_tooltip.getByRole("tooltip", { name: "First Tooltip content 241020" })).toHaveCSS(
      "letter-spacing",
      "1.1px"
    );
    await expect(icon_tooltip.getByRole("tooltip", { name: "First Tooltip content 241020" })).toHaveCSS(
      "word-spacing",
      "1px"
    );
    await expect(icon_tooltip.getByRole("tooltip", { name: "First Tooltip content 241020" })).toHaveCSS(
      "box-shadow",
      "rgba(0, 0, 0, 0.5) 3px 4px 15px 6px"
    );

    // TODO: Fix this assertion for - arrow size 7, arrow color green
    // await expect(icon_tooltip.locator("span#tooltip-text-a2ba82c::after")).toHaveCSS("border-color", "rgb(0, 255, 0)");
  });
});
