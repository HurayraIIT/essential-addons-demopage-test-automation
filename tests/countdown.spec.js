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
    });
});
