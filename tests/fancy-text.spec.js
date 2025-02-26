"use strict";

import { test, expect } from "../global-setup";

let slug = "creative-elements/fancy-text";

test.use({ 
    testIdAttribute: "data-fancy-text",
 });

test.describe("Fancy Text", () => {
  // All Styles & Animation Type Unique ID
  let style1TypingID = "#style1-typing";

  // All Styles & Animation Type Unique Locator
  let style1TypingLocator = null;


  // Runs before each test
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    style1TypingLocator = page.locator(style1TypingID);
  });

  // Style Type & Animation Type Combinations Start

  // Style: Style 1 | Animation: Typing
  test("Style: Style 1 | Animation: Typing", async ({ page }) => {
    await expect.soft(page.getByText("Style Type: Style 1 | Animation Type: Typing")).toBeVisible();
    await expect.soft(style1TypingLocator).toBeVisible();
    await expect.soft(style1TypingLocator).toHaveClass(/style1-typing/);

    await expect.soft(style1TypingLocator.getByTestId("|First string|Second & string|Third string")).toBeVisible();

  });

});

// Style Type & Animation Type Combinations End