"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/static-product";
let heading = "Static Product";

test.describe("Static Product", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/static-product/);
  });

  test("Test Section: Hover Effect On Static Product Image", async ({ page }) => {
    await page.getByRole("heading", { name: "Hover Effect On Static Product Image" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Hover Effect On Static Product Image" })).toBeVisible();
    await expect(page.getByText("Display your product images with preferred content")).toBeVisible();
  });
});
