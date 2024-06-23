"use strict";
import { test, expect } from "../global-setup";

let slug = "/call-to-action";
let heading = "Call To Action";

test.describe("Call To Action", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/call-to-action/);
    });

    test("Test Section: Essential Addons for Elementor", async ({ page }) => {
        await page.getByTestId("135ccd26").getByRole("heading", { name: "Essential Addons for Elementor" }).scrollIntoViewIfNeeded();
        await expect(page.getByTestId("c17a59b").getByText("Enhance your Elementor page building")).toBeVisible();
        // await expect(page.getByText("Spotlight on organizational achievements, goals")).toBeVisible();
    });
});
