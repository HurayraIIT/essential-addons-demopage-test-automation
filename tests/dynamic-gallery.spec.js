"use strict";
import { test, expect } from "../global-setup";

let slug = "/dynamic-gallery";
let heading = "Dynamic Gallery";

test.describe("Dynamic Gallery", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/dynamic-content-elements\/dynamic-filterable-gallery/);
  });

  test("Test Section: Attractive Grid Layout To Showcase All Of Your Posts", async ({ page }) => {
    await page.getByRole("heading", { name: "Attractive Grid Layout To Showcase All Of Your Posts" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Attractive Grid Layout To Showcase All Of Your Posts" })).toBeVisible();
    await expect(page.getByText("Choose the Grid Layout option to showcase your blog")).toBeVisible();
  });
});
