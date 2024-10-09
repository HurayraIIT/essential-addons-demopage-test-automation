"use strict";

import { test, expect } from "../global-setup";

let slug = "https://essential-addons.com/elementor/duplicator";
let heading = "Post Duplicator";

// test.describe("Post Duplicator", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/duplicator/);
//   });

//   test("Test Section: Configure EA Duplicator Post Types & Settings", async ({ page }) => {
//     await page.getByRole("heading", { name: "Configure EA Duplicator Post Types & Settings" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Configure EA Duplicator Post Types & Settings" })).toBeVisible();
//     await expect(page.getByText("Select your preferred post types as post, page or others")).toBeVisible();
//   });
// });
