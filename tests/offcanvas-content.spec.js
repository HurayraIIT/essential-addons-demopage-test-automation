"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/offcanvas-content";
let heading = "Offcanvas";

test.describe("Offcanvas", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/content-elements\/essential-addons-elementor-offcanvas/
    );
  });

  test("Test Section: Configure Offcanvas Settings & Style", async ({ page }) => {
    await page.getByRole("heading", { name: "Configure Offcanvas Settings & Style" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Configure Offcanvas Settings & Style" })).toBeVisible();
    await expect(page.getByText("Choose your preferred ‘Content Type’, add button")).toBeVisible();
  });
});
