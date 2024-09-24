"use strict";

import { test, expect } from "../global-setup";

let slug = "/post-block";
let heading = "Post Block";

// test.describe("Post Block", () => {
//   // Setup
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/post-block/);
//   });

//   test("Test Section: Tooltip On Bottom Hover Effect", async ({ page }) => {
//     await page.getByRole("heading", { name: "Choose Slide Up Animation" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Choose Slide Up Animation" })).toBeVisible();
//     await expect(
//       page.getByText("Select the slide up animation to give a stunning look for your WordPress posts")
//     ).toBeVisible();
//   });
// });
