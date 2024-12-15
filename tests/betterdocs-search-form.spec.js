"use strict";

import { test, expect } from "../global-setup";

let slug = "/documentation-elements/betterdocs-search-form/";

test.describe("BetterDocs Search Form", () => {
  let heading = "BetterDocs Search Form - Content Test 241215";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("ccb375a");
  });

  test("Test Contents", async ({ page }) => {
    await widget.getByPlaceholder('Search-one').click();
    await widget.getByPlaceholder('Search-one').fill('thisdoesnotexist241215');
    await widget.getByText("Sorry, no docs were found").waitFor();
    await expect(widget).toMatchAriaSnapshot(`
      - img
      - textbox "Search Input": thisdoesnotexist241215
      - img
      - list:
        - listitem: Sorry, no docs were found.
      `);
  });
});
