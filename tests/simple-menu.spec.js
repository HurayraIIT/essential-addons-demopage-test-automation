"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/simple-menu/";
let heading = "Nahid Simple Menu - 11-11-2024";

test.describe("Simple Menu https://eael.site/simple-menu/", () => {
  let box01 = null;
  let box02 = null;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    // box01 = page.locator("");
    // box02 = page.locator("");
  });

  // TODO: Incomplete Test
  test("Test Content Tab > Settings, Content", async ({ page }) => {

  });


});
