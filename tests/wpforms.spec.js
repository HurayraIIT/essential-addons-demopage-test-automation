"use strict";

import { test, expect } from "../global-setup";

let slug = "/form-styler-elements/wpforms/";

test.describe("WPForms", () => {
  let heading = "Hurayra Automation Heading 241110 Form01";
  let widget;
  let button;
  let buttonContainer;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("7f509e7");
    button = widget.getByRole("button", { name: "Submit241110" });
    buttonContainer = widget.locator("div.wpforms-submit-container");
  });

  // test("Test Contents", async ({ page }) => {
  //   //
  // });

  // test("Test Style Tab > Form Container", async ({ page }) => {
  //   //
  // });

  // test("Test Style Tab > Title & Description", async ({ page }) => {
  //   //
  // });

  // test("Test Style Tab > Labels", async ({ page }) => {
  //   //
  // });

  // test("Test Style Tab > Input & Textarea", async ({ page }) => {
  //   //
  // });

  // test("Test Style Tab > Field Description", async ({ page }) => {
  //   //
  // });

  // test("Test Style Tab > Placeholder", async ({ page }) => {
  //   //
  // });

  // test("Test Style Tab > Radio & Checkbox", async ({ page }) => {
  //   //
  // });

  test("Test Style Tab > Submit Button", async ({ page }) => {
    // align right
    // width 251px
    // background color red
    // text color green
    // border type dashed
    // borer width 3px
    // border color blue
    // border radius 4px
    // padding 5px
    // margin top 6px
    //// Typography Styles
    // Font Family Tahoma
    // Font Size 16px
    // Font Weight 600
    // Transform Uppercase
    // Style Italic
    // Text Decoration Underline
    // Line Height 16px
    // Letter Spacing 1.6
    // Word Spacing 6px
    // box shadow 1 2 13 4

    // hover background color yellow
    // hover text color ff00ff
    // hover border type solid
    // hover border width 4px
    // hover border color cyan
    // hover borer radius 5px

    await expect.soft(buttonContainer).toHaveCSS("text-align", "right");
    await expect.soft(button).toHaveCSS("width", "251px");
    await expect.soft(button).toHaveCSS("background-color", "rgb(255, 0, 0)");
    await expect.soft(button).toHaveCSS("color", "rgb(0, 255, 0)");
    await expect.soft(button).toHaveCSS("border-style", "dashed");
    await expect.soft(button).toHaveCSS("border-width", "3px");
    await expect.soft(button).toHaveCSS("border-color", "rgb(0, 0, 255)");
    await expect.soft(button).toHaveCSS("border-radius", "4px");
    await expect.soft(button).toHaveCSS("padding", "5px");
    await expect.soft(buttonContainer).toHaveCSS("margin-top", "6px");

    await expect.soft(button).toHaveCSS("font-family", /Tahoma/);
    await expect.soft(button).toHaveCSS("font-size", "16px");
    await expect.soft(button).toHaveCSS("font-weight", "600");
    await expect.soft(button).toHaveCSS("text-transform", "uppercase");
    await expect.soft(button).toHaveCSS("font-style", "italic");
    await expect.soft(button).toHaveCSS("text-decoration", "underline solid rgb(0, 255, 0)");
    await expect.soft(button).toHaveCSS("line-height", "16px");
    await expect.soft(button).toHaveCSS("letter-spacing", "1.6px");
    await expect.soft(button).toHaveCSS("word-spacing", "6px");
    await expect.soft(button).toHaveCSS("box-shadow", "rgba(0, 0, 0, 0.5) 1px 2px 13px 4px");

    await button.hover();
    await page.waitForTimeout(500);

    await expect.soft(button).toHaveCSS("background-color", "rgb(255, 255, 0)");
    await expect.soft(button).toHaveCSS("color", "rgb(255, 0, 255)");
    await expect.soft(button).toHaveCSS("border-style", "solid");
    await expect.soft(button).toHaveCSS("border-width", "4px");
    await expect.soft(button).toHaveCSS("border-color", "rgb(0, 255, 255)");
    await expect.soft(button).toHaveCSS("border-radius", "5px");
  });

  // test("Test Style Tab > Errors", async ({ page }) => {
  //   await button.click();
  //   await page.waitForTimeout(1000);

  //   await widget.locator("input.wpforms-error").nth(1).click();
  //   await expect.soft(widget.locator("input.wpforms-error").nth(1)).toHaveCSS("border-color", "rgb(255, 255, 0)");
  //   await expect.soft(widget.locator("input.wpforms-error").nth(1)).toHaveCSS("border-width", "7px");
  // });
});
