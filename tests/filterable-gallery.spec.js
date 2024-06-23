"use strict";
import { test, expect } from "../global-setup";

let slug = "/filterable-gallery";
let heading = "Filterable Gallery";

test.describe("Filterable Gallery", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/filterable-gallery/);
    });

    test("Test Section: Filter Images With Gallery Layout", async ({ page }) => {
        await page.getByRole("heading", { name: "Filter Images With Gallery Layout" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Filter Images With Gallery Layout" })).toBeVisible();
        await expect(page.getByText("Display images with separate  ")).toBeVisible();
    });
});
