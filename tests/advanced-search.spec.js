"use strict";
import { test, expect } from "../global-setup";

let slug = "/advanced-search";
let heading = "Advanced Search";

test.describe("Advanced Search", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/advanced-search/);
  });

  test("Test Section: Stunning Advanced Live Search Bar", async ({ page }) => {
    await page.getByRole("heading", { name: "Stunning Advanced Live Search Bar" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Stunning Advanced Live Search Bar" })).toBeVisible();
    await expect(page.getByText("Add a live advanced search bar that allows your website")).toBeVisible();
  });
});
