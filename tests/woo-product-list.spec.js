"use strict";

import { test, expect } from "../global-setup";

let slug = "/woocommerce-elements/woo-product-list/";

test.describe("Woo Product List - Preset 1", () => {
  let heading = "Preset 1 Hurayra Automation 241109";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("310fdd2");
  });

  // test("Test Contents", async ({ page }) => {
  //   //
  // });

  test("Test Style Tab > Container", async ({ page }) => {
    // Margin 12px
    // Padding 13px
    // Border Radius 14px
    // Background color #ff00ff
    // Border Type Double
    // Border Width 5px
    // Border color yellow
    // box shadow 2 3 14 5

    let container = widget.locator("div.eael-product-list-container");
    await expect.soft(container).toHaveCSS("margin", "12px");
    await expect.soft(container).toHaveCSS("padding", "13px");
    await expect.soft(container).toHaveCSS("border-radius", "14px");
    await expect.soft(container).toHaveCSS("background-color", "rgb(255, 0, 255)");
    await expect.soft(container).toHaveCSS("border-style", "double");
    await expect.soft(container).toHaveCSS("border-width", "5px");
    await expect.soft(container).toHaveCSS("border-color", "rgb(255, 255, 0)");
    await expect.soft(container).toHaveCSS("box-shadow", "rgba(0, 0, 0, 0.5) 2px 3px 14px 5px");
  });

  test("Test Style Tab > Item", async ({ page }) => {
    // Margin 31px 1px
    // padding 13px
    // border radius 14px
    // background color cyan
    // border type dashed
    // border width 4px
    // border color blue
    // box shadow 1 2 13 4

    let item1 = widget.locator("div.eael-product-list-item").nth(1);
    await expect.soft(item1.locator("..")).toHaveCSS("margin", "31px 1px");
    await expect.soft(item1).toHaveCSS("padding", "13px");
    await expect.soft(item1).toHaveCSS("border-radius", "14px");
    await expect.soft(item1).toHaveCSS("background-color", "rgb(0, 255, 255)");
    await expect.soft(item1).toHaveCSS("border-style", "dashed");
    await expect.soft(item1).toHaveCSS("border-width", "4px");
    await expect.soft(item1).toHaveCSS("border-color", "rgb(0, 0, 255)");
    await expect.soft(item1).toHaveCSS("box-shadow", "rgba(0, 0, 0, 0.5) 1px 2px 13px 4px");
  });

  test("Test Style Tab > Image", async ({ page }) => {
    // background red
    // padding 12px
    // border radius 11px

    let imageWrapper = widget.locator("div.eael-product-list-image-wrap").first();
    await expect.soft(imageWrapper).toHaveCSS("background-color", "rgb(255, 0, 0)");
    await expect.soft(imageWrapper).toHaveCSS("padding", "12px");
    await expect.soft(imageWrapper).toHaveCSS("border-radius", "11px");
  });

  test("Test Style Tab > Content", async ({ page }) => {
    //// Content Wrapper
    // Padding 21px
    let contentWrapper = widget.locator("div.eael-product-list-content-wrap").nth(1);
    await expect.soft(contentWrapper).toHaveCSS("padding", "21px");

    //// Content Header
    // Margin 11px, padding 12px
    let contentHeader = widget.locator("div.eael-product-list-content-header").nth(1);
    await expect.soft(contentHeader).toHaveCSS("margin", "11px");
    await expect.soft(contentHeader).toHaveCSS("padding", "12px");

    //// Content Body
    // Title: Margin 3px, Padding 4px
    let title = widget.locator("h1.eael-product-list-title").nth(1);
    await expect.soft(title).toHaveCSS("margin", "3px");
    await expect.soft(title).toHaveCSS("padding", "4px");

    // Excerpt: Margin 5px, Padding 6px
    let excerpt = widget.locator("div.eael-product-list-excerpt").nth(1);
    await expect.soft(excerpt).toHaveCSS("margin", "5px");
    await expect.soft(excerpt).toHaveCSS("padding", "6px");

    // price: Margin 7px, Padding 8px
    let price = widget.locator("h3.eael-product-list-price").nth(1);
    await expect.soft(price).toHaveCSS("margin", "7px");
    await expect.soft(price).toHaveCSS("padding", "8px");

    //// Content Footer
    // Total Sold: Progress height 5px, Border Radius 12px
    let progressBar = widget.locator("div.eael-product-list-progress-bar-outer").nth(1);
    await expect.soft(progressBar).toHaveCSS("height", "5px");
    await expect.soft(progressBar).toHaveCSS("border-radius", "12px");

    // Static Buttons
      // Add to cart: 
      // Margin 5px
      // Padding 21 21 21 41
      // Border Radius 16px
      // Border Type double
      // Border width 3px
      // Border color red
      // Box Shadow 2 3 14 5
    let footer = widget.locator("div.eael-product-list-content-footer").nth(1);
    let addToCartButton = footer.locator("a.add_to_cart_button");
    await expect.soft(addToCartButton).toHaveCSS("margin", "5px");
    await expect.soft(addToCartButton).toHaveCSS("padding", "21px 21px 21px 41px");
    await expect.soft(addToCartButton).toHaveCSS("border-radius", "16px");
    await expect.soft(addToCartButton).toHaveCSS("border-style", "double");
    await expect.soft(addToCartButton).toHaveCSS("border-width", "3px");
    await expect.soft(addToCartButton).toHaveCSS("border-color", "rgb(255, 0, 0)");


      // View Products: 
      // Margin 6px
      // Padding 22px
      // Border Radius 17px
      // Border Type dotted
      // Border width 4px
      // Border color green
      // Box Shadow 1 2 13 4
    let viewProductsButton = footer.getByText("View Product241113");
    await expect.soft(viewProductsButton).toHaveCSS("margin", "6px");
    await expect.soft(viewProductsButton).toHaveCSS("padding", "22px");
    await expect.soft(viewProductsButton).toHaveCSS("border-radius", "17px");
    await expect.soft(viewProductsButton).toHaveCSS("border-style", "dotted");
    await expect.soft(viewProductsButton).toHaveCSS("border-width", "4px");
    await expect.soft(viewProductsButton).toHaveCSS("border-color", "rgb(0, 255, 0)");
    await expect.soft(viewProductsButton).toHaveCSS("box-shadow", "rgba(0, 0, 0, 0.5) 1px 2px 13px 4px");

    // On Hover Buttons
    // Margin 5px
    // Padding 6px
    // Border Radius 7px
    // Border Type Dashed
    // Border Width 7px
    // Border color blue
    // Box Shadow 3 4 15 6
    let onHoverButtons = widget.locator("li.eael-product-list-add-to-cart-button a").nth(1);
    await expect.soft(onHoverButtons).toHaveCSS("margin", "5px");
    await expect.soft(onHoverButtons).toHaveCSS("padding", "6px");
    await expect.soft(onHoverButtons).toHaveCSS("border-radius", "7px");
    await expect.soft(onHoverButtons).toHaveCSS("border-style", "dashed");
    await expect.soft(onHoverButtons).toHaveCSS("border-width", "7px");
    await expect.soft(onHoverButtons).toHaveCSS("border-color", "rgb(0, 0, 255)");
    await expect.soft(onHoverButtons).toHaveCSS("box-shadow", "rgba(0, 0, 0, 0.5) 3px 4px 15px 6px");
  });

  test("Test Style Tab > Load More", async ({ page }) => {
    // Padding 15px
    // Margin 16px
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

    // Text Color normal white, hover red
    // Background Color #2ddddd, hover green
    // Border type solid, hover blue
    // border color white
    // border radius 13px
    // box shadow 1 2 13 4
    // button alignment left

    let loadMoreButton = widget.getByText("Load More241113");
    await expect.soft(loadMoreButton.locator("..")).toHaveCSS("padding", "15px");
    await expect.soft(loadMoreButton.locator("..")).toHaveCSS("margin", "16px");

    await expect.soft(loadMoreButton).toHaveCSS("font-family", /Tahoma/);
    await expect.soft(loadMoreButton).toHaveCSS("font-size", "16px");
    await expect.soft(loadMoreButton).toHaveCSS("font-weight", "600");
    await expect.soft(loadMoreButton).toHaveCSS("text-transform", "uppercase");
    await expect.soft(loadMoreButton).toHaveCSS("font-style", "italic");
    await expect.soft(loadMoreButton.locator("..")).toHaveCSS("text-decoration", "underline solid rgb(255, 255, 255)");
    await expect.soft(loadMoreButton).toHaveCSS("line-height", "16px");
    await expect.soft(loadMoreButton).toHaveCSS("letter-spacing", "1.6px");
    await expect.soft(loadMoreButton).toHaveCSS("word-spacing", "6px");

    await expect.soft(loadMoreButton.locator("..")).toHaveCSS("color", "rgb(255, 255, 255)");
    await expect.soft(loadMoreButton.locator("..")).toHaveCSS("background-color", "rgb(45, 221, 221)");
    await expect.soft(loadMoreButton.locator("..")).toHaveCSS("border-style", "solid");
    await expect.soft(loadMoreButton.locator("..")).toHaveCSS("border-color", "rgb(255, 255, 255)");
    await expect.soft(loadMoreButton.locator("..")).toHaveCSS("border-radius", "13px");
    await expect.soft(loadMoreButton.locator("..")).toHaveCSS("box-shadow", "rgba(0, 0, 0, 0.5) 1px 2px 13px 4px");

    await loadMoreButton.hover();
    await page.waitForTimeout(500);

    await expect.soft(loadMoreButton.locator("..")).toHaveCSS("color", "rgb(255, 0, 0)");
    await expect.soft(loadMoreButton.locator("..")).toHaveCSS("background-color", "rgb(0, 255, 0)");
    await expect.soft(loadMoreButton.locator("..")).toHaveCSS("border-color", "rgb(0, 0, 255)");
  });

  // test("Test Style Tab > Color & Typography", async ({ page }) => {
  //   //
  // });

  // test("Test Style Tab > Popup", async ({ page }) => {
  //   //
  // });
});
