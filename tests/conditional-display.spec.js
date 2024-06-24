"use strict";
import { test, expect } from "../global-setup";

let slug = "/conditional-display";
let heading = "Conditional Display";

test.describe("Conditional Display", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/conditional-display/
    );
  });

  test("Test Section: User Status", async ({ page }) => {
    await page.getByRole("heading", { name: "User Status" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "User Status" })).toBeVisible();
  });
});
