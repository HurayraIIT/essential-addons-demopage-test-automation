"use strict";
import { test, expect } from "../global-setup";

let slug = "/interactive-promo";
let heading = "Interactive Promo";

test.describe("Interactive Promo", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/interactive-promo/);
    });

    test("Test Section: Promote Interactive Content", async ({ page }) => {
        await page.getByRole("heading", { name: "Promote Interactive Content" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Promote Interactive Content" })).toBeVisible();
        await expect(page.getByText("Add attractive heading, inner ")).toBeVisible();
    });
});
