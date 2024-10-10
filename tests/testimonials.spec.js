"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/testimonials/";
let heading = "Hurayra Testimonial Automation 241010";

test.describe("Testimonials https://qa1.site/go/jc1787", () => {
  let testimonial_loc = null;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    testimonial_loc = page.locator("#eael-testimonial-8cef57c");
  });

  test("Test Content Tab", async ({ page }) => {
    // Verify Image image-01, 768
    await expect(testimonial_loc.locator("img")).toHaveAttribute("src", /image-00-768x768\.png/);
    // Verify Username "First User 241010"
    await expect(page.getByText("First User 241010")).toBeVisible();
    // Verify Company Name "prefEssential Addons Demosuff	"
    await expect(page.getByText("prefEssential Addons Demosuff")).toBeVisible();
    // Verify description "This is the first testimonial description. 241010."
    await expect(page.getByText("This is the first testimonial description. 241010.")).toBeVisible();
    // Description height 181px
    await expect(testimonial_loc.locator(".eael-testimonial-content")).toHaveCSS("height", "181px");
    // verify rating is displayed, yes
    await expect(testimonial_loc.locator(".testimonial-star-rating")).toBeVisible();
    await expect(testimonial_loc.locator(".testimonial-star-rating").locator("li")).toHaveCount(5);
  });
});
