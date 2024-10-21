"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/offcanvas/";
let heading = "Offcanvas Heading 241021 Automation";

test.describe("Offcanvas https://qa1.site/go/q7i345", () => {
  let offcanvasContainer = null;
  let offcanvasContent = null;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    offcanvasContainer = page.locator(".elementor-element-9d29aae.elementor-widget-eael-offcanvas");
    offcanvasContent = page.locator(".eael-offcanvas-content-9d29aae");
  });

  test("Test Content Tab", async ({ page }) => {
    await expect(offcanvasContainer).toHaveAttribute(
      "data-settings",
      '{"direction":"right","content_transition":"slide"}'
    );
    await expect(offcanvasContainer.locator("div.eael-offcanvas-content-wrap")).toHaveAttribute(
      "data-settings",
      '{"content_id":"9d29aae","direction":"right","transition":"slide","esc_close":"yes","body_click_close":"yes","open_offcanvas":"no"}'
    );
    await expect(offcanvasContainer.locator("svg")).toHaveClass(
      "eael-offcanvas-toggle-icon e-font-icon-svg e-far-hand-point-right"
    );
    await expect(page.getByText("Click here 241021")).toBeVisible();

    // Sidebar Content Should not be visible initially
    await expect(page.getByText("OC title 241021")).not.toBeVisible();
    await expect(page.getByText("Box 1 241021")).not.toBeVisible();
    await expect(page.getByText("Text box 1 description goes here 241021")).not.toBeVisible();
    await expect(page.getByText("Box 2 241021")).not.toBeVisible();
    await expect(page.getByText("Text box 2 description goes here 241021")).not.toBeVisible();
    await expect(page.locator("div.eael-offcanvas-close-9d29aae svg")).not.toBeVisible();

    // Toggle the offcanvas
    await page.getByText("Click here 241021").click();
    await page.waitForTimeout(200);

    // Sidebar content should be visible now
    await expect(page.getByText("OC title 241021")).toBeVisible();
    await expect(page.getByText("Box 1 241021")).toBeVisible();
    await expect(page.getByText("Text box 1 description goes here 241021")).toBeVisible();
    await expect(page.getByText("Box 2 241021")).toBeVisible();
    await expect(page.getByText("Text box 2 description goes here 241021")).toBeVisible();
    await expect(page.locator("div.eael-offcanvas-close-9d29aae svg")).toBeVisible();

    // Close button should work and close the offcanvas
    await page.locator("div.eael-offcanvas-close-9d29aae svg").click();
    await page.waitForTimeout(200);

    // Sidebar content should be hidden again
    await expect(page.getByText("OC title 241021")).not.toBeVisible();
    await expect(page.getByText("Box 1 241021")).not.toBeVisible();
    await expect(page.getByText("Box 2 241021")).not.toBeVisible();
    await expect(page.locator("div.eael-offcanvas-close-9d29aae svg")).not.toBeVisible();

    // Reopen the offcanvas
    await page.getByText("Click here 241021").click();
    await page.waitForTimeout(200);
    await expect(page.getByText("OC title 241021")).toBeVisible();
    await expect(page.getByText("Box 1 241021")).toBeVisible();

    // Esc button should work and close the offcanvas
    await page.keyboard.press("Escape");
    await page.waitForTimeout(200);

    // Sidebar content should be hidden again
    await expect(page.getByText("OC title 241021")).not.toBeVisible();
    await expect(page.getByText("Box 1 241021")).not.toBeVisible();
    await expect(page.getByText("Box 2 241021")).not.toBeVisible();
    await expect(page.locator("div.eael-offcanvas-close-9d29aae svg")).not.toBeVisible();

    // Reopen the offcanvas
    await page.getByText("Click here 241021").click();
    await page.waitForTimeout(200);
    await expect(page.getByText("OC title 241021")).toBeVisible();
    await expect(page.getByText("Box 1 241021")).toBeVisible();

    // Clicking anywhere outside the offcanvas should close it
    await page.getByRole("heading", { name: heading, exact: true }).click();
    await page.waitForTimeout(200);

    // Sidebar content should be hidden again
    await expect(page.getByText("OC title 241021")).not.toBeVisible();
    await expect(page.getByText("Box 1 241021")).not.toBeVisible();
    await expect(page.getByText("Box 2 241021")).not.toBeVisible();
    await expect(page.locator("div.eael-offcanvas-close-9d29aae svg")).not.toBeVisible();
  });

  test("Test Style Tab > Offcanvas bar", async ({ page }) => {
    // width 301
    await expect(offcanvasContent).toHaveCSS("width", "301px");
    // background red
    await expect(offcanvasContent).toHaveCSS("background-color", "rgb(255, 0, 0)");
    // border solid
    await expect(offcanvasContent).toHaveCSS("border-style", "solid");
    // border width 1px
    await expect(offcanvasContent).toHaveCSS("border-width", "1px");
    // border color green
    await expect(offcanvasContent).toHaveCSS("border-color", "rgb(0, 255, 0)");
    // border radius 2px
    await expect(offcanvasContent).toHaveCSS("border-radius", "2px");
    // padding 3px
    await expect(offcanvasContent.locator("div.eael-offcanvas-body")).toHaveCSS("padding", "3px");
    // box shadow rgba(0, 0, 0, 0.5) 1px 1px 11px 1px
    await expect(offcanvasContent).toHaveCSS("box-shadow", "rgba(0, 0, 0, 0.5) 1px 1px 11px 1px");
  });

  test("Test Style Tab > Content", async ({ page }) => {
    // alignment center
    // box background color blue
    // border type double
    // border width 2px
    // border color yellow
    // border radius 10px
    // bottom spacing 21px
    // padding 6px
    // Text color white
    
  });
});
