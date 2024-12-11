"use strict";

import { test, expect } from "../global-setup";

let slug = "/woocommerce-elements/woo-thank-you/order-received/283179/?key=wc_order_gcRFGNUHdprcn";

test.describe("Woo Thank You - Preset 1", () => {
  let heading = "Hurayra Automation Woo Thank You Preset 01";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("17f63d8");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - paragraph: /Thank you\\. Your order has been received\\. \\d+/
      - list:
        - listitem: "/Order number \\\\d+: \\\\d+/"
        - listitem: "/Date \\\\d+: Wed, Dec \\\\d+, \\\\d+/"
        - listitem: "/Total \\\\d+: \\\\d+\\\\.\\\\d+৳/"
        - listitem: "/Payment Method \\\\d+: Cash on delivery/"
      - paragraph: Pay with cash upon delivery.
      - heading /Order Details \\d+:/ [level=2]
      - table:
        - rowgroup:
          - 'row /Product \\d+: Total \\d+:/':
            - cell /Product \\d+:/
            - cell /Total \\d+:/
        - rowgroup:
          - 'row /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ Qty: 1 \\d+\\.\\d+৳/':
            - 'cell /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ Qty: 1/':
              - img /Hurayra Automation Product \\d+/
              - link /Hurayra Automation Product \\d+/
            - cell /\\d+\\.\\d+৳/
          - 'row /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ Qty: 2 \\d+\\.\\d+৳/':
            - 'cell /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ Qty: 2/':
              - img /Hurayra Automation Product \\d+/
              - link /Hurayra Automation Product \\d+/
            - cell /\\d+\\.\\d+৳/
      - heading /Billing Address \\d+:/ [level=2]
      - text: /First241211 Last241211 Dhaka Dhaka Dhaka \\d+ Mobile \\d+:\\d+ Email \\d+:hurayraiit\\+automation_customer@gmail\\.com/
      - heading /Shipping Address \\d+:/ [level=2]
      - text: N/A
      - table:
        - rowgroup:
          - 'row /Subtotal: \\d+\\.\\d+৳/':
            - rowheader "Subtotal:"
            - cell /\\d+\\.\\d+৳/
          - 'row "Payment method: Cash on delivery"':
            - rowheader "Payment method:"
            - cell "Cash on delivery"
          - 'row /Total: \\d+\\.\\d+৳/':
            - rowheader "Total:"
            - cell /\\d+\\.\\d+৳/
      `);
  });
});

test.describe("Woo Thank You - Preset 2", () => {
  let heading = "Hurayra Automation Woo Thank You Preset 02";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("8542733");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - text: /Hello \\d+ First241211 Last241211,/
      - paragraph: /Thank you\\. Your order has been received\\. \\d+/
      - heading /Order Details \\d+:/ [level=2]
      - list:
        - listitem: "/Order number \\\\d+: \\\\d+/"
        - listitem: "/Date \\\\d+: Wed, Dec \\\\d+, \\\\d+/"
        - listitem: "/Total \\\\d+: \\\\d+\\\\.\\\\d+৳/"
        - listitem: "/Payment Method \\\\d+: Cash on delivery/"
      - paragraph: Pay with cash upon delivery.
      - table:
        - rowgroup:
          - 'row /Product \\d+: Variation \\d+: Price \\d+: Quantity \\d+: Total \\d+:/':
            - cell /Product \\d+:/
            - cell /Variation \\d+:/
            - cell /Price \\d+:/
            - cell /Quantity \\d+:/
            - cell /Total \\d+:/
        - rowgroup:
          - 'row /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ \\d+\\.\\d+৳  Original price was: \\d+\\.\\d+৳ \\. \\d+\\.\\d+৳  Current price is: \\d+\\.\\d+৳ \\. 1 \\d+\\.\\d+৳/':
            - cell /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+/:
              - img /Hurayra Automation Product \\d+/
              - link /Hurayra Automation Product \\d+/
            - cell
            - 'cell /\\d+\\.\\d+৳  Original price was: \\d+\\.\\d+৳ \\. \\d+\\.\\d+৳  Current price is: \\d+\\.\\d+৳ \\./':
              - deletion: /\\d+\\.\\d+৳/
              - insertion: /\\d+\\.\\d+৳/
            - cell "1"
            - cell /\\d+\\.\\d+৳/
          - 'row /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ \\d+\\.\\d+৳  Original price was: \\d+\\.\\d+৳ \\. \\d+\\.\\d+৳  Current price is: \\d+\\.\\d+৳ \\. 2 \\d+\\.\\d+৳/':
            - cell /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+/:
              - img /Hurayra Automation Product \\d+/
              - link /Hurayra Automation Product \\d+/
            - cell
            - 'cell /\\d+\\.\\d+৳  Original price was: \\d+\\.\\d+৳ \\. \\d+\\.\\d+৳  Current price is: \\d+\\.\\d+৳ \\./':
              - deletion: /\\d+\\.\\d+৳/
              - insertion: /\\d+\\.\\d+৳/
            - cell "2"
            - cell /\\d+\\.\\d+৳/
      - table:
        - rowgroup:
          - 'row /Subtotal: \\d+\\.\\d+৳/':
            - rowheader "Subtotal:"
            - cell /\\d+\\.\\d+৳/
          - 'row "Payment method: Cash on delivery"':
            - rowheader "Payment method:"
            - cell "Cash on delivery"
          - 'row /Total: \\d+\\.\\d+৳/':
            - rowheader "Total:"
            - cell /\\d+\\.\\d+৳/
      - heading /Billing Address \\d+:/ [level=2]
      - text: /First241211 Last241211 Dhaka Dhaka Dhaka \\d+ Mobile \\d+:\\d+ Email \\d+:hurayraiit\\+automation_customer@gmail\\.com/
      - heading /Shipping Address \\d+:/ [level=2]
      - text: N/A
      `);
  });
});

