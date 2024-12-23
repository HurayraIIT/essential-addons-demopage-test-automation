"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/advanced-tabs/";

test.describe("Advanced Tabs - Horizontal", () => {
  let heading = "Advanced Tabs 241223 Horizontal";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("ec928f8");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - tablist:
        - tab "Horizontal Tab Title One" [selected]
        - tab "Horizontal Tab Title Two":
          - img
        - tab "Horizontal Tab Title Three"
      - paragraph: Horizontal Tab Content Two
      `);
  });
});

test.describe("Advanced Tabs - Vertical", () => {
  let heading = "Advanced Tabs 241223 Vertical";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("4e218a0");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - tablist:
        - tab "Vertical Tab Title One" [selected]:
          - heading "Vertical Tab Title One" [level=2]
        - tab "Vertical Tab Title Two":
          - img
          - heading "Vertical Tab Title Two" [level=5]
        - tab "Vertical Tab Title Three":
          - paragraph: Vertical Tab Title Three
      - paragraph: Vertical Tab Content One
      - paragraph
      - paragraph
      - paragraph
      `);
  });
});

test.describe("Advanced Tabs - Live Demo Page - Use Horizontal Layout of Tabs", () => {
  let slug = "https://essential-addons.com/elementor/advanced-tabs";
  let heading = "Advanced Tabs";
  let advtab = "";

  let advtab_nav = "";
  let advtab_nav_1 = "";
  let advtab_nav_2 = "";
  let advtab_nav_3 = "";
  let advtab_nav_4 = "";

  let advtab_content = "";
  let advtab_content_1 = "";
  let advtab_content_2 = "";
  let advtab_content_3 = "";
  let advtab_content_4 = "";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/advanced-tabs/);

    advtab = page.getByTestId("73ca6f31");

    advtab_nav = advtab.locator(".eael-tabs-nav");
    advtab_nav_1 = advtab_nav.getByRole("tab", { name: "PHILOSOPHY" });
    advtab_nav_2 = advtab_nav.getByRole("tab", { name: "MISSION & VISION" });
    advtab_nav_3 = advtab_nav.getByRole("tab", { name: "GOALS" });
    advtab_nav_4 = advtab_nav.getByRole("tab", { name: "PRIVACY POLICY" });

    advtab_content = advtab.locator(".eael-tabs-content");
    advtab_content_1 = advtab_content.locator("#philosophy-tab");
    advtab_content_2 = advtab_content.locator("#mission-vision-tab");
    advtab_content_3 = advtab_content.locator("#goals-tab");
    advtab_content_4 = advtab_content.locator("#privacy-policy-tab");

    await advtab.scrollIntoViewIfNeeded();
    await expect.soft(advtab).toBeVisible();
  });

  test("All sections should be present", async () => {
    await expect.soft(advtab).toBeVisible();

    // The tabs should be visible
    await expect.soft(advtab_nav_1).toBeVisible();
    await expect.soft(advtab_nav_2).toBeVisible();
    await expect.soft(advtab_nav_3).toBeVisible();
    await expect.soft(advtab_nav_4).toBeVisible();

    // Icons Should be visible
    await expect
      .soft(advtab_nav.getByRole("tab", { name: "PHILOSOPHY" }).locator("path"))
      .toHaveAttribute(
        "d",
        "M35.6,0.1C35.4,0,35,0,34.8,0.1L0.4,19.7C0.1,19.9,0,20.2,0,20.5c0,0.3,0.2,0.6,0.6,0.7l10.3,3.4l4,10.8    c0.1,0.3,0.4,0.5,0.8,0.5c0,0,0.1,0,0.1,0c0.2,0,0.4-0.1,0.5-0.3l0,0l5.8-7.3l8,2.7c0.1,0,0.2,0,0.3,0c0.1,0,0.3,0,0.4-0.1    c0.2-0.1,0.3-0.3,0.4-0.6L36,1C36,0.6,35.9,0.3,35.6,0.1z M2.8,20.3L30,4.7L11.2,23.1L2.8,20.3z M16,25.3    c-0.1,0.1-0.1,0.2-0.2,0.4l-0.7,6.1l-2.7-7.5l16-15.6L16,25.3z M16.7,32.4l0.7-5.6l3,1L16.7,32.4z M29.6,29.2L18,25.3L33.8,4    L29.6,29.2z"
      );
    await expect
      .soft(advtab_nav.getByRole("tab", { name: "MISSION & VISION" }).locator("path"))
      .toHaveAttribute(
        "d",
        "M35.7,33.2L23.2,15.5c-0.1-0.2-0.2-0.3-0.4-0.4v-3.8h8.8c0.4,0,0.7-0.2,0.9-0.5c0.2-0.3,0.2-0.7,0-1.1l-1.8-3  l1.8-3c0.2-0.3,0.2-0.7,0-1.1S32,2.1,31.6,2.1h-8.8V1.1c0-0.6-0.5-1.1-1.1-1.1s-1.1,0.5-1.1,1.1v14c-0.1,0.1-0.3,0.2-0.4,0.4  l-5.9,8.4l-2.3-3.1c-0.3-0.5-0.9-0.7-1.4-0.7s-1.1,0.3-1.4,0.7l-9,12.5c-0.4,0.5-0.4,1.2-0.1,1.8c0.3,0.6,0.9,1,1.6,1h32.5  c0.7,0,1.3-0.4,1.6-0.9C36.1,34.5,36.1,33.8,35.7,33.2L35.7,33.2z M10,33.9l6.8-9.7l1.7,1.6c0.4,0.4,1,0.4,1.4,0l1.8-1.7l1.8,1.7  c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l1.7-1.6l6.8,9.7H10z M7.9,33.2c-0.1,0.2-0.2,0.4-0.3,0.7H2.4l8.3-11.6l2.4,3.3  L7.9,33.2z M21.8,17.1l3.8,5.4l-1.2,1.1l-1.8-1.7c-0.4-0.4-1-0.4-1.4,0l-1.8,1.7L18,22.5L21.8,17.1z M29.7,4.2l-1.2,1.9  c-0.2,0.3-0.2,0.8,0,1.1l1.2,1.9h-6.9V4.2H29.7z"
      );
    await expect
      .soft(advtab_nav.getByRole("tab", { name: "GOALS" }).locator("path").first())
      .toHaveAttribute(
        "d",
        "M32.8,0C32.3,0,3.8,0,3.3,0C1.5,0,0.1,1.4,0.1,3.2v1.6C0.1,7.4,1,9.9,2.6,12C4,13.6,5.9,15,8,15.7l1.1,0.4  c1.3,2.1,3.3,3.7,5.8,4.5v1.6c0,0.6-0.5,1.1-1.1,1.1c-1.7,0-3.2,1.4-3.2,3.2v1.1H9.7c-0.6,0-1.1,0.5-1.1,1.1v5.3H7.6  c-0.6,0-1.1,0.5-1.1,1.1S7,36,7.6,36h21c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1h-1.1v-5.3c0-0.6-0.5-1.1-1.1-1.1h-1.1v-1.1  c0-1.7-1.4-3.2-3.2-3.2c-0.6,0-1.1-0.5-1.1-1.1v-1.6c2.4-0.8,4.5-2.4,5.8-4.5l1.2-0.4c0,0,0,0,0,0c2.1-0.7,3.9-2,5.3-3.7  c1.6-2,2.5-4.6,2.5-7.2V3.2C36,1.4,34.6,0,32.8,0z M4.3,10.6C3,9,2.2,6.9,2.2,4.8V3.2c0-0.6,0.5-1.1,1.1-1.1h3.3l1.1,9.7  c0.1,0.6,0.2,1.1,0.3,1.7C6.5,12.8,5.2,11.8,4.3,10.6z M10.7,33.9v-4.3h14.7v4.3H10.7z M19.9,18.7c-0.5,0.1-0.8,0.5-0.8,1v2.4  c0,1.7,1.4,3.2,3.2,3.2c0.6,0,1.1,0.5,1.1,1.1v1.1H12.8v-1.1c0-0.6,0.5-1.1,1.1-1.1c1.7,0,3.2-1.4,3.2-3.2v-2.4c0-0.5-0.3-0.9-0.8-1  c-3.5-0.8-6-3.7-6.4-7.2l-1-9.4h18.7l-1,9.4C26,15.1,23.4,17.9,19.9,18.7z M33.9,4.8c0,2.1-0.7,4.2-2.1,5.9c-1,1.2-2.3,2.2-3.7,2.8  c0.2-0.5,0.3-1.1,0.3-1.7l1.1-9.7h3.3c0.6,0,1.1,0.5,1.1,1.1V4.8z"
      );
    await expect
      .soft(advtab_nav.getByRole("tab", { name: "PRIVACY POLICY" }).locator("path").first())
      .toHaveAttribute(
        "d",
        "M27.7,15.4h-0.3V8.8c0-4.8-3.9-8.8-8.8-8.8S9.8,3.9,9.8,8.8v6.6H9.5c-1.3,0-2.4,1.1-2.4,2.4v13.3    c0,2.7,2.2,4.8,4.8,4.8h13.5c2.7,0,4.8-2.2,4.8-4.8V17.9C30.2,16.5,29.1,15.4,27.7,15.4z M11.9,8.8L11.9,8.8c0-3.7,3-6.7,6.7-6.7    s6.7,3,6.7,6.7v6.6h-1V8.7c0-3.1-2.5-5.6-5.6-5.6S13,5.6,13,8.7v6.7h-1V8.8z M22.1,8.7v6.7h-7.1V8.7c0-2,1.6-3.5,3.5-3.5    S22.1,6.8,22.1,8.7z M28.1,31.2c0,1.5-1.2,2.7-2.7,2.7H11.9c-1.5,0-2.7-1.2-2.7-2.7V17.9c0-0.2,0.2-0.3,0.3-0.3h18.3    c0.2,0,0.3,0.2,0.3,0.3L28.1,31.2L28.1,31.2z"
      );

    // Content 1 should be visible
    await expect.soft(advtab_content_1).toBeVisible();
  });

  test("The first tab should be expanded by default", async () => {
    await expect.soft(advtab).toBeVisible();

    await expect.soft(advtab_content_1).toBeVisible();
    await expect.soft(advtab_content_2).toBeHidden();
    await expect.soft(advtab_content_3).toBeHidden();
    await expect.soft(advtab_content_4).toBeHidden();
  });

  test("Tab expand/shrink should work", async ({ page }) => {
    await expect.soft(advtab).toBeVisible();

    // click on tab 2 and verify
    await advtab_nav_2.click();
    await page.waitForTimeout(200);

    await expect.soft(advtab_content_1).toBeHidden();
    await expect.soft(advtab_content_2).toBeVisible();
    await expect.soft(advtab_content_3).toBeHidden();
    await expect.soft(advtab_content_4).toBeHidden();

    // Click on tab 3 and verify
    await advtab_nav_3.click();
    await page.waitForTimeout(200);

    await expect.soft(advtab_content_1).toBeHidden();
    await expect.soft(advtab_content_2).toBeHidden();
    await expect.soft(advtab_content_3).toBeVisible();
    await expect.soft(advtab_content_4).toBeHidden();

    // Click on tab 4 and verify
    await advtab_nav_4.click();
    await page.waitForTimeout(200);

    await expect.soft(advtab_content_1).toBeHidden();
    await expect.soft(advtab_content_2).toBeHidden();
    await expect.soft(advtab_content_3).toBeHidden();
    await expect.soft(advtab_content_4).toBeVisible();
  });
});
