"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/dual-color-heading/";
let heading = "Dual Color Heading 241016 Automation";

test.describe("Dual Color Headline", () => {
  let dch_root = null;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await page.getByRole("heading", { name: heading, exact: true }).click();

    dch_root = page.locator(".elementor-element-f55d484 .eael-dual-header");
  });

  test("Test Content Tab", async ({ page }) => {
    // Icon should be visible and Icon should be star
    await expect.soft(dch_root.locator("span.eael-dch-svg-icon svg")).toHaveClass("e-font-icon-svg e-fas-star");
    // Separator should be visible, Separator type should be line
    expect.soft(dch_root.locator("div.eael-dch-separator-wrap span.separator-one")).toBeVisible();
    expect.soft(dch_root.locator("div.eael-dch-separator-wrap span.separator-two")).toBeVisible();
    // Title tag should be H3, first part should be "First Part 241016", second part should be "Last Part 241016"
    await expect.soft(dch_root.locator("h3.title span:nth-child(1)")).toContainText("First Part 241016");
    await expect.soft(dch_root.locator("h3.title span:nth-child(2)")).toContainText("Last Part 241016");
    // Sub text should be "Sub heading 241016"
    await expect.soft(dch_root.locator("span.subtext p")).toContainText("Sub heading 241016");
    // Alignment should be left
    await expect.soft(dch_root).toHaveCSS("text-align", "left");
    await expect.soft(dch_root.locator("div")).toHaveCSS("text-align", "left");
    await expect.soft(dch_root.locator("h3")).toHaveCSS("text-align", "left");
    await expect.soft(dch_root.locator("span.subtext")).toHaveCSS("text-align", "left");
    await expect.soft(dch_root.locator("span.eael-dch-svg-icon")).toHaveCSS("text-align", "left");
    // Seprator position should be before title
    const separator = await dch_root.locator("div.eael-dch-separator-wrap");
    const title = await dch_root.locator("h3.title");
    const separatorIndex = await separator.evaluate((node) =>
      Array.prototype.indexOf.call(node.parentNode.children, node)
    );
    const titleIndex = await title.evaluate((node) => Array.prototype.indexOf.call(node.parentNode.children, node));
    expect.soft(separatorIndex).toBeLessThan(titleIndex);
  });

  test("Test Style Tab > Dual Heading Style & Icon Style", async ({ page }) => {
    // Background color should be #f1f1f1
    await expect.soft(dch_root).toHaveCSS("background-color", "rgb(241, 241, 241)");
    // Padding 11 12 13 14
    await expect.soft(dch_root).toHaveCSS("padding", "11px 12px 13px 14px");
    // Margin 12 13 14 15
    await expect.soft(dch_root).toHaveCSS("margin", "12px 13px 14px 15px");
    // Border type solid
    await expect.soft(dch_root).toHaveCSS("border-style", "solid");
    // Border width 5 6 7 8
    await expect.soft(dch_root).toHaveCSS("border-width", "5px 6px 7px 8px");
    // Border color red
    await expect.soft(dch_root).toHaveCSS("border-color", "rgb(255, 0, 0)");
    // Border radius 13
    await expect.soft(dch_root).toHaveCSS("border-radius", "13px");
    // Box shadow 1 2 13 14
    await expect.soft(dch_root).toHaveCSS("box-shadow", "rgba(0, 0, 0, 0.5) 1px 2px 13px 4px");

    // Icon size 41px
    await expect.soft(dch_root.locator("span.eael-dch-svg-icon svg")).toHaveCSS("width", "41px");
    await expect.soft(dch_root.locator("span.eael-dch-svg-icon svg")).toHaveCSS("height", "41px");
    // Icon color blue
    await expect.soft(dch_root.locator("span.eael-dch-svg-icon svg")).toHaveCSS("fill", "rgb(0, 0, 255)");
  });

  test("Test Style Tab > Color & Typography", async ({ page }) => {
    const title = await dch_root.locator("h3.title");
    const firstPart = page.getByText("First Part 241016");
    const lastPart = page.getByText("Last Part 241016");

    // main color #00ffff
    await expect.soft(firstPart).toHaveCSS("color", "rgb(0, 255, 255)");
    // solid color #ffff00
    await expect.soft(lastPart).toHaveCSS("color", "rgb(255, 255, 0)");
    // font family Tahoma
    // Font size 33px
    // Font weight 300
    // Transform uppercase
    // Style normal
    // decoration underline
    // Line height 33px
    // Letter spacing 3.3px
    // Word spacing 3px
    await expect.soft(title).toHaveCSS("font-family", /Tahoma/);
    await expect.soft(title).toHaveCSS("font-size", "33px");
    await expect.soft(title).toHaveCSS("font-weight", "300");
    await expect.soft(title).toHaveCSS("text-transform", "uppercase");
    await expect.soft(title).toHaveCSS("text-decoration", "underline solid rgb(255, 255, 0)");
    await expect.soft(title).toHaveCSS("line-height", "33px");
    await expect.soft(title).toHaveCSS("letter-spacing", "3.3px");
    await expect.soft(title).toHaveCSS("word-spacing", "3px");

    const subtext = page.getByText("Sub heading 241016");
    // sub title color #ff00ff
    // title color #ff0000
    // Font family verdana
    // Font size 22px
    // Font weight 700
    // Transform capitalize
    // Style italic
    // decoration overline
    // Line height 22px
    // Letter spacing 2.2px
    // Word spacing 2px
    await expect.soft(subtext).toHaveCSS("color", "rgb(255, 0, 255)");
    await expect.soft(subtext).toHaveCSS("font-family", /Verdana/);
    await expect.soft(subtext).toHaveCSS("font-size", "22px");
    await expect.soft(subtext).toHaveCSS("font-weight", "700");
    await expect.soft(subtext).toHaveCSS("text-transform", "capitalize");
    await expect.soft(subtext.locator("..")).toHaveCSS("text-decoration", "overline solid rgb(255, 0, 255)");
    await expect.soft(subtext).toHaveCSS("line-height", "22px");
    await expect.soft(subtext).toHaveCSS("letter-spacing", "2.2px");
    await expect.soft(subtext).toHaveCSS("word-spacing", "2px");
  });

  test("Test Style Tab > Separator", async ({ page }) => {
    const separator = await dch_root.locator("div.eael-dch-separator-wrap");
    const leftLine = await dch_root.locator("div.eael-dch-separator-wrap span.separator-one");
    const rightLine = await dch_root.locator("div.eael-dch-separator-wrap span.separator-two");
    // alignment right
    await expect.soft(separator).toHaveCSS("display", "flex");
    await expect.soft(separator).toHaveCSS("justify-content", "flex-end");
    // distance between lines 11px
    await expect.soft(leftLine).toHaveCSS("margin-right", "11px");
    await expect.soft(rightLine).toHaveCSS("margin-left", "11px");
    // margin 8 px
    await expect.soft(separator).toHaveCSS("margin", "8px");

    // Left line
    // width 66px
    await expect.soft(leftLine).toHaveCSS("width", "66px");
    // height 6px
    await expect.soft(leftLine).toHaveCSS("height", "6px");
    // radius 16px
    await expect.soft(leftLine).toHaveCSS("border-radius", "16px");
    // color #00ff00
    await expect.soft(leftLine).toHaveCSS("background-color", "rgb(0, 255, 0)");

    // Right line
    // width 77px
    await expect.soft(rightLine).toHaveCSS("width", "77px");
    // height 7px
    await expect.soft(rightLine).toHaveCSS("height", "7px");
    // radius 17px
    await expect.soft(rightLine).toHaveCSS("border-radius", "17px");
    // color #ff0000
    await expect.soft(rightLine).toHaveCSS("background-color", "rgb(255, 0, 0)");
  });
});
