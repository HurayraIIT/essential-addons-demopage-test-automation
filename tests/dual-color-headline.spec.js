"use strict";
import { test, expect } from "../global-setup";

let slug = "/dual-color-headline";
let heading = "Dual Color Heading";

test.describe("Dual Color Heading", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/dual-color-headline/
    );
  });

  test("Test Section: Dual Headers With Icon", async ({ page }) => {
    await page.getByRole("heading", { name: "Dual Headers With Icon" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Dual Headers With Icon" })).toBeVisible();
  });
});
