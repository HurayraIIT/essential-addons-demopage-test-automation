"use strict";
import { test, expect } from "../global-setup";

let slug = "/instagram-feed";
let heading = "Instagram Feed";

test.describe("Instagram Feed", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/instagram-feed/);
  });

  test("Test Section: Instagram Posts With Card Layout", async ({ page }) => {
    await page.getByRole("heading", { name: "Instagram Posts With Card Layout" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Instagram Posts With Card Layout" })).toBeVisible();
    await expect(page.getByText("A simple classic layout to showcase your Instagram posts in minimalistic way")).toBeVisible();
  });
});
