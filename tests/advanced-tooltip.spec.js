"use strict";
import { test, expect } from "../global-setup";

let slug = "/advanced-tooltip";
let heading = "Advanced Tooltip";

test.describe("Advanced Tooltip", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/extensions\/ea-advanced-tooltip/
    );
  });

  test("Test Section: Advanced Tooltips Style 01", async ({ page }) => {
    await page.getByRole("heading", { name: "Advanced Tooltips Style 01" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Advanced Tooltips Style 01" })).toBeVisible();
  });
});
