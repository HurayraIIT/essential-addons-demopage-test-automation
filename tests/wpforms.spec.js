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

  test("Test Style Tab > Form Container", async ({ page }) => {
    // background color cyan
    // form alignment center
    // margin 14px
    // padding 15px
    // border radius 16px
    // border type dashed
    // border width 3px
    // border color blue
    // box shadow 1 2 13 4

    let form = widget.locator("div.eael-wpforms-align-center");
    await expect.soft(form).toHaveCSS("background-color", "rgb(0, 255, 255)");
    await expect.soft(form).toHaveCSS("justify-content", "center");
    await expect.soft(form).toHaveCSS("margin", "14px");
    await expect.soft(form).toHaveCSS("padding", "15px");
    await expect.soft(form).toHaveCSS("border-radius", "16px");
    await expect.soft(form).toHaveCSS("border-style", "dashed");
    await expect.soft(form).toHaveCSS("border-width", "3px");
    await expect.soft(form).toHaveCSS("border-color", "rgb(0, 0, 255)");
    await expect.soft(form).toHaveCSS("box-shadow", "rgba(0, 0, 0, 0.5) 1px 2px 13px 4px");
  });

  test("Test Style Tab > Title & Description", async ({ page }) => {
    // alignment center

    // Title color red
    // Title margin top bottom 11px
    //// Typography Styles
    // Font Family Arial
    // Font Size 17px
    // Font Weight 700
    // Transform capitalize
    // Style normal
    // Text Decoration Underline
    // Line Height 17px
    // Letter Spacing 1.7
    // Word Spacing 7px

    let title = widget.getByText("Hurayra Automation WPForms 241110 Form 01", { exact: true });
    await expect.soft(title).toHaveCSS("color", "rgb(255, 0, 0)");
    await expect.soft(title).toHaveCSS("margin", "11px 0px");
    await expect.soft(title).toHaveCSS("font-family", /Arial/);
    await expect.soft(title).toHaveCSS("font-size", "17px");
    await expect.soft(title).toHaveCSS("font-weight", "700");
    await expect.soft(title).toHaveCSS("text-transform", "capitalize");
    await expect.soft(title).toHaveCSS("font-style", "normal");
    await expect.soft(title).toHaveCSS("text-decoration", "underline solid rgb(255, 0, 0)");
    await expect.soft(title).toHaveCSS("line-height", "17px");
    await expect.soft(title).toHaveCSS("letter-spacing", "1.7px");
    await expect.soft(title).toHaveCSS("word-spacing", "7px");

    // Description color blue
    // Description margin top bottom 12px
    //// Typography Styles
    // Font Family Helvetica
    // Font Size 15px
    // Font Weight 500
    // Transform lowercase
    // Style italic
    // Text Decoration line-through
    // Line Height 15px
    // Letter Spacing 1.5
    // Word Spacing 5px

    let description = widget.getByText("Hurayra Automation WPForms 241110 Form 01 Description");
    await expect.soft(description).toHaveCSS("color", "rgb(0, 0, 255)");
    await expect.soft(description).toHaveCSS("margin", "12px 0px");
    await expect.soft(description).toHaveCSS("font-family", /Helvetica/);
    await expect.soft(description).toHaveCSS("font-size", "15px");
    await expect.soft(description).toHaveCSS("font-weight", "500");
    await expect.soft(description).toHaveCSS("text-transform", "lowercase");
    await expect.soft(description).toHaveCSS("font-style", "italic");
    await expect.soft(description).toHaveCSS("text-decoration", "line-through solid rgb(0, 0, 255)");
    await expect.soft(description).toHaveCSS("line-height", "15px");
    await expect.soft(description).toHaveCSS("letter-spacing", "1.5px");
    await expect.soft(description).toHaveCSS("word-spacing", "5px");
  });

  test("Test Style Tab > Labels", async ({ page }) => {
    // margin 8px
    // text color ff00ff
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

    let label = widget.getByText("Will you be attending241110?", { exact: true });
    await expect.soft(label).toHaveCSS("color", "rgb(255, 0, 255)");
    await expect.soft(label).toHaveCSS("margin", "8px");
    await expect.soft(label).toHaveCSS("font-family", /Tahoma/);
    await expect.soft(label).toHaveCSS("font-size", "16px");
    await expect.soft(label).toHaveCSS("font-weight", "600");
    await expect.soft(label).toHaveCSS("text-transform", "lowercase");
    await expect.soft(label).toHaveCSS("font-style", "italic");
    await expect.soft(label).toHaveCSS("text-decoration", "underline solid rgb(255, 0, 255)");
    await expect.soft(label).toHaveCSS("line-height", "16px");
    await expect.soft(label).toHaveCSS("letter-spacing", "1.6px");
    await expect.soft(label).toHaveCSS("word-spacing", "6px");
  });

  // test("Test Style Tab > Input & Textarea", async ({ page }) => {
  //   //
  // });

  test("Test Style Tab > Field Description", async ({ page }) => {
    // text color yellow
    // spacing 9px
    //// Typography Styles
    // Font Family Verdana
    // Font Size 13px
    // Font Weight 300
    // Transform capitalize
    // Style normal
    // Text Decoration overline
    // Line Height 13px
    // Letter Spacing 1.3
    // Word Spacing 3px

    let fieldDescription = widget.getByText("Enter Your Name241110");
    await expect.soft(fieldDescription).toHaveCSS("color", "rgb(255, 255, 0)");
    await expect.soft(fieldDescription).toHaveCSS("border-color", "rgb(255, 255, 0)");
    await expect.soft(fieldDescription).toHaveCSS("padding-top", "9px");
    await expect.soft(fieldDescription).toHaveCSS("font-family", /Verdana/);
    await expect.soft(fieldDescription).toHaveCSS("font-size", "13px");
    await expect.soft(fieldDescription).toHaveCSS("font-weight", "300");
    await expect.soft(fieldDescription).toHaveCSS("text-transform", "capitalize");
    await expect.soft(fieldDescription).toHaveCSS("font-style", "normal");
    await expect.soft(fieldDescription).toHaveCSS("text-decoration", "overline solid rgb(255, 255, 0)");
    await expect.soft(fieldDescription).toHaveCSS("line-height", "13px");
    await expect.soft(fieldDescription).toHaveCSS("letter-spacing", "1.3px");
    await expect.soft(fieldDescription).toHaveCSS("word-spacing", "3px");
  });

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
