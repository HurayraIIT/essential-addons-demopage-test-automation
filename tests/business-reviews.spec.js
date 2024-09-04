"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/business-reviews";
let heading = "Business Reviews";

test.describe("Business Reviews", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    // await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/ea-business-reviews/
    );
  });

  test("Test Section: Show Your Business Reviews With Preset 1", async ({ page }) => {
    await page.getByText("Show Your Business Reviews With Preset 1").scrollIntoViewIfNeeded();
    await expect(page.getByText("Show Your Business Reviews With Preset 1")).toBeVisible();

    const widget = page.locator(".elementor-element-12b4222e");
    await expect(widget).toHaveAttribute(
      "data-settings",
      '{"eael_business_reviews_column_tablet":"2","eael_business_reviews_column_mobile":"1","eael_business_reviews_column":"3"}'
    );

    const widget_section = widget.locator(
      ".elementor-widget-container > .eael-business-reviews-12b4222e > .preset-1 > #eael-google-reviews-12b4222e > .eael-google-reviews-items > .swiper-container-12b4222e"
    );
    await expect(widget_section).toHaveAttribute("data-pagination", ".swiper-pagination-12b4222e");
    await expect(widget_section).toHaveAttribute("data-arrow-next", ".swiper-button-next-12b4222e");
    await expect(widget_section).toHaveAttribute("data-arrow-prev", ".swiper-button-prev-12b4222e");
    await expect(widget_section).toHaveAttribute("data-effect", "slide");
    await expect(widget_section).toHaveAttribute("data-items", "3");
    await expect(widget_section).toHaveAttribute("data-items_tablet", "2");
    await expect(widget_section).toHaveAttribute("data-items_mobile", "1");
    await expect(widget_section).toHaveAttribute("data-item_gap", "30");
    await expect(widget_section).toHaveAttribute("data-loop", "1");
    await expect(widget_section).toHaveAttribute("data-autoplay", "1");
    await expect(widget_section).toHaveAttribute("data-autoplay_delay", "3000");
    await expect(widget_section).toHaveAttribute("data-pause_on_hover", "1");
    await expect(widget_section).toHaveAttribute("data-grab_cursor", "1");
    await expect(widget_section).toHaveAttribute("data-speed", "1000");

    await expect(widget.locator(".eael-google-reviews-business-logo")).toBeVisible();
    await expect(widget.locator(".eael-google-reviews-business-logo > svg")).toBeVisible();
    await expect(widget.getByRole("link", { name: "Show Your Business Reviews" })).toBeVisible();
    await expect(widget.locator("#eael-google-reviews-12b4222e").getByText("4.2")).toBeVisible();
    await expect(widget.locator(".swiper-pagination")).toBeVisible();
    await expect(widget.locator("#eael-google-reviews-12b4222e").getByLabel("Go to slide 1")).toBeVisible();
    await expect(widget.locator("#eael-google-reviews-12b4222e").getByLabel("Go to slide 2")).toBeVisible();
    await expect(widget.locator("#eael-google-reviews-12b4222e").getByLabel("Go to slide 3")).toBeVisible();
    await expect(widget.locator("#eael-google-reviews-12b4222e").getByLabel("Go to slide 4")).toBeVisible();
    await expect(widget.locator("#eael-google-reviews-12b4222e").getByLabel("Go to slide 5")).toBeVisible();
  });
});

// Not suitable for structure tests
