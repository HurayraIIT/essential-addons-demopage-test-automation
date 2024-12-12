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

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - img
      - paragraph:
        - strong: Stock Out241113
      - link /Hurayra Automation Product \\d+/:
        - img /Hurayra Automation Product \\d+/
      - text:   Rated
      - strong: /\\d+\\.\\d+/
      - text: out of 5 based on  1 customer rating
      - link "(1)"
      - paragraph: / Hurayra Automation \\d+ DONOTDELETE/
      - heading /Hurayra Automation Product \\d+/ [level=1]:
        - link /Hurayra Automation Product \\d+/
      - text: /Hurayra Automation \\d+\\.\\.\\.>/
      - 'heading /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./ [level=3]': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
      - 'heading "Total Sold241113: 0" [level=4]'
      - paragraph:
        - link /Read more about “Hurayra Automation Product \\d+”/
      - paragraph: View Product241113
      - img
      - paragraph:
        - strong: Sale241113
      - link /Hurayra Automation Product \\d+/:
        - img /Hurayra Automation Product \\d+/
      - text:   Rated
      - strong: /\\d+\\.\\d+/
      - text: out of 5 based on  1 customer rating
      - link "(1)"
      - paragraph: / Hurayra Automation \\d+ DONOTDELETE/
      - heading /Hurayra Automation Product \\d+/ [level=1]:
        - link /Hurayra Automation Product \\d+/
      - text: /Hurayra Automation \\d+\\.\\.\\.>/
      - 'heading /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./ [level=3]': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
      - 'heading "Total Sold241113: 2" [level=4]'
      - 'heading /Remaining241113: \\d+/ [level=4]'
      - paragraph:
        - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
      - paragraph: View Product241113
      - img
      - paragraph:
        - strong: Sale241113
      - link /Hurayra Automation Product \\d+/:
        - img /Hurayra Automation Product \\d+/
      - text:   Rated
      - strong: /\\d+\\.\\d+/
      - text: out of 5 based on  1 customer rating
      - link "(1)"
      - paragraph: / Hurayra Automation \\d+ DONOTDELETE/
      - heading /Hurayra Automation Product \\d+/ [level=1]:
        - link /Hurayra Automation Product \\d+/
      - text: /Hurayra Automation \\d+\\.\\.\\.>/
      - 'heading /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./ [level=3]': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
      - 'heading "Total Sold241113: 4" [level=4]'
      - 'heading /Remaining241113: \\d+/ [level=4]'
      - paragraph:
        - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
      - paragraph: View Product241113
      - button "Load More241113"
      `);
  });

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

  test("Test Style Tab > Color & Typography > Content Header", async ({ page }) => {
    //// Sale Badge
    // color red, background blue, font Verdana, weight 300
    let saleBadge = widget.getByText("Sale241113").first();
    await expect.soft(saleBadge).toHaveCSS("color", "rgb(255, 0, 0)");
    await expect
      .soft(widget.locator("div.eael-product-list-badge-bg").nth(1).locator("path"))
      .toHaveCSS("fill", "rgb(0, 0, 255)");
    await expect.soft(saleBadge).toHaveCSS("font-family", /Verdana/);
    //await expect.soft(saleBadge).toHaveCSS("font-weight", "300");

    //// Stock Out Badge
    // Color yellow, background green, font Tahoma, weight 400
    let stockOutBadge = widget.getByText("Stock Out241113");
    await expect.soft(stockOutBadge).toHaveCSS("color", "rgb(255, 255, 0)");
    await expect
      .soft(widget.locator("div.eael-product-list-badge-bg").nth(0).locator("path"))
      .toHaveCSS("fill", "rgb(0, 255, 0)");
    await expect.soft(stockOutBadge).toHaveCSS("font-family", /Tahoma/);
    //await expect.soft(stockOutBadge).toHaveCSS("font-weight", "400");

    //// Star rating
    // color red, icon size 16px
    let starRating = widget.locator("div.star-rating").first();
    await expect.soft(starRating).toHaveCSS("font-size", "16px");

    //// Review count
    // color black, font size 21, weight 400
    let reviewCount = widget.locator("a.eael-product-list-review-count").first();
    await expect.soft(reviewCount).toHaveCSS("color", "rgb(0, 0, 0)");
    await expect.soft(reviewCount).toHaveCSS("font-size", "21px");
    await expect.soft(reviewCount).toHaveCSS("font-weight", "400");

    //// Category
    // color #ff00ff, font Helvetica, size 13px, weight 300
    let category = widget.getByText("Hurayra Automation 241107 DONOTDELETE").first();
    await expect.soft(category).toHaveCSS("color", "rgb(255, 0, 255)");
    await expect.soft(category).toHaveCSS("font-family", /Helvetica/);
    await expect.soft(category).toHaveCSS("font-size", "13px");
    await expect.soft(category).toHaveCSS("font-weight", "300");
  });

  test("Test Style Tab > Color & Typography > Content Body", async ({ page }) => {
    //// Title
    // color ff00ff, font Tahoma, size 22px, weight 600, hover color green
    let title = widget.getByText("Hurayra Automation Product 00");
    await expect.soft(title).toHaveCSS("color", "rgb(255, 0, 255)");
    await expect.soft(title).toHaveCSS("font-family", /Tahoma/);
    await expect.soft(title).toHaveCSS("font-size", "22px");
    await expect.soft(title).toHaveCSS("font-weight", "600");
    await title.hover();
    await page.waitForTimeout(500);
    await expect.soft(title).toHaveCSS("color", "rgb(0, 255, 0)");

    //// Excerpt
    // color blue, font Helvetica, size 17px, weight 900
    let excerpt = widget.getByText("Hurayra Automation 241107...>").first();
    await expect.soft(excerpt).toHaveCSS("color", "rgb(0, 0, 255)");
    await expect.soft(excerpt).toHaveCSS("font-family", /Helvetica/);
    await expect.soft(excerpt).toHaveCSS("font-size", "17px");
    await expect.soft(excerpt).toHaveCSS("font-weight", "900");

    //// Regular Price
    // color white, font Arial, size 14px, weight 400
    let regularPrice = widget.locator("span.woocommerce-Price-amount").getByText("100.00৳");
    await expect.soft(regularPrice).toHaveCSS("color", "rgb(255, 255, 255)");
    await expect.soft(regularPrice).toHaveCSS("font-family", /Arial/);
    await expect.soft(regularPrice).toHaveCSS("font-size", "14px");
    await expect.soft(regularPrice).toHaveCSS("font-weight", "400");

    //// Sale Price
    // color black, font Tahoma, size 23px, weight 300
    let salePrice = widget.locator("span.woocommerce-Price-amount").getByText("90.00৳");
    await expect.soft(salePrice).toHaveCSS("color", "rgb(0, 0, 0)");
    await expect.soft(salePrice).toHaveCSS("font-family", /Tahoma/);
    await expect.soft(salePrice).toHaveCSS("font-size", "23px");
    await expect.soft(salePrice).toHaveCSS("font-weight", "300");
  });

  test("Test Style Tab > Color & Typography > Content Footer", async ({ page }) => {
    //// Total Sold
    // text color red, count color green, progress outer blue, progress inner white, font Verdana, size 16px, weight 600
    let totalSoldText = widget.getByText("Total Sold241113:").nth(1);
    let totalSoldCount = widget.getByText("Total Sold241113:").nth(1).getByText("2");
    await expect.soft(totalSoldText).toHaveCSS("color", "rgb(255, 0, 0)");
    await expect.soft(totalSoldCount).toHaveCSS("color", "rgb(0, 255, 0)");

    //// Remaining
    // text color ff00ff, count color yellow, font Verdana, size 16px, weight 600
    let remainingText = widget.getByText("Remaining241113:").nth(0);
    let remainingCount = widget.getByText("Remaining241113:").nth(0).getByText("101");
    await expect.soft(remainingText).toHaveCSS("color", "rgb(255, 0, 255)");
    await expect.soft(remainingCount).toHaveCSS("color", "rgb(255, 255, 0)");

    //// Add to cart
    // color black, background white, font Arial, size 13px, weight 300, hover color white, hover background black
    let addToCartButton = widget.locator("p.eael-product-list-add-to-cart-button").getByText("Buy Now241113").first();
    await expect.soft(addToCartButton).toHaveCSS("color", "rgb(0, 0, 0)");
    await expect.soft(addToCartButton).toHaveCSS("background-color", "rgb(255, 255, 255)");
    await expect.soft(addToCartButton).toHaveCSS("font-family", /Arial/);
    await expect.soft(addToCartButton).toHaveCSS("font-size", "13px");
    await expect.soft(addToCartButton).toHaveCSS("font-weight", "300");
    await addToCartButton.hover();
    await page.waitForTimeout(500);
    await expect.soft(addToCartButton).toHaveCSS("color", "rgb(255, 255, 255)");
    await expect.soft(addToCartButton).toHaveCSS("background-color", "rgb(0, 0, 0)");

    //// Quick view
    // color red, background green, font Arial, size 16px, weight 600, hover color blue, hover background white
    let quickViewButton = widget
      .locator("p.eael-product-list-quick-view-button")
      .getByText("View Product241113")
      .first();
    await expect.soft(quickViewButton).toHaveCSS("color", "rgb(255, 0, 0)");
    await expect.soft(quickViewButton).toHaveCSS("background-color", "rgb(0, 255, 0)");
    await expect.soft(quickViewButton).toHaveCSS("font-family", /Arial/);
    await expect.soft(quickViewButton).toHaveCSS("font-size", "16px");
    await expect.soft(quickViewButton).toHaveCSS("font-weight", "600");
    await quickViewButton.hover();
    await page.waitForTimeout(500);
    await expect.soft(quickViewButton).toHaveCSS("color", "rgb(0, 0, 255)");
    await expect.soft(quickViewButton).toHaveCSS("background-color", "rgb(255, 255, 255)");
  });

  test("Test Style Tab > Color & Typography > On Hover Buttons", async ({ page }) => {
    //// On hover buttons
    // color yellow, background black, font size 21px, hover color black, hover background yellow
    let onHoverSection = widget.locator("ul.eael-product-list-buttons-on-hover").nth(1);

    let addToCart = onHoverSection.locator("li.eael-product-list-add-to-cart-button");
    let quickView = onHoverSection.locator("li.eael-product-list-quick-view-button");
    let link = onHoverSection.locator("li.eael-product-list-link-button");

    await expect.soft(addToCart).not.toBeVisible();
    await expect.soft(quickView).not.toBeVisible();
    await expect.soft(link).not.toBeVisible();

    await widget.locator("div.eael-product-list-image-wrap").nth(1).hover();
    await page.waitForTimeout(500);

    await expect.soft(addToCart).toBeVisible();
    await expect.soft(quickView).toBeVisible();
    await expect.soft(link).toBeVisible();

    await expect.soft(addToCart.locator("a")).toHaveCSS("background-color", "rgb(0, 0, 0)");

    await expect.soft(quickView.locator("a")).toHaveCSS("background-color", "rgb(0, 0, 0)");
    await expect.soft(quickView.locator("i.fa-eye")).toHaveCSS("color", "rgb(255, 255, 0)");
    await expect.soft(quickView.locator("i.fa-eye")).toHaveCSS("font-size", "21px");

    await expect.soft(link.locator("a")).toHaveCSS("background-color", "rgb(0, 0, 0)");
    await expect.soft(link.locator("i.fa-link")).toHaveCSS("color", "rgb(255, 255, 0)");
    await expect.soft(link.locator("i.fa-link")).toHaveCSS("font-size", "21px");
  });

  // test("Test Style Tab > Popup", async ({ page }) => {
  //   //
  // });
});

test.describe("Woo Product List - Preset 2", () => {
  let heading = "Preset Two Hurayra Automation 241212";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("95f888c");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - paragraph: Sale PTWO
      - link /Hurayra Automation Product \\d+/:
        - img /Hurayra Automation Product \\d+/
      - text:   Rated
      - strong: /\\d+\\.\\d+/
      - text: out of 5 based on  1 customer rating
      - link "(1)"
      - paragraph: / Hurayra Automation \\d+ DONOTDELETE/
      - heading /Hurayra Automation Product \\d+/ [level=2]:
        - link /Hurayra Automation Product \\d+/
      - text: /Hurayra Automation \\d+\\.\\.\\.>/
      - 'heading /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./ [level=3]': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
      - 'heading "Total Sold PTWO: 0" [level=4]'
      - 'heading /Remaining PTWO: \\d+/ [level=4]'
      - paragraph:
        - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
      - paragraph: View Product PTWO
      - paragraph: Sale PTWO
      - link /Hurayra Automation Product \\d+/:
        - img /Hurayra Automation Product \\d+/
      - text:   Rated
      - strong: /\\d+\\.\\d+/
      - text: out of 5 based on  1 customer rating
      - link "(1)"
      - paragraph: / Hurayra Automation \\d+ DONOTDELETE/
      - heading /Hurayra Automation Product \\d+/ [level=2]:
        - link /Hurayra Automation Product \\d+/
      - text: /Hurayra Automation \\d+\\.\\.\\.>/
      - 'heading /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./ [level=3]': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
      - 'heading "Total Sold PTWO: 0" [level=4]'
      - 'heading /Remaining PTWO: \\d+/ [level=4]'
      - paragraph:
        - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
      - paragraph: View Product PTWO
      - paragraph: Sale PTWO
      - link /Hurayra Automation Product \\d+/:
        - img /Hurayra Automation Product \\d+/
      - text:   Rated
      - strong: /\\d+\\.\\d+/
      - text: out of 5 based on  1 customer rating
      - link "(1)"
      - paragraph: / Hurayra Automation \\d+ DONOTDELETE/
      - heading /Hurayra Automation Product \\d+/ [level=2]:
        - link /Hurayra Automation Product \\d+/
      - text: /Hurayra Automation \\d+\\.\\.\\.>/
      - 'heading /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./ [level=3]': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
      - 'heading "Total Sold PTWO: 3" [level=4]'
      - 'heading /Remaining PTWO: \\d+/ [level=4]'
      - paragraph:
        - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
      - paragraph: View Product PTWO
      `);
  });
});

