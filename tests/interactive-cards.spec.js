"use strict";
import { test, expect } from "../global-setup";

let slug = "/interactive-cards";
let heading = "Interactive Cards";

test.describe("Interactive Cards", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/interactive-cards/);
    });

    test("Test Section: Limitless Flexible Design", async ({ page }) => {
        await page.getByRole("heading", { name: "Limitless Flexible Design" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Limitless Flexible Design" })).toBeVisible();
        await expect(page.getByText("Take your Elementor web design")).toBeVisible();
    });
});
