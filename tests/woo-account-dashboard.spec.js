"use strict";

import { test, expect } from "../global-setup";

let slug = "/woocommerce-elements/woo-account-dashboard/";

test.describe("Woo Account Dashboard - Preset 1", () => {
  let heading = "Hurayra Automation Preset 01 241211";
  let widget;

  test.beforeEach(async ({ page }) => {
    // Login and scroll to section
    await page.goto("/wp-admin/");
    await page.waitForLoadState("networkidle");
    await page.locator("#user_login").fill(`${process.env.CUSTOMER_EMAIL}`);
    await page.locator("#user_pass").fill(`${process.env.CUSTOMER_PASSWORD}`);
    await page.locator("#wp-submit").first().click();
    await page.waitForLoadState("networkidle");

    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    widget = page.getByTestId("7d64145");
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await expect.soft(widget.getByText("Dashboard1 241211").first()).toBeVisible();
  });

  test("Test Contents", async ({ page }) => {
    // Dashboard
    await expect(widget).toMatchAriaSnapshot(`
      - navigation "Account pages":
        - list:
          - listitem:
            - link / Dashboard1 \\d+/
          - listitem:
            - link / Orders1 \\d+/
          - listitem:
            - link / Downloads1 \\d+/
          - listitem:
            - link / Addresses1 \\d+/
          - listitem:
            - link / Account Details1 \\d+/
          - listitem:
            - link / Logout1 \\d+/
      - paragraph: /Hello1 \\d+/
      - heading "ACustomerF ACustomerL" [level=5]
      - paragraph:
        - text: Hello
        - strong: ACustomerF ACustomerL
        - text: (not
        - strong: ACustomerF ACustomerL
        - text: "?"
        - link "Log out"
        - text: )
      - paragraph:
        - text: From your account dashboard you can view your
        - link "recent orders"
        - text: ", manage your"
        - link "shipping and billing addresses"
        - text: ", and"
        - link "edit your password and account details"
        - text: .
      `);

    // Orders
    await widget.getByRole("link", { name: "Orders1 241211" }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - navigation "Account pages":
        - list:
          - listitem:
            - link / Dashboard1 \\d+/
          - listitem:
            - link / Orders1 \\d+/
          - listitem:
            - link / Downloads1 \\d+/
          - listitem:
            - link / Addresses1 \\d+/
          - listitem:
            - link / Account Details1 \\d+/
          - listitem:
            - link / Logout1 \\d+/
      - paragraph: /Hello1 \\d+/
      - heading "ACustomerF ACustomerL" [level=5]
      - table:
        - rowgroup:
          - row "Order Date Status Total Actions":
            - columnheader "Order"
            - columnheader "Date"
            - columnheader "Status"
            - columnheader "Total"
            - columnheader "Actions"
        - rowgroup:
          - row /View order number \\d+ December \\d+, \\d+ Processing \\d+\\.\\d+৳  for 3 items View order \\d+/:
            - rowheader /View order number \\d+/:
              - link /View order number \\d+/
            - cell /December \\d+, \\d+/:
              - time: /December \\d+, \\d+/
            - cell "Processing"
            - cell /\\d+\\.\\d+৳  for 3 items/
            - cell /View order \\d+/:
              - link /View order \\d+/
          - row /View order number \\d+ December \\d+, \\d+ Cancelled \\d+\\.\\d+৳  for 3 items View order \\d+/:
            - rowheader /View order number \\d+/:
              - link /View order number \\d+/
            - cell /December \\d+, \\d+/:
              - time: /December \\d+, \\d+/
            - cell "Cancelled"
            - cell /\\d+\\.\\d+৳  for 3 items/
            - cell /View order \\d+/:
              - link /View order \\d+/
      `);

    // Downloads
    await widget.getByRole("link", { name: "Downloads1 241211" }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - navigation "Account pages":
        - list:
          - listitem:
            - link / Dashboard1 \\d+/
          - listitem:
            - link / Orders1 \\d+/
          - listitem:
            - link / Downloads1 \\d+/
          - listitem:
            - link / Addresses1 \\d+/
          - listitem:
            - link / Account Details1 \\d+/
          - listitem:
            - link / Logout1 \\d+/
      - paragraph: /Hello1 \\d+/
      - heading "ACustomerF ACustomerL" [level=5]
      - text:  No downloads available yet.
      - link "Browse products"
      `);

    // Addresses
    await widget.getByRole("link", { name: "Addresses1 241211" }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - navigation "Account pages":
        - list:
          - listitem:
            - link / Dashboard1 \\d+/
          - listitem:
            - link / Orders1 \\d+/
          - listitem:
            - link / Downloads1 \\d+/
          - listitem:
            - link / Addresses1 \\d+/
          - listitem:
            - link / Account Details1 \\d+/
          - listitem:
            - link / Logout1 \\d+/
      - paragraph: /Hello1 \\d+/
      - heading "ACustomerF ACustomerL" [level=5]
      - paragraph: The following addresses will be used on the checkout page by default.
      - banner:
        - heading "Billing address" [level=2]
        - link " Edit Billing address"
      - text: /XFirst241211 XLast241211 XCompany241211 XMirpur DOHS241211 XMirpur241211 Dhaka \\d+/
      - banner:
        - heading "Shipping address" [level=2]
        - link " Edit Shipping address"
      - text: /SFirst241211 SLast241211 SCompany241211 St241211 SMirpurDOHS241211 Dhaka \\d+/
      `);

    // Account Details
    await widget.getByRole("link", { name: "Account Details1 241211" }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - navigation "Account pages":
        - list:
          - listitem:
            - link / Dashboard1 \\d+/
          - listitem:
            - link / Orders1 \\d+/
          - listitem:
            - link / Downloads1 \\d+/
          - listitem:
            - link / Addresses1 \\d+/
          - listitem:
            - link / Account Details1 \\d+/
          - listitem:
            - link / Logout1 \\d+/
      - paragraph: /Hello1 \\d+/
      - heading "ACustomerF ACustomerL" [level=5]
      - paragraph:
        - text: First name *
        - textbox: ACustomerF
      - paragraph:
        - text: Last name *
        - textbox: ACustomerL
      - paragraph:
        - text: Display name *
        - textbox: ACustomerF ACustomerL
        - emphasis: This will be how your name will be displayed in the account section and in reviews
      - paragraph:
        - text: Email address *
        - textbox: hurayraiit+automation_customer@gmail.com
      - group "Password change":
        - paragraph:
          - text: Current password (leave blank to leave unchanged)
          - textbox
          - text: 
        - paragraph:
          - text: New password (leave blank to leave unchanged)
          - textbox
          - text: 
        - paragraph:
          - text: Confirm new password
          - textbox
          - text: 
      - paragraph:
        - button "Save changes"
      `);

    // Logout
    await expect.soft(widget.getByRole("link", { name: "Logout1 241211" })).toBeVisible();
  });
});

