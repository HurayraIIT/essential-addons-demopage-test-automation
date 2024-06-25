"use strict";
import { test, expect } from "../global-setup";

let slug = "/price-menu";
let heading = "Price Menu";

test.describe("Price Menu", () => {
    // Page Heading
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/marketing-elements\/price-menu/);
    });
    // Preset 1
    test("Test Section: Showcase Price Menu in Stylish Way", async ({ page }) => {
        await page.getByRole("heading", { name: "Showcase Price Menu in Stylish Way" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Showcase Price Menu in Stylish Way" })).toBeVisible();
        await expect(page.getByText("Get ready to design stunning Price Menu within a few mintues")).toBeVisible();
    });
});
