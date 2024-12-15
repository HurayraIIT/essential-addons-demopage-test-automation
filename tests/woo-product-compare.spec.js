"use strict";

import { test, expect } from "../global-setup";

let slug = "/woocommerce-elements/woo-product-compare/";

test.describe("Woo Product Compare - Theme Default", () => {
  let heading = "Hurayra Automation 241215 Theme Default";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("5e5b590");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - table:
        - rowgroup:
          - row "Compare Products - zero":
            - cell "Compare Products - zero":
              - heading "Compare Products - zero" [level=1]
            - cell:
              - link
            - cell:
              - link
          - 'row /Add to cart-zero Read more about “Hurayra Automation Product \\d+” Add to cart: “Hurayra Automation Product \\d+”/':
            - cell "Add to cart-zero"
            - cell /Read more about “Hurayra Automation Product \\d+”/:
              - link /Read more about “Hurayra Automation Product \\d+”/
            - 'cell /Add to cart: “Hurayra Automation Product \\d+”/':
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
          - row /Title Hurayra Automation Product \\d+ Hurayra Automation Product \\d+/:
            - cell "Title"
            - cell /Hurayra Automation Product \\d+/
            - cell /Hurayra Automation Product \\d+/
          - 'row /Price Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\. Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./':
            - cell "Price"
            - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
            - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - row /Description Hurayra Automation \\d+ Product \\d+ Hurayra Automation \\d+ Product \\d+/:
            - cell "Description"
            - cell /Hurayra Automation \\d+ Product \\d+/:
              - paragraph: /Hurayra Automation \\d+ Product \\d+/
            - cell /Hurayra Automation \\d+ Product \\d+/:
              - paragraph: /Hurayra Automation \\d+ Product \\d+/
          - row /Availability Out of stock \\d+ in stock/:
            - cell "Availability"
            - cell "Out of stock"
            - cell /\\d+ in stock/
          - row "Weight - -":
            - cell "Weight"
            - cell "-"
            - cell "-"
          - row "Dimension N/A N/A":
            - cell "Dimension"
            - cell "N/A"
            - cell "N/A"
          - 'row /Add to cart-zero Add to cart: “Hurayra Automation Product \\d+” Add to cart: “Hurayra Automation Product \\d+”/':
            - cell "Add to cart-zero"
            - 'cell /Add to cart: “Hurayra Automation Product \\d+”/':
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
            - 'cell /Add to cart: “Hurayra Automation Product \\d+”/':
              - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
      `);
  });
});

test.describe("Woo Product Compare - Theme One", () => {
  let heading = "Hurayra Automation 241215 Theme One";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("b0c00ad");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
    - table:
      - rowgroup:
        - row /Title-one Hurayra Automation Product \\d+ Hurayra Automation Product \\d+/:
          - cell "Title-one"
          - cell /Hurayra Automation Product \\d+/
          - cell /Hurayra Automation Product \\d+/
        - row "Compare Products-one":
          - cell "Compare Products-one":
            - heading "Compare Products-one" [level=1]
          - cell:
            - link
          - cell:
            - link
        - 'row /Price Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\. Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./':
          - cell "Price"
          - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - 'row /Add to cart Add to cart: “Hurayra Automation Product \\d+” Add to cart: “Hurayra Automation Product \\d+”/':
          - cell "Add to cart"
          - 'cell /Add to cart: “Hurayra Automation Product \\d+”/':
            - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
          - 'cell /Add to cart: “Hurayra Automation Product \\d+”/':
            - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
        - row /SKU \\d+-\\d+ \\d+-\\d+/:
          - cell "SKU"
          - cell /\\d+-\\d+/
          - cell /\\d+-\\d+/
        - row "Dimension N/A N/A":
          - cell "Dimension"
          - cell "N/A"
          - cell "N/A"
        - row /Availability \\d+ in stock \\d+ in stock/:
          - cell "Availability"
          - cell /\\d+ in stock/
          - cell /\\d+ in stock/
        - row "Weight - -":
          - cell "Weight"
          - cell "-"
          - cell "-"
        - row "Color - -":
          - cell "Color"
          - cell "-"
          - cell "-"
    `);
  });
});

