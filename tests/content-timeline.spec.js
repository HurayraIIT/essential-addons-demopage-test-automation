"use strict";

import { test, expect } from "../global-setup";

test.describe("Content Timeline Live Demo Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    let slug = "https://essential-addons.com/elementor/content-timeline";
    let heading = "Content Timeline";

    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Test Section: Center Layout With Custom Source", async ({ page }) => {
    await page.getByRole("heading", { name: "Center Layout With Custom Source" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Center Layout With Custom Source" })).toBeVisible();
    await expect(
      page.getByText(
        "Choose custom source from ‘Timeline Content’ and style each section of it to make it look standout"
      )
    ).toBeVisible();

    const widget = page.locator(
      ".elementor-element-72c859bb > .elementor-widget-container > #eael-content-timeline-72c859bb"
    );
    await expect(widget).toHaveAttribute("data-slide_to_scroll", '{"desktop":1,"mobile":1,"tablet":1}');

    await expect(page.locator(".eael-content-timeline-img").first()).toBeVisible();
    await expect(page.locator(".eael-content-timeline-inner").first()).toBeVisible();
    await expect(page.locator("div:nth-child(2) > .eael-content-timeline-img").first()).toBeVisible();
    await expect(page.locator("div:nth-child(2) > .eael-content-timeline-line").first()).toBeVisible();
    await expect(page.locator("div:nth-child(3) > .eael-content-timeline-img").first()).toBeVisible();
    await expect(page.locator("div:nth-child(4) > .eael-content-timeline-img").first()).toBeVisible();
  });
});

let slug = "/dynamic-content-elements/content-timeline/";

