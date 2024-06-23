"use strict";
import { test, expect } from "../global-setup";

let slug = "/wrapper-link";
let heading = "EA Wrapper Link";

test.describe("EA Wrapper Link", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/ea-wrapper-link/);
  });

  test("Test Section: Enjoy Full Freedom To Insert Links Anywhere", async ({ page }) => {
    await page.getByRole("heading", { name: "Enjoy Full Freedom To Insert Links Anywhere" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Enjoy Full Freedom To Insert Links Anywhere" })).toBeVisible();
  });
});