test.describe("Woo Account Dashboard - Preset 2", () => {
  let heading = "Hurayra Automation Preset 02 241211";
  let widget;

  test.beforeEach(async ({ page }) => {
    // Login and scroll to section
    await page.goto("/wp-admin/");
    await page.waitForLoadState("networkidle");
    await page.locator("#user_login").fill(`${process.env.CUSTOMER_EMAIL}`);
    await page.locator("#user_pass").fill(`${process.env.CUSTOMER_PASSWORD}`);
    await page.locator("#wp-submit").first().click();
    await page.waitForLoadState("networkidle");

    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    widget = page.getByTestId("2f4d0b8");
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await expect.soft(widget.getByText("Dashboard2 241211").first()).toBeVisible();
  });

  test("Test Contents", async ({ page }) => {
    // Dashboard
    await expect(widget).toMatchAriaSnapshot(`
      - navigation "Account pages":
        - list:
          - listitem:
            - link /Dashboard2 \\d+/
          - listitem:
            - link /Orders2 \\d+/
          - listitem:
            - link /Downloads2 \\d+/
          - listitem:
            - link /Addresses2 \\d+/
          - listitem:
            - link /Account Details2 \\d+/
          - listitem:
            - link /Logout2 \\d+/
      - paragraph: /Hello2 \\d+/
      - heading "ACustomerF ACustomerL" [level=5]
      - paragraph:
        - text: Hello
        - strong: ACustomerF ACustomerL
        - text: (not
        - strong: ACustomerF ACustomerL
        - text: "?"
        - link "Log out"
        - text: )
      - paragraph:
        - text: From your account dashboard you can view your
        - link "recent orders"
        - text: ", manage your"
        - link "shipping and billing addresses"
        - text: ", and"
        - link "edit your password and account details"
        - text: .
      `);

    // Orders
    await widget.getByRole("link", { name: "Orders2" }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - navigation "Account pages":
        - list:
          - listitem:
            - link /Dashboard2 \\d+/
          - listitem:
            - link /Orders2 \\d+/
          - listitem:
            - link /Downloads2 \\d+/
          - listitem:
            - link /Addresses2 \\d+/
          - listitem:
            - link /Account Details2 \\d+/
          - listitem:
            - link /Logout2 \\d+/
      - paragraph: /Hello2 \\d+/
      - heading "ACustomerF ACustomerL" [level=5]
      - table:
        - rowgroup:
          - row "Order Date Status Total Actions":
            - columnheader "Order"
            - columnheader "Date"
            - columnheader "Status"
            - columnheader "Total"
            - columnheader "Actions"
        - rowgroup:
          - row /View order number \\d+ December \\d+, \\d+ Processing \\d+\\.\\d+৳  for 3 items View order \\d+/:
            - rowheader /View order number \\d+/:
              - link /View order number \\d+/
            - cell /December \\d+, \\d+/:
              - time: /December \\d+, \\d+/
            - cell "Processing"
            - cell /\\d+\\.\\d+৳  for 3 items/
            - cell /View order \\d+/:
              - link /View order \\d+/
          - row /View order number \\d+ December \\d+, \\d+ Cancelled \\d+\\.\\d+৳  for 3 items View order \\d+/:
            - rowheader /View order number \\d+/:
              - link /View order number \\d+/
            - cell /December \\d+, \\d+/:
              - time: /December \\d+, \\d+/
            - cell "Cancelled"
            - cell /\\d+\\.\\d+৳  for 3 items/
            - cell /View order \\d+/:
              - link /View order \\d+/
      `);

    // Downloads
    await widget.getByRole("link", { name: "Downloads2" }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - navigation "Account pages":
        - list:
          - listitem:
            - link /Dashboard2 \\d+/
          - listitem:
            - link /Orders2 \\d+/
          - listitem:
            - link /Downloads2 \\d+/
          - listitem:
            - link /Addresses2 \\d+/
          - listitem:
            - link /Account Details2 \\d+/
          - listitem:
            - link /Logout2 \\d+/
      - paragraph: /Hello2 \\d+/
      - heading "ACustomerF ACustomerL" [level=5]
      - text:  No downloads available yet.
      - link "Browse products"
      `);

    // Addresses
    await widget.getByRole("link", { name: "Addresses2" }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - navigation "Account pages":
        - list:
          - listitem:
            - link /Dashboard2 \\d+/
          - listitem:
            - link /Orders2 \\d+/
          - listitem:
            - link /Downloads2 \\d+/
          - listitem:
            - link /Addresses2 \\d+/
          - listitem:
            - link /Account Details2 \\d+/
          - listitem:
            - link /Logout2 \\d+/
      - paragraph: /Hello2 \\d+/
      - heading "ACustomerF ACustomerL" [level=5]
      - paragraph: The following addresses will be used on the checkout page by default.
      - banner:
        - heading "Billing address" [level=2]
        - link " Edit Billing address"
      - text: /XFirst241211 XLast241211 XCompany241211 XMirpur DOHS241211 XMirpur241211 Dhaka \\d+/
      - banner:
        - heading "Shipping address" [level=2]
        - link " Edit Shipping address"
      - text: /SFirst241211 SLast241211 SCompany241211 St241211 SMirpurDOHS241211 Dhaka \\d+/
      `);

    // Account Details
    await widget.getByRole("link", { name: "Account Details2" }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - navigation "Account pages":
        - list:
          - listitem:
            - link /Dashboard2 \\d+/
          - listitem:
            - link /Orders2 \\d+/
          - listitem:
            - link /Downloads2 \\d+/
          - listitem:
            - link /Addresses2 \\d+/
          - listitem:
            - link /Account Details2 \\d+/
          - listitem:
            - link /Logout2 \\d+/
      - paragraph: /Hello2 \\d+/
      - heading "ACustomerF ACustomerL" [level=5]
      - paragraph:
        - text: First name *
        - textbox: ACustomerF
      - paragraph:
        - text: Last name *
        - textbox: ACustomerL
      - paragraph:
        - text: Display name *
        - textbox: ACustomerF ACustomerL
        - emphasis: This will be how your name will be displayed in the account section and in reviews
      - paragraph:
        - text: Email address *
        - textbox: hurayraiit+automation_customer@gmail.com
      - group "Password change":
        - paragraph:
          - text: Current password (leave blank to leave unchanged)
          - textbox
          - text: 
        - paragraph:
          - text: New password (leave blank to leave unchanged)
          - textbox
          - text: 
        - paragraph:
          - text: Confirm new password
          - textbox
          - text: 
      - paragraph:
        - button "Save changes"
      `);

    // Logout
    await expect.soft(widget.getByRole("link", { name: "Logout2 241211" })).toBeVisible();
  });
});

