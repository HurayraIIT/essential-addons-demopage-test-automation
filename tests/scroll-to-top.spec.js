"use strict";

import { test, expect } from "../global-setup";

let slug = "https://essential-addons.com/elementor/scroll-to-top";
let heading = "Scroll to Top";

test.describe("Scroll to Top", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/scroll-to-top/);
  });

  test("Scroll Should Work", async ({ page }) => {
    // Scroll to the bottom and the page heading should not be visible
    await page.getByTestId("2e40b17b").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    await expect.soft(page.getByTestId("eabd496")).not.toBeInViewport();

    // Click the scroll to tob button
    await page.locator(".eael-ext-scroll-to-top-button > .fa-chevron-up").click();
    await page.waitForTimeout(500);

    // Now the page heading should be visible
    await expect.soft(page.getByTestId("eabd496")).toBeInViewport();
  });

  test("Button Style Should Be Correct", async ({ page }) => {
    // Scroll to the bottom and verify the style
    await page.getByTestId("2e40b17b").scrollIntoViewIfNeeded();
    let button = page.locator(".eael-ext-scroll-to-top-button");

    await expect.soft(button).toHaveCSS("color", "rgb(77, 77, 77)");
    await expect.soft(button).toHaveCSS("background-color", "rgb(125, 13, 213)");
    await expect.soft(button).toHaveCSS("align-items", "center");
    await expect.soft(button).toHaveCSS("border-radius", "10px");
    await expect.soft(button).toHaveCSS("bottom", "96px");
    await expect.soft(button).toHaveCSS("box-sizing", "border-box");
    await expect.soft(button).toHaveCSS("font-size", "16px");
    await expect.soft(button).toHaveCSS("height", "50px");
    await expect.soft(button).toHaveCSS("width", "50px");
    await expect.soft(button).toHaveCSS("right", "29px");
  });
});
