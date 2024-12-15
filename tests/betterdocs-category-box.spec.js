"use strict";

import { test, expect } from "../global-setup";

let slug = "/documentation-elements/betterdocs-category-box/";

test.describe("BetterDocs Category Box - Layout One", () => {
  let heading = "Hurayra Automation 241215 One";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("bf36585");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - link "betterdocs-category-box-icon Setup Process pre-one1articles-one":
        - img "betterdocs-category-box-icon"
        - heading "Setup Process" [level=1]
      - link "betterdocs-category-box-icon Installation pre-one2articles-one":
        - img "betterdocs-category-box-icon"
        - heading "Installation" [level=1]
      - link "betterdocs-category-box-icon Getting Started pre-one5articles-one":
        - img "betterdocs-category-box-icon"
        - heading "Getting Started" [level=1]
      - link "betterdocs-category-box-icon Configurations pre-one2articles-one":
        - img "betterdocs-category-box-icon"
        - heading "Configurations" [level=1]
      `);
  });
});

test.describe("BetterDocs Category Box - Layout Two", () => {
  let heading = "Hurayra Automation 241215 Two";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("e2168ee");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
    - link "betterdocs-category-box-icon Configurations 2":
      - img "betterdocs-category-box-icon"
      - heading "Configurations" [level=2]
    - link "betterdocs-category-box-icon Getting Started 5":
      - img "betterdocs-category-box-icon"
      - heading "Getting Started" [level=2]
    - link "betterdocs-category-box-icon Installation 2":
      - img "betterdocs-category-box-icon"
      - heading "Installation" [level=2]
    - link "betterdocs-category-box-icon Setup Process 1":
      - img "betterdocs-category-box-icon"
      - heading "Setup Process" [level=2]
    `);
  });
});

test.describe("BetterDocs Category Box - Live Demo Page", () => {
  let slug = "https://essential-addons.com/elementor/betterdocs-category-box";
  let heading = "BetterDocs Category Box";

  let layout1DataID = "5655788f";
  let layout2DataID = "783034e0";
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation", exact: true })).toBeVisible();
    await expect
      .soft(page.getByRole("link", { name: "Documentation", exact: true }))
      .toHaveAttribute("href", /docs\/betterdocs-category-box/);
  });

  test("Test Section: Configure BetterDocs Category Box Layout", async ({ page }) => {
    await page.getByRole("heading", { name: "Configure BetterDocs Category Box Layout" }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: "Configure BetterDocs Category Box Layout" })).toBeVisible();
    await expect.soft(page.getByText("Setup the ‘Query’ settings to choose which document will")).toBeVisible();
    await expect.soft(page.getByTestId(layout1DataID)).toBeVisible();
    await expect.soft(page.getByTestId(layout1DataID)).toHaveClass(/elementor-widget-eael-betterdocs-category-box/);
    await expect.soft(page.locator('//*[@id="eael-bd-cat-box-5655788f"]/div/a[1]/div/div[1]')).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Betterdocs Category Box 102" })).toBeVisible();
  });

  test("Test Section: Try More Beautifully Designed Layouts", async ({ page }) => {
    await page.getByRole("heading", { name: "Try More Beautifully Designed Layouts" }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: "Try More Beautifully Designed Layouts" })).toBeVisible();
    await expect.soft(page.getByTestId(layout2DataID)).toBeVisible();
    await expect.soft(page.getByTestId(layout2DataID)).toHaveClass(/elementor-widget-eael-betterdocs-category-box/);
    await expect.soft(page.locator('//*[@id="eael-bd-cat-box-783034e0"]/div/a[1]/div/div[1]')).toBeVisible();
    await expect.soft(page.locator('//*[@id="eael-bd-cat-box-783034e0"]/div/a[1]/div/div[2]/span')).toHaveText("8");
  });
});
