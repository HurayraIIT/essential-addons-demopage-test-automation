"use strict";
import { test, expect } from "../global-setup";

let slug = "/betterdocs-category-box";
let heading = "BetterDocs Category Box";

test.describe("BetterDocs Category Box", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation", exact: true })).toHaveAttribute("href", /docs\/betterdocs-category-box/);
  });

  test("Test Section: Configure BetterDocs Category Box Layout", async ({ page }) => {
    await page.getByRole("heading", { name: "Configure BetterDocs Category Box Layout" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Configure BetterDocs Category Box Layout" })).toBeVisible();
    await expect(page.getByText("Setup the ‘Query’ settings to choose which document will")).toBeVisible();
  });
});
