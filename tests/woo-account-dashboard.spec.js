"use strict";
import { test, expect } from "../global-setup";

let slug = "/woo-account-dashboard";
let heading = "Woo Account Dashboard";

test.describe("Woo Account Dashboard", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/ea-woo-account-dashboard/
    );
  });

  test("Test Section: Classic Preset With Vibrance - Preset 1 (PRO)", async ({ page }) => {
    await page.getByRole("heading", { name: "Classic Preset With Vibrance - Preset 1 (PRO)" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Classic Preset With Vibrance - Preset 1 (PRO)" })).toBeVisible();
    await expect(page.getByText("Showcase all the necessary resources next")).toBeVisible();
  });
});
