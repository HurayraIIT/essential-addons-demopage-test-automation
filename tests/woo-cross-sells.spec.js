"use strict";

import { test, expect } from "../global-setup";

let slug = "/woocommerce-elements/woo-cross-sells/";

test.describe("Woo Cross Sells - Style 01", () => {
  let heading = "Hurayra Automation 241212 Style One";
  let widget;

  test.beforeEach(async ({ page }) => {
    // Login and scroll to section
    await page.goto("/wp-admin/");
    await page.waitForLoadState("networkidle");
    await page.locator("#user_login").fill(`${process.env.CUSTOMER_EMAIL}`);
    await page.locator("#user_pass").fill(`${process.env.CUSTOMER_PASSWORD}`);
    await page.locator("#wp-submit").first().click();
    await page.waitForLoadState("networkidle");
    await page.goto(slug);
    await page.waitForLoadState("networkidle");

    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    widget = page.getByTestId("9bd5d2f");
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await expect.soft(widget.getByText("You may be interested in… FONE").first()).toBeVisible();
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - heading "You may be interested in… FONE" [level=2]
      - text: /Hurayra Automation Product \\d+/
      - deletion: /\\d+\\.\\d+৳/
      - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
      - insertion: /\\d+\\.\\d+৳/
      - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
      - link " View Product FONE"
      - text: /Hurayra Automation Product \\d+/
      - deletion: /\\d+\\.\\d+৳/
      - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
      - insertion: /\\d+\\.\\d+৳/
      - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
      - link " View Product FONE"
      - link " Add to Cart FONE"
      `);
  });
});

test.describe("Woo Cross Sells - Style 02", () => {
  let heading = "Hurayra Automation 241212 Style Two";
  let widget;

  test.beforeEach(async ({ page }) => {
    // Login and scroll to section
    await page.goto("/wp-admin/");
    await page.waitForLoadState("networkidle");
    await page.locator("#user_login").fill(`${process.env.CUSTOMER_EMAIL}`);
    await page.locator("#user_pass").fill(`${process.env.CUSTOMER_PASSWORD}`);
    await page.locator("#wp-submit").first().click();
    await page.waitForLoadState("networkidle");
    await page.goto(slug);
    await page.waitForLoadState("networkidle");

    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    widget = page.getByTestId("6eb03dc");
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await expect.soft(widget.getByText("You may be interested in… FTWO").first()).toBeVisible();
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
        - heading "You may be interested in… FTWO" [level=2]
        - link ""
        - link ""
        - text: /Hurayra Automation Product \\d+/
        - deletion: /\\d+\\.\\d+৳/
        - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - insertion: /\\d+\\.\\d+৳/
        - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - link ""
        - text: /Hurayra Automation Product \\d+/
        - deletion: /\\d+\\.\\d+৳/
        - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - insertion: /\\d+\\.\\d+৳/
        - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\./"
        `);
  });
});

test.describe("Woo Cross Sells - Style 03", () => {
  let heading = "Hurayra Automation 241212 Style Three";
  let widget;

  test.beforeEach(async ({ page }) => {
    // Login and scroll to section
    await page.goto("/wp-admin/");
    await page.waitForLoadState("networkidle");
    await page.locator("#user_login").fill(`${process.env.CUSTOMER_EMAIL}`);
    await page.locator("#user_pass").fill(`${process.env.CUSTOMER_PASSWORD}`);
    await page.locator("#wp-submit").first().click();
    await page.waitForLoadState("networkidle");
    await page.goto(slug);
    await page.waitForLoadState("networkidle");

    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    widget = page.getByTestId("42cdc7b");
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await expect.soft(widget.getByText("You may be interested in… FTHR").first()).toBeVisible();
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
        - heading "You may be interested in… FTHR" [level=2]
        - link /Hurayra Automation Product \\d+/
        - deletion: /\\d+\\.\\d+৳/
        - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - insertion: /\\d+\\.\\d+৳/
        - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\. Hurayra Automation \\\\d+ Product \\\\d+/"
        - link " View Product FTHR"
        - link /Hurayra Automation Product \\d+/
        - deletion: /\\d+\\.\\d+৳/
        - text: "/Original price was: \\\\d+\\\\.\\\\d+৳ \\\\./"
        - insertion: /\\d+\\.\\d+৳/
        - text: "/Current price is: \\\\d+\\\\.\\\\d+৳ \\\\. Hurayra Automation \\\\d+ Product \\\\d+/"
        - link " Add to Cart FTHR"
        `);
  });
});
