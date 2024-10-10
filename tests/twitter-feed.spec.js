"use strict";

import { test, expect } from "../global-setup";

let slug = "https://essential-addons.com/elementor/twitter-feed";
let heading = "Twitter Feed";

// test.describe("Twitter Feed", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     // await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
//       "href",
//       /docs\/social-elements\/twitter-feed/
//     );
//   });

//   test("Test Section: Display Twitter Feed In Masonry Layout", async ({ page }) => {
//     await page.getByRole("heading", { name: "Display Twitter Feed In Masonry Layout" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Display Twitter Feed In Masonry Layout" })).toBeVisible();
//     await expect(
//       page.getByText("Use a stunning Masonry layout to display your Twitter Feed on your website")
//     ).toBeVisible();
//   });
// });
