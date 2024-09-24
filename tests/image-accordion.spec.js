"use strict";

import { test, expect } from "../global-setup";

let slug = "/image-accordion";
let heading = "Image Accordion";

// test.describe("Image Accordion", () => {
//   // Setup
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/image-accordion/);
//   });

//   test("Test Section: On Hover Horizontal Image Accordion Style ", async ({ page }) => {
//     await page.getByRole("heading", { name: "On Hover Horizontal Image Accordion Style " }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "On Hover Horizontal Image Accordion Style " })).toBeVisible();
//     await expect(page.getByText("Just place your")).toBeVisible();
//   });
// });
