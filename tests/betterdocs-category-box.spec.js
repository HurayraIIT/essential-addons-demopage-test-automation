"use strict";
import exp from "constants";
import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/betterdocs-category-box";
let heading = "BetterDocs Category Box";

test.describe("BetterDocs Category Box", () => {
  let layout1DataID = "5655788f";
  let layout2DataID = "783034e0";
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation", exact: true })).toHaveAttribute(
      "href",
      /docs\/betterdocs-category-box/
    );
  });

  test("Test Section: Configure BetterDocs Category Box Layout", async ({ page }) => {
    await page.getByRole("heading", { name: "Configure BetterDocs Category Box Layout" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Configure BetterDocs Category Box Layout" })).toBeVisible();
    await expect(page.getByText("Setup the ‘Query’ settings to choose which document will")).toBeVisible();
    await expect(page.getByTestId(layout1DataID)).toBeVisible();
    await expect(page.getByTestId(layout1DataID)).toHaveClass(/elementor-widget-eael-betterdocs-category-box/);
    await expect(page.locator('//*[@id="eael-bd-cat-box-5655788f"]/div/a[1]/div/div[1]')).toBeVisible();
    await expect(page.getByRole("link", { name: "Betterdocs Category Box 102" })).toBeVisible();
  });

  test("Test Section: Try More Beautifully Designed Layouts", async ({ page }) => {
    await page.getByRole("heading", { name: "Try More Beautifully Designed Layouts" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Try More Beautifully Designed Layouts" })).toBeVisible();
    await expect(page.getByTestId(layout2DataID)).toBeVisible();
    await expect(page.getByTestId(layout2DataID)).toHaveClass(/elementor-widget-eael-betterdocs-category-box/);
    await expect(page.locator('//*[@id="eael-bd-cat-box-783034e0"]/div/a[1]/div/div[1]')).toBeVisible();
    await expect(page.locator('//*[@id="eael-bd-cat-box-783034e0"]/div/a[1]/div/div[2]/span')).toHaveText("8");
  });
});

// Not suitable for structure tests