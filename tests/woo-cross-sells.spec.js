"use strict";
import { test, expect } from "../global-setup";

let slug = "/woo-cross-sells";
let heading = "Woo Cross Sells";

test.describe("Woo Cross Sells", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/ea-woo-cross-sells/);
  });

  test("Test Section: Simple & Elegant Style 1(PRO)", async ({ page }) => {
    await page.getByRole("heading", { name: "Simple & Elegant Style 1(PRO)" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Simple & Elegant Style 1(PRO)" })).toBeVisible();
    await expect(page.getByText("Effortlessly captivate your customers as they hover")).toBeVisible();
  });
});
