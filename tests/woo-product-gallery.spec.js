"use strict";

import { test, expect } from "../global-setup";

let slug = "/woocommerce-elements/woo-product-gallery/";

test.describe("Woo Product Gallery - Preset 1", () => {
  let heading = "Hurayra Automation 241215 Preset One";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("6c62d12");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "All-one"
        - listitem:
          - link /Hurayra Automation \\d+ DONOTDELETE/
        - listitem:
          - link /hurayra-automation-\\d+/
      - list:
        - listitem:
          - text: Stock out-one
          - img /Hurayra Automation Product \\d+/
          - list:
            - listitem
            - listitem: 
            - listitem:
              - link ""
          - deletion: /\\d+\\.\\d+৳/
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - insertion: /\\d+\\.\\d+৳/
          - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=1]
        - listitem:
          - text: Sale-one
          - img /Hurayra Automation Product \\d+/
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem:
              - link ""
          - deletion: /\\d+\\.\\d+৳/
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - insertion: /\\d+\\.\\d+৳/
          - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=1]
          - text: 2 Sold-one
        - listitem:
          - text: Sale-one
          - img /Hurayra Automation Product \\d+/
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem:
              - link ""
          - deletion: /\\d+\\.\\d+৳/
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - insertion: /\\d+\\.\\d+৳/
          - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=1]
          - text: 4 Sold-one
        - listitem:
          - text: Sale-one
          - img /Hurayra Automation Product \\d+/
          - list:
            - listitem:
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - listitem: 
            - listitem:
              - link ""
          - deletion: /\\d+\\.\\d+৳/
          - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - insertion: /\\d+\\.\\d+৳/
          - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - link /Hurayra Automation Product \\d+/:
            - heading /Hurayra Automation Product \\d+/ [level=1]
          - text: 3 Sold-one
      - button "Load More-one"
      `);
  });
});

test.describe("Woo Product Gallery - Preset 2", () => {
  let heading = "Hurayra Automation 241215 Preset Two";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("52dfccd");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
    - list:
      - listitem:
        - link "All-two"
      - listitem:
        - link /Hurayra Automation \\d+ DONOTDELETE/
      - listitem:
        - link /hurayra-automation-\\d+/
    - list:
      - listitem:
        - text: Sale-two
        - img /Hurayra Automation Product \\d+/
        - deletion: /\\d+\\.\\d+৳/
        - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - insertion: /\\d+\\.\\d+৳/
        - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\. \\\\d+\\\\.\\\\d+\\\\/5/"
        - heading /Hurayra Automation Product \\d+/ [level=2]
      - listitem:
        - text: Sale-two
        - img /Hurayra Automation Product \\d+/
        - deletion: /\\d+\\.\\d+৳/
        - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - insertion: /\\d+\\.\\d+৳/
        - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\. \\\\d+\\\\.\\\\d+\\\\/5/"
        - heading /Hurayra Automation Product \\d+/ [level=2]
      - listitem:
        - text: Sale-two
        - img /Hurayra Automation Product \\d+/
        - deletion: /\\d+\\.\\d+৳/
        - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - insertion: /\\d+\\.\\d+৳/
        - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\. \\\\d+\\\\.\\\\d+\\\\/5/"
        - heading /Hurayra Automation Product \\d+/ [level=2]
        - text: 3 Sold-two
      - listitem:
        - text: Sale-two
        - img /Hurayra Automation Product \\d+/
        - deletion: /\\d+\\.\\d+৳/
        - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - insertion: /\\d+\\.\\d+৳/
        - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\. \\\\d+\\\\.\\\\d+\\\\/5/"
        - heading /Hurayra Automation Product \\d+/ [level=2]
        - text: 4 Sold-two
    - button "Load More-two"
    `);
  });
});

