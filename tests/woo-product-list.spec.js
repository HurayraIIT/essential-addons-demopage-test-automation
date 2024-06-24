"use strict";
import { test, expect } from "../global-setup";

let slug = "/woo-product-list";
let heading = "Woo Product List";

test.describe("Woo Product List", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/ea-woo-product-list/
    );
  });

  test("Test Section: Woo Your Audience With Product List Preset 1", async ({ page }) => {
    await page.getByRole("heading", { name: "Woo Your Audience With Product List Preset 1" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Woo Your Audience With Product List Preset 1" })).toBeVisible();
    await expect(page.getByText("Customize your Woo product listings with")).toBeVisible();
  });
});
