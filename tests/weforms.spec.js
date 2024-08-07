"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/weforms";
let heading = "weForms";

test.describe("weForms", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/weforms/);
  });

  test("Test Section: weForms Style 01", async ({ page }) => {
    await page.getByRole("heading", { name: "weForms Style 01" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "weForms Style 01" })).toBeVisible();
  });
});
