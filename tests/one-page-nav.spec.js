"use strict";
import { test, expect } from "../global-setup";

let slug = "/one-page-nav";
let heading = "One Page Navigation";

test.describe("One Page Navigation", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/creative-elements\/one-page-navigation/);
    });

    test("Test Section: Create One Page Navigation", async ({ page }) => {
        await page.getByRole("heading", { name: "Create One Page Navigation" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Create One Page Navigation" })).toBeVisible();
        await expect(page.getByText("Help your visitors navigate ")).toBeVisible();
    });
});
