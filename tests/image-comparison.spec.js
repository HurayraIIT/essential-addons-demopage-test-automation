"use strict";
import { test, expect } from "../global-setup";

let slug = "/image-comparison";
let heading = "Image Comparison";

test.describe("Image Comparison", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/image-comparison/);
    });

    test("Test Section: Create Perfect Product Comparison", async ({ page }) => {
        await page.getByRole("heading", { name: "Create Perfect Product Comparison" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Create Perfect Product Comparison" })).toBeVisible();
        await expect(page.getByText("Instantly upload preferred  ")).toBeVisible();
    });
});
