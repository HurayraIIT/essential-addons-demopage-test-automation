"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/creative-buttons";
let heading = "Creative Buttons";

test.describe("Creative Buttons", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/creative-buttons/);
  });

  test("Test Section: Primary & Secondary Content Settings", async ({ page }) => {
    await page.getByRole("heading", { name: "Primary & Secondary Content Settings" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Primary & Secondary Content Settings" })).toBeVisible();
    await expect(page.getByText("Make your button look appealing towards visitors by")).toBeVisible();
  });
});
