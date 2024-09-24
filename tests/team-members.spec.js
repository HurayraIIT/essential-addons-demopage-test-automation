"use strict";

import { test, expect } from "../global-setup";

let slug = "/team-members";
let heading = "Team Member";

// test.describe("Team Member", () => {
//   // Setup
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/team-members/);
//   });

//   test("Test Section: Represent Team With Style Preset", async ({ page }) => {
//     await page.getByRole("heading", { name: "Represent Team With Style Preset" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Represent Team With Style Preset" })).toBeVisible();
//     await expect(page.getByText("Showcase each member image, designation, social shares")).toBeVisible();
//   });
// });
