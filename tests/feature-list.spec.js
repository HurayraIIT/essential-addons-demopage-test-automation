"use strict";

import { test, expect } from "../global-setup";

let slug = "/feature-list";
let heading = "Feature List";

test.describe("Feature List", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/creative-elements\/ea-feature-list/
    );
  });

  test("Test Section: Feature List Style 01", async ({ page }) => {
    await page.getByRole("heading", { name: "Feature List Style 01" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Feature List Style 01" })).toBeVisible();
    await expect(page.getByText("Applying advance design of feature list to")).toBeVisible();

    let section_root = page.getByTestId("2686bb44");

    // Verify if all sections has loaded
    await expect(section_root.locator(".fas.fa-laptop")).toBeVisible();
    await expect(section_root.locator(".far.fa-chart-bar")).toBeVisible();
    await expect(section_root.locator(".far.fa-clock")).toBeVisible();
    await expect(section_root.locator(".fas.fa-shield-alt")).toBeVisible();

    await expect(section_root.getByRole("heading", { name: "Easy To Use" })).toBeVisible();
    await expect(section_root.getByRole("heading", { name: "Daily Report" })).toBeVisible();
    await expect(section_root.getByRole("heading", { name: "Real Time" })).toBeVisible();
    await expect(section_root.getByRole("heading", { name: "Extreme Security" })).toBeVisible();

    await expect(section_root.getByText("Configure content settings by")).toBeVisible();
    await expect(section_root.getByText("Influence your potential buyers")).toBeVisible();
    await expect(section_root.getByText("Add as much as key aspects")).toBeVisible();
    await expect(section_root.getByText("Style your icon, content and")).toBeVisible();
  });
});
