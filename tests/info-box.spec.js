"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/info-box/";

test.describe("Infobox With Image", () => {
  let heading = "Hurayra Automation 241112 Infobox Image";

  let widget;
  let title;
  let content;
  let button;
  let image;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("02774e1");
    title = page.getByText("Infobox Title 241112");
    content = page.getByText("Infobox content 241112");
    button = widget.locator("div.infobox-button");
    image = widget.locator("div.infobox-icon img");
  });

  test("Test Content Tab", async ({ page }) => {
    // image-0 should be present
    await expect(widget.locator("div.infobox-icon img")).toHaveAttribute("src", /image-00\.png/);
    // title tag should be h3
    await expect(widget.locator("h3.title")).toHaveText("Infobox Title 241112");
    // content alignment left
    await expect(widget.locator("div.infobox-content")).toHaveCSS("text-align", "left");
    // content height 151px
    await expect(widget.locator("div.infobox-content")).toHaveCSS("height", "151px");
    // link url should be https://eael.site/click-me/ and should have nofollow
    await expect(button.locator("a")).toHaveAttribute("href", /click-me/);
    await expect(button.locator("a")).toHaveAttribute("rel", "nofollow");
    // icon should be grin
    // icon position should be after content
    await expect(button.locator("svg.eael_infobox_button_icon_right")).toHaveClass(/e-far-grin-squint/);
    // icon spacing should be 11px
    await expect(button.locator("svg.eael_infobox_button_icon_right")).toHaveCSS("margin-left", "11px");
  });

  test("Test Style Tab > Image Style", async ({ page }) => {
    // background color red
    // padding 9px
    // border type dotted
    // border width 2px
    // border color green
    // image shape circle
    // width 101px
    // height 102px
    // margin 11px

    await expect(image).toHaveCSS("background-color", "rgb(255, 0, 0)");
    await expect(image).toHaveCSS("padding", "9px");
    await expect(image).toHaveCSS("border-style", "dotted");
    await expect(image).toHaveCSS("border-width", "2px");
    await expect(image).toHaveCSS("border-color", "rgb(0, 255, 0)");
    await expect(image).toHaveCSS("border-radius", "50%");
    await expect(image).toHaveCSS("width", "101px");
    await expect(image).toHaveCSS("height", "102px");
    await expect(image.locator("..")).toHaveCSS("margin", "11px");

    // TODO: assertions for hover styles
  });

  // test("Test Style Tab > Button Styles", async ({ page }) => {
  //   //
  // });

  // test("Test Style Tab > Color & typography", async ({ page }) => {
  //   //
  // });
});

test.describe("Info Box Live Demo Page Tests", () => {
  let slug = "https://essential-addons.com/elementor/info-box";
  let heading = "Info Box";
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/info-box/);
  });

  test("Test Section: Style Up Info Box With Animation", async ({ page }) => {
    await page.getByRole("heading", { name: "Style Up Info Box With" }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: "Style Up Info Box With" })).toBeVisible();
    await expect.soft(page.getByText("Display key information with Info Box type by adding")).toBeVisible();

    // all widgets
    let widget_1 = page.getByTestId("4a6778b1").locator(".eael-infobox");
    let widget_1_icon = widget_1.locator(".fas.fa-exchange-alt");
    let widget_1_content = widget_1.getByText("Development");

    let widget_2 = page.getByTestId("7d0afc").locator(".eael-infobox");
    let widget_2_icon = widget_2.locator(".fas.fa-mobile-alt");
    let widget_2_content = widget_2.getByText("Applications");

    let widget_3 = page.getByTestId("166889de").locator(".eael-infobox");
    let widget_3_icon = widget_3.locator(".far.fa-lightbulb");
    let widget_3_content = widget_3.getByText("Productions");

    let widget_4 = page.getByTestId("545ae8f3").locator(".eael-infobox");
    let widget_4_icon = widget_4.locator(".far.fa-edit");
    let widget_4_content = widget_4.getByText("Web Designing");

    // Verify widget_1 content and style
    await expect.soft(widget_1).toBeVisible();
    await expect.soft(widget_1_icon).toBeVisible();
    await expect.soft(widget_1_icon).toHaveCSS("margin-top", "40px");
    await expect.soft(widget_1_icon).toHaveCSS("font-size", "40px");
    await expect.soft(widget_1_icon).toHaveCSS("line-height", "40px");
    await expect.soft(widget_1_icon).toHaveCSS("font-weight", "900");
    await expect.soft(widget_1_icon).toHaveCSS("text-align", "center");
    await expect.soft(widget_1_icon).toHaveCSS("text-align", "center");
    await expect.soft(widget_1_icon).toHaveCSS("color", "rgb(255, 255, 255)");
    await expect.soft(widget_1_icon).toHaveCSS("transition-duration", "0.3s");

    await expect.soft(widget_1_content).toBeVisible();
    await expect.soft(widget_1_content).toHaveCSS("color", "rgb(255, 255, 255)");
    await expect.soft(widget_1_content).toHaveCSS("font-size", "24px");
    await expect.soft(widget_1_content).toHaveCSS("font-weight", "600");
    await expect.soft(widget_1_content).toHaveCSS("text-align", "center");
    await expect.soft(widget_1_content).toHaveCSS("line-height", "24px");
    await expect.soft(widget_1_content).toHaveCSS("margin", "18px 0px");

    // Verify widget_2 content and style
    await expect.soft(widget_2).toBeVisible();
    await expect.soft(widget_2_icon).toBeVisible();
    await expect.soft(widget_2_content).toBeVisible();

    // Verify widget_3 content and style
    await expect.soft(widget_3).toBeVisible();
    await expect.soft(widget_3_icon).toBeVisible();
    await expect.soft(widget_3_content).toBeVisible();

    // Verify widget_4 content and style
    await expect.soft(widget_4).toBeVisible();
    await expect.soft(widget_4_icon).toBeVisible();
    await expect.soft(widget_4_content).toBeVisible();
  });
});
