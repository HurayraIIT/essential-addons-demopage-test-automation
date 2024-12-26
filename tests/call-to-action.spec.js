"use strict";

import { test, expect } from "../global-setup";

let slug = "marketing-elements/call-to-action";

test.describe("Call To Action", () => {
  // All Presets Unique ID
  let basicPreset1ID = "#basic-preset1";
  let basicPreset2ID = "#basic-preset2";
  let flexGridPreset1ID = "#flex-grid-preset1";
  let flexGridPreset2ID = "#flex-grid-preset2";
  let flexGridIconPreset1ID = "#flex-grid-with-icon-preset1";
  let flexGridIconPreset2ID = "#flex-grid-with-icon-preset2";

  // All Presets Unique Locator
  let basicPreset1Locator = null;
  let basicPreset2Locator = null;
  let flexGridPreset1Locator = null;
  let flexGridPreset2Locator = null;
  let flexGridIconPreset1Locator = null;
  let flexGridIconPreset2Locator = null;

  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    basicPreset1Locator = page.locator(basicPreset1ID);
    basicPreset2Locator = page.locator(basicPreset2ID);
    flexGridPreset1Locator = page.locator(flexGridPreset1ID);
    flexGridPreset2Locator = page.locator(flexGridPreset2ID);
    flexGridIconPreset1Locator = page.locator(flexGridIconPreset1ID);
    flexGridIconPreset2Locator = page.locator(flexGridIconPreset2ID);
  });

  // Content Style & Content Preset Combinations Start

  // Content Style: Basic | Content Preset: Preset 1
  test("Content Style: Basic | Content Preset: Preset 1", async ({ page }) => {
    await expect.soft(page.getByText("Content Style: Basic | Content Preset: Preset 1")).toBeVisible();
    await expect.soft(basicPreset1Locator).toBeVisible();
    await expect.soft(basicPreset1Locator).toHaveClass(/elementor-widget-eael-cta-box/);
    // Sub Title
    await expect.soft(basicPreset1Locator.locator(".sub-title")).toHaveCSS("font-size", "19px");
    // Title
    await expect.soft(basicPreset1Locator.locator(".title")).toHaveCSS("font-size", "37px");
    await expect.soft(basicPreset1Locator.locator(".title")).toHaveCSS("font-weight", "700");
    await expect.soft(basicPreset1Locator.locator(".title")).toHaveCSS("color", "rgb(114, 28, 233)");
    await expect.soft(basicPreset1Locator.locator(".title")).toHaveCSS("font-family", "Poppins, sans-serif");
    // Content
    await expect
      .soft(
        basicPreset1Locator.getByText(
          "Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements"
        )
      )
      .toBeVisible();
    await expect
      .soft(
        basicPreset1Locator.getByText(
          "Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements"
        )
      )
      .toHaveCSS("font-family", '"Open Sans", sans-serif');
    await expect
      .soft(
        basicPreset1Locator.getByText(
          "Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements"
        )
      )
      .toHaveCSS("color", "rgb(0, 0, 0)");
    // Button
    await expect.soft(basicPreset1Locator.getByRole("link", { name: /Explore BasicPreset1/ })).toBeVisible();
    await expect.soft(basicPreset1Locator.getByRole("link", { name: /Explore BasicPreset1/ })).toBeEnabled();
    await expect
      .soft(basicPreset1Locator.getByRole("link", { name: /Explore BasicPreset1/ }))
      .toHaveClass("cta-button  effect-2");
    await expect
      .soft(basicPreset1Locator.getByRole("link", { name: /Explore BasicPreset1/ }))
      .toHaveCSS("box-shadow", "rgba(27, 33, 45, 0.72) 4px 4px 0px 0px");
    await expect
      .soft(basicPreset1Locator.getByRole("link", { name: /Explore BasicPreset1/ }))
      .toHaveCSS("font-size", "19px");
    await expect
      .soft(basicPreset1Locator.getByRole("link", { name: /Explore BasicPreset1/ }))
      .toHaveCSS("font-family", "Poppins, sans-serif");
  });

  // Content Style: Basic | Content Preset: Preset 2
  test("Content Style: Basic | Content Preset: Preset 2", async ({ page }) => {
    await expect.soft(page.getByText("Content Style: Basic | Content Preset: Preset 2")).toBeVisible();
    await expect.soft(basicPreset2Locator).toBeVisible();
    await expect.soft(basicPreset2Locator).toHaveClass(/elementor-widget-eael-cta-box/);
    // Sub Title
    await expect.soft(basicPreset2Locator.locator(".sub-title")).toHaveCSS("font-size", "19px");
    // Title
    await expect.soft(basicPreset2Locator.locator(".title")).toHaveCSS("font-size", "37px");
    await expect.soft(basicPreset2Locator.locator(".title")).toHaveCSS("font-weight", "700");
    await expect.soft(basicPreset2Locator.locator(".title")).toHaveCSS("color", "rgb(114, 28, 233)");
    await expect.soft(basicPreset2Locator.locator(".title")).toHaveCSS("font-family", "Poppins, sans-serif");
    // Content
    await expect
      .soft(
        basicPreset2Locator.getByText(
          "Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements BasicPreset2"
        )
      )
      .toBeVisible();
    await expect
      .soft(
        basicPreset2Locator.getByText(
          "Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements BasicPreset2"
        )
      )
      .toHaveCSS("font-family", '"Open Sans", sans-serif');
    await expect
      .soft(
        basicPreset2Locator.getByText(
          "Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements BasicPreset2"
        )
      )
      .toHaveCSS("color", "rgb(0, 0, 0)");
    // Button
    await expect.soft(basicPreset2Locator.getByRole("link", { name: /BasicPreset2/ })).toBeVisible();
    await expect.soft(basicPreset2Locator.getByRole("link", { name: /BasicPreset2/ })).toBeEnabled();
    await expect
      .soft(basicPreset2Locator.getByRole("link", { name: /BasicPreset2/ }))
      .toHaveClass("cta-button cta-btn-preset-2 effect-1");
    await expect
      .soft(basicPreset2Locator.getByRole("link", { name: /BasicPreset2/ }))
      .toHaveCSS("box-shadow", "rgba(27, 33, 45, 0.72) 4px 4px 0px 0px");
    await expect.soft(basicPreset2Locator.getByRole("link", { name: /BasicPreset2/ })).toHaveCSS("font-size", "19px");
    await expect
      .soft(basicPreset2Locator.getByRole("link", { name: /BasicPreset2/ }))
      .toHaveCSS("font-family", "Poppins, sans-serif");
  });

  // Content Style: Flex Grid | Content Preset: Preset 1
  test("Content Style: Flex Grid | Content Preset: Preset 1", async ({ page }) => {
    await expect.soft(page.getByText("Content Style: Flex Grid | Content Preset: Preset 1")).toBeVisible();
    await expect.soft(flexGridPreset1Locator).toBeVisible();
    await expect.soft(flexGridPreset1Locator).toHaveClass(/elementor-widget-eael-cta-box/);
    // Sub Title
    await expect.soft(flexGridPreset1Locator.locator(".sub-title")).toHaveCSS("font-size", "19px");
    // Title
    await expect.soft(flexGridPreset1Locator.locator(".title")).toHaveCSS("font-size", "37px");
    await expect.soft(flexGridPreset1Locator.locator(".title")).toHaveCSS("font-weight", "700");
    await expect.soft(flexGridPreset1Locator.locator(".title")).toHaveCSS("color", "rgb(114, 28, 233)");
    await expect.soft(flexGridPreset1Locator.locator(".title")).toHaveCSS("font-family", "Poppins, sans-serif");
    // Content
    await expect
      .soft(
        flexGridPreset1Locator.getByText(
          "Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements FlexGridPreset1"
        )
      )
      .toBeVisible();
    await expect
      .soft(
        flexGridPreset1Locator.getByText(
          "Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements FlexGridPreset1"
        )
      )
      .toHaveCSS("font-family", '"Open Sans", sans-serif');
    await expect
      .soft(
        flexGridPreset1Locator.getByText(
          "Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements FlexGridPreset1"
        )
      )
      .toHaveCSS("color", "rgb(0, 0, 0)");
    // Button
    await expect.soft(flexGridPreset1Locator.getByRole("link", { name: /FlexGridPreset1/ })).toBeVisible();
    await expect.soft(flexGridPreset1Locator.getByRole("link", { name: /FlexGridPreset1/ })).toBeEnabled();
    await expect
      .soft(flexGridPreset1Locator.getByRole("link", { name: /FlexGridPreset1/ }))
      .toHaveClass("cta-button  effect-2");
    await expect
      .soft(flexGridPreset1Locator.getByRole("link", { name: /FlexGridPreset1/ }))
      .toHaveCSS("box-shadow", "rgba(27, 33, 45, 0.72) 4px 4px 0px 0px");
    await expect
      .soft(flexGridPreset1Locator.getByRole("link", { name: /FlexGridPreset1/ }))
      .toHaveCSS("font-size", "19px");
    await expect
      .soft(flexGridPreset1Locator.getByRole("link", { name: /FlexGridPreset1/ }))
      .toHaveCSS("font-family", "Poppins, sans-serif");
  });

  // Content Style: Flex Grid | Content Preset: Preset 2
  test("Content Style: Flex Grid | Content Preset: Preset 2", async ({ page }) => {
    await expect.soft(page.getByText("Content Style: Flex Grid | Content Preset: Preset 2")).toBeVisible();
    await expect.soft(flexGridPreset2Locator).toBeVisible();
    await expect.soft(flexGridPreset2Locator).toHaveClass(/elementor-widget-eael-cta-box/);
    // Sub Title
    await expect.soft(flexGridPreset2Locator.locator(".sub-title")).toHaveCSS("font-size", "19px");
    // Title
    await expect.soft(flexGridPreset2Locator.locator(".title")).toHaveCSS("font-size", "37px");
    await expect.soft(flexGridPreset2Locator.locator(".title")).toHaveCSS("font-weight", "700");
    await expect.soft(flexGridPreset2Locator.locator(".title")).toHaveCSS("color", "rgb(114, 28, 233)");
    await expect.soft(flexGridPreset2Locator.locator(".title")).toHaveCSS("font-family", "Poppins, sans-serif");
    // Content
    await expect
      .soft(
        flexGridPreset2Locator.getByText(
          "Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements FlexGridPreset2"
        )
      )
      .toBeVisible();
    await expect
      .soft(
        flexGridPreset2Locator.getByText(
          "Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements FlexGridPreset2"
        )
      )
      .toHaveCSS("font-family", '"Open Sans", sans-serif');
    await expect
      .soft(
        flexGridPreset2Locator.getByText(
          "Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements FlexGridPreset2"
        )
      )
      .toHaveCSS("color", "rgb(0, 0, 0)");
    // Button
    await expect.soft(flexGridPreset2Locator.getByRole("link", { name: /FlexGridPreset2/ })).toBeEnabled();
    await expect
      .soft(flexGridPreset2Locator.getByRole("link", { name: /FlexGridPreset2/ }))
      .toHaveClass("cta-button cta-btn-preset-1 effect-2");
    await expect.soft(flexGridPreset2Locator.getByRole("link", { name: /FlexGridPreset2/ })).toBeVisible();
    await expect
      .soft(flexGridPreset2Locator.getByRole("link", { name: /FlexGridPreset2/ }))
      .toHaveCSS("box-shadow", "rgba(27, 33, 45, 0.72) 4px 4px 0px 0px");
    await expect
      .soft(flexGridPreset2Locator.getByRole("link", { name: /FlexGridPreset2/ }))
      .toHaveCSS("font-size", "19px");
    await expect
      .soft(flexGridPreset2Locator.getByRole("link", { name: /FlexGridPreset2/ }))
      .toHaveCSS("font-family", "Poppins, sans-serif");
  });

  // Content Style: Flex Grid with Icon | Content Preset: Preset 1
  test("Content Style: Flex Grid with Icon | Content Preset: Preset 1", async ({ page }) => {
    await expect.soft(page.getByText("Content Style: Flex Grid with Icon | Content Preset: Preset 1")).toBeVisible();
    await expect.soft(flexGridIconPreset1Locator).toBeVisible();
    await expect.soft(flexGridIconPreset1Locator).toHaveClass(/elementor-widget-eael-cta-box/);
    // Sub Title
    await expect.soft(flexGridIconPreset1Locator.locator(".sub-title")).toHaveCSS("font-size", "19px");
    // Title
    await expect.soft(flexGridIconPreset1Locator.locator(".title")).toHaveCSS("font-size", "37px");
    await expect.soft(flexGridIconPreset1Locator.locator(".title")).toHaveCSS("font-weight", "700");
    await expect.soft(flexGridIconPreset1Locator.locator(".title")).toHaveCSS("color", "rgb(114, 28, 233)");
    await expect.soft(flexGridIconPreset1Locator.locator(".title")).toHaveCSS("font-family", "Poppins, sans-serif");
    // Content
    await expect
      .soft(
        flexGridIconPreset1Locator.getByText(
          "Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements FlexGridIconPreset1"
        )
      )
      .toBeVisible();
    await expect
      .soft(
        flexGridIconPreset1Locator.getByText(
          "Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements FlexGridIconPreset1"
        )
      )
      .toHaveCSS("font-family", '"Open Sans", sans-serif');
    await expect
      .soft(
        flexGridIconPreset1Locator.getByText(
          "Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements FlexGridIconPreset1"
        )
      )
      .toHaveCSS("color", "rgb(0, 0, 0)");
    // Button
    await expect.soft(flexGridIconPreset1Locator.getByRole("link", { name: /FlexGridIconPreset1/ })).toBeVisible();
    await expect.soft(flexGridIconPreset1Locator.getByRole("link", { name: /FlexGridIconPreset1/ })).toBeEnabled();
    await expect
      .soft(flexGridIconPreset1Locator.getByRole("link", { name: /FlexGridIconPreset1/ }))
      .toHaveClass("cta-button  effect-2");
    await expect
      .soft(flexGridIconPreset1Locator.getByRole("link", { name: /FlexGridIconPreset1/ }))
      .toHaveCSS("box-shadow", "rgba(27, 33, 45, 0.72) 4px 4px 0px 0px");
    await expect
      .soft(flexGridIconPreset1Locator.getByRole("link", { name: /FlexGridIconPreset1/ }))
      .toHaveCSS("font-size", "19px");
    await expect
      .soft(flexGridIconPreset1Locator.getByRole("link", { name: /FlexGridIconPreset1/ }))
      .toHaveCSS("font-family", "Poppins, sans-serif");
  });

  // Content Style: Flex Grid with Icon | Content Preset: Preset 2
  test("Content Style: Flex Grid with Icon | Content Preset: Preset 2", async ({ page }) => {
    await expect.soft(page.getByText("Content Style: Flex Grid with Icon | Content Preset: Preset 2")).toBeVisible();
    await expect.soft(flexGridIconPreset2Locator).toBeVisible();
    await expect.soft(flexGridIconPreset2Locator).toHaveClass(/elementor-widget-eael-cta-box/);
    // Sub Title
    await expect.soft(flexGridIconPreset2Locator.locator(".sub-title")).toHaveCSS("font-size", "19px");
    // Title
    await expect.soft(flexGridIconPreset2Locator.locator(".title")).toHaveCSS("font-size", "37px");
    await expect.soft(flexGridIconPreset2Locator.locator(".title")).toHaveCSS("font-weight", "700");
    await expect.soft(flexGridIconPreset2Locator.locator(".title")).toHaveCSS("color", "rgb(114, 28, 233)");
    await expect.soft(flexGridIconPreset2Locator.locator(".title")).toHaveCSS("font-family", "Poppins, sans-serif");
    // Content
    await expect
      .soft(
        flexGridIconPreset2Locator.getByText(
          "Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements FlexGridIconPreset2"
        )
      )
      .toBeVisible();
    await expect
      .soft(
        flexGridIconPreset2Locator.getByText(
          "Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements FlexGridIconPreset2"
        )
      )
      .toHaveCSS("font-family", '"Open Sans", sans-serif');
    await expect
      .soft(
        flexGridIconPreset2Locator.getByText(
          "Enhance your Elementor page building experience with 100+ creative elements. Add powers to your page builder using our easy-to-use elements FlexGridIconPreset2"
        )
      )
      .toHaveCSS("color", "rgb(0, 0, 0)");
    // Button
    await expect.soft(flexGridIconPreset2Locator.getByRole("link", { name: /FlexGridIconPreset2/ })).toBeVisible();
    await expect.soft(flexGridIconPreset2Locator.getByRole("link", { name: /FlexGridIconPreset2/ })).toBeEnabled();
    await expect
      .soft(flexGridIconPreset2Locator.getByRole("link", { name: /FlexGridIconPreset2/ }))
      .toHaveClass("cta-button cta-btn-preset-2 effect-2");
    await expect
      .soft(flexGridIconPreset2Locator.getByRole("link", { name: /FlexGridIconPreset2/ }))
      .toHaveCSS("box-shadow", "rgba(27, 33, 45, 0.72) 4px 4px 0px 0px");
    await expect
      .soft(flexGridIconPreset2Locator.getByRole("link", { name: /FlexGridIconPreset2/ }))
      .toHaveCSS("font-size", "19px");
    await expect
      .soft(flexGridIconPreset2Locator.getByRole("link", { name: /FlexGridIconPreset2/ }))
      .toHaveCSS("font-family", "Poppins, sans-serif");
  });
});

// Content Style & Content Preset Combinations End
