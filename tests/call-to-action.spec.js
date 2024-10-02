"use strict";

import { test, expect } from "../global-setup";

let slug = "/call-to-action";
let heading = "Call To Action";

test.describe("Call To Action", () => {
  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/call-to-action/);

    // Scroll to the section
    await page.getByText("Amaze Audience With Attractive CTA").scrollIntoViewIfNeeded();
    await expect(page.getByText("Amaze Audience With Attractive CTA")).toBeVisible();
    await expect(page.getByText("Style your Call To Action content, color and link up to direct visitors to desire site")).toBeVisible();
  });

  // First Section: Essential Addons for Elementor
  test("Test Section: Essential Addons for Elementor", async ({ page }) => {
    const section_root = page.getByTestId("c17a59b");

    await section_root.getByRole("heading", { name: "Essential Addons for Elementor" }).scrollIntoViewIfNeeded();
    await expect(section_root.getByRole("heading", { name: "Essential Addons for Elementor" })).toBeVisible();
    await expect(section_root.locator(".cta-preset-1")).toContainText(
      "Enhance your Elementor page building experience with 57+ creative "
    );
    await expect(section_root.getByRole("link", { name: "Purchase Now" })).toBeVisible();
    await expect(section_root.locator('.cta-button  ')).toHaveCSS('background-color', 'rgb(129, 65, 255)');
    await expect(section_root.locator('.cta-button  ')).toHaveCSS('font-family', 'Poppins, sans-serif');
    await expect(section_root.locator('.cta-button  ')).toHaveCSS('font-size', '15px');
    await expect(section_root.locator('.cta-button  ')).toHaveCSS('font-weight', '400');
  });
});