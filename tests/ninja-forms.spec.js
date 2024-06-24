"use strict";
import { test, expect } from "../global-setup";

let slug = "/ninja-forms";
let heading = "Ninja Forms";

test.describe("Ninja Forms", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/ninja-forms/);
  });

  test("Test Section: Ninja Forms Style 01", async ({ page }) => {
    await page.getByRole("heading", { name: "Ninja Forms Style 01" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Ninja Forms Style 01" })).toBeVisible();
    await expect(page.getByText("Set your content hover direction & speed from")).toBeVisible();
  });
});
