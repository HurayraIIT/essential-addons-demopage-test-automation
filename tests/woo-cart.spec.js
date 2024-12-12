"use strict";

import { test, expect } from "../global-setup";

let slug = "/woocommerce-elements/woo-cart/";

test.describe("Woo Cart - Style 01", () => {
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
    widget = page.getByTestId("f738862");
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await expect.soft(widget.getByText("Clear Cart FONE").first()).toBeVisible();
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - link "Clear Cart FONE"
      - table:
        - rowgroup:
          - row "Remove FONE Product FONE FONE Price FONE Quantity FONE Total FONE":
            - cell "Remove FONE"
            - cell "Product FONE"
            - cell "FONE"
            - cell "Price FONE"
            - cell "Quantity FONE"
            - cell "Total FONE"
        - rowgroup:
          - row /Remove this item Hurayra Automation Product \\d+ \\d+\\.\\d+৳  - Hurayra Automation Product \\d+ quantity 2 \\+ \\d+\\.\\d+৳/:
            - cell "Remove this item":
              - link "Remove this item"
            - cell:
              - link
            - cell /Hurayra Automation Product \\d+/:
              - link /Hurayra Automation Product \\d+/
            - cell /\\d+\\.\\d+৳/
            - cell /- Hurayra Automation Product \\d+ quantity 2 \\+/:
              - spinbutton "Product quantity"
            - cell /\\d+\\.\\d+৳/
          - row /Remove this item Hurayra Automation Product \\d+ \\d+\\.\\d+৳  - Hurayra Automation Product \\d+ quantity 1 \\+ \\d+\\.\\d+৳/:
            - cell "Remove this item":
              - link "Remove this item"
            - cell:
              - link
            - cell /Hurayra Automation Product \\d+/:
              - link /Hurayra Automation Product \\d+/
            - cell /\\d+\\.\\d+৳/
            - cell /- Hurayra Automation Product \\d+ quantity 1 \\+/:
              - spinbutton "Product quantity"
            - cell /\\d+\\.\\d+৳/
      - text: "Coupon:"
      - textbox "Coupon code FONE"
      - button "Apply Coupon FONE"
      - link "Continue Shopping FONE"
      - button "Update Cart FONE" [disabled]
      - table:
        - rowgroup:
          - row /Subtotal \\d+\\.\\d+৳/:
            - cell "Subtotal"
            - cell /\\d+\\.\\d+৳/
          - row /Total \\d+\\.\\d+৳/:
            - cell "Total"
            - cell /\\d+\\.\\d+৳/:
              - strong: /\\d+\\.\\d+৳/
      - link "Proceed to Checkout FONE"
      `);
  });
});

test.describe("Woo Cart - Style 02", () => {
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
    widget = page.getByTestId("25e578e");
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await expect.soft(widget.getByText("Clear Cart FTWO").first()).toBeVisible();
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - link "Clear Cart FTWO"
      - text: Product Title FTWO Price FTWO Quantity FTWO Subtotal FTWO
      - link
      - link /Hurayra Automation Product \\d+/
      - paragraph: /#\\d+-\\d+/
      - text: /\\d+\\.\\d+৳ - Hurayra Automation Product \\d+ quantity/
      - spinbutton "Product quantity"
      - text: /\\+ \\d+\\.\\d+৳/
      - link "Remove this item"
      - link
      - link /Hurayra Automation Product \\d+/
      - paragraph: /#\\d+-\\d+/
      - text: /\\d+\\.\\d+৳ - Hurayra Automation Product \\d+ quantity/
      - spinbutton "Product quantity"
      - text: /\\+ \\d+\\.\\d+৳/
      - link "Remove this item"
      - text: "Coupon:"
      - textbox "Coupon code FTWO"
      - button "Apply Coupon FTWO"
      - link "Continue Shopping FTWO"
      - button "Update Cart FTWO" [disabled]
      - table:
        - rowgroup:
          - row /Subtotal \\d+\\.\\d+৳/:
            - cell "Subtotal"
            - cell /\\d+\\.\\d+৳/
          - row /Total \\d+\\.\\d+৳/:
            - cell "Total"
            - cell /\\d+\\.\\d+৳/:
              - strong: /\\d+\\.\\d+৳/
      - link "Proceed to Checkout FTWO"
      `);
  });
});
