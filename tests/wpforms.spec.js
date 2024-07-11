"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/wpforms";
let heading = "WPForms";

test.describe("WPForms", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/wpforms/);
  });

  test("Test Section: WPForms Style 01", async ({ page }) => {
    await page.getByRole("heading", { name: "WPForms Style 01" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "WPForms Style 01" })).toBeVisible();
    await expect(page.getByText("Customize just the way you need and make it suitable for your website")).toBeVisible();
  });
});
