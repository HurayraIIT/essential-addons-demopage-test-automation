"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/business-reviews";
let heading = "Business Reviews";

test.describe("Business Reviews", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/ea-business-reviews/
    );
  });

  test("Test Section: Style Reviews With Preset 2", async ({ page }) => {
    await page.getByRole("heading", { name: "Style Reviews With Preset 2" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Style Reviews With Preset 2" })).toBeVisible();
  });
});
