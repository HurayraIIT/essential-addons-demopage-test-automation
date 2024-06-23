"use strict";
import { test, expect } from "../global-setup";

let slug = "/image-hotspots";
let heading = "Image Hotspot";

test.describe("Filterable Gallery", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/creative-elements\/image-hotspots/);
    });

    test("Test Section: Make Image Interactive Using Hotspots", async ({ page }) => {
        await page.getByRole("heading", { name: "Make Image Interactive Using Hotspots" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Make Image Interactive Using Hotspots" })).toBeVisible();
        await expect(page.getByText("Put hotspots on the ")).toBeVisible();
    });
});
