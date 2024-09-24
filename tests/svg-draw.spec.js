"use strict";

import { test, expect } from "../global-setup";

let slug = "/svg-draw";
let heading = "SVG Draw";

// test.describe("SVG Draw", () => {
//   // Setup
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/ea-svg-draw/);
//   });

//   test("Test Section: Engage Visitors With Unique Animations ", async ({ page }) => {
//     await page.getByRole("heading", { name: "Engage Visitors With Unique Animations " }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Engage Visitors With Unique Animations " })).toBeVisible();
//     await expect(page.getByText("Morph your logos ")).toBeVisible();
//   });
// });
