"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/advanced-menu/";

test.describe("Advanced Menu - Default Skin", () => {
  let heading = "Hurayra Automation 241226 - Default";
  let vertical_widget;
  let horizontal_widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    vertical_widget = page.getByTestId("7c9f3e7");
    horizontal_widget = page.getByTestId("0c8b24f");
  });

  test("Test Vertical Contents", async ({ page }) => {
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await vertical_widget.locator("span.eael-advanced-menu-indicator").nth(0).click();
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
          - list:
            - listitem:
              - link "Advanced Menu"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await vertical_widget.locator("span.eael-advanced-menu-indicator").nth(1).click();
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
          - list:
            - listitem:
              - link "X"
            - listitem:
              - link "LinkedIn"
            - listitem:
              - link "Github"
        - listitem:
          - link "xCloud"
    `);
  });

  test("Test Horizontal Contents", async ({ page }) => {
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await horizontal_widget.getByText("Content Elements").hover();
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
          - list:
            - listitem:
              - link "Advanced Menu"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await horizontal_widget.getByText("HurayraIIT").hover();
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
          - list:
            - listitem:
              - link "X"
            - listitem:
              - link "LinkedIn"
            - listitem:
              - link "Github"
        - listitem:
          - link "xCloud"
    `);
  });
});

test.describe("Advanced Menu - Skin One", () => {
  let heading = "Hurayra Automation 241226 - One";
  let vertical_widget;
  let horizontal_widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    vertical_widget = page.getByTestId("54d1692");
    horizontal_widget = page.getByTestId("723b244");
  });

  test("Test Vertical Contents", async ({ page }) => {
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await vertical_widget.locator("span.eael-advanced-menu-indicator").nth(0).click();
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
          - list:
            - listitem:
              - link "Advanced Menu"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await vertical_widget.locator("span.eael-advanced-menu-indicator").nth(1).click();
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
          - list:
            - listitem:
              - link "X"
            - listitem:
              - link "LinkedIn"
            - listitem:
              - link "Github"
        - listitem:
          - link "xCloud"
    `);
  });

  test("Test Horizontal Contents", async ({ page }) => {
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await horizontal_widget.getByText("Content Elements").hover();
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
          - list:
            - listitem:
              - link "Advanced Menu"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await horizontal_widget.getByText("HurayraIIT").hover();
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
          - list:
            - listitem:
              - link "X"
            - listitem:
              - link "LinkedIn"
            - listitem:
              - link "Github"
        - listitem:
          - link "xCloud"
    `);
  });
});

test.describe("Advanced Menu - Skin Two", () => {
  let heading = "Hurayra Automation 241226 - Two";
  let vertical_widget;
  let horizontal_widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    vertical_widget = page.getByTestId("ed3fa9d");
    horizontal_widget = page.getByTestId("9bfeb6a");
  });

  test("Test Vertical Contents", async ({ page }) => {
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await vertical_widget.locator("span.eael-advanced-menu-indicator").nth(0).click();
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
          - list:
            - listitem:
              - link "Advanced Menu"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await vertical_widget.locator("span.eael-advanced-menu-indicator").nth(1).click();
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
          - list:
            - listitem:
              - link "X"
            - listitem:
              - link "LinkedIn"
            - listitem:
              - link "Github"
        - listitem:
          - link "xCloud"
    `);
  });

  test("Test Horizontal Contents", async ({ page }) => {
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await horizontal_widget.getByText("Content Elements").hover();
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
          - list:
            - listitem:
              - link "Advanced Menu"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await horizontal_widget.getByText("HurayraIIT").hover();
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
          - list:
            - listitem:
              - link "X"
            - listitem:
              - link "LinkedIn"
            - listitem:
              - link "Github"
        - listitem:
          - link "xCloud"
    `);
  });
});

