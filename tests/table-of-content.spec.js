"use strict";
import { test, expect } from "../global-setup";

let slug = "/table-of-content";
let heading = "Table of Contents";

test.describe("Table of Contents", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/table-of-content/);
  });

  test("Test Section: Table Of Contents Demo 1", async ({ page }) => {
    await page.getByRole("heading", { name: "Table Of Contents Demo 1" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Table Of Contents Demo 1" })).toBeVisible();
    await expect(page.getByText("Choose the supported headers types of blogs like")).toBeVisible();
  });
});
