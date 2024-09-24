"use strict";

import { test, expect } from "../global-setup";

let slug = "/formstack";
let heading = "Formstack";

// test.describe("Formstack", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/formstack/);
//   });

//   test("Test Section: Formstack Style", async ({ page }) => {
//     await page.getByRole("heading", { name: "Formstack Style" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Formstack Style" })).toBeVisible();
//   });
// });