test.describe("Woo Thank You - Preset 3", () => {
  let heading = "Hurayra Automation Woo Thank You Preset 03";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("1087283");
  });

  test("Test Contents", async ({ page }) => {
    await expect(page.locator('#content')).toMatchAriaSnapshot(`
      - text: /Thank you 03 !/
      - paragraph: /Thank you\\. Your order has been received\\. 03/
      - heading /Order Overview 03:/ [level=2]
      - list:
        - listitem: "/Order number \\\\d+: \\\\d+/"
        - listitem: "/Date \\\\d+: Wed, Dec \\\\d+, \\\\d+/"
        - listitem: "/Total \\\\d+: \\\\d+\\\\.\\\\d+৳/"
        - listitem: "/Payment Method \\\\d+: Cash on delivery/"
      - paragraph: Pay with cash upon delivery.
      - heading /Billing Address \\d+:/ [level=2]
      - text: /First241211 Last241211 Dhaka Dhaka Dhaka \\d+ Mobile \\d+:\\d+ Email \\d+:hurayraiit\\+automation_customer@gmail\\.com/
      - heading /Shipping Address \\d+:/ [level=2]
      - text: N/A
      - table:
        - rowgroup:
          - 'row /Product \\d+: Total \\d+:/':
            - cell /Product \\d+:/
            - cell /Total \\d+:/
        - rowgroup:
          - 'row /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ Qty: 1 \\d+\\.\\d+৳/':
            - 'cell /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ Qty: 1/':
              - img /Hurayra Automation Product \\d+/
              - link /Hurayra Automation Product \\d+/
            - cell /\\d+\\.\\d+৳/
          - 'row /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ Qty: 2 \\d+\\.\\d+৳/':
            - 'cell /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ Qty: 2/':
              - img /Hurayra Automation Product \\d+/
              - link /Hurayra Automation Product \\d+/
            - cell /\\d+\\.\\d+৳/
      - table:
        - rowgroup:
          - 'row /Subtotal: \\d+\\.\\d+৳/':
            - rowheader "Subtotal:"
            - cell /\\d+\\.\\d+৳/
          - 'row "Payment method: Cash on delivery"':
            - rowheader "Payment method:"
            - cell "Cash on delivery"
          - 'row /Total: \\d+\\.\\d+৳/':
            - rowheader "Total:"
            - cell /\\d+\\.\\d+৳/
      `);
  });
});
