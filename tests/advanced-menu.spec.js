"use strict";
import { test, expect } from "../global-setup";

let slug = "/advanced-menu";
let heading = "Advanced Menu";

test.describe("Advanced Menu", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/content-elements\/ea-advanced-menu/);
  });

  test("Test Section: Style Default Skin & Horizontal Layout", async ({ page }) => {
    await page.getByRole("heading", { name: "Style Default Skin & Horizontal Layout" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Style Default Skin & Horizontal Layout" })).toBeVisible();
    await expect(page.getByText("Add drop down menu icon, animation effect")).toBeVisible();
  });
});
