"use strict";

import { test, expect } from "../global-setup";

let slug = "/protected-content";
let heading = "Protected Content";

// test.describe("Protected Content", () => {
//   // Setup
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
//       "href",
//       /docs\/content-elements\/ea-protected-content/
//     );
//   });

//   test("Test Section: Protect Content By Using Password", async ({ page }) => {
//     await page.getByRole("heading", { name: "Protect Content By Using Password" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Protect Content By Using Password" })).toBeVisible();
//     await expect(page.getByText("Set a password to protect any content")).toBeVisible();
//   });
// });
