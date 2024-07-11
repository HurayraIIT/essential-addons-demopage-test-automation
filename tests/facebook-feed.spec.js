"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/facebook-feed";
let heading = "Facebook Feed";

test.describe("Facebook Feed", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/facebook-feed/);
  });

  test("Test Section: Showcase Facebook Feed In Card Layout", async ({ page }) => {
    await page.getByRole("heading", { name: "Showcase Facebook Feed In Card Layout" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Showcase Facebook Feed In Card Layout" })).toBeVisible();
    await expect(page.getByText("Go to the ‘General Settings’ to choose the")).toBeVisible();
  });
});
