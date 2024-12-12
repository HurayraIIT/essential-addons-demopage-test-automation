"use strict";

import { test, expect } from "../global-setup";

let slug = "/woocommerce-elements/woo-product-carousel/";

test.describe("Woo Product Carousel - Preset 1", () => {
  let heading = "Hurayra Automation 241212 Preset One";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("4cd20f3");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - list:
        - group "2 / 4":
          - text: Sale PONE
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=1]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.#/
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - group "3 / 4":
          - text: Sale PONE
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=1]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.#/
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - group "4 / 4":
          - text: Sale PONE
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=1]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.#/
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - group "1 / 4":
          - text: Stock out PONE
          - link
          - list:
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=1]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.#/
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - group "2 / 4":
          - text: Sale PONE
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=1]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.#/
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - group "3 / 4":
          - text: Sale PONE
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=1]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.#/
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - group "4 / 4":
          - text: Sale PONE
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=1]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.#/
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - group "1 / 4":
          - text: Stock out PONE
          - link
          - list:
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=1]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.#/
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - group "2 / 4":
          - text: Sale PONE
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=1]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.#/
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - group "3 / 4":
          - text: Sale PONE
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=1]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.#/
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
      - group "2 / 4":
        - img
      - group "3 / 4":
        - img
      - group "4 / 4":
        - img
      - group "1 / 4":
        - img
      - group "2 / 4":
        - img
      - group "3 / 4":
        - img
      - group "4 / 4":
        - img
      - group "1 / 4":
        - img
      - group "2 / 4":
        - img
      - group "3 / 4":
        - img
      - button "Next slide"
      - button "Previous slide"
      `);
  });
});

test.describe("Woo Product Carousel - Preset 2", () => {
  let heading = "Hurayra Automation 241212 Preset Two";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("078d89d");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - list:
        - group "2 / 4":
          - text: Sale PTWO
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=2]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.>/
        - group "3 / 4":
          - text: Sale PTWO
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=2]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.>/
        - group "4 / 4":
          - text: Sale PTWO
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=2]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.>/
        - group "1 / 4":
          - text: Sale PTWO
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=2]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.>/
        - group "2 / 4":
          - text: Sale PTWO
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=2]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.>/
        - group "3 / 4":
          - text: Sale PTWO
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=2]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.>/
        - group "4 / 4":
          - text: Sale PTWO
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=2]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.>/
        - group "1 / 4":
          - text: Sale PTWO
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=2]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.>/
        - group "2 / 4":
          - text: Sale PTWO
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=2]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.>/
        - group "3 / 4":
          - text: Sale PTWO
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=2]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.>/
      - group "2 / 4":
        - img
      - group "3 / 4":
        - img
      - group "4 / 4":
        - img
      - group "1 / 4":
        - img
      - group "2 / 4":
        - img
      - group "3 / 4":
        - img
      - group "4 / 4":
        - img
      - group "1 / 4":
        - img
      - group "2 / 4":
        - img
      - group "3 / 4":
        - img
      - button "Next slide"
      - button "Previous slide"
      `);
  });
});

test.describe("Woo Product Carousel - Preset 3", () => {
  let heading = "Hurayra Automation 241212 Preset Three";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("98be735");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - list:
        - group "2 / 4":
          - text: Sale PTHR
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem:
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=3]
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\.   Rated/"
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.\\//
        - group "3 / 4":
          - text: Sale PTHR
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem:
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=3]
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\.   Rated/"
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.\\//
        - group "4 / 4":
          - text: Sale PTHR
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem:
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=3]
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\.   Rated/"
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.\\//
        - group "1 / 4":
          - text: Stock out PTHR
          - link
          - list:
            - listitem: 
            - listitem:
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=3]
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\.   Rated/"
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.\\//
        - group "2 / 4":
          - text: Sale PTHR
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem:
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=3]
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\.   Rated/"
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.\\//
        - group "3 / 4":
          - text: Sale PTHR
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem:
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=3]
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\.   Rated/"
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.\\//
        - group "4 / 4":
          - text: Sale PTHR
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem:
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=3]
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\.   Rated/"
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.\\//
        - group "1 / 4":
          - text: Stock out PTHR
          - link
          - list:
            - listitem: 
            - listitem:
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=3]
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\.   Rated/"
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.\\//
        - group "2 / 4":
          - text: Sale PTHR
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem:
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=3]
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\.   Rated/"
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.\\//
        - group "3 / 4":
          - text: Sale PTHR
          - link
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem:
              - link ""
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=3]
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\.   Rated/"
          - strong: /\\d+\\.\\d+/
          - text: /out of 5 based on  1 customer rating \\d+\\.\\d+\\/5 \\(1\\)/
          - paragraph: /Hurayra Automation \\d+ Product\\.\\.\\.\\//
      - group "2 / 4":
        - img
      - group "3 / 4":
        - img
      - group "4 / 4":
        - img
      - group "1 / 4":
        - img
      - group "2 / 4":
        - img
      - group "3 / 4":
        - img
      - group "4 / 4":
        - img
      - group "1 / 4":
        - img
      - group "2 / 4":
        - img
      - group "3 / 4":
        - img
      - button "Next slide"
      - button "Previous slide"
      `);
  });
});

test.describe("Woo Product Carousel - Preset 4", () => {
  let heading = "Hurayra Automation 241212 Preset Four";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("6af7aca");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - list:
        - group "2 / 4":
          - text: Sale PFR
          - link
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=4]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product---/
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
        - group "3 / 4":
          - text: Sale PFR
          - link
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=4]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product---/
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
        - group "4 / 4":
          - text: Sale PFR
          - link
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=4]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product---/
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
        - group "1 / 4":
          - text: Sale PFR
          - link
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=4]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product---/
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
        - group "2 / 4":
          - text: Sale PFR
          - link
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=4]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product---/
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
        - group "3 / 4":
          - text: Sale PFR
          - link
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=4]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product---/
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
        - group "4 / 4":
          - text: Sale PFR
          - link
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=4]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product---/
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
        - group "1 / 4":
          - text: Sale PFR
          - link
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=4]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product---/
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
        - group "2 / 4":
          - text: Sale PFR
          - link
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=4]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product---/
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
        - group "3 / 4":
          - text: Sale PFR
          - link
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=4]
          - text:   Rated
          - strong: /\\d+\\.\\d+/
          - text: "/out of 5 based on  1 customer rating \\\\d+\\\\.\\\\d+\\\\/5 \\\\(1\\\\) Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - paragraph: /Hurayra Automation \\d+ Product---/
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem "Details":
              - link ""
      - group "2 / 4":
        - img
      - group "3 / 4":
        - img
      - group "4 / 4":
        - img
      - group "1 / 4":
        - img
      - group "2 / 4":
        - img
      - group "3 / 4":
        - img
      - group "4 / 4":
        - img
      - group "1 / 4":
        - img
      - group "2 / 4":
        - img
      - group "3 / 4":
        - img
      - button "Next slide"
      - button "Previous slide"
      `);
  });
});