test.describe("Woo Product Compare - Theme Two", () => {
  let heading = "Hurayra Automation 241215 Theme Two";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("07c4181");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
    - table:
      - rowgroup:
        - row "Compare Products - two":
          - cell "Compare Products - two":
            - heading "Compare Products - two" [level=2]
          - cell:
            - link
          - cell:
            - link
        - row /Title Hurayra Automation Product \\d+ Hurayra Automation Product \\d+/:
          - cell "Title"
          - cell /Hurayra Automation Product \\d+/
          - cell /Hurayra Automation Product \\d+/
        - 'row /Add to cart-two Add to cart: “Hurayra Automation Product \\d+” Add to cart: “Hurayra Automation Product \\d+”/':
          - cell "Add to cart-two"
          - 'cell /Add to cart: “Hurayra Automation Product \\d+”/':
            - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
          - 'cell /Add to cart: “Hurayra Automation Product \\d+”/':
            - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
        - 'row /Price Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\. Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./':
          - cell "Price"
          - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - row "Weight - -":
          - cell "Weight"
          - cell "-"
          - cell "-"
        - row /Description Hurayra Automation \\d+ Product \\d+ Hurayra Automation \\d+ Product \\d+/:
          - cell "Description"
          - cell /Hurayra Automation \\d+ Product \\d+/:
            - paragraph: /Hurayra Automation \\d+ Product \\d+/
          - cell /Hurayra Automation \\d+ Product \\d+/:
            - paragraph: /Hurayra Automation \\d+ Product \\d+/
        - row /Availability \\d+ in stock \\d+ in stock/:
          - cell "Availability"
          - cell /\\d+ in stock/
          - cell /\\d+ in stock/
        - row "Dimension N/A N/A":
          - cell "Dimension"
          - cell "N/A"
          - cell "N/A"
        - 'row /Price Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\. Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./':
          - cell "Price"
          - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
    `);
  });
});

test.describe("Woo Product Compare - Theme Three", () => {
  let heading = "Hurayra Automation 241215 Theme Three";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("3dde137");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
    - table:
      - rowgroup:
        - row "Compare Products-one":
          - cell "Compare Products-one":
            - heading "Compare Products-one" [level=3]
          - cell
          - cell
          - cell
        - row /Title-three Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ Hurayra Automation Product \\d+/:
          - cell "Title-three"
          - cell /Hurayra Automation Product \\d+/
          - cell /Hurayra Automation Product \\d+/
          - cell /Hurayra Automation Product \\d+/
        - 'row /Price Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\. Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\. Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./':
          - cell "Price"
          - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - row "Color - - -":
          - cell "Color"
          - cell "-"
          - cell "-"
          - cell "-"
        - 'row /Add to cart Add to cart: “Hurayra Automation Product \\d+” Add to cart: “Hurayra Automation Product \\d+” Add to cart: “Hurayra Automation Product \\d+”/':
          - cell "Add to cart"
          - 'cell /Add to cart: “Hurayra Automation Product \\d+”/':
            - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
          - 'cell /Add to cart: “Hurayra Automation Product \\d+”/':
            - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
          - 'cell /Add to cart: “Hurayra Automation Product \\d+”/':
            - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
        - row /SKU \\d+-\\d+ \\d+-\\d+ \\d+-\\d+/:
          - cell "SKU"
          - cell /\\d+-\\d+/
          - cell /\\d+-\\d+/
          - cell /\\d+-\\d+/
        - row "Dimension N/A N/A N/A":
          - cell "Dimension"
          - cell "N/A"
          - cell "N/A"
          - cell "N/A"
        - row /Availability \\d+ in stock \\d+ in stock \\d+ in stock/:
          - cell "Availability"
          - cell /\\d+ in stock/
          - cell /\\d+ in stock/
          - cell /\\d+ in stock/
        - row "Weight - - -":
          - cell "Weight"
          - cell "-"
          - cell "-"
          - cell "-"
        - 'row /Price Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\. Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\. Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./':
          - cell "Price"
          - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - 'row /Add to cart Add to cart: “Hurayra Automation Product \\d+” Add to cart: “Hurayra Automation Product \\d+” Add to cart: “Hurayra Automation Product \\d+”/':
          - cell "Add to cart"
          - 'cell /Add to cart: “Hurayra Automation Product \\d+”/':
            - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
          - 'cell /Add to cart: “Hurayra Automation Product \\d+”/':
            - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
          - 'cell /Add to cart: “Hurayra Automation Product \\d+”/':
            - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
    `);
  });
});

