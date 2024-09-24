"use strict";

import { test, expect } from "../global-setup";

let slug = "/gravity-forms";
let heading = "Gravity Forms";

// test.describe("Gravity Forms", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/gravity-forms/);
//   });

//   test("Test Section: Design Your EA Gravity Forms", async ({ page }) => {
//     await page.getByRole("heading", { name: "Design Your EA Gravity Forms" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Design Your EA Gravity Forms" })).toBeVisible();
//     await expect(page.getByText("Choose your preferred Gravity forms layout from")).toBeVisible();
//   });
// });
