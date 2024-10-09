"use strict";

import { test, expect } from "../global-setup";

let slug = "https://essential-addons.com/elementor/content-toggle";
let heading = "Content Toggle";

// test.describe("Content Toggle", () => {
//   // Setup
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/content-toggle/);
//   });

//   test("Test Section: Display Save Template For Content Toggle", async ({ page }) => {
//     await page.getByRole("heading", { name: "Display Save Template For Content Toggle" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Display Save Template For Content Toggle" })).toBeVisible();
//     await expect(page.getByText("Choose your save template designs & set")).toBeVisible();
//   });
// });
