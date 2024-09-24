"use strict";

import { test, expect } from "../global-setup";

let slug = "/tooltip";
let heading = "Tooltip";

// test.describe("Tooltip", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/tooltip/);
//   });

//   test("Test Section: Tooltip On Bottom Hover Effect", async ({ page }) => {
//     await page.getByRole("heading", { name: "Tooltip On Bottom Hover Effect" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Tooltip On Bottom Hover Effect" })).toBeVisible();
//     await expect(page.getByText("Set your content hover direction & speed from")).toBeVisible();
//   });
// });
