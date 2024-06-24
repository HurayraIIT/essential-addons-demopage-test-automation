"use strict";
import { test, expect } from "../global-setup";

let slug = "/post-timeline";
let heading = "Post Timeline";

test.describe("Post Timeline", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/post-timeline/);
  });

  test("Test Section: Vertical Post Timeline Layout", async ({ page }) => {
    await page.getByRole("heading", { name: "Vertical Post Timeline Layout" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Vertical Post Timeline Layout" })).toBeVisible();
    await expect(page.getByText("Set the source type, choose the number of posts per page, add image overlay, hover effects & more")).toBeVisible();
  });
});
