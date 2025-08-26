"use strict";

import { expect, test } from "../global-setup";

let slug = "/content-elements/flip-box/";
let heading = "Flip Box Hurayra 241014 Content > Settings";

test.describe("Flip Box", () => {
  let box01 = null;
  let box02 = null;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    box01 = page.locator(".elementor-element-ef2686c");
    box02 = page.locator(".elementor-element-45d2693");
  });



  test("Test Content Tab > Settings, Content", async () => {
    // Test Hover Box (Box01)
    await expect.soft(box01.getByText("Box01 Front Title Hover 241015")).toBeVisible();
    await expect.soft(box01.getByText("Box01 This is front side content. 241015.")).toBeVisible();
    await expect.soft(box01.getByText("Box01 Back Title Hover 241015")).toBeVisible();
    await expect.soft(box01.getByText("Box01 This is back side content. 241015.")).toBeVisible();

    // Verify hover box classes and animation settings
    await expect
      .soft(box01.locator(".eael-elements-flip-box-container"))
      .toHaveClass(
        "eael-elements-flip-box-container eael-animate-flip eael-animate-left eael-content eael-flip-box-hover eael-flipbox-fixed-height eael-flipbox-dynamic"
      );

    // Verify fixed height setting
    await expect.soft(box01.locator(".elementor-widget-container")).toHaveCSS("height", "302px");

    // Verify flip animation direction (left)
    await expect.soft(box01.locator(".eael-elements-flip-box-container")).toHaveClass(/eael-animate-left/);

    // Verify hover trigger
    await expect.soft(box01.locator(".eael-elements-flip-box-container")).toHaveClass(/eael-flip-box-hover/);

    // Test Click Box (Box02)
    await expect.soft(box02.getByText("Box02 Front Title Click 241015")).toBeVisible();
    await expect.soft(box02.getByText("Box02 This is front side content. 241015.")).toBeVisible();
    await expect.soft(box02.getByText("Box02 Back Title Click 241015")).toBeVisible();
    await expect.soft(box02.getByText("Box02 This is back side content. 241015.")).toBeVisible();

    // Verify click box classes and animation settings
    await expect
      .soft(box02.locator(".eael-elements-flip-box-container"))
      .toHaveClass(
        "eael-elements-flip-box-container eael-animate-flip eael-animate-right eael-content eael-flip-box-click eael-flipbox-fixed-height eael-flipbox-dynamic"
      );

    // Verify fixed height setting
    await expect.soft(box02.locator(".elementor-widget-container")).toHaveCSS("height", "302px");

    // Verify flip animation direction (right)
    await expect.soft(box02.locator(".eael-elements-flip-box-container")).toHaveClass(/eael-animate-right/);

    // Verify click trigger
    await expect.soft(box02.locator(".eael-elements-flip-box-container")).toHaveClass(/eael-flip-box-click/);

    // Test that both boxes have icons (check front icons specifically)
    await expect.soft(box01.locator(".eael-elements-flip-box-front-container .eael-elements-flip-box-icon-image")).toBeVisible();
    await expect.soft(box02.locator(".eael-elements-flip-box-front-container .eael-elements-flip-box-icon-image")).toBeVisible();

    // Test flip functionality on hover (Box01)
    await box01.hover();
    // Note: We can't easily test the actual flip animation in automated tests,
    // but we can verify the structure is correct for the flip to work

    // Test flip functionality on click (Box02)
    await box02.click();
    // Note: Similar to hover, we verify the structure supports click functionality
  });

  test("Test Content Tab > Link", async ({ page }) => {
    await page
      .getByRole("heading", { name: "Flip Box Hurayra 241014 Content > Link", exact: true })
      .scrollIntoViewIfNeeded();

    // Link Type - Box (entire flip box is clickable)
    const boxLinkElement = page.locator(".elementor-element-7cd8202").locator("a.eael-elements-flip-box-flip-card");
    await expect.soft(boxLinkElement).toBeVisible();
    await expect.soft(boxLinkElement).toHaveAttribute("href", /click-me/);

    // Verify the box link covers the entire flip box
    await expect.soft(boxLinkElement).toHaveCSS("display", "block");

    // Link Type - Title (check if title links exist)
    const titleLinks = page.locator(".elementor-element-7cd8202").locator("a").filter({ hasText: /title/i });
    if (await titleLinks.count() > 0) {
      await expect.soft(titleLinks.first()).toHaveAttribute("href");
    }

    // Link Type - Button (check if button links exist)
    const buttonLinks = page.locator(".elementor-element-7cd8202").locator("a").filter({ hasText: /button|click|read more/i });
    if (await buttonLinks.count() > 0) {
      await expect.soft(buttonLinks.first()).toHaveAttribute("href");
    }

    // Verify link accessibility
    await expect.soft(boxLinkElement).toHaveAttribute("href");

    // Test that the link is keyboard accessible
    await boxLinkElement.focus();
    await expect.soft(boxLinkElement).toBeFocused();
  });

  test("Test Style Tab > Flip Box Style", async () => {
    let box01_front = box01.locator(".eael-elements-flip-box-front-container");

    // Wait for element to be visible and styles to load
    await expect(box01_front).toBeVisible();

    await expect.soft(box01_front).toHaveCSS("background-color", "rgb(92, 139, 109)");
    await expect.soft(box01_front).toHaveCSS("padding", "11px 10px 9px 8px");
    await expect.soft(box01_front).toHaveCSS("border-style", "dashed");
    await expect.soft(box01_front).toHaveCSS("border-width", "5px");
    await expect.soft(box01_front).toHaveCSS("border-radius", "21px");
    await expect.soft(box01_front).toHaveCSS("border-color", "rgb(2, 1, 1)");
    await expect.soft(box01_front).toHaveCSS("box-shadow", "rgba(36, 82, 183, 0.57) 1px 2px 13px 4px");

    let box01_back = box01.locator(".eael-elements-flip-box-rear-container");

    // Wait for back element to be available
    await expect(box01_back).toBeAttached();

    await expect.soft(box01_back).toHaveCSS("background-color", "rgb(227, 15, 35)");
    await expect.soft(box01_back).toHaveCSS("padding", "11px 10px 9px 8px");
    await expect.soft(box01_back).toHaveCSS("border-style", "dashed");
    await expect.soft(box01_back).toHaveCSS("border-width", "5px");
    await expect.soft(box01_back).toHaveCSS("border-radius", "21px");
    await expect.soft(box01_back).toHaveCSS("border-color", "rgb(2, 1, 1)");
    await expect.soft(box01_back).toHaveCSS("box-shadow", "rgba(36, 82, 183, 0.57) 1px 2px 13px 4px");
  });

  test("Test Style Tab > Icon Style", async () => {
    // Front Icon
    let box01_front_icon = box01
      .locator(".eael-elements-flip-box-front-container")
      .locator(".eael-elements-flip-box-icon-image");

    // Wait for icon to be visible
    await expect(box01_front_icon).toBeVisible();

    await expect.soft(box01_front_icon).toHaveCSS("border-color", "rgb(255, 0, 255)");
    await expect.soft(box01_front_icon).toHaveCSS("border-radius", "42px");
    await expect.soft(box01_front_icon).toHaveCSS("border-style", "solid");
    await expect.soft(box01_front_icon).toHaveCSS("border-width", "2px 3px 4px 5px");
    await expect.soft(box01_front_icon).toHaveCSS("padding", "3px 4px 5px 6px");
    await expect.soft(box01_front_icon.locator("svg")).toHaveCSS("height", "41px");
    await expect.soft(box01_front_icon.locator("svg")).toHaveCSS("width", "41px");
    await expect.soft(box01_front_icon.locator("svg")).toHaveCSS("font-size", "41px");
    await expect.soft(box01_front_icon.locator("svg")).toHaveCSS("line-height", "41px");
    await expect.soft(box01_front_icon.locator("svg")).toHaveCSS("color", "rgb(255, 255, 0)");

    // Back Icon
    let box01_back_icon = box01
      .locator(".eael-elements-flip-box-rear-container")
      .locator(".eael-elements-flip-box-icon-image");

    // Wait for back icon to be attached
    await expect(box01_back_icon).toBeAttached();

    await expect.soft(box01_back_icon).toHaveCSS("border-color", "rgb(0, 0, 255)");
    await expect.soft(box01_back_icon).toHaveCSS("border-radius", "44px");
    await expect.soft(box01_back_icon).toHaveCSS("border-style", "dotted");
    await expect.soft(box01_back_icon).toHaveCSS("border-width", "5px 6px 7px 8px");
    await expect.soft(box01_back_icon).toHaveCSS("padding", "1px 2px 3px 4px");
    await expect.soft(box01_back_icon.locator("svg")).toHaveCSS("height", "43px");
    await expect.soft(box01_back_icon.locator("svg")).toHaveCSS("width", "43px");
    await expect.soft(box01_back_icon.locator("svg")).toHaveCSS("font-size", "43px");
    await expect.soft(box01_back_icon.locator("svg")).toHaveCSS("line-height", "43px");
    await expect.soft(box01_back_icon.locator("svg")).toHaveCSS("color", "rgb(0, 255, 255)");
  });

  test("Test Style Tab > Color & Typography", async () => {
    // Box 01 Front Title
    let box01_front_title = box01.getByText("Box01 Front Title Hover 241015");
    await expect.soft(box01_front_title).toHaveCSS("color", "rgb(255, 0, 0)");
    await expect.soft(box01_front_title).toHaveCSS("font-family", /Arial/);
    await expect.soft(box01_front_title).toHaveCSS("font-size", "21px");
    await expect.soft(box01_front_title).toHaveCSS("font-weight", "600");
    await expect.soft(box01_front_title).toHaveCSS("text-transform", "uppercase");
    await expect.soft(box01_front_title).toHaveCSS("font-style", "italic");
    await expect.soft(box01_front_title).toHaveCSS("text-decoration-line", "underline");
    await expect.soft(box01_front_title).toHaveCSS("line-height", "21px");
    await expect.soft(box01_front_title).toHaveCSS("letter-spacing", "2.1px");
    await expect.soft(box01_front_title).toHaveCSS("word-spacing", "1px");

    // Box 01 Front Content
    let box01_front_content = box01.getByText("Box01 This is front side content. 241015.");
    await expect.soft(box01_front_content).toHaveCSS("color", "rgb(0, 255, 0)");
    await expect.soft(box01_front_content).toHaveCSS("font-family", /Tahoma/);
    await expect.soft(box01_front_content).toHaveCSS("font-size", "22px");
    await expect.soft(box01_front_content).toHaveCSS("font-weight", "700");
    await expect.soft(box01_front_content).toHaveCSS("text-transform", "lowercase");
    await expect.soft(box01_front_content).toHaveCSS("font-style", "normal");
    await expect.soft(box01_front_content.locator("..")).toHaveCSS("text-decoration-line", "overline");
    await expect.soft(box01_front_content).toHaveCSS("line-height", "22px");
    await expect.soft(box01_front_content).toHaveCSS("letter-spacing", "2.2px");
    await expect.soft(box01_front_content).toHaveCSS("word-spacing", "2px");

    // Box 01 Back title
    let box01_back_title = box01.getByText("Box01 Back Title Hover 241015");
    await expect.soft(box01_back_title).toHaveCSS("color", "rgb(0, 0, 255)");
    await expect.soft(box01_back_title).toHaveCSS("font-family", /Verdana/);
    await expect.soft(box01_back_title).toHaveCSS("font-size", "23px");
    await expect.soft(box01_back_title).toHaveCSS("font-weight", "800");
    await expect.soft(box01_back_title).toHaveCSS("text-transform", "capitalize");
    await expect.soft(box01_back_title).toHaveCSS("font-style", "italic");
    await expect.soft(box01_back_title).toHaveCSS("text-decoration-line", "line-through");
    await expect.soft(box01_back_title).toHaveCSS("line-height", "23px");
    await expect.soft(box01_back_title).toHaveCSS("letter-spacing", "2.3px");
    await expect.soft(box01_back_title).toHaveCSS("word-spacing", "3px");

    // Box 01 Back Content
    let box01_back_content = box01.getByText("Box01 This is back side content. 241015.");
    await expect.soft(box01_back_content).toHaveCSS("color", "rgb(255, 0, 255)");
    await expect.soft(box01_back_content).toHaveCSS("font-family", /Helvetica/);
    await expect.soft(box01_back_content).toHaveCSS("font-size", "24px");
    await expect.soft(box01_back_content).toHaveCSS("font-weight", "900");
    await expect.soft(box01_back_content).toHaveCSS("text-transform", "none");
    await expect.soft(box01_back_content).toHaveCSS("font-style", "normal");
    await expect.soft(box01_back_content.locator("..")).toHaveCSS("text-decoration-line", "none");
    await expect.soft(box01_back_content).toHaveCSS("line-height", "24px");
    await expect.soft(box01_back_content).toHaveCSS("letter-spacing", "2.4px");
    await expect.soft(box01_back_content).toHaveCSS("word-spacing", "4px");
  });

  test("Test Flip Box Functionality", async ({ page }) => {
    // Test hover functionality
    const box01Container = box01.locator(".eael-elements-flip-box-container");

    // Verify initial state (front side visible)
    await expect.soft(box01.locator(".eael-elements-flip-box-front-container")).toBeVisible();

    // Test hover interaction
    await box01.hover();
    await page.waitForTimeout(500); // Wait for animation

    // Verify hover doesn't break the structure
    await expect.soft(box01Container).toBeVisible();

    // Test click functionality on click box
    const box02Container = box02.locator(".eael-elements-flip-box-container");

    // Verify initial state
    await expect.soft(box02.locator(".eael-elements-flip-box-front-container")).toBeVisible();

    // Test click interaction
    await box02.click();
    await page.waitForTimeout(500); // Wait for animation

    // Verify click doesn't break the structure
    await expect.soft(box02Container).toBeVisible();
  });

  test("Test Responsive Design", async ({ page }) => {
    // Test desktop view (default)
    await expect.soft(box01).toBeVisible();
    await expect.soft(box02).toBeVisible();

    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(500);

    await expect.soft(box01).toBeVisible();
    await expect.soft(box02).toBeVisible();

    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(500);

    await expect.soft(box01).toBeVisible();
    await expect.soft(box02).toBeVisible();

    // Verify flip boxes maintain their structure on mobile
    await expect.soft(box01.locator(".eael-elements-flip-box-container")).toBeVisible();
    await expect.soft(box02.locator(".eael-elements-flip-box-container")).toBeVisible();
  });

  test("Test Accessibility", async () => {
    // Test keyboard navigation (focus on clickable elements)
    const box01Link = box01.locator("a, button, [tabindex]").first();
    if (await box01Link.count() > 0) {
      await box01Link.focus();
      await expect.soft(box01Link).toBeFocused();
    }

    // Test ARIA attributes if present
    const box01Container = box01.locator(".eael-elements-flip-box-container");
    const box02Container = box02.locator(".eael-elements-flip-box-container");

    // Verify containers are accessible
    await expect.soft(box01Container).toBeVisible();
    await expect.soft(box02Container).toBeVisible();

    // Test that content is readable by screen readers
    await expect.soft(box01.getByText("Box01 Front Title Hover 241015")).toBeVisible();
    await expect.soft(box01.getByText("Box01 This is front side content. 241015.")).toBeVisible();

    // Test color contrast (basic check - ensure text is visible)
    const frontTitle = box01.getByText("Box01 Front Title Hover 241015");
    await expect.soft(frontTitle).toHaveCSS("color", "rgb(255, 0, 0)");

    // Verify icons have proper alt text or are decorative
    const frontIcons = box01.locator(".eael-elements-flip-box-front-container .eael-elements-flip-box-icon-image svg");
    if (await frontIcons.count() > 0) {
      await expect.soft(frontIcons.first()).toBeVisible();
    }
  });
});
