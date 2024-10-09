"use strict";

import { test, expect } from "../global-setup";

let slug = "https://essential-addons.com/elementor/interactive-promo";
let heading = "Interactive Promo";

// test.describe("Interactive Promo", () => {
//   // Page Heading
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/interactive-promo/);
//   });

//   test("Test Section: Promote Interactive Content", async ({ page }) => {
//     await page.getByRole("heading", { name: "Promote Interactive Content" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Promote Interactive Content" })).toBeVisible();
//     await expect(page.getByText("Add attractive heading, inner ")).toBeVisible();

//     const section_root = page.getByTestId("62f79d5c");

//     // await expect(section_root.locator('.effect-lily img[alt="Interactive Promo 102"]')).toBeVisible();
//     // // await expect(section_root.locator('.effect-lily img[alt="Interactive Promo 102"]')).hover();

//     // await expect(section_root.getByRole('figure', { name: 'It’s a pleasure We have only' }).getByRole('link')).toBeVisible();
//     // await expect(page.getByRole('figure', { name: 'It’s a pleasure We have only' }).getByRole('link')).toBeVisible();
//   });
// });
