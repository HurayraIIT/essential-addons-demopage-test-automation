"use strict";

import { test, expect } from "../global-setup";

let slug = "/event-calendar";
let heading = "Event Calendar";

// test.describe("Event Calendar", () => {
//   // Setup
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/event-calendar/);
//   });

//   test("Test Section: Choose Manual Events Source", async ({ page }) => {
//     await page.getByRole("heading", { name: "Choose Manual Events Source" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Choose Manual Events Source" })).toBeVisible();
//     await expect(page.getByText("Create & manage your event manually with")).toBeVisible();
//   });
// });
