"use strict";

import { test, expect } from "../global-setup";

let slug = "/woocommerce-elements/woo-checkout/";

test.describe("Woo Checkout - Preset Default", () => {
  let heading = "Hurayra Automation 241212 Preset Default";
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
    widget = page.getByTestId("c1eaa04");
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await expect.soft(widget.getByText("Your Order FONE").first()).toBeVisible();
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
    - heading "Your Order FONE" [level=2]
    - list:
      - listitem: Product FONE Quantity FONE Price FONE
      - listitem:
        - text: /Hurayra Automation Product 05 Hurayra Automation Product 05 quantity/
        - spinbutton "Product quantity"
        - text: /190\.00৳/
      - listitem:
        - text: /Hurayra Automation Product 04 Hurayra Automation Product 04 quantity/
        - spinbutton "Product quantity"
        - text: /94\.00৳/
    - link " Continue Shopping FONE"
    - text: /Subtotal FONE 284\.00৳ Total FONE/
    - strong: /284\.00৳/
    - text: Have a coupon? FONE
    - link "Click here to enter your code FONE"
    - heading "Billing Details FONE" [level=3]
    - paragraph:
      - text: First name FTHR *
      - textbox "FName FTHR": XFirst241211
    - paragraph:
      - text: Last name FTHR *
      - textbox: XLast241211
    - paragraph:
      - text: Company name (optional)
      - textbox: XCompany241211
    - paragraph:
      - text: Country / Region *
      - combobox:
        - option "Select a country / region…"
        - option "Afghanistan"
        - option "Åland Islands"
        - option "Albania"
        - option "Algeria"
        - option "American Samoa"
        - option "Andorra"
        - option "Angola"
        - option "Anguilla"
        - option "Antarctica"
        - option "Antigua and Barbuda"
        - option "Argentina"
        - option "Armenia"
        - option "Aruba"
        - option "Australia"
        - option "Austria"
        - option "Azerbaijan"
        - option "Bahamas"
        - option "Bahrain"
        - option "Bangladesh" [selected]
        - option "Barbados"
    - paragraph:
      - text: Street address *
      - textbox "House number and street name"
    - paragraph:
      - text: Apartment, suite, unit, etc. (optional)
      - textbox "Apartment, suite, unit, etc. (optional)"
    - paragraph:
      - text: Town / City *
      - textbox: XMirpur241211
    - paragraph:
      - text: District *
      - combobox:
        - option "Select an option…"
        - option "Bagerhat"
        - option "Bandarban"
        - option "Barguna"
        - option "Barishal"
        - option "Bhola"
        - option "Bogura"
        - option "Brahmanbaria"
        - option "Chandpur"
        - option "Chattogram"
        - option "Chuadanga"
        - option "Cox's Bazar"
        - option "Cumilla"
        - option "Dhaka" [selected]
        - option "Dinajpur"
    - paragraph:
      - text: Postcode / ZIP (optional)
      - textbox: /1218/
    - paragraph:
      - text: Phone *
      - textbox: /015001122334/
    - paragraph:
      - text: Email address *
      - textbox: hurayraiit+automation_customer@gmail.com
    - heading "Additional Information FONE" [level=3]
    - paragraph:
      - text: Order notes (optional)
      - textbox "Notes about your order, e.g. special notes for delivery."
    - heading "Payment Methods FONE" [level=3]
    - list:
      - listitem:
        - text: Cash on delivery
        - paragraph: Pay with cash upon delivery.
    - paragraph:
      - text: Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
      - link "Privacy policy"
      - text: .
    - button "Place Order FONE"
    `);
  });
});

test.describe("Woo Checkout - Preset MultiSteps", () => {
  let heading = "Hurayra Automation 241212 Preset MultiSteps";
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
    widget = page.getByTestId("f147fe6");
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await expect.soft(widget.getByText("Your Order FTWO").first()).toBeVisible();
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - list:
        - listitem: Coupon FTWO
        - listitem: Billing & Shipping FTWO
        - listitem: Payment FTWO
      - heading "Your Order FTWO" [level=2]
      - list:
        - listitem:
          - text: /Hurayra Automation Product 05 Hurayra Automation Product 05 quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product 04 Hurayra Automation Product 04 quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTWO"
      - text: /Subtotal FTWO \\d+\\.\\d+৳ Total FTWO/
      - strong: /\\d+\\.\\d+৳/
      - text: Have a coupon? FTWO
      - link "Click here to enter your code FTWO"
      - button "Next FTWO"
      - list:
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTWO"
      - text: /Subtotal FTWO \\d+\\.\\d+৳ Total FTWO/
      - strong: /\\d+\\.\\d+৳/
      `);

    await page.getByRole("button", { name: "Next FTWO" }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - list:
        - listitem: Coupon FTWO
        - listitem: Billing & Shipping FTWO
        - listitem: Payment FTWO
      - heading "Your Order FTWO" [level=2]
      - list:
        - listitem:
          - text: /Hurayra Automation Product 05 Hurayra Automation Product 05 quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product 04 Hurayra Automation Product 04 quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTWO"
      - text: /Subtotal FTWO \\d+\\.\\d+৳ Total FTWO/
      - strong: /\\d+\\.\\d+৳/
      - button "Previous FTWO"
      - button "Next FTWO"
      - list:
        - listitem:
          - text: /Hurayra Automation Product 05 Hurayra Automation Product 05 quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product 04 Hurayra Automation Product 04 quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTWO"
      - text: /Subtotal FTWO \\d+\\.\\d+৳ Total FTWO/
      - strong: /\\d+\\.\\d+৳/
      `);

    await page.getByRole("button", { name: "Next FTWO" }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - list:
        - listitem: Coupon FTWO
        - listitem: Billing & Shipping FTWO
        - listitem: Payment FTWO
      - heading "Your Order FTWO" [level=2]
      - list:
        - listitem:
          - text: /Hurayra Automation Product 05 Hurayra Automation Product 05 quantity/
          - spinbutton "Product quantity"
          - text: /190\.00৳/
        - listitem:
          - text: /Hurayra Automation Product 04 Hurayra Automation Product 04 quantity/
          - spinbutton "Product quantity"
          - text: /94\.00৳/
      - link " Continue Shopping FTWO"
      - text: /Subtotal FTWO 284\.00৳ Total FTWO/
      - strong: /284\.00৳/
      - heading "Payment Methods FTWO" [level=3]
      - list:
        - listitem:
          - text: Cash on delivery
          - paragraph: Pay with cash upon delivery.
      - paragraph:
        - text: Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
        - link "Privacy policy"
        - text: .
      - button "Previous FTWO"
      - list:
        - listitem:
          - text: /Hurayra Automation Product 05 Hurayra Automation Product 05 quantity/
          - spinbutton "Product quantity"
          - text: /190\.00৳/
        - listitem:
          - text: /Hurayra Automation Product 04 Hurayra Automation Product 04 quantity/
          - spinbutton "Product quantity"
          - text: /94\.00৳/
      - link " Continue Shopping FTWO"
      - text: /Subtotal FTWO 284\.00৳ Total FTWO/
      - strong: /284\.00৳/
      `);
  });
});

