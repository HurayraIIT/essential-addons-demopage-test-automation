"use strict";

import exp from "constants";
import { test, expect } from "../global-setup";

let slug = "marketing-elements/call-to-action";
let heading = "Call To Action";

test.describe("Call To Action", () => {
  let basicPreset1ID = "#basic-preset1";
  let basicPreset1Locator = null;
  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    basicPreset1Locator = page.locator(basicPreset1ID);
  });

  // Basic Preset 1
  test("Content Style: Basic | Content Preset: Preset 1", async ({ page }) => {
    await expect.soft(page.getByText("Content Style: Basic | Content Preset: Preset 1")).toBeVisible();
    await expect(basicPreset1Locator).toBeVisible();
    await expect(basicPreset1Locator).toHaveClass(/elementor-widget-eael-cta-box/);
    // Sub Title
    await expect(basicPreset1Locator.locator(".sub-title")).toHaveCSS("font-size", "19px");
    // Title
    await expect(basicPreset1Locator.locator(".title")).toHaveCSS("font-size", "37px");
    await expect(basicPreset1Locator.locator(".title")).toHaveCSS("font-weight", "700");
    await expect(basicPreset1Locator.locator(".title")).toHaveCSS("color", "rgb(114, 28, 233)");
    await expect(basicPreset1Locator.locator(".title")).toHaveCSS("font-family", "Poppins, sans-serif");
    // Content
    await expect(basicPreset1Locator.getByText("Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements")).toBeVisible();
    await expect(basicPreset1Locator.getByText("Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements")).toHaveCSS("font-family", "\"Open Sans\", sans-serif");
    await expect(basicPreset1Locator.getByText("Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements")).toHaveCSS("color", "rgb(0, 0, 0)");
    // Button
    await expect(basicPreset1Locator.getByRole("link", {name: /Explore More/})).toBeVisible();
    await expect(basicPreset1Locator.getByRole("link", {name: /Explore More/})).toBeEnabled();
    // await expect(basicPreset1Locator.getByRole("link", {name: /Explore More/})).toHaveURL("https://eael.site");
    await expect(basicPreset1Locator.getByRole("link", {name: /Explore More/})).toHaveClass("cta-button  effect-2");
    await expect(basicPreset1Locator.getByRole("link", {name: /Explore More/})).toHaveCSS("box-shadow", "rgba(27, 33, 45, 0.72) 4px 4px 0px 0px");
    await expect(basicPreset1Locator.getByRole("link", {name: /Explore More/})).toHaveCSS("font-size", "19px");
    await expect(basicPreset1Locator.getByRole("link", {name: /Explore More/})).toHaveCSS("font-family", "Poppins, sans-serif");
  });
});