test.describe("Woo Account Dashboard - Preset 3", () => {
  let heading = "Hurayra Automation Preset 03 241211";
  let widget;

  test.beforeEach(async ({ page }) => {
    // Login and scroll to section
    await page.goto("/wp-admin/");
    await page.waitForLoadState("networkidle");
    await page.locator("#user_login").fill(`${process.env.CUSTOMER_EMAIL}`);
    await page.locator("#user_pass").fill(`${process.env.CUSTOMER_PASSWORD}`);
    await page.locator("#wp-submit").first().click();
    await page.waitForLoadState("networkidle");

    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    widget = page.getByTestId("ef09ebd");
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await expect.soft(widget.getByText("Dashboard3 241211").first()).toBeVisible();
  });

  test("Test Contents", async ({ page }) => {
    // Dashboard
    await expect(widget).toMatchAriaSnapshot(`
      - navigation "Account pages":
        - list:
          - listitem:
            - link / Dashboard3 \\d+/
          - listitem:
            - link / Orders3 \\d+/
          - listitem:
            - link / Downloads3 \\d+/
          - listitem:
            - link / Addresses3 \\d+/
          - listitem:
            - link / Account Details3 \\d+/
          - listitem:
            - link / Logout3 \\d+/
      - paragraph: /Hello3 \\d+/
      - heading "ACustomerF ACustomerL" [level=5]
      - paragraph:
        - text: Hello
        - strong: ACustomerF ACustomerL
        - text: (not
        - strong: ACustomerF ACustomerL
        - text: "?"
        - link "Log out"
        - text: )
      - paragraph:
        - text: From your account dashboard you can view your
        - link "recent orders"
        - text: ", manage your"
        - link "shipping and billing addresses"
        - text: ", and"
        - link "edit your password and account details"
        - text: .
      `);

    // Orders
    await widget.getByRole("link", { name: "Orders3" }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - navigation "Account pages":
        - list:
          - listitem:
            - link / Dashboard3 \\d+/
          - listitem:
            - link / Orders3 \\d+/
          - listitem:
            - link / Downloads3 \\d+/
          - listitem:
            - link / Addresses3 \\d+/
          - listitem:
            - link / Account Details3 \\d+/
          - listitem:
            - link / Logout3 \\d+/
      - paragraph: /Hello3 \\d+/
      - heading "ACustomerF ACustomerL" [level=5]
      - table:
        - rowgroup:
          - row "Order Date Status Total Actions":
            - columnheader "Order"
            - columnheader "Date"
            - columnheader "Status"
            - columnheader "Total"
            - columnheader "Actions"
        - rowgroup:
          - row /View order number \\d+ December \\d+, \\d+ Processing \\d+\\.\\d+৳  for 3 items View order \\d+/:
            - rowheader /View order number \\d+/:
              - link /View order number \\d+/
            - cell /December \\d+, \\d+/:
              - time: /December \\d+, \\d+/
            - cell "Processing"
            - cell /\\d+\\.\\d+৳  for 3 items/
            - cell /View order \\d+/:
              - link /View order \\d+/
          - row /View order number \\d+ December \\d+, \\d+ Cancelled \\d+\\.\\d+৳  for 3 items View order \\d+/:
            - rowheader /View order number \\d+/:
              - link /View order number \\d+/
            - cell /December \\d+, \\d+/:
              - time: /December \\d+, \\d+/
            - cell "Cancelled"
            - cell /\\d+\\.\\d+৳  for 3 items/
            - cell /View order \\d+/:
              - link /View order \\d+/
      `);

    // Downloads
    await widget.getByRole("link", { name: "Downloads3" }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - navigation "Account pages":
        - list:
          - listitem:
            - link / Dashboard3 \\d+/
          - listitem:
            - link / Orders3 \\d+/
          - listitem:
            - link / Downloads3 \\d+/
          - listitem:
            - link / Addresses3 \\d+/
          - listitem:
            - link / Account Details3 \\d+/
          - listitem:
            - link / Logout3 \\d+/
      - paragraph: /Hello3 \\d+/
      - heading "ACustomerF ACustomerL" [level=5]
      - text:  No downloads available yet.
      - link "Browse products"
      `);

    // Addresses
    await widget.getByRole("link", { name: "Addresses3" }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - navigation "Account pages":
        - list:
          - listitem:
            - link / Dashboard3 \\d+/
          - listitem:
            - link / Orders3 \\d+/
          - listitem:
            - link / Downloads3 \\d+/
          - listitem:
            - link / Addresses3 \\d+/
          - listitem:
            - link / Account Details3 \\d+/
          - listitem:
            - link / Logout3 \\d+/
      - paragraph: /Hello3 \\d+/
      - heading "ACustomerF ACustomerL" [level=5]
      - paragraph: The following addresses will be used on the checkout page by default.
      - banner:
        - heading "Billing address" [level=2]
        - link " Edit Billing address"
      - text: /XFirst241211 XLast241211 XCompany241211 XMirpur DOHS241211 XMirpur241211 Dhaka \\d+/
      - banner:
        - heading "Shipping address" [level=2]
        - link " Edit Shipping address"
      - text: /SFirst241211 SLast241211 SCompany241211 St241211 SMirpurDOHS241211 Dhaka \\d+/
      `);

    // Account Details
    await widget.getByRole("link", { name: "Account Details3" }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - navigation "Account pages":
        - list:
          - listitem:
            - link / Dashboard3 \\d+/
          - listitem:
            - link / Orders3 \\d+/
          - listitem:
            - link / Downloads3 \\d+/
          - listitem:
            - link / Addresses3 \\d+/
          - listitem:
            - link / Account Details3 \\d+/
          - listitem:
            - link / Logout3 \\d+/
      - paragraph: /Hello3 \\d+/
      - heading "ACustomerF ACustomerL" [level=5]
      - paragraph:
        - text: First name *
        - textbox: ACustomerF
      - paragraph:
        - text: Last name *
        - textbox: ACustomerL
      - paragraph:
        - text: Display name *
        - textbox: ACustomerF ACustomerL
        - emphasis: This will be how your name will be displayed in the account section and in reviews
      - paragraph:
        - text: Email address *
        - textbox: hurayraiit+automation_customer@gmail.com
      - group "Password change":
        - paragraph:
          - text: Current password (leave blank to leave unchanged)
          - textbox
          - text: 
        - paragraph:
          - text: New password (leave blank to leave unchanged)
          - textbox
          - text: 
        - paragraph:
          - text: Confirm new password
          - textbox
          - text: 
      - paragraph:
        - button "Save changes"
      `);

    // Logout
    await expect.soft(widget.getByRole("link", { name: "Logout3 241211" })).toBeVisible();
  });
});
