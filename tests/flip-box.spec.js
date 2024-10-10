"use strict";

import { test, expect } from "../global-setup";

let slug = "https://essential-addons.com/elementor/flip-box";
let heading = "Flip Box";

// test.describe("Flip Box", () => {
//   // Setup
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/flip-box/);
//   });

//   test("Test Section: Use Flip Top Style Of Flip Box", async ({ page }) => {
//     await page.getByRole("heading", { name: "Use Flip Top Style Of Flip Box" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Use Flip Top Style Of Flip Box" })).toBeVisible();
//     await expect(page.getByText("Choose ‘Flip Top’ as your ‘Flipbox Type’, add images")).toBeVisible();
//   });
// });
