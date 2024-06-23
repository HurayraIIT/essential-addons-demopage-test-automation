"use strict";
import { test, expect } from "../global-setup";

let slug = "/divider";
let heading = "Divider";

test.describe("Divider", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/creative-elements\/divider/);
    });

    test("Test Section: Style Divider With Image", async ({ page }) => {
        await page.getByRole("heading", { name: "Style Divider With Image" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Style Divider With Image" })).toBeVisible();
        await expect(page.getByText("Style divider element   ")).toBeVisible();
    });
});
