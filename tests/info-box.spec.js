"use strict";

import { test, expect } from "../global-setup";

let slug = "https://essential-addons.com/elementor/info-box";
let heading = "Info Box";

test.describe("Info Box", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/info-box/);
  });

  test("Test Section: Style Up Info Box With Animation", async ({ page }) => {
    await page.getByRole("heading", { name: "Style Up Info Box With" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Style Up Info Box With" })).toBeVisible();
    await expect(page.getByText("Display key information with Info Box type by adding")).toBeVisible();

    // all widgets
    let widget_1 = page.getByTestId("4a6778b1").locator(".eael-infobox");
    let widget_1_icon = widget_1.locator(".fas.fa-exchange-alt");
    let widget_1_content = widget_1.getByText("Development");

    let widget_2 = page.getByTestId("7d0afc").locator(".eael-infobox");
    let widget_2_icon = widget_2.locator(".fas.fa-mobile-alt");
    let widget_2_content = widget_2.getByText("Applications");

    let widget_3 = page.getByTestId("166889de").locator(".eael-infobox");
    let widget_3_icon = widget_3.locator(".far.fa-lightbulb");
    let widget_3_content = widget_3.getByText("Productions");

    let widget_4 = page.getByTestId("545ae8f3").locator(".eael-infobox");
    let widget_4_icon = widget_4.locator(".far.fa-edit");
    let widget_4_content = widget_4.getByText("Web Designing");

    // Verify widget_1 content and style
    await expect(widget_1).toBeVisible();
    await expect(widget_1_icon).toBeVisible();
    await expect(widget_1_icon).toHaveCSS("margin-top", "40px");
    await expect(widget_1_icon).toHaveCSS("font-size", "40px");
    await expect(widget_1_icon).toHaveCSS("line-height", "40px");
    await expect(widget_1_icon).toHaveCSS("font-weight", "900");
    await expect(widget_1_icon).toHaveCSS("text-align", "center");
    await expect(widget_1_icon).toHaveCSS("text-align", "center");
    await expect(widget_1_icon).toHaveCSS("color", "rgb(255, 255, 255)");
    await expect(widget_1_icon).toHaveCSS("transition-duration", "0.3s");

    await expect(widget_1_content).toBeVisible();
    await expect(widget_1_content).toHaveCSS("color", "rgb(255, 255, 255)");
    await expect(widget_1_content).toHaveCSS("font-size", "24px");
    await expect(widget_1_content).toHaveCSS("font-weight", "600");
    await expect(widget_1_content).toHaveCSS("text-align", "center");
    await expect(widget_1_content).toHaveCSS("line-height", "24px");
    await expect(widget_1_content).toHaveCSS("margin", "18px 0px");

    // Verify widget_2 content and style
    await expect(widget_2).toBeVisible();
    await expect(widget_2_icon).toBeVisible();
    await expect(widget_2_content).toBeVisible();

    // Verify widget_3 content and style
    await expect(widget_3).toBeVisible();
    await expect(widget_3_icon).toBeVisible();
    await expect(widget_3_content).toBeVisible();

    // Verify widget_4 content and style
    await expect(widget_4).toBeVisible();
    await expect(widget_4_icon).toBeVisible();
    await expect(widget_4_content).toBeVisible();
  });
});
