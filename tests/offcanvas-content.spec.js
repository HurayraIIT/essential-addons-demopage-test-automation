"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/offcanvas/";
let heading = "Offcanvas Heading 241021 Automation";

test.describe("Offcanvas https://qa1.site/go/q7i345", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  });

  test("Test Content Tab", async ({ page }) => {
    //
  });
});
