"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/creative-buttons/";
let heading = "Creative Buttons 241009";

test.describe("Creative Buttons https://qa1.site/go/mqz31010", () => {
  let button_id = "#button-241009";
  let button_loc = null;
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    button_loc = page.locator(button_id);
  });

  test("Test Content Tab", async ({ page }) => {
    // Primary Button Text
    await expect(page.getByText("Click Me 241009!")).toBeVisible();
    // Icon Should be e-fas-link and position should be right
    await expect(button_loc.locator(".eael-creative-button-icon-right > svg")).toHaveClass(
      "e-font-icon-svg e-fas-link"
    );
    // Icon Spacing should be 21
    await expect(button_loc.locator(".eael-creative-button-icon-right")).toHaveCSS("margin-left", "21px");
    // Link URL should be https://eael.site/click-me/
    await expect(button_loc.locator("a")).toHaveAttribute("href", /click-me/);
    // Link should have nofollow
    await expect(button_loc.locator("a")).toHaveAttribute("rel", /nofollow/);
    // Link should have custom attributes attr241009|val241009
    await expect(button_loc.locator("a")).toHaveAttribute("attr241009", "val241009");

    // Secondary text should be Go 241009! on hover
    await expect(button_loc.locator("a")).toHaveAttribute("data-text", "Go 241009!");
  });

  test("Test Style Tab", async ({ page }) => {
    await page.getByRole("heading", { name: heading, exact: true }).click();

    //Button effect will be winona
    await expect(button_loc.locator("a")).toHaveClass(/eael-creative-button--winona/);
    // Primary button Typography Font family Rosario
    await expect(page.getByText("Click Me 241009!")).toHaveCSS("font-family", /Rosario/);
    // PRimary Button Typography font size 21
    await expect(page.getByText("Click Me 241009!")).toHaveCSS("font-size", "21px");
    // PRimary Button Typography font weight 700
    await expect(page.getByText("Click Me 241009!")).toHaveCSS("font-weight", "700");
    // PRimary Button Typography font transform uppercase
    await expect(page.getByText("Click Me 241009!")).toHaveCSS("text-transform", "uppercase");
    // PRimary Button Typography font style italic
    await expect(page.getByText("Click Me 241009!")).toHaveCSS("font-style", "italic");
    // PRimary Button Typography font decoration underline
    await expect(page.getByText("Click Me 241009!")).toHaveCSS("text-decoration-line", "underline");
    // PRimary Button Typography line height 21
    await expect(page.getByText("Click Me 241009!")).toHaveCSS("line-height", "21px");
    // PRimary Button Typography letter spacing 2.1
    await expect(page.getByText("Click Me 241009!")).toHaveCSS("letter-spacing", "2.1px");
    // PRimary Button Typography word spacing 1
    await expect(page.getByText("Click Me 241009!")).toHaveCSS("word-spacing", "1px");
    // Primary icon size 22
    await expect(button_loc.locator(".eael-creative-button-icon-right > svg")).toHaveCSS("height", "22px");
    await expect(button_loc.locator(".eael-creative-button-icon-right > svg")).toHaveCSS("width", "22px");
    // Button alignment center
    await expect(button_loc.locator("a")).toHaveCSS("text-align", "center");
    // Button width 251
    await expect(button_loc.locator("a")).toHaveCSS("width", "251px");
    // Button padding 21 22 23 24
    await expect(button_loc.locator(".creative-button-inner")).toHaveCSS("padding-top", "21px");
    await expect(button_loc.locator(".creative-button-inner")).toHaveCSS("padding-right", "22px");
    await expect(button_loc.locator(".creative-button-inner")).toHaveCSS("padding-bottom", "23px");
    await expect(button_loc.locator(".creative-button-inner")).toHaveCSS("padding-left", "24px");
    // Icon color red
    await expect(button_loc.locator(".eael-creative-button-icon-right > svg")).toHaveCSS("fill", "rgb(255, 0, 0)");
    // Text color blue
    await expect(button_loc.locator("a")).toHaveCSS("color", "rgb(0, 0, 255)");
    // Background color green
    await expect(button_loc.locator("a")).toHaveCSS("background-color", "rgb(0, 255, 0)");
    // Border type solid
    await expect(button_loc.locator("a")).toHaveCSS("border-top-style", "solid");
    await expect(button_loc.locator("a")).toHaveCSS("border-right-style", "solid");
    await expect(button_loc.locator("a")).toHaveCSS("border-bottom-style", "solid");
    await expect(button_loc.locator("a")).toHaveCSS("border-left-style", "solid");
    // Border width 11 12 13 14
    await expect(button_loc.locator("a")).toHaveCSS("border-top-width", "11px");
    await expect(button_loc.locator("a")).toHaveCSS("border-right-width", "12px");
    await expect(button_loc.locator("a")).toHaveCSS("border-bottom-width", "13px");
    await expect(button_loc.locator("a")).toHaveCSS("border-left-width", "14px");
    // Border color #222222
    await expect(button_loc.locator("a")).toHaveCSS("border-top-color", "rgb(0, 0, 204)");
    await expect(button_loc.locator("a")).toHaveCSS("border-right-color", "rgb(0, 0, 204)");
    await expect(button_loc.locator("a")).toHaveCSS("border-bottom-color", "rgb(0, 0, 204)");
    await expect(button_loc.locator("a")).toHaveCSS("border-left-color", "rgb(0, 0, 204)");
    // Border radius 12
    await expect(button_loc.locator("a")).toHaveCSS("border-top-right-radius", "12px");
    await expect(button_loc.locator("a")).toHaveCSS("border-bottom-right-radius", "12px");
    await expect(button_loc.locator("a")).toHaveCSS("border-bottom-left-radius", "12px");
    await expect(button_loc.locator("a")).toHaveCSS("border-top-left-radius", "12px");
    // Box shadow 11 12 13 14, position outline
    await expect(button_loc.locator("a")).toHaveCSS("box-shadow", "rgba(0, 0, 0, 0.5) 11px 12px 13px 14px");
    // Secondary on hover
    await page.getByText("Click Me 241009!").hover();
    // Icon color #00ff00
    await expect(button_loc.locator(".eael-creative-button-icon-right > svg")).toHaveCSS("fill", "rgb(0, 255, 0)");
    // Text color #ff00ff
    await expect(button_loc.locator("a")).toHaveCSS("color", "rgb(255, 0, 255)");
    // Background color #ffff00
    await expect(button_loc.locator("a")).toHaveCSS("background-color", "rgb(255, 255, 0)");
    // Border color #00ffff
    await expect(button_loc.locator("a")).toHaveCSS("border-color", "rgb(0, 255, 255)");
  });
});
