"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/testimonials";
let heading = "Testimonials";

test.describe("Testimonials", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/testimonials/);
  });

  test("Test Section: Select Preferred Testimonials Style", async ({ page }) => {
    await page.getByRole("heading", { name: "Select Preferred Testimonials Style" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Select Preferred Testimonials Style" })).toBeVisible();
    await expect(page.getByText("Showcase customer reviews outstandingly")).toBeVisible();
  });
});
