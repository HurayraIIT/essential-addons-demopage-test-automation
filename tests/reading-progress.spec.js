"use strict";

import { test, expect } from "../global-setup";

let slug = "/reading-progress";
let heading = "Reading Progress Bar";

test.describe("Reading Progress Bar", () => {
  let progress = "";
  let progress_fill = "";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/extensions\/ea-reading-progress-bar/
    );

    progress = page.locator("#eael-reading-progress-255176");
    progress_fill = progress.locator(".eael-reading-progress-fill");
  });

  test("Progress bar should load", async ({ page }) => {
    await page.getByText("Display Reading Progress Bar From Page Settings").scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    await expect(progress).toHaveCount(1);
    await expect(progress_fill).toBeVisible();
  });

  test("Progress bar values should change with page scroll", async ({ page }) => {
    // At the top, Progress should be 0%
    await expect(progress_fill).toHaveCSS("width", "0px");

    // Go to page bottom
    await page.evaluate(() => {
      window.scrollBy(0, document.body.scrollHeight);
    });

    // Progress should be 100%
    await expect(progress_fill).toHaveAttribute("style", /width: (100|99).*%;/);
  });

  test("Progress bar style should be correct", async ({ page }) => {
    await expect(progress_fill).toHaveCSS("width", "0px");
    await expect(progress_fill).toHaveCSS("background-color", "rgb(31, 209, 142)");
    await expect(progress_fill).toHaveCSS("font-size", "16px");
    await expect(progress_fill).toHaveCSS("height", "5px");
    await expect(progress_fill).toHaveCSS("transition-delay", "0s");
    await expect(progress_fill).toHaveCSS("transition-duration", "0.05s");
    await expect(progress_fill).toHaveCSS("transition-property", "width");
    await expect(progress_fill).toHaveCSS("transition-timing-function", "ease");
  });
});