test.describe("Woo Checkout - Preset Split", () => {
  let heading = "Hurayra Automation 241212 Preset Split";
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
    widget = page.getByTestId("1511b98");
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await expect.soft(widget.getByText("Your Order FTHR").first()).toBeVisible();
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - list:
        - listitem: Coupon FTHR
        - listitem: Billing & Shipping FTHR
        - listitem: Payment FTHR
      - heading "Your Order FTHR" [level=2]
      - list:
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTHR"
      - text: /Subtotal FTHR \\d+\\.\\d+৳ Total FTHR/
      - strong: /\\d+\\.\\d+৳/
      - text: Have a coupon? FTHR
      - link "Click here to enter your code FTHR"
      - button "Next FTHR"
      - list:
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTHR"
      - text: /Subtotal FTHR \\d+\\.\\d+৳ Total FTHR/
      - strong: /\\d+\\.\\d+৳/
      `);

    await page.getByRole("button", { name: "Next FTHR" }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - list:
        - listitem: Coupon FTHR
        - listitem: Billing & Shipping FTHR
        - listitem: Payment FTHR
      - heading "Your Order FTHR" [level=2]
      - list:
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTHR"
      - text: /Subtotal FTHR \\d+\\.\\d+৳ Total FTHR/
      - strong: /\\d+\\.\\d+৳/
      - button "Previous FTHR"
      - button "Next FTHR"
      - list:
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTHR"
      - text: /Subtotal FTHR \\d+\\.\\d+৳ Total FTHR/
      - strong: /\\d+\\.\\d+৳/
      `);

    await page.getByRole("button", { name: "Next FTHR" }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - list:
        - listitem: Coupon FTHR
        - listitem: Billing & Shipping FTHR
        - listitem: Payment FTHR
      - heading "Your Order FTHR" [level=2]
      - list:
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTHR"
      - text: /Subtotal FTHR \\d+\\.\\d+৳ Total FTHR/
      - strong: /\\d+\\.\\d+৳/
      - heading "Payment Methods FTHR" [level=3]
      - list:
        - listitem:
          - text: Cash on delivery
          - paragraph: Pay with cash upon delivery.
      - paragraph:
        - text: Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
        - link "Privacy policy"
        - text: .
      - button "Previous FTHR"
      - list:
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
        - listitem:
          - text: /Hurayra Automation Product \\d+ Hurayra Automation Product \\d+ quantity/
          - spinbutton "Product quantity"
          - text: /\\d+\\.\\d+৳/
      - link " Continue Shopping FTHR"
      - text: /Subtotal FTHR \\d+\\.\\d+৳ Total FTHR/
      - strong: /\\d+\\.\\d+৳/
      `);
  });
});
