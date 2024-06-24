"use strict";
import { test, expect } from "../global-setup";

let slug = "/woo-thank-you";
let heading = "Woo Thank You";

test.describe("Woo Thank You", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/ea-woo-thank-you/);
  });

  test("Test Section: Delight Customers With A Neat & Stylish Preset 1", async ({ page }) => {
    await page
      .getByRole("heading", { name: "Delight Customers With A Neat & Stylish Preset 1" })
      .scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Delight Customers With A Neat & Stylish Preset 1" })).toBeVisible();
  });
});
