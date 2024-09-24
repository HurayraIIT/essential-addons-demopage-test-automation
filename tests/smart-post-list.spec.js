"use strict";

import { test, expect } from "../global-setup";

let slug = "/post-list";
let heading = "Smart Post List";

// test.describe("Smart Post List", () => {
//   // Setup
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
//       "href",
//       /docs\/dynamic-content-elements\/smart-post-list/
//     );
//   });

//   test("Test Section: Filter & Search With Categories", async ({ page }) => {
//     await page.getByRole("heading", { name: "Filter & Search With Categories" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Filter & Search With Categories" })).toBeVisible();
//     await expect(page.getByText("Choose the source type as posts, add blog categories from")).toBeVisible();
//   });
// });