test.describe("Woo Product Compare - Theme Four", () => {
  let heading = "Hurayra Automation 241215 Theme Four";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("74f9d81");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
    - table:
      - rowgroup:
        - 'row /Compare Products - four Hurayra Automation Product \\d+ Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\. New-four Hurayra Automation Product \\d+ Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./':
          - cell "Compare Products - four":
            - heading "Compare Products - four" [level=4]
          - 'cell /Hurayra Automation Product \\d+ Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./':
            - paragraph: /Hurayra Automation Product \\d+/
          - 'cell /New-four Hurayra Automation Product \\d+ Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./':
            - paragraph: /Hurayra Automation Product \\d+/
        - row /Title Hurayra Automation Product \\d+ Hurayra Automation Product \\d+/:
          - cell "Title"
          - cell /Hurayra Automation Product \\d+/
          - cell /Hurayra Automation Product \\d+/
        - row /SKU \\d+-\\d+ \\d+-\\d+/:
          - cell "SKU"
          - cell /\\d+-\\d+/
          - cell /\\d+-\\d+/
        - 'row /Price Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\. Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./':
          - cell "Price"
          - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - row /Description Hurayra Automation \\d+ Product \\d+ Hurayra Automation \\d+ Product \\d+/:
          - cell "Description"
          - cell /Hurayra Automation \\d+ Product \\d+/:
            - paragraph: /Hurayra Automation \\d+ Product \\d+/
          - cell /Hurayra Automation \\d+ Product \\d+/:
            - paragraph: /Hurayra Automation \\d+ Product \\d+/
        - 'row /Add to cart Add to cart: “Hurayra Automation Product \\d+” Add to cart: “Hurayra Automation Product \\d+”/':
          - cell "Add to cart"
          - 'cell /Add to cart: “Hurayra Automation Product \\d+”/':
            - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
          - 'cell /Add to cart: “Hurayra Automation Product \\d+”/':
            - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
        - row /Availability \\d+ in stock \\d+ in stock/:
          - cell "Availability"
          - cell /\\d+ in stock/
          - cell /\\d+ in stock/
        - row "Weight 8 kg -":
          - cell "Weight"
          - cell "8 kg"
          - cell "-"
        - row "Color - -":
          - cell "Color"
          - cell "-"
          - cell "-"
    `);
  });
});

test.describe("Woo Product Compare - Theme Five", () => {
  let heading = "Hurayra Automation 241215 Theme Five";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("ccf3d03");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
    - table:
      - rowgroup:
        - row "Compare Products-one":
          - cell "Compare Products-one":
            - heading "Compare Products-one" [level=5]
          - cell
        - row /Hurayra Automation Product \\d+/:
          - cell
          - cell /Hurayra Automation Product \\d+/
        - row /SKU \\d+-\\d+/:
          - cell "SKU"
          - cell /\\d+-\\d+/
        - 'row /Price Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./':
          - cell "Price"
          - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - row "Color -":
          - cell "Color"
          - cell "-"
        - 'row /Add to cart Add to cart: “Hurayra Automation Product \\d+”/':
          - cell "Add to cart"
          - 'cell /Add to cart: “Hurayra Automation Product \\d+”/':
            - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
        - row "Dimension 5 × 6 × 7 cm":
          - cell "Dimension"
          - cell "5 × 6 × 7 cm"
        - row /Availability \\d+ in stock/:
          - cell "Availability"
          - cell /\\d+ in stock/
        - row "Weight 8 kg":
          - cell "Weight"
          - cell "8 kg"
        - 'row /Price Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./':
          - cell "Price"
          - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
    `);
  });
});

test.describe("Woo Product Compare - Theme Six", () => {
  let heading = "Hurayra Automation 241215 Theme Six";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("c507eea");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
    - table:
      - rowgroup:
        - row "Compare Products - six":
          - cell "Compare Products - six":
            - heading "Compare Products - six" [level=6]
          - cell
          - cell
          - cell
        - row /Title Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ Hurayra Automation Product \\d+/:
          - cell "Title"
          - cell /Hurayra Automation Product \\d+/
          - cell /Hurayra Automation Product \\d+/
          - cell /Hurayra Automation Product \\d+/
        - row /SKU \\d+-\\d+ \\d+-\\d+ \\d+-\\d+/:
          - cell "SKU"
          - cell /\\d+-\\d+/
          - cell /\\d+-\\d+/
          - cell /\\d+-\\d+/
        - 'row /Add to cart Add to cart: “Hurayra Automation Product \\d+” Add to cart: “Hurayra Automation Product \\d+” Read more about “Hurayra Automation Product \\d+”/':
          - cell "Add to cart"
          - 'cell /Add to cart: “Hurayra Automation Product \\d+”/':
            - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
          - 'cell /Add to cart: “Hurayra Automation Product \\d+”/':
            - 'link /Add to cart: “Hurayra Automation Product \\d+”/'
          - cell /Read more about “Hurayra Automation Product \\d+”/:
            - link /Read more about “Hurayra Automation Product \\d+”/
        - 'row /Price Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\. Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\. Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./':
          - cell "Price"
          - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
          - 'cell /Original price was: \\d+\\.\\d+৳ \\. Current price is: \\d+\\.\\d+৳ \\./': "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\. Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - row /Availability \\d+ in stock \\d+ in stock Out of stock/:
          - cell "Availability"
          - cell /\\d+ in stock/
          - cell /\\d+ in stock/
          - cell "Out of stock"
        - row "Weight 8 kg - -":
          - cell "Weight"
          - cell "8 kg"
          - cell "-"
          - cell "-"
        - row "Color - - -":
          - cell "Color"
          - cell "-"
          - cell "-"
          - cell "-"
        - row /Add to cart Read more about “Hurayra Automation Product \\d+” Read more about “Hurayra Automation Product \\d+” Read more about “Hurayra Automation Product \\d+”/:
          - cell "Add to cart"
          - cell /Read more about “Hurayra Automation Product \\d+”/:
            - link /Read more about “Hurayra Automation Product \\d+”/
          - cell /Read more about “Hurayra Automation Product \\d+”/:
            - link /Read more about “Hurayra Automation Product \\d+”/
          - cell /Read more about “Hurayra Automation Product \\d+”/:
            - link /Read more about “Hurayra Automation Product \\d+”/
    `);
  });
});
