"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/betterdocs-category-grid";
let heading = "BetterDocs Category Grid";

test.describe("BetterDocs Category Grid", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation", exact: true })).toHaveAttribute("href", /docs\/betterdocs-category-grid/);
  });

  test("Test Section: Stunning Grid", async ({ page }) => {
    await page.getByRole("heading", { name: "Stunning Grid" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Stunning Grid" })).toBeVisible();
    await expect(page.getByText("Make it available for any type of posts, besides")).toBeVisible();
  });
});
