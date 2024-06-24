"use strict";
import { test, expect } from "../global-setup";

let slug = "/post-carousel";
let heading = "Post Carousel";

test.describe("Post Carousel", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/dynamic-content-elements\/post-carousel/);
  });

  test("Test Section: Showcase Your Posts With Animated Carousel", async ({ page }) => {
    await page.getByRole("heading", { name: "Showcase Your Posts With Animated Carousel" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Showcase Your Posts With Animated Carousel" })).toBeVisible();
  });
});
