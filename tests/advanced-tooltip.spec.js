"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/advanced-tooltip";
let heading = "Advanced Tooltip";

test.describe("Advanced Tooltips Style 01", () => {
  let tooltip = "";
  let outside = "";
  let inside = "";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/extensions\/ea-advanced-tooltip/
    );

    tooltip = page.getByText("Save 10% in Basic Plan");
    outside = page.getByRole("heading", { name: "Advanced Tooltips Style 01" });
    inside = page.locator("#eael-section-tooltip-4b0da25c");

    await outside.scrollIntoViewIfNeeded();
  });

  test("Tooltip should appear on hover", async ({ page }) => {
    await expect(outside).toBeVisible();

    // Hover inside and verify tooltip
    await inside.hover();
    await page.waitForTimeout(200);
    await expect(tooltip).toBeVisible();

    // Hover outside and verify tooltip is hidden
    await outside.hover();
    await page.waitForTimeout(200);
    await expect(tooltip).toBeHidden();
  });
});
