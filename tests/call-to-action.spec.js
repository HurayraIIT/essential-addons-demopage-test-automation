"use strict";

import { test, expect } from "../global-setup";

let slug = "/call-to-action";
let heading = "Call To Action";

// test.describe("Call To Action", () => {
//   // Page Heading
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/call-to-action/);
//   });

//   // Preset 1
//   test("Test Section: Preset 1", async ({ page }) => {
//     const section_root = page.getByTestId("514ccb5e");

//     await section_root.getByRole("heading", { name: "Essential Addons for Elementor" }).scrollIntoViewIfNeeded();
//     await expect(section_root.getByRole("heading", { name: "Essential Addons for Elementor" })).toBeVisible();
//     await expect(section_root.locator(".cta-preset-1")).toContainText(
//       "Enhance your Elementor page building experience with 57+ creative "
//     );
//     await expect(section_root.getByRole("link", { name: "Purchase Now" })).toBeVisible();
//     await expect(section_root.getByRole("img", { name: "Call To Action 102" })).toBeVisible();
//   });
// });