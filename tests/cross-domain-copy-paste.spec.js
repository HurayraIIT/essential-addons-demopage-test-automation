"use strict";

import { test, expect } from "../global-setup";

let slug = "/cross-domain-copy-paste";
let heading = "Cross-Domain Copy Paste";

// test.describe("Cross-Domain Copy Paste", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
//       "href",
//       /docs\/cross-domain-copy-paste/
//     );
//   });

//   test("Test Section:Copy & Paste Any Section From One Site", async ({ page }) => {
//     await page.getByRole("heading", { name: "Copy & Paste Any Section From One Site" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Copy & Paste Any Section From One Site" })).toBeVisible();
//     await expect(page.getByText("Only with one click you can easily copy any section")).toBeVisible();
//   });
// });
