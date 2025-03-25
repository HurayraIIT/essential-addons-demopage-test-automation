"use strict";

import { expect, test } from "../global-setup";

let slug = "creative-elements/fancy-text";

test.use({ 
    testIdAttribute: "data-fancy-text",
 });

test.describe("Fancy Text", () => {
  // All Styles & Animation Type Unique ID
  let style1TypingID = "#style1-typing";
  let style1FadeID = "#style1-fade";
  let style1FadeUpID = "#style1-fade-up";
  let style1FadeDownID = "#style1-fade-down";
  let style1FadeLeftID = "#style1-fade-left";
  let style1FadeRightID = "#style1-fade-right";
  
  // All Styles & Animation Type Unique Locator
  let style1TypingLocator = null;
  let style1FadeLocator = null;
  let style1FadeUpLocator = null;
  let style1FadeDownLocator = null;
  let style1FadeLeftLocator = null;
  let style1FadeRightLocator = null;


  // Runs before each test
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    style1TypingLocator = page.locator(style1TypingID);
    style1FadeLocator = page.locator(style1FadeID);
    style1FadeDownLocator = page.locator(style1FadeDownID);
    style1FadeUpLocator = page.locator(style1FadeUpID);
    style1FadeLeftLocator = page.locator(style1FadeLeftID);
    style1FadeRightLocator = page.locator(style1FadeRightID);
  });

  // Style Type & Animation Type Combinations Start

  // Style: Style 1 | Animation: Typing
  test("Style: Style 1 | Animation: Typing", async ({ page }) => {
    await expect.soft(page.getByText("Style Type: Style 1 | Animation Type: Typing")).toBeVisible();
    await expect.soft(style1TypingLocator).toBeVisible();
    await expect.soft(style1TypingLocator).toHaveClass(/style1-typing/);

    await expect.soft(style1TypingLocator).toBeVisible();
    await expect.soft(style1FadeLocator).toBeVisible();
    await expect.soft(style1FadeUpLocator).toBeVisible();
    await expect.soft(style1FadeDownLocator).toBeVisible();
    await expect.soft(style1FadeLeftLocator).toBeVisible();
    await expect.soft(style1FadeRightLocator).toBeVisible();

  });

});

// Style Type & Animation Type Combinations End