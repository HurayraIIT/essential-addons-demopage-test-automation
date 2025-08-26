"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/sticky-video/";

test.describe("Sticky Video", () => {
  test.slow();
  let heading = "Hurayra Automation 241226 Top";
  let bottom_heading = "Hurayra Automation 241226 Bottom";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    // await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("4d72951");
  });

  test("Test Contents", async ({ page }) => {

    await widget.locator('.eaelsv-overlay-icon > .fas').click();
    await page.getByRole("heading", { name: bottom_heading, exact: true }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: bottom_heading, exact: true })).toBeVisible();

    await page.waitForTimeout(1000);
    await page.keyboard.press("PageUp");

    await expect(page.locator('.plyr__poster').first()).toBeVisible();
    await expect(page.locator('.fas').first()).toBeVisible();
  });
});