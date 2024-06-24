"use strict";
import { test, expect } from "../global-setup";

let slug = "/caldera-forms";
let heading = "Caldera Forms";

test.describe("Caldera Forms", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/caldera-forms/);
  });

  test("Test Section: Caldera Form 1 Style", async ({ page }) => {
    await page.getByRole("heading", { name: "Caldera Form 1 Style" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Caldera Form 1 Style" })).toBeVisible();
    await expect(page.getByText("Choose form type & style the form container as you want using EA Caldera Form")).toBeVisible();
  });
});
