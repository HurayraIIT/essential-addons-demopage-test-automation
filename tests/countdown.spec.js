"use strict";
import { test, expect } from "../global-setup";

let slug = "/countdown";
let heading = "Countdown";

test.describe("Countdown", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/creative-elements\/ea-countdown/);
    });

    test("Test Section: Showcase Stunning Countdown Effects", async ({ page }) => {
        await page.getByRole("heading", { name: "Showcase Stunning Countdown Effects" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Showcase Stunning Countdown Effects" })).toBeVisible();
        await expect(page.getByText("Build and design")).toBeVisible();

        await expect(page.locator('.eael-countdown-days').first()).toBeVisible();
        await expect(page.locator('.eael-countdown-digits').first()).toBeVisible();
        await expect(page.locator('.eael-countdown-label').first()).toBeVisible();

        const cssChecket = page.locator('.eael-countdown-days').first();
        await expect(cssChecket).toHaveCSS('text-align', 'center');
        // await expect(cssChecket).toHaveCSS('background', '#fff');
        await expect(cssChecket).toHaveCSS('margin-right', '15px');
        await expect(cssChecket).toHaveCSS('margin-left', '15px');
        await expect(cssChecket).toHaveCSS('border-style', 'solid');
        await expect(cssChecket).toHaveCSS('border-width', '1px');
        await expect(cssChecket).toHaveCSS('border-color', 'rgba(168, 160, 245, 0.4)');
        await expect(cssChecket).toHaveCSS('border-radius', '5px');
        await expect(cssChecket).toHaveCSS('box-shadow', 'rgba(14, 22, 116, 0.17) 8px 23px 22px 0px');
    });
});
