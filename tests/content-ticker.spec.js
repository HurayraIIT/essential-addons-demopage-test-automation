"use strict";
import { test, expect } from "../global-setup";

let slug = "/content-ticker";
let heading = "Content Ticker";

test.describe("Content Ticker", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/content-ticker/);
  });

  test("Test Section: Custom Ticker With Animation", async ({ page }) => {
    await page.getByRole("heading", { name: "Custom Ticker With Animation" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Custom Ticker With Animation" })).toBeVisible();
    await expect(page.getByText("Choose from the various ‘Ticker Type’, modify content and include some animations")).toBeVisible();
  });
});
