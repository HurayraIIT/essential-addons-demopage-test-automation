"use strict";
import { test, expect } from "../global-setup";

let slug = "/interactive-circle";
let heading = "Interactive Circle";

test.describe("Interactive Circle", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/interactive-circle/);
    });

    test("Test Section: Choose From Multiple Different Style Layouts", async ({ page }) => {
        await page.getByRole("heading", { name: "Choose From Multiple Different Style Layouts" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Choose From Multiple Different Style Layouts" })).toBeVisible();
        await expect(page.getByText("Beautifully present your content in an attractive ")).toBeVisible();
    });
});
