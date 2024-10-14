"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/testimonials/";
let heading = "Hurayra Testimonial Automation 241010";

test.describe("Testimonials https://qa1.site/go/jc1787", () => {
  let testimonial_loc = null;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    testimonial_loc = page.locator("#eael-testimonial-8cef57c");
  });

  test("Test Content Tab", async ({ page }) => {
    // Verify Image image-01, 768
    await expect(testimonial_loc.locator("img")).toHaveAttribute("src", /image-00-768x768\.png/);
    // Verify Username "First User 241010"
    await expect(page.getByText("First User 241010")).toBeVisible();
    // Verify Company Name "prefEssential Addons Demosuff	"
    await expect(page.getByText("prefEssential Addons Demosuff")).toBeVisible();
    // Verify description "This is the first testimonial description. 241010."
    await expect(page.getByText("This is the first testimonial description. 241010.")).toBeVisible();
    // Description height 181px
    await expect(testimonial_loc.locator(".eael-testimonial-content")).toHaveCSS("height", "181px");
    // verify rating is displayed, yes
    await expect(testimonial_loc.locator(".testimonial-star-rating")).toBeVisible();
    await expect(testimonial_loc.locator(".testimonial-star-rating").locator("li")).toHaveCount(5);
  });

  test("Test Style Tab > Testimonial Styles", async ({ page }) => {
    // The default style should be selected
    await expect(testimonial_loc).toHaveClass(/default-style/);
    await expect(testimonial_loc).toHaveClass(/rating-one/);
    await expect(testimonial_loc).toHaveClass(/testimonial-avatar-rounded/);
    // Background color should be #cbabab
    await expect(testimonial_loc).toHaveCSS("background-color", "rgb(203, 171, 171)");
    // Layout alignment should be center
    await expect(testimonial_loc).toHaveCSS("text-align", "start");
    await expect(testimonial_loc.locator(".eael-testimonial-image")).toHaveCSS("text-align", "center");
    await expect(testimonial_loc.locator(".eael-testimonial-content")).toHaveCSS("text-align", "center");
    await expect(testimonial_loc.locator(".eael-testimonial-quote")).toHaveCSS("text-align", "start");
    // Display user & company block should be enabled
    await expect(testimonial_loc.getByText("First User 241010")).toHaveAttribute(
      "style",
      "display: block; float: none;"
    );
  });

  test("Test Style Tab > Testimonial Image Style", async ({ page }) => {
    let image_loc = testimonial_loc.locator("img");

    // Image dimensions
    await expect(image_loc).toHaveCSS("width", "151px");
    await expect(image_loc).toHaveCSS("height", "147px");

    // Image max width
    await expect(image_loc).toHaveAttribute("sizes", "(max-width: 768px) 100vw, 768px");

    // Margin and padding
    await expect(image_loc).toHaveCSS("margin", "1px 1px 11px");
    await expect(image_loc).toHaveCSS("padding", "2px 3px 4px 5px");

    // Border style
    await expect(image_loc).toHaveCSS("border-style", "dashed");

    // Border width
    await expect(image_loc).toHaveCSS("border-width", "1px 2px 3px 4px");

    // Border color
    await expect(image_loc).toHaveCSS("border-color", "rgb(255, 0, 0)");

    // Rounded avatar
    await expect(image_loc).toHaveCSS("border-radius", "50%");
  });

  test("Test Style Tab > Color, Typography & Spacing", async ({ page }) => {
    let username_loc = page.getByText("First User 241010");
    let company_loc = page.getByText("prefEssential Addons Demosuff");
    let testimonial_text_loc = page.getByText("This is the first testimonial description. 241010.");
    let rating_loc = testimonial_loc.locator(".testimonial-star-rating");

    // Username assertions
    await expect(username_loc).toHaveCSS("color", "rgb(39, 39, 39)");
    await expect(username_loc).toHaveCSS("font-family", /Verdana/);
    await expect(username_loc).toHaveCSS("font-size", "17px");
    await expect(username_loc).toHaveCSS("font-weight", "700");
    await expect(username_loc).toHaveCSS("text-transform", "lowercase");
    await expect(username_loc).toHaveCSS("font-style", "italic");
    await expect(username_loc).toHaveCSS("text-decoration", "line-through solid rgb(39, 39, 39)");
    await expect(username_loc).toHaveCSS("line-height", "17px");
    await expect(username_loc).toHaveCSS("letter-spacing", "0.7px");
    await expect(username_loc).toHaveCSS("word-spacing", "3px");
    await expect(username_loc).toHaveCSS("margin", "7px 6px 5px 4px");

    // Company name assertions
    await expect(company_loc).toHaveCSS("color", "rgb(17, 238, 17)");
    await expect(company_loc).toHaveCSS("font-family", /Helvetica/);
    await expect(company_loc).toHaveCSS("font-size", "19px");
    await expect(company_loc).toHaveCSS("font-weight", "800");
    await expect(company_loc).toHaveCSS("text-transform", "capitalize");
    await expect(company_loc).toHaveCSS("font-style", "normal");
    await expect(company_loc).toHaveCSS("text-decoration", "overline solid rgb(17, 238, 17)");
    await expect(company_loc).toHaveCSS("line-height", "18px");
    await expect(company_loc).toHaveCSS("letter-spacing", "0.8px");
    await expect(company_loc).toHaveCSS("word-spacing", "4px");
    await expect(company_loc).toHaveCSS("margin", "2px 3px 4px 5px");

    // Testimonial Text assertions
    await expect(testimonial_text_loc).toHaveCSS("color", "rgb(2, 43, 176)");
    await expect(testimonial_text_loc).toHaveCSS("font-family", /Roboto/);
    await expect(testimonial_text_loc).toHaveCSS("font-size", "21px");
    await expect(testimonial_text_loc).toHaveCSS("font-weight", "300");
    await expect(testimonial_text_loc).toHaveCSS("text-transform", "uppercase");
    await expect(testimonial_text_loc).toHaveCSS("font-style", "italic");
    await expect(testimonial_loc.locator(".eael-testimonial-text")).toHaveCSS(
      "text-decoration",
      "underline solid rgb(2, 43, 176)"
    );
    await expect(testimonial_text_loc).toHaveCSS("line-height", "20px");
    await expect(testimonial_text_loc).toHaveCSS("letter-spacing", "2px");
    await expect(testimonial_text_loc).toHaveCSS("word-spacing", "2px");
    await expect(testimonial_loc.locator(".eael-testimonial-text")).toHaveCSS("margin", "1px 149px");

    // Rating assertions
    await expect(rating_loc.locator("li").nth(0).locator("i")).toHaveCSS("color", "rgb(255, 45, 255)");
    await expect(rating_loc.locator("li").nth(1).locator("i")).toHaveCSS("color", "rgb(216, 216, 216)");
    await expect(rating_loc.locator("li").nth(2).locator("i")).toHaveCSS("color", "rgb(216, 216, 216)");
    await expect(rating_loc.locator("li").nth(3).locator("i")).toHaveCSS("color", "rgb(216, 216, 216)");
    await expect(rating_loc.locator("li").nth(4).locator("i")).toHaveCSS("color", "rgb(216, 216, 216)");

    await expect(rating_loc.locator("li").nth(0).locator("i")).toHaveCSS("font-size", "21px");

    await expect(rating_loc.locator("li").nth(0)).toHaveCSS("margin-right", "2px");
    await expect(rating_loc.locator("li").nth(1)).toHaveCSS("margin-right", "2px");
    await expect(rating_loc.locator("li").nth(2)).toHaveCSS("margin-right", "2px");
    await expect(rating_loc.locator("li").nth(3)).toHaveCSS("margin-right", "2px");
    await expect(rating_loc.locator("li").nth(4)).toHaveCSS("margin-right", "2px");

    await expect(rating_loc).toHaveCSS("margin", "7px 8px 9px 10px");
  });

  test("Test Style Tab > Quotation Style", async ({ page }) => {
    let quotation_loc = testimonial_loc.locator(".eael-testimonial-quote");
    // Quotation Mark Color #00f0ff70
    await expect(quotation_loc).toHaveCSS("color", "rgba(0, 240, 255, 0.44)");
    // Quotation typography - Font Times New Roman
    await expect(quotation_loc).toHaveCSS("font-family", /Times New Roman/);
    // Font size 24px
    await expect(quotation_loc).toHaveCSS("font-size", "24px");
    // Font weight 700
    await expect(quotation_loc).toHaveCSS("font-weight", "700");
    // transform default
    // await expect(quotation_loc).toHaveCSS("", "");
    // style italic
    await expect(quotation_loc).toHaveCSS("font-style", "italic");
    // decoration default
    // await expect(quotation_loc).toHaveCSS("", "");
    // line height 19px
    await expect(quotation_loc).toHaveCSS("line-height", "19px");
    // letter spacing 1.3px
    await expect(quotation_loc).toHaveCSS("letter-spacing", "1.3px");
    // word spacing 4px
    await expect(quotation_loc).toHaveCSS("word-spacing", "4px");
    // Position from top 8px
    await expect.soft(quotation_loc).toHaveCSS("top", "28px");
    // Position from right 9px
    await expect.soft(quotation_loc).toHaveCSS("right", /1*px/);
  });
});
