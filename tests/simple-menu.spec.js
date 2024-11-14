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

    // Preset 1 
    test("Style Default Skin & Horizontal Layout | Preset 1", async ({ page }) => {
        presetID = page.locator('#simpleMenu1');
        // Ensure the basic preset menu is visible
        await expect.soft(presetID).toBeVisible();
        await expect.soft(presetID).toHaveClass(/elementor-widget-eael-simple-menu/);

        // Validate speacific css applyed or not
        const preset1Element = presetID.locator('.preset-1');
        await expect.soft(preset1Element).toHaveCSS('background-color', 'rgb(207, 13, 13)');
        await expect.soft(preset1Element).toHaveCSS('border', '1px solid rgb(0, 255, 52)');

        // Validate the menu is visible
        const menuLocator = presetID.locator("#menu-header-menu");
        await expect(menuLocator).toBeVisible(); 

        // Validate specific links in the menu
        await expect.soft(menuLocator.getByRole("link", { name: "Home" })).toBeVisible();
        await expect.soft(menuLocator.getByRole("link", { name: "Demos" })).toBeVisible();
        
        //Validate speacific css applyed or not
        await expect.soft(menuLocator.getByRole('link',{name:'Home'})).toHaveCSS('font-family','Risque, sans-serif');
        await expect.soft(menuLocator.getByRole('link',{name:'Home'})).toHaveCSS('font-size','18px');
        await expect.soft(menuLocator.getByRole('link',{name:'Home'})).toHaveCSS('font-weight','700');
        await expect.soft(menuLocator.getByRole('link',{name:'Home'})).toHaveCSS('color','rgb(255, 255, 255)');
    });

    // Preset 2
    test("Style Default Skin & Horizontal Layout | Preset 2", async ({ page }) => {
        presetID = page.locator('#simpleMenu2');
        // Ensure the basic preset menu is visible
        await expect.soft(presetID).toBeVisible();
        await expect.soft(presetID).toHaveClass(/elementor-widget-eael-simple-menu/);

        // Validate speacific css applyed or not
        const preset1Element = presetID.locator('.preset-2');
        await expect.soft(preset1Element).toHaveCSS('background-color', 'rgb(0, 0, 0)');
        await expect.soft(preset1Element).toHaveCSS('border', '2px solid rgb(247, 8, 8)');

        // Validate the menu is visible
        const menuLocator = presetID.locator("#menu-header-menu-1");
        await expect(menuLocator).toBeVisible(); 

        // Validate specific links in the menu
        await expect.soft(menuLocator.getByRole("link", { name: "Home" })).toBeVisible();
        await expect.soft(menuLocator.getByRole("link", { name: "All Items" })).toBeVisible();
        
        //Validate speacific css applyed or not
        await expect.soft(menuLocator.getByRole('link',{name:'Home'})).toHaveCSS('font-family','Rye, sans-serif');
        await expect.soft(menuLocator.getByRole('link',{name:'Demos'})).toHaveCSS('font-size','18px');
        await expect.soft(menuLocator.getByRole('link',{name:'Home'})).toHaveCSS('font-weight','600');
        await expect.soft(menuLocator.getByRole('link',{name:'Docs'})).toHaveCSS('color','rgb(255, 251, 251)');
    });
});