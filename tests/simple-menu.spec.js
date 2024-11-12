"use strict";
import { test, expect } from "../global-setup";
let slug = "/content-elements/simple-menu/";
let heading = "Simple Menu";
test.describe("Simple Menu", () => {
    let presetID = null;
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await page.waitForLoadState("networkidle");
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    });
    test("Style Default Skin & Horizontal Layout | Preset 1", async ({ page }) => {
        presetID = page.locator('#simpleMenu1');
        // Ensure the basic preset menu is visible
        await expect.soft(presetID).toBeVisible();
        await expect.soft(presetID).toHaveClass(/elementor-widget-eael-simple-menu/);
        // Validate menu items and their roles
        const menuLocator = presetID.locator("#menu-header-menu");
        await expect(menuLocator).toBeVisible(); // Validate the menu is visible
        // Validate specific links in the menu
        await expect.soft(menuLocator.getByRole("link", { name: "Home" })).toBeVisible();
        await expect.soft(menuLocator.getByRole("link", { name: "Demos" })).toBeVisible();
        //Validate speacific css applyed or not
        await expect.soft(menuLocator.getByRole('link',{name:'Home'})).toHaveCSS('font-family','Risque, sans-serif');
        await expect.soft(menuLocator.getByRole('link',{name:'Home'})).toHaveCSS('font-size','18px');
        await expect.soft(menuLocator.getByRole('link',{name:'Home'})).toHaveCSS('font-weight','700');
        await expect.soft(menuLocator.getByRole('link',{name:'Home'})).toHaveCSS('color','rgb(255, 255, 255)');
    });
});