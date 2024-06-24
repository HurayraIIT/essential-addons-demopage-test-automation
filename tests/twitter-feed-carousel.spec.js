"use strict";
import { test, expect } from "../global-setup";

let slug = "/twitter-feed-carousel";
let heading = "Twitter Feed Carousel";

test.describe("Twitter Feed Carousel", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/social-elements\/twitter-feed-carousel/);
  });

  test("Test Section: Twitter Feed Carousel Style 1", async ({ page }) => {
    await page.getByRole("heading", { name: "Twitter Feed Carousel Style 1" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Twitter Feed Carousel Style 1" })).toBeVisible();
  });
});
