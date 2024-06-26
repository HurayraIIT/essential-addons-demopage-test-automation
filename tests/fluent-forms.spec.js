"use strict";
import { test, expect } from "../global-setup";

let slug = "/fluent-forms";
let heading = "Fluent Forms";

test.describe("Fluent Forms", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/fluent-form/);
  });

  test("Test Section: Fluent Forms Style 1", async ({ page }) => {
    await page.getByRole("heading", { name: "Fluent Forms Style 1" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Fluent Forms Style 1" })).toBeVisible();
    await expect(page.getByText("Choose form type & style the form container as you want")).toBeVisible();
  });
});
