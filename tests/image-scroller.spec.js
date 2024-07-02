"use strict";
import { test, expect } from "../global-setup";

let slug = "/image-scroller";
let heading = "Image Scroller";

test.describe("Image Scroller", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/creative-elements\/ea-image-scroller/);
    });

    test("Test Section: Vertical Scrolling Effect On Hover", async ({ page }) => {
        await page.getByRole("heading", { name: "Vertical Scrolling Effect On Hover" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Vertical Scrolling Effect On Hover" })).toBeVisible();
        await expect(page.getByText("Turn on the Auto Scroller, Choose ")).toBeVisible();


        await page.getByRole('img', { name: 'Image Scroller 102' }).hover();
        await expect(page.getByTestId('2e4d89f1').locator('//html/body/div[3]/div[1]/div/div/div/main/article/div/div/section[2]/div/div/div/section/div/div[2]/div/div/div/div/img')).toHaveCSS('transform', 'translateY(-133.75px)')


    });
});