test.describe("Woo Product Gallery - Preset 3", () => {
  let heading = "Hurayra Automation 241215 Preset Three";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("1f4f015");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
    - list:
      - listitem:
        - link "All-three"
      - listitem:
        - link /Hurayra Automation \\d+ DONOTDELETE/
      - listitem:
        - link /hurayra-automation-\\d+/
    - list:
      - listitem:
        - text: Stock out-three
        - img /Hurayra Automation Product \\d+/
        - text:   Rated
        - strong: /\\d+\\.\\d+/
        - text: out of 5 based on  1 customer rating
        - heading /Hurayra Automation Product \\d+/ [level=3]
        - deletion: /\\d+\\.\\d+৳/
        - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - insertion: /\\d+\\.\\d+৳/
        - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
      - listitem:
        - text: Sale-three
        - img /Hurayra Automation Product \\d+/
        - text:   Rated
        - strong: /\\d+\\.\\d+/
        - text: out of 5 based on  1 customer rating
        - heading /Hurayra Automation Product \\d+/ [level=3]
        - deletion: /\\d+\\.\\d+৳/
        - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - insertion: /\\d+\\.\\d+৳/
        - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\. 2 Sold-three/"
      - listitem:
        - text: Sale-three
        - img /Hurayra Automation Product \\d+/
        - text:   Rated
        - strong: /\\d+\\.\\d+/
        - text: out of 5 based on  1 customer rating
        - heading /Hurayra Automation Product \\d+/ [level=3]
        - deletion: /\\d+\\.\\d+৳/
        - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - insertion: /\\d+\\.\\d+৳/
        - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\. 4 Sold-three/"
      - listitem:
        - text: Sale-three
        - img /Hurayra Automation Product \\d+/
        - text:   Rated
        - strong: /\\d+\\.\\d+/
        - text: out of 5 based on  1 customer rating
        - heading /Hurayra Automation Product \\d+/ [level=3]
        - deletion: /\\d+\\.\\d+৳/
        - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - insertion: /\\d+\\.\\d+৳/
        - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\. 3 Sold-three/"
    `);
  });
});

test.describe("Woo Product Gallery - Preset 4", () => {
  let heading = "Hurayra Automation 241215 Preset Four";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("0542d14");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
    - list:
      - listitem:
        - link "All-four"
      - listitem:
        - link /Hurayra Automation \\d+ DONOTDELETE/
      - listitem:
        - link /hurayra-automation-\\d+/
    - list:
      - listitem:
        - text: Sale-four
        - link /Hurayra Automation Product \\d+/:
          - img /Hurayra Automation Product \\d+/
        - heading /Hurayra Automation Product \\d+/ [level=4]
        - deletion: /\\d+\\.\\d+৳/
        - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - insertion: /\\d+\\.\\d+৳/
        - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\. ✭ \\\\d+\\\\.\\\\d+ 3 Sold-four/"
        - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
      - listitem:
        - text: Sale-four
        - link /Hurayra Automation Product \\d+/:
          - img /Hurayra Automation Product \\d+/
        - heading /Hurayra Automation Product \\d+/ [level=4]
        - deletion: /\\d+\\.\\d+৳/
        - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - insertion: /\\d+\\.\\d+৳/
        - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\. ✭ \\\\d+\\\\.\\\\d+ 4 Sold-four/"
        - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
      - listitem:
        - text: Sale-four
        - link /Hurayra Automation Product \\d+/:
          - img /Hurayra Automation Product \\d+/
        - heading /Hurayra Automation Product \\d+/ [level=4]
        - deletion: /\\d+\\.\\d+৳/
        - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - insertion: /\\d+\\.\\d+৳/
        - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\. ✭ \\\\d+\\\\.\\\\d+ 2 Sold-four/"
        - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
      - listitem:
        - text: Stock out-four
        - link /Hurayra Automation Product \\d+/:
          - img /Hurayra Automation Product \\d+/
        - heading /Hurayra Automation Product \\d+/ [level=4]
        - deletion: /\\d+\\.\\d+৳/
        - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - insertion: /\\d+\\.\\d+৳/
        - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\. ✭ \\\\d+\\\\.\\\\d+/"
        - link /Read more about “Hurayra Automation Product \\d+”/
    - button "Load More-four"
    `);
  });
});
