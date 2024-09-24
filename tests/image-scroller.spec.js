"use strict";

import { test, expect } from "../global-setup";

let slug = "/image-scroller";
let heading = "Image Scroller";

test.describe("Image Scroller", () => {
  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/creative-elements\/ea-image-scroller/
    );
  });

  test("Test Section: Vertical Scrolling Effect On Hover", async ({ page }) => {
    await page.getByRole("heading", { name: "Vertical Scrolling Effect On Hover" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Vertical Scrolling Effect On Hover" })).toBeVisible();
    await expect(page.getByText("Turn on the Auto Scroller, Choose ")).toBeVisible();
    await page.getByRole("img", { name: "Image Scroller 102" }).hover();
    await expect(page.getByRole("img", { name: "Image Scroller 102" })).toHaveAttribute(
      "style",
      /transform: translateY\(-133.*/
    );
    await page.getByRole("img", { name: "Image Scroller 103" }).hover();
    await expect(page.getByRole("img", { name: "Image Scroller 103" })).toHaveAttribute(
      "style",
      /transform: translateY\(-133.*/
    );
  });
});