test.describe("Advanced Menu - Skin Three", () => {
  let heading = "Hurayra Automation 241226 - Three";
  let vertical_widget;
  let horizontal_widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    vertical_widget = page.getByTestId("ae533c5");
    horizontal_widget = page.getByTestId("0f0e9a8");
  });

  test("Test Vertical Contents", async ({ page }) => {
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await vertical_widget.locator("span.eael-advanced-menu-indicator").nth(0).click();
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
          - list:
            - listitem:
              - link "Advanced Menu"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await vertical_widget.locator("span.eael-advanced-menu-indicator").nth(1).click();
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
          - list:
            - listitem:
              - link "X"
            - listitem:
              - link "LinkedIn"
            - listitem:
              - link "Github"
        - listitem:
          - link "xCloud"
    `);
  });

  test("Test Horizontal Contents", async ({ page }) => {
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await horizontal_widget.getByText("Content Elements").hover();
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
          - list:
            - listitem:
              - link "Advanced Menu"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await horizontal_widget.getByText("HurayraIIT").hover();
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
          - list:
            - listitem:
              - link "X"
            - listitem:
              - link "LinkedIn"
            - listitem:
              - link "Github"
        - listitem:
          - link "xCloud"
    `);
  });
});

test.describe("Advanced Menu - Skin Four", () => {
  let heading = "Hurayra Automation 241226 - Four";
  let vertical_widget;
  let horizontal_widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    vertical_widget = page.getByTestId("e18f101");
    horizontal_widget = page.getByTestId("9468ea6");
  });

  test("Test Vertical Contents", async ({ page }) => {
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await vertical_widget.locator("span.eael-advanced-menu-indicator").nth(0).click();
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
          - list:
            - listitem:
              - link "Advanced Menu"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await vertical_widget.locator("span.eael-advanced-menu-indicator").nth(1).click();
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
          - list:
            - listitem:
              - link "X"
            - listitem:
              - link "LinkedIn"
            - listitem:
              - link "Github"
        - listitem:
          - link "xCloud"
    `);
  });

  test("Test Horizontal Contents", async ({ page }) => {
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await horizontal_widget.getByText("Content Elements").hover();
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
          - list:
            - listitem:
              - link "Advanced Menu"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await horizontal_widget.getByText("HurayraIIT").hover();
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
          - list:
            - listitem:
              - link "X"
            - listitem:
              - link "LinkedIn"
            - listitem:
              - link "Github"
        - listitem:
          - link "xCloud"
    `);
  });
});

test.describe("Advanced Menu - Skin Five", () => {
  let heading = "Hurayra Automation 241226 - Five";
  let vertical_widget;
  let horizontal_widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    vertical_widget = page.getByTestId("fb9b8d3");
    horizontal_widget = page.getByTestId("6e16e1a");
  });

  test("Test Vertical Contents", async ({ page }) => {
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await vertical_widget.locator("span.eael-advanced-menu-indicator").nth(0).click();
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
          - list:
            - listitem:
              - link "Advanced Menu"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await vertical_widget.locator("span.eael-advanced-menu-indicator").nth(1).click();
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
          - list:
            - listitem:
              - link "X"
            - listitem:
              - link "LinkedIn"
            - listitem:
              - link "Github"
        - listitem:
          - link "xCloud"
    `);
  });

  test("Test Horizontal Contents", async ({ page }) => {
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await horizontal_widget.getByText("Content Elements").hover();
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
          - list:
            - listitem:
              - link "Advanced Menu"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await horizontal_widget.getByText("HurayraIIT").hover();
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
          - list:
            - listitem:
              - link "X"
            - listitem:
              - link "LinkedIn"
            - listitem:
              - link "Github"
        - listitem:
          - link "xCloud"
    `);
  });
});

