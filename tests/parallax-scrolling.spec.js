"use strict";
import { test, expect } from "../global-setup";

let slug = "/parallax-scrolling";
let heading = "Parallax Effect";

test.describe("Parallax Effect", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/extensions\/ea-parallax/
    );
  });

  test("Test Section: Scroll & Zoom Parallax Effect", async ({ page }) => {
    await page.getByRole("heading", { name: "Scroll & Zoom Parallax Effect" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Scroll & Zoom Parallax Effect" })).toBeVisible();
    await expect(page.getByText("Add beautiful scroll and zoom motion effects")).toBeVisible();
  });
});
