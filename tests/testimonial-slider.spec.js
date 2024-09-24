"use strict";

import { test, expect } from "../global-setup";

let slug = "/testimonial-slider";
let heading = "Testimonial Slider";

// test.describe("Testimonial Slider", () => {
//   // Setup
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/testimonial-slider/);
//   });

//   test("Test Section: Exclusively Showcase Customer Reviews On Slider", async ({ page }) => {
//     await page
//       .getByRole("heading", { name: "Exclusively Showcase Customer Reviews On Slider" })
//       .scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Exclusively Showcase Customer Reviews On Slider" })).toBeVisible();
//     await expect(
//       page.getByText("Add items on the slider, configure the ‘Carousel Settings’ with ‘Slide’ effect")
//     ).toBeVisible();
//   });
// });
