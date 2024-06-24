"use strict";
import { test, expect } from "../global-setup";

let slug = "/woo-checkout";
let heading = "Woo Checkout";

test.describe("Woo Checkout", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/woo-checkout/);
  });

  test("Test Section: Default", async ({ page }) => {
    await page.getByRole("heading", { name: "Your Order" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Your Order" })).toBeVisible();
  });
});
