"use strict";
import { test, expect } from "../global-setup";

let slug = "/woo-product-compare";
let heading = "Woo Product Compare";

test.describe("Woo Product Compare", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/woo-product-compare/
    );
  });

  test("Test Section: Pick & Style Your Preferred Ready Themes", async ({ page }) => {
    await page.getByRole("heading", { name: "Pick & Style Your Preferred Ready Themes" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Pick & Style Your Preferred Ready Themes" })).toBeVisible();
    await expect(page.getByText("Configure the Product Compare ‘Products’ section")).toBeVisible();
  });
});