test.describe("Content Timeline - Default Preset", () => {
  let heading = "Hurayra Automation 241111 Default Preset";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await page.getByRole("heading", { name: heading, exact: true }).click();
  });

  test("Test Contents", async ({ page }) => {
    //
  });

  test("Test Content Tab > Layout Settings", async ({ page }) => {
    //
  });

  test("Test Content Tab > Links", async ({ page }) => {
    //
  });

  test("Test Style Tab > Timeline", async ({ page }) => {
    //
  });

  test("Test Style Tab > Card", async ({ page }) => {
    //
  });

  test("Test Style Tab > Caret", async ({ page }) => {
    //
  });

  test("Test Style Tab > Bullet", async ({ page }) => {
    //
  });

  test("Test Style Tab > Color & Typography", async ({ page }) => {
    ////// Title Style //////
    // Color red
    // Alignment center
    //// Typography Styles
    // Font Family Verdana
    // Font Size 17px
    // Font Weight 700
    // Transform lowercase
    // Style normal
    // Text Decoration line-through
    // Line Height 17px
    // Letter Spacing 1.7
    // Word Spacing 7px

    let title = page.getByText("Hurayra Automation Product 01");
    await expect.soft(title).toHaveCSS("color", "rgb(255, 0, 0)");
    await expect.soft(title).toHaveCSS("text-align", "center");
    await expect.soft(title).toHaveCSS("font-family", /Verdana/);
    await expect.soft(title).toHaveCSS("font-size", "17px");
    await expect.soft(title).toHaveCSS("font-weight", "700");
    await expect.soft(title).toHaveCSS("text-transform", "lowercase");
    await expect.soft(title).toHaveCSS("font-style", "normal");
    await expect.soft(title).toHaveCSS("text-decoration", "line-through solid rgb(255, 0, 0)");
    await expect.soft(title).toHaveCSS("line-height", "17px");
    await expect.soft(title).toHaveCSS("letter-spacing", "1.7px");
    await expect.soft(title).toHaveCSS("word-spacing", "7px");

    ////// Excerpt Style //////
    // Color Green
    // alignment right
    //// Typography Styles
    // Font Family Helvetica
    // Font Size 15px
    // Font Weight 500
    // Transform capitalize
    // Style oblique
    // Text Decoration overline
    // Line Height 15px
    // Letter Spacing 1.5
    // Word Spacing 5px

    let excerpt = page.getByText("Hurayra Automation 241107>>>").nth(0);
    await expect.soft(excerpt).toHaveCSS("color", "rgb(0, 255, 0)");
    await expect.soft(excerpt).toHaveCSS("text-align", "right");
    await expect.soft(excerpt).toHaveCSS("font-family", /Helvetica/);
    await expect.soft(excerpt).toHaveCSS("font-size", "15px");
    await expect.soft(excerpt).toHaveCSS("font-weight", "500");
    await expect.soft(excerpt).toHaveCSS("text-transform", "capitalize");
    await expect.soft(excerpt).toHaveCSS("font-style", "italic");
    await expect.soft(excerpt).toHaveCSS("text-decoration", "overline solid rgb(0, 255, 0)");
    await expect.soft(excerpt).toHaveCSS("line-height", "15px");
    await expect.soft(excerpt).toHaveCSS("letter-spacing", "1.5px");
    await expect.soft(excerpt).toHaveCSS("word-spacing", "5px");

    ////// Date Style //////
    // Margin 12px
    // Date Color Blue
    //// Typography Styles
    // Font Family Tahoma
    // Font Size 14px
    // Font Weight 400
    // Transform capitalize
    // Style normal
    // Text Decoration default
    // Line Height 14px
    // Letter Spacing 1.4
    // Word Spacing 4px

    let date = page.getByText("November 8, 2020");
    await expect.soft(date).toHaveCSS("margin", "12px");
    await expect.soft(date).toHaveCSS("color", "rgb(0, 0, 255)");
    await expect.soft(date).toHaveCSS("font-family", /Tahoma/);
    await expect.soft(date).toHaveCSS("font-size", "14px");
    await expect.soft(date).toHaveCSS("font-weight", "400");
    await expect.soft(date).toHaveCSS("text-transform", "capitalize");
    await expect.soft(date).toHaveCSS("font-style", "normal");
    await expect.soft(date).toHaveCSS("text-decoration", "none solid rgb(0, 0, 255)");
    await expect.soft(date).toHaveCSS("line-height", "14px");
    await expect.soft(date).toHaveCSS("letter-spacing", "1.4px");
    await expect.soft(date).toHaveCSS("word-spacing", "4px");
  });

  test("Test Style Tab > Read More Button", async ({ page }) => {
    let readMoreButton = page.getByText("Read More241111").nth(1);
    // Padding 16px and margin 6px
    await expect.soft(readMoreButton).toHaveCSS("padding", "16px");
    await expect.soft(readMoreButton).toHaveCSS("margin", "6px");
    // Typography
    // Font Family Tahoma
    // Font Size 16px
    // Font Weight 600
    // Transform Uppercase
    // Style Italic
    // Decoration Underline
    // Line Height 16px
    // Letter Spacing 1.6
    // Word Spacing 6px
    await expect.soft(readMoreButton).toHaveCSS("font-family", /Tahoma/);
    await expect.soft(readMoreButton).toHaveCSS("font-size", "16px");
    await expect.soft(readMoreButton).toHaveCSS("font-weight", "600");
    await expect.soft(readMoreButton).toHaveCSS("text-transform", "uppercase");
    await expect.soft(readMoreButton).toHaveCSS("font-style", "italic");
    await expect.soft(readMoreButton).toHaveCSS("text-decoration", "underline solid rgb(0, 255, 255)");
    await expect.soft(readMoreButton).toHaveCSS("line-height", "16px");
    await expect.soft(readMoreButton).toHaveCSS("letter-spacing", "1.6px");
    await expect.soft(readMoreButton).toHaveCSS("word-spacing", "6px");

    // Text Color Normal #00ffff, Hover #ff0000
    // Background Color Normal #ff00ff, Hover #00ff00
    // Border Color Normal #ffff00, Hover #0000ff
    // Border Width 2px
    // Border type Dotted
    // Border Radious 16px
    // Box Shadow 2 3 14 5
    await expect.soft(readMoreButton).toHaveCSS("color", "rgb(0, 255, 255)");
    await expect.soft(readMoreButton).toHaveCSS("background-color", "rgb(255, 0, 255)");
    await expect.soft(readMoreButton).toHaveCSS("border-color", "rgb(255, 255, 0)");
    await expect.soft(readMoreButton).toHaveCSS("border-width", "2px");
    await expect.soft(readMoreButton).toHaveCSS("border-style", "dotted");
    await expect.soft(readMoreButton).toHaveCSS("border-radius", "16px");
    await expect.soft(readMoreButton).toHaveCSS("box-shadow", "rgba(0, 0, 0, 0.5) 2px 3px 14px 5px");

    await readMoreButton.hover();
    await page.waitForTimeout(500);

    await expect.soft(readMoreButton).toHaveCSS("color", "rgb(255, 0, 0)");
    await expect.soft(readMoreButton).toHaveCSS("background-color", "rgb(0, 255, 0)");
    await expect.soft(readMoreButton).toHaveCSS("border-color", "rgb(0, 0, 255)");
  });
});
