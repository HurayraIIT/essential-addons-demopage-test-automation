"use strict";
import { test, expect } from "../global-setup";

let slug = "/sticky-video";
let heading = "Sticky Video";

test.describe("Sticky Video", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByTestId("27a40afa").getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByTestId("b6c8e09").getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByTestId("b6c8e09").getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/sticky-video/
    );
  });

  test("Test Section: Sticky Video From YouTube", async ({ page }) => {
    await page.getByRole("heading", { name: "Sticky Video From YouTube" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Sticky Video From YouTube" })).toBeVisible();
    await expect(page.getByText("You have to set your video source type as YouTube")).toBeVisible();
  });
});
