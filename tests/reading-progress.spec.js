"use strict";
import { test, expect } from "../global-setup";

let slug = "/reading-progress";
let heading = "Reading Progress Bar";

test.describe("Reading Progress Bar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/extensions\/ea-reading-progress-bar/
    );
  });

  test("Test Section: Display Reading Progress Bar From Page Settings", async ({ page }) => {
    await page
      .getByRole("heading", { name: "Display Reading Progress Bar From Page Settings" })
      .scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Display Reading Progress Bar From Page Settings" })).toBeVisible();
  });
});
