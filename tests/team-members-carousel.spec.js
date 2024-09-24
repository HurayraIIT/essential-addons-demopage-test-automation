"use strict";

import { test, expect } from "../global-setup";

let slug = "/team-members-carousel";
let heading = "Team Members Carousel";

// test.describe("Team Members Carousel", () => {
//   // Setup
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
//       "href",
//       /docs\/content-elements\/team-member-carousel/
//     );
//   });

//   test("Test Section: Style Up Team Section With Overlay Style", async ({ page }) => {
//     await page.getByRole("heading", { name: "Style Up Team Section With Overlay Style" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Style Up Team Section With Overlay Style" })).toBeVisible();
//     await expect(page.getByText("Make your team member section look standout with circular")).toBeVisible();
//   });
// });
