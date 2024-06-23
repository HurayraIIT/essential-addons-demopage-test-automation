"use strict";
import { test, expect } from "../global-setup";

let slug = "/fancy-text";
let heading = "Fancy Text";

test.describe("Fancy Test", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/fancy-text/);
    });

    test("Test Section: Fancy Text Style 01", async ({ page }) => {
        await page.getByRole("heading", { name: "Fancy Text Style 01" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Fancy Text Style 01" })).toBeVisible();
        await expect(page.getByText("Set your Prefix ")).toBeVisible();
    });
});
