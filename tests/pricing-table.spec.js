"use strict";
import { test, expect } from "../global-setup";

let slug = "/pricing-table";
let heading = "Pricing Table";

test.describe("Pricing Table", () => {
  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/pricing-table/);
  });

  // Pricing Table Style 01
  test("Test Style 01", async ({ page }) => {
    await page.getByRole("heading", { name: "Pricing Table Style 01" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Pricing Table Style 01" })).toBeVisible();
    await expect(page.getByText("Display product pricing table using default style")).toBeVisible();

    const section_root = page.getByTestId("4f6430e6");
    const price_table_basic = page.getByTestId("d7c427d");

    await expect(section_root.getByRole("heading", { name: "Basic" })).toBeVisible();
    await expect(section_root.getByRole("heading", { name: "Standard" })).toBeVisible();
    await expect(section_root.getByRole("heading", { name: "Enterprise" })).toBeVisible();

    await expect(price_table_basic.locator(".price-currency")).toContainText("$");
    await expect(price_table_basic.locator(".price-period")).toContainText("/Mo");
    await expect(
      price_table_basic.locator(".elementor-repeater-item-e478261 > .li-icon > .fas.fa-check")
    ).toBeVisible();
    await expect(
      price_table_basic.locator(".elementor-repeater-item-6264dc5 > .li-icon > .fas.fa-times")
    ).toBeVisible();
    await expect(price_table_basic.locator(".eael-pricing-button")).toContainText(/Get Started/);
  });

  // Pricing Table Style 02
  test("Test Style 02", async ({ page }) => {
    await page.getByRole("heading", { name: "Pricing Table Style 02" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Pricing Table Style 02" })).toBeVisible();
    await expect(page.getByText("Choose your product pricing style")).toBeVisible();

    await expect(page.getByTestId("4f5840d9")).toBeVisible();
  });

  // Pricing Table Style 03
  test("Test Style 03", async ({ page }) => {
    await page.getByRole("heading", { name: "Pricing Table Style 03" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Pricing Table Style 03" })).toBeVisible();
    await expect(page.getByText("Use call to action button")).toBeVisible();

    await expect(page.getByTestId("10296ce2")).toBeVisible();
  });

  // Pricing Table Style 04
  test("Test Style 04", async ({ page }) => {
    await page.getByRole("heading", { name: "Pricing Table Style 04" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Pricing Table Style 04" })).toBeVisible();
    await expect(page.getByText("You can add header image")).toBeVisible();

    await expect(page.getByTestId("533cbb2b")).toBeVisible();
  });

  // Pricing Table Style 05
  test("Test Style 05", async ({ page }) => {
    await page.getByRole("heading", { name: "Pricing Table Style 05" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Pricing Table Style 05" })).toBeVisible();
    await expect(page.getByText("You can add effects ")).toBeVisible();

    await expect(page.getByTestId("2e34ab74")).toBeVisible();
  });
});
