"use strict";

import { test, expect } from "../global-setup";

let slug = "/marketing-elements/pricing-table/";

test.describe("Pricing Table - Preset 1", () => {
  let heading = "Automation Pricing Table Layout 01 241212";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("b3eca1b");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - heading /Startup \\d+ \\d+/ [level=2]
      - deletion: /৳\\d+/
      - text: /৳\\d+\\/ per month01/
      - list:
        - listitem: /Unlimited calls \\d+ \\d+/
        - listitem: /\\d+ MB of storage space \\d+ \\d+/
        - listitem: /\\d+ MB Bandwidth \\d+ \\d+/
        - listitem: /\\d+\\/7 support \\d+ \\d+/
        - listitem: /Pricing table list item \\d+ \\d+/
      - link /Choose Plan \\d+ \\d+/:
        - img
      `);
  });
});

test.describe("Pricing Table - Preset 2", () => {
  let heading = "Automation Pricing Table Layout 02 241212";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("b0dc6b8");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - text: /Featured \\d+ \\d+/
      - img
      - heading /Startup \\d+ \\d+/ [level=2]
      - text: /A tagline here\\. \\d+ \\d+/
      - deletion: /৳\\d+/
      - text: /৳\\d+\\/ per month02/
      - list:
        - listitem: /Unlimited calls \\d+ \\d+/
        - listitem: /Free hosting \\d+ \\d+/
        - listitem: /\\d+ MB of storage space \\d+ \\d+/
        - listitem: /\\d+\\/7 support \\d+ \\d+/
        - listitem: /Pricing table list item \\d+ \\d+/
      - link /Choose Plan \\d+ \\d+/:
        - img
      `);
  });
});

test.describe("Pricing Table - Preset 3", () => {
  let heading = "Automation Pricing Table Layout 03 241212";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("53150da");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
        - text: /Featured \\d+ \\d+/
        - deletion: /৳\\d+/
        - text: /৳\\d+\\/ per month03/
        - heading /Startup \\d+ \\d+/ [level=2]
        - text: /A tagline here\\. \\d+ \\d+/
        - list:
          - listitem: /Unlimited calls \\d+ \\d+/
          - listitem: /Free hosting \\d+ \\d+/
          - listitem: /\\d+ MB of storage space \\d+ \\d+/
          - listitem: /\\d+\\/7 support \\d+ \\d+/
          - listitem: /Pricing table list item \\d+ \\d+/
        - link /Choose Plan \\d+ \\d+/:
          - img
        `);
  });
});

test.describe("Pricing Table - Preset 4", () => {
  let heading = "Automation Pricing Table Layout 04 241212";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("23a44c5");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
        - text: /Featured \\d+ \\d+/
        - deletion: /\\d+\\$/
        - text: /\\d+\\$ \\/ per month04/
        - heading /Startup \\d+ \\d+/ [level=2]
        - text: /A tagline here\\. \\d+ \\d+/
        - list:
          - listitem: /\\d+\\/7 support \\d+ \\d+/
          - listitem: /Unlimited calls \\d+ \\d+/
          - listitem: /\\d+ MB of storage space \\d+ \\d+/
          - listitem: /Free hosting \\d+ \\d+/
          - listitem: /Pricing table list item \\d+ \\d+/
        - link /Choose Plan \\d+ \\d+/:
          - img
        `);
  });
});

test.describe("Pricing Table - Preset 5", () => {
  let heading = "Automation Pricing Table Layout 05 241212";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("085f5f5");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
        - img
        - heading /Startup \\d+ \\d+/ [level=2]
        - text: /A tagline here\\. \\d+ \\d+/
        - deletion: /\\$\\d+/
        - text: /\\$\\d+\\/ per month05/
        - list:
          - listitem: /\\d+\\/7 support \\d+ \\d+/
          - listitem: /\\d+ MB of storage space \\d+ \\d+/
          - listitem: /Free hosting \\d+ \\d+/
          - listitem: /Pricing table list item \\d+ \\d+/
          - listitem: /Unlimited calls \\d+ \\d+/
        - link /Choose Plan \\d+ \\d+/:
          - img
        `);
  });
});

test.describe("Pricing Table Live Demo Page", () => {
  let slug = "https://essential-addons.com/elementor/pricing-table";
  let heading = "Pricing Table";
  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/pricing-table/);
  });

  // Pricing Table Style 01
  test("Test Section: Pricing Table Style 01", async ({ page }) => {
    await page.getByRole("heading", { name: "Pricing Table Style 01" }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: "Pricing Table Style 01" })).toBeVisible();
    await expect.soft(page.getByText("Display product pricing table using default style")).toBeVisible();

    const section_root_1 = page.getByTestId("4f6430e6");
    const price_table_1_basic = page.getByTestId("d7c427d");

    await expect.soft(section_root_1.getByRole("heading", { name: "Basic" })).toBeVisible();
    await expect.soft(section_root_1.getByRole("heading", { name: "Standard" })).toBeVisible();
    await expect.soft(section_root_1.getByRole("heading", { name: "Enterprise" })).toBeVisible();
    await expect.soft(price_table_1_basic.locator(".price-currency")).toContainText("$");
    await expect.soft(price_table_1_basic.locator(".price-period")).toContainText("/Mo");
    await expect.soft(price_table_1_basic.locator(".elementor-repeater-item-6264dc5 > .li-icon > .fas")).toBeVisible();
    await expect.soft(price_table_1_basic.locator(".elementor-repeater-item-e478261 > .li-icon > .fas")).toBeVisible();
    await expect.soft(price_table_1_basic.locator(".eael-pricing-button")).toBeVisible();
  });
});
