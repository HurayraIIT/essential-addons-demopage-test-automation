"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/feature-list/";

test.describe("Feature List - Vertical", () => {
  let heading = "Feature List 241226 Vertical";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("06efc21");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link
          - heading "Vertical Item One" [level=1]:
            - link "Vertical Item One"
          - paragraph: Vertical Item Content One
        - listitem:
          - heading "Vertical Item Two" [level=1]
          - paragraph: Vertical Item Content Two
        - listitem:
          - link
          - heading "Vertical Item Three" [level=1]:
            - link "Vertical Item Three"
          - paragraph: Vertical Item Content Three
    `);
  });
});

test.describe("Feature List - Horizontal", () => {
  let heading = "Feature List 241226 Horizontal";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("f8b8ccf");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - list:
        - listitem:
          - link
          - heading "Horizontal Item One" [level=3]:
            - link "Horizontal Item One"
          - paragraph: Horizontal Item Content One
        - listitem:
          - heading "Horizontal Item Two" [level=3]
          - paragraph: Horizontal Item Content Two
        - listitem:
          - link
          - heading "Horizontal Item Three" [level=3]:
            - link "Horizontal Item Three"
          - paragraph: Horizontal Item Content Three
    `);
  });
});

test.describe("Feature List - Live Demo Page", () => {
  let slug = "https://essential-addons.com/elementor/feature-list";
  let heading = "Feature List";
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect
      .soft(page.getByRole("link", { name: "Documentation" }))
      .toHaveAttribute("href", /docs\/creative-elements\/ea-feature-list/);
  });

  test("Test Section: Feature List Style 01", async ({ page }) => {
    await page.getByRole("heading", { name: "Feature List Style 01" }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: "Feature List Style 01" })).toBeVisible();
    await expect.soft(page.getByText("Applying advance design of feature list to")).toBeVisible();

    let section_root = page.getByTestId("2686bb44");

    // Verify if all sections has loaded
    await expect.soft(section_root.locator(".fas.fa-laptop")).toBeVisible();
    await expect.soft(section_root.locator(".far.fa-chart-bar")).toBeVisible();
    await expect.soft(section_root.locator(".far.fa-clock")).toBeVisible();
    await expect.soft(section_root.locator(".fas.fa-shield-alt")).toBeVisible();

    await expect.soft(section_root.getByRole("heading", { name: "Easy To Use" })).toBeVisible();
    await expect.soft(section_root.getByRole("heading", { name: "Daily Report" })).toBeVisible();
    await expect.soft(section_root.getByRole("heading", { name: "Real Time" })).toBeVisible();
    await expect.soft(section_root.getByRole("heading", { name: "Extreme Security" })).toBeVisible();

    await expect.soft(section_root.getByText("Configure content settings by")).toBeVisible();
    await expect.soft(section_root.getByText("Influence your potential buyers")).toBeVisible();
    await expect.soft(section_root.getByText("Add as much as key aspects")).toBeVisible();
    await expect.soft(section_root.getByText("Style your icon, content and")).toBeVisible();
  });
});