test.describe("Advanced Menu - Skin Six", () => {
  let heading = "Hurayra Automation 241226 - Six";
  let vertical_widget;
  let horizontal_widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    vertical_widget = page.getByTestId("3e04d11");
    horizontal_widget = page.getByTestId("25c014c");
  });

  test("Test Vertical Contents", async ({ page }) => {
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await vertical_widget.locator("span.eael-advanced-menu-indicator").nth(0).click();
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
          - list:
            - listitem:
              - link "Advanced Menu"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await vertical_widget.locator("span.eael-advanced-menu-indicator").nth(1).click();
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
          - list:
            - listitem:
              - link "X"
            - listitem:
              - link "LinkedIn"
            - listitem:
              - link "Github"
        - listitem:
          - link "xCloud"
    `);
  });

  test("Test Horizontal Contents", async ({ page }) => {
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await horizontal_widget.getByText("Content Elements").hover();
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
          - list:
            - listitem:
              - link "Advanced Menu"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await horizontal_widget.getByText("HurayraIIT").hover();
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
          - list:
            - listitem:
              - link "X"
            - listitem:
              - link "LinkedIn"
            - listitem:
              - link "Github"
        - listitem:
          - link "xCloud"
    `);
  });
});

test.describe("Advanced Menu - Skin Seven", () => {
  let heading = "Hurayra Automation 241226 - Seven";
  let vertical_widget;
  let horizontal_widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    vertical_widget = page.getByTestId("8901877");
    horizontal_widget = page.getByTestId("730d9c4");
  });

  test("Test Vertical Contents", async ({ page }) => {
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await vertical_widget.locator("span.eael-advanced-menu-indicator").nth(0).click();
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
          - list:
            - listitem:
              - link "Advanced Menu"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await vertical_widget.locator("span.eael-advanced-menu-indicator").nth(1).click();
    await expect(vertical_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
          - list:
            - listitem:
              - link "X"
            - listitem:
              - link "LinkedIn"
            - listitem:
              - link "Github"
        - listitem:
          - link "xCloud"
    `);
  });

  test("Test Horizontal Contents", async ({ page }) => {
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await horizontal_widget.getByText("Content Elements").hover();
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
          - list:
            - listitem:
              - link "Advanced Menu"
        - listitem:
          - link "HurayraIIT"
        - listitem:
          - link "xCloud"
    `);

    await horizontal_widget.getByText("HurayraIIT").hover();
    await expect(horizontal_widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link "Home"
        - listitem:
          - link "Cart"
        - listitem:
          - link "Content Elements"
        - listitem:
          - link "HurayraIIT"
          - list:
            - listitem:
              - link "X"
            - listitem:
              - link "LinkedIn"
            - listitem:
              - link "Github"
        - listitem:
          - link "xCloud"
    `);
  });
});

test.describe("Advanced Menu - Style Default Skin & Horizontal Layout", () => {
  let slug = "https://essential-addons.com/elementor/advanced-menu";
  let heading = "Advanced Menu";
  let menu = "";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect
      .soft(page.getByRole("link", { name: "Documentation" }))
      .toHaveAttribute("href", /docs\/content-elements\/ea-advanced-menu/);

    menu = page.getByTestId("6a863ab4");
    await menu.scrollIntoViewIfNeeded();
  });

  test("All sections should be present", async ({ page }) => {
    await expect.soft(menu).toBeVisible();

    await expect.soft(menu.locator("#menu-item-4842").getByRole("link", { name: "Home" })).toBeVisible();
    await expect.soft(menu.locator("#menu-item-4843").getByRole("link", { name: "Elements" })).toBeVisible();
    await expect.soft(menu.locator("#menu-item-4859").getByRole("link", { name: "Support" })).toBeVisible();
    await expect.soft(menu.locator("#menu-item-4861").getByRole("link", { name: "Blog" })).toBeVisible();
    await expect.soft(menu.locator("#menu-item-4862").getByRole("link", { name: "Contact Us" })).toBeVisible();
    await expect.soft(menu.locator("#menu-item-4843").getByRole("link", { name: "Elements" })).toBeVisible();

    // Submenu should be hidden
    await expect.soft(menu.getByRole("link", { name: "Advanced Accordion for" })).toBeHidden();
    await expect.soft(menu.getByRole("link", { name: "Advanced Menu" })).toBeHidden();

    // Hover the menu item to reveal submenu
    await menu.locator("#menu-item-4843").getByRole("link", { name: "Elements" }).hover();
    await expect.soft(menu.getByRole("link", { name: "Advanced Accordion for" })).toBeVisible();
    await expect.soft(menu.getByRole("link", { name: "Advanced Menu" })).toBeVisible();
  });
});
