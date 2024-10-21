"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/tooltip/";
let heading = "Tooltip Heading 241020 Automation";

test.describe("Tooltip https://qa1.site/go/u3m9108", () => {
  let icon_tooltip = null;
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    icon_tooltip = page.locator(".elementor-element-a2ba82c div.eael-tooltip");
  });

  test("Test Content Tab", async ({ page }) => {
    // Icon should be present, icon type is face and size is 51px
    await expect(icon_tooltip.locator("svg")).toHaveClass("e-font-icon-svg e-fas-meh");
    await expect(icon_tooltip.locator("svg")).toHaveCSS("width", "51px");
    await expect(icon_tooltip.locator("svg")).toHaveCSS("height", "51px");
    await expect(icon_tooltip.locator("svg")).toHaveCSS("line-height", "51px");
    // alignment is left
    await expect(icon_tooltip).toHaveCSS("text-align", "left");
    // link is enabled and is https://eael.site/click-me/
    await expect(icon_tooltip.getByRole("link")).toHaveAttribute("href", /.*click-me/);
    // Tooltip content is "First Tooltip content 241020"
    await icon_tooltip.getByRole("link").hover();
    await expect(icon_tooltip.getByRole("tooltip", { name: "First Tooltip content 241020" })).toBeVisible();
    // Hover direction is right
    await expect(icon_tooltip.getByRole("tooltip", { name: "First Tooltip content 241020" })).toHaveClass(
      /eael-tooltip-right/
    );
    // Hover speed is 251
  });

  test("Test Style Tab > Content Style", async ({ page }) => {
    //
  });

  test("Test Style Tab > Tooltip Style", async ({ page }) => {
    //
  });
});
