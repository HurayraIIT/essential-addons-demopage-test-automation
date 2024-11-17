"use strict";

import { test, expect } from "../global-setup";

let slug = "/woocommerce-elements/woo-product-collections/";

test.describe("Woo Product Collections - All Types", () => {
  let heading = "Hurayra Automation 241117";
  let widget1 = null;
  let widget2 = null;
  let widget3 = null;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await page.getByRole("heading", { name: heading, exact: true }).click();

    widget1 = page.getByTestId("4c19fd2");
    widget2 = page.getByTestId("12b174d");
    widget3 = page.getByTestId("7b35733");
  });

  test("Test Contents", async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Sale241117-cat' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sale241117-tag' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sale241117-attr' })).toBeVisible();
  });

//   test("Test Style Tab > General > Default Layout", async ({ page }) => {
//     //
//   });

  test("Test Style Tab > General > Layout 2", async ({ page }) => {
    //// Layout Style
    // padding 21px
    // overlay padding 22px
    // border radius 23px
    // border type double
    // border width 4px
    // border color red
    // shadow 1 2 13 4

    let layout = widget1.locator("div.eael-woo-collections-layout-two");
    let overlay = widget1.locator("div.eael-woo-collections-overlay-right");
    await expect.soft(layout).toHaveCSS("padding", "21px");
    await expect.soft(overlay).toHaveCSS("padding", "22px");
    await expect.soft(layout).toHaveCSS("border-radius", "23px");
    await expect.soft(layout).toHaveCSS("border-style", "double");
    await expect.soft(layout).toHaveCSS("border-width", "4px");
    await expect.soft(layout).toHaveCSS("border-color", "rgb(255, 0, 0)");
    await expect.soft(layout).toHaveCSS("box-shadow", "rgba(0, 0, 0, 0.5) 1px 2px 13px 4px");
    
    //// Thumbnail style
    // Border radius 15px
    // Horizontal align right
    // content alignment right
    // image hover effect zoom-out

    await expect.soft(layout.locator("a")).toHaveCSS("border-radius", "15px");
    await expect.soft(overlay).toHaveCSS("text-align", "right");
    await expect.soft(overlay).toHaveCSS("justify-content", "flex-end");
    await expect.soft(layout.locator("img")).toHaveClass(/eael-woo-collections-bg-hover-zoom-out/);
  });

  test("Test Style Tab > Typography", async ({ page }) => {
    //// Title Typography Styles
    // Font Family Tahoma
    // Font Size 16px
    // Font Weight 500
    // Transform Uppercase
    // Style Italic
    // Text Decoration Underline
    // Line Height 16px
    // Letter Spacing 1.6
    // Word Spacing 6px
    // color red, hover color green

    let title = widget1.getByText("Hurayra Automation 241107 DONOTDELETE");
    await expect.soft(title).toHaveCSS("font-family", /Tahoma/);
    await expect.soft(title).toHaveCSS("font-size", "16px");
    await expect.soft(title).toHaveCSS("font-weight", "500");
    await expect.soft(title).toHaveCSS("text-transform", "uppercase");
    await expect.soft(title).toHaveCSS("font-style", "italic");
    await expect.soft(title).toHaveCSS("text-decoration", "underline solid rgb(255, 0, 0)");
    await expect.soft(title).toHaveCSS("line-height", "16px");
    await expect.soft(title).toHaveCSS("letter-spacing", "1.6px");
    await expect.soft(title).toHaveCSS("word-spacing", "6px");

    await expect.soft(title).toHaveCSS("color", "rgb(255, 0, 0)");
    await title.hover();
    await page.waitForTimeout(500);
    await expect.soft(title).toHaveCSS("color", "rgb(0, 255, 0)");

    await page.getByRole("heading", { name: heading, exact: true }).click();
    await page.waitForTimeout(500);

    //// Subtitle Typography Styles
    // Font Family Tahoma
    // Font Size 16px
    // Font Weight 500
    // Transform Uppercase
    // Style Italic
    // Text Decoration Underline
    // Line Height 16px
    // Letter Spacing 1.6
    // Word Spacing 6px
    // color red, hover color green

    let subtitle = widget1.getByText("Collections241117-cat");
    await expect.soft(subtitle).toHaveCSS("font-family", /Verdana/);
    await expect.soft(subtitle).toHaveCSS("font-size", "14px");
    await expect.soft(subtitle).toHaveCSS("font-weight", "400");
    await expect.soft(subtitle).toHaveCSS("text-transform", "lowercase");
    await expect.soft(subtitle).toHaveCSS("font-style", "italic");
    await expect.soft(subtitle).toHaveCSS("text-decoration", "overline solid rgb(0, 0, 255)");
    await expect.soft(subtitle).toHaveCSS("line-height", "14px");
    await expect.soft(subtitle).toHaveCSS("letter-spacing", "1.4px");
    await expect.soft(subtitle).toHaveCSS("word-spacing", "4px");

    await expect.soft(subtitle).toHaveCSS("color", "rgb(0, 0, 255)");
    await subtitle.hover();
    await page.waitForTimeout(500);
    await expect.soft(subtitle).toHaveCSS("color", "rgb(255, 0, 0)");
  });

  test("Test Style Tab > Badge", async ({ page }) => {
    // padding 11 12 13 14
    // radius 12 13 14 15
    // background color blue
    // text color yellow

    let badge = widget1.getByText("Sale241117-cat");
    await expect.soft(badge).toHaveCSS("padding", "11px 12px 13px 14px");
    await expect.soft(badge).toHaveCSS("border-radius", "12px 13px 14px 15px");
    await expect.soft(badge).toHaveCSS("background-color", "rgb(0, 0, 255)");
    await expect.soft(badge).toHaveCSS("color", "rgb(255, 255, 0)");
  });
});
