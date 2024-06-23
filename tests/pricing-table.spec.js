"use strict";
import { test, expect } from "../global-setup";

let slug = "/pricing-table";
let heading = "Pricing Table";

test.describe("Pricing Table", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/pricing-table/);
    });

    test("Test Section: Pricing Table Style 01", async ({ page }) => {
        await page.getByRole("heading", {
            name: "Pricing Table Style 01"
        }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Pricing Table Style 01" })).toBeVisible();
        await expect(page.getByText("Display product pricing table using default style")).toBeVisible();
    });
});
