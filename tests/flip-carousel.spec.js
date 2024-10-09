"use strict";

import { test, expect } from "../global-setup";

let slug = "https://essential-addons.com/elementor/flip-carousel";
let heading = "Flip Carousel";

// test.describe("Flip Carousel", () => {
//   // Setup
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/flip-carousel/);
//   });

//   test("Test Section: Remarkable coverflow style", async ({ page }) => {
//     await page.getByRole("heading", { name: "Remarkable coverflow style" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Remarkable coverflow style" })).toBeVisible();
//     await expect(page.getByText("Make it available")).toBeVisible();
//   });
// });
