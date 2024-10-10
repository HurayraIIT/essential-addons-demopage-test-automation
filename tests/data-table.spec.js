"use strict";

import { test, expect } from "../global-setup";

let slug = "https://essential-addons.com/elementor/table";
let heading = "Data Table";

// test.describe("Data Table", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
//       "href",
//       /docs\/content-elements\/data-table/
//     );
//   });

//   test("Test Section: Data Table Style 01", async ({ page }) => {
//     await page.getByRole("heading", { name: "Data Table Style 01" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Data Table Style 01" })).toBeVisible();
//     await expect(page.getByText("Add table headers with icon, include table row,")).toBeVisible();
//   });
// });
