"use strict";

import { test, expect } from "../global-setup";

let slug = "https://essential-addons.com/elementor/countdown";
let heading = "Countdown";

test.describe("Countdown", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect
      .soft(page.getByRole("link", { name: "Documentation" }))
      .toHaveAttribute("href", /docs\/creative-elements\/ea-countdown/);
  });

  test("Test Section: Showcase Stunning Countdown Effects", async ({ page }) => {
    await page.getByRole("heading", { name: "Showcase Stunning Countdown Effects" }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: "Showcase Stunning Countdown Effects" })).toBeVisible();
    await expect.soft(page.getByText("Build and design")).toBeVisible();

    await expect.soft(page.locator(".eael-countdown-days").first()).toBeVisible();
    await expect.soft(page.locator(".eael-countdown-digits").first()).toBeVisible();
    await expect.soft(page.locator(".eael-countdown-label").first()).toBeVisible();

    const cssChecket = page.locator(".eael-countdown-days").first();
    await expect.soft(cssChecket).toHaveCSS("text-align", "center");
    // await expect.soft(cssChecket).toHaveCSS('background', '#fff');
    await expect.soft(cssChecket).toHaveCSS("margin-right", "15px");
    await expect.soft(cssChecket).toHaveCSS("margin-left", "15px");
    await expect.soft(cssChecket).toHaveCSS("border-style", "solid");
    await expect.soft(cssChecket).toHaveCSS("border-width", "1px");
    await expect.soft(cssChecket).toHaveCSS("border-color", "rgba(168, 160, 245, 0.4)");
    await expect.soft(cssChecket).toHaveCSS("border-radius", "5px");
    await expect.soft(cssChecket).toHaveCSS("box-shadow", "rgba(14, 22, 116, 0.17) 8px 23px 22px 0px");

    await expect.soft(page.locator(".eael-countdown-days").first()).toBeVisible();
    await expect.soft(page.locator("li:nth-child(2) > .eael-countdown-hours").first()).toBeVisible();
    await expect.soft(page.locator("li:nth-child(3) > .eael-countdown-minutes").first()).toBeVisible();
    await expect.soft(page.locator("li:nth-child(4) > .eael-countdown-seconds").first()).toBeVisible();
    await expect.soft(page.locator(".eael-countdown-days > .eael-countdown-digits").first()).toBeVisible();
    await expect.soft(page.locator(".eael-countdown-days > .eael-countdown-label").first()).toBeVisible();
    await expect
      .soft(page.locator("li:nth-child(2) > .eael-countdown-hours > .eael-countdown-digits").first())
      .toBeVisible();
    await expect
      .soft(page.locator("li:nth-child(2) > .eael-countdown-hours > .eael-countdown-label").first())
      .toBeVisible();
    await expect
      .soft(page.locator("li:nth-child(3) > .eael-countdown-minutes > .eael-countdown-digits").first())
      .toBeVisible();
    await expect
      .soft(page.locator("li:nth-child(3) > .eael-countdown-minutes > .eael-countdown-label").first())
      .toBeVisible();
    await expect
      .soft(page.locator("li:nth-child(4) > .eael-countdown-seconds > .eael-countdown-digits").first())
      .toBeVisible();
    await expect
      .soft(page.locator("li:nth-child(4) > .eael-countdown-seconds > .eael-countdown-label").first())
      .toBeVisible();
  });
});
