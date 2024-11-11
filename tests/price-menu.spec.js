"use strict";

import { test, expect } from "../global-setup";

let slug = "https://essential-addons.com/elementor/price-menu";
let heading = "Price Menu";

test.describe("Price Menu", () => {
  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect
      .soft(page.getByRole("link", { name: "Documentation" }))
      .toHaveAttribute("href", /docs\/marketing-elements\/price-menu/);
  });
  // Preset 1
  test("Test Section: Showcase Price Menu in Stylish Way", async ({ page }) => {
    const section_root = page.getByTestId("33048ed7");

    await page.getByRole("heading", { name: "Showcase Price Menu in Stylish Way" }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: "Showcase Price Menu in Stylish Way" })).toBeVisible();
    await expect.soft(page.getByText("Get ready to design stunning Price Menu within a few mintues")).toBeVisible();
    await expect.soft(section_root.getByRole("img", { name: "Price Menu 102" })).toBeVisible();
    await expect.soft(section_root.getByRole("heading", { name: "Breakfast Menu" })).toBeVisible();
    await expect.soft(section_root.getByText("Fig and lemon cake")).toBeVisible();
    await expect.soft(section_root.getByText("$25")).toBeVisible();
    const connectors = section_root.locator(".eael-price-title-connector");
    const isAnyVisible = await connectors.evaluateAll((elements) =>
      elements.some((element) => element.offsetParent !== null)
    );
    expect.soft(isAnyVisible).toBe(true);
  });
});
