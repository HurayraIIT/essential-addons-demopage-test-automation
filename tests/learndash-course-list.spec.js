"use strict";
import { test, expect } from "../global-setup";

let slug = "/learndash-course-list";
let heading = "LearnDash Course List";

test.describe("LearnDash Course List", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/learndash-course-list/);
  });

  test("Test Section: Configure The Course List Layout In Advance", async ({ page }) => {
    await page.getByRole("heading", { name: "Configure The Course List Layout In Advance" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Configure The Course List Layout In Advance" })).toBeVisible();
    await expect(page.getByText("Choose the default layout or pick the preferred ones from")).toBeVisible();
  });
});