test.describe("Woo Product List - Preset 3", () => {
  let heading = "Preset Three Hurayra Automation 241212";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("c9cea5c");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
        - paragraph: Stock Out PTHR
        - link /Hurayra Automation Product \\d+/:
          - img /Hurayra Automation Product \\d+/
        - heading /Hurayra Automation Product \\d+/ [level=3]:
          - link /Hurayra Automation Product \\d+/
        - text:   Rated
        - strong: /\\d+\\.\\d+/
        - text: out of 5 based on  1 customer rating
        - link "(1)"
        - text: /Hurayra Automation \\d+\\.\\.\\.>/
        - 'heading /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./ [level=3]': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - paragraph:
          - link /Read more about “Hurayra Automation Product \\d+”/
        - 'heading "Total Sold PTHR: 0 Item" [level=4]'
        - paragraph: / Hurayra Automation \\d+ DONOTDELETE/
        - paragraph: Sale PTHR
        - link /Hurayra Automation Product \\d+/:
          - img /Hurayra Automation Product \\d+/
        - heading /Hurayra Automation Product \\d+/ [level=3]:
          - link /Hurayra Automation Product \\d+/
        - text:   Rated
        - strong: /\\d+\\.\\d+/
        - text: out of 5 based on  1 customer rating
        - link "(1)"
        - text: /Hurayra Automation \\d+\\.\\.\\.>/
        - 'heading /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./ [level=3]': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - paragraph:
          - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
        - 'heading "Total Sold PTHR: 2 Item" [level=4]'
        - paragraph: / Hurayra Automation \\d+ DONOTDELETE/
        - paragraph: Sale PTHR
        - link /Hurayra Automation Product \\d+/:
          - img /Hurayra Automation Product \\d+/
        - heading /Hurayra Automation Product \\d+/ [level=3]:
          - link /Hurayra Automation Product \\d+/
        - text:   Rated
        - strong: /\\d+\\.\\d+/
        - text: out of 5 based on  1 customer rating
        - link "(1)"
        - text: /Hurayra Automation \\d+\\.\\.\\.>/
        - 'heading /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./ [level=3]': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - paragraph:
          - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
        - 'heading "Total Sold PTHR: 4 Item" [level=4]'
        - paragraph: / Hurayra Automation \\d+ DONOTDELETE/
        - button "Load More PTHR"
        `);
  });
});
