"use strict";
import { test, expect } from "../global-setup";

let slug = "/advanced-tabs";
let heading = "Advanced Tabs";

test.describe("Advanced Tabs", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/advanced-tabs/);
  });

  test("Test Section: Use Horizontal Layout of Tabs", async ({ page }) => {
    await page.getByRole("heading", { name: "Use Horizontal Layout of Tabs" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Use Horizontal Layout of Tabs" })).toBeVisible();
    await expect(page.getByText("Spotlight on organizational achievements, goals")).toBeVisible();
  });
});
