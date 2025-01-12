"use strict";

import { test, expect } from "../global-setup";

test.describe("Interactive Circle - Live Demo Page", () => {
  let slug = "https://essential-addons.com/elementor/interactive-circle";
  let heading = "Interactive Circle";

  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect
      .soft(page.getByRole("link", { name: "Documentation" }))
      .toHaveAttribute("href", /docs\/interactive-circle/);
  });

  // Item 1
  test("Test Section: Choose From Multiple Different Style Layouts", async ({ page }) => {
    // Stop TimeOut Issue
    test.setTimeout(0);

    const section_root = page.getByTestId("8caf97c");
    const eael_circle_item_1 = page.getByTestId("e1d6ade");

    await section_root
      .getByRole("heading", { name: "Choose From Multiple Different Style Layouts" })
      .scrollIntoViewIfNeeded();
    await page.pause();
    await expect
      .soft(section_root.getByRole("heading", { name: "Choose From Multiple Different Style Layouts" }))
      .toBeVisible();
    await expect.soft(section_root.getByText("Beautifully present your content in an attractive ")).toBeVisible();
    // Circle Inner Border Visibility Check
    await expect.soft(section_root.locator(".eael-circle-inner")).toBeVisible();
    // Circle icon & Text Visibility Check
    await expect.soft(section_root.locator(".fas.fa-leaf")).toBeVisible();
    await expect.soft(section_root.locator(".fas.fa-comment")).toBeVisible();
    await expect.soft(section_root.locator(".fas.fa-map-marker-alt")).toBeVisible();
    await expect.soft(section_root.locator(".fas.fa-rocket")).toBeVisible();
    await expect.soft(section_root.locator(".fas.fa-hourglass-half")).toBeVisible();
    await expect.soft(section_root.locator(".fas.fa-tag")).toBeVisible();
    await expect.soft(eael_circle_item_1.locator(".eael-circle-btn-icon").getByText("Item 1")).toBeVisible();
    await expect.soft(eael_circle_item_1.locator(".eael-circle-btn-icon").getByText("Item 2")).toBeVisible();
    await expect.soft(eael_circle_item_1.locator(".eael-circle-btn-icon").getByText("Item 3")).toBeVisible();
    await expect.soft(eael_circle_item_1.locator(".eael-circle-btn-icon").getByText("Item 4")).toBeVisible();
    await expect.soft(eael_circle_item_1.locator(".eael-circle-btn-icon").getByText("Item 5")).toBeVisible();
    await expect.soft(eael_circle_item_1.locator(".eael-circle-btn-icon").getByText("Item 6")).toBeVisible();
    // Circle Item Click And Visibility check
    await eael_circle_item_1.locator(".fas.fa-leaf").click();
    await expect
      .soft(eael_circle_item_1.locator(".eael-interactive-circle").getByText("item 1. You can highlight"))
      .toBeVisible();
    await eael_circle_item_1.locator(".fas.fa-comment").click();
    await expect
      .soft(eael_circle_item_1.locator(".eael-interactive-circle").getByText("item 2. You can highlight"))
      .toBeVisible();
    await eael_circle_item_1.locator(".fas.fa-map-marker-alt").click();
    await expect
      .soft(eael_circle_item_1.locator(".eael-interactive-circle").getByText("item 3. You can highlight"))
      .toBeVisible();
    await eael_circle_item_1.locator(".fas.fa-rocket").click();
    await expect
      .soft(eael_circle_item_1.locator(".eael-interactive-circle").getByText("item 4. You can highlight"))
      .toBeVisible();
    await eael_circle_item_1.locator(".fas.fa-hourglass-half").click();
    await expect
      .soft(eael_circle_item_1.locator(".eael-interactive-circle").getByText("item 5. You can highlight"))
      .toBeVisible();
    await eael_circle_item_1.locator(".fas.fa-tag").click();
    await expect
      .soft(eael_circle_item_1.locator(".eael-interactive-circle").getByText("item 6. You can highlight"))
      .toBeVisible();
  });

  // Item 2
  test("Test Section: Item 2", async ({ page }) => {
    // Stop TimeOut Issue
    test.setTimeout(0);

    const section_root = page.getByTestId("ff42189");
    const eael_circle_item_1 = page.getByTestId("fc91e08");

    await section_root
      .getByRole("heading", { name: "Display Content In Semi Circular Layout" })
      .scrollIntoViewIfNeeded();
    await page.pause();
    await expect
      .soft(section_root.getByRole("heading", { name: "Display Content In Semi Circular Layout" }))
      .toBeVisible();
    await expect.soft(section_root.getByText("Use EA Interactive Circle widget")).toBeVisible();
    // Circle Inner Border Visibility Check
    await expect.soft(section_root.locator(".eael-circle-inner")).toBeVisible();
    // Circle icon & Text Visibility Check
    await expect.soft(section_root.locator(".fas.fa-leaf")).toBeVisible();
    await expect.soft(section_root.locator(".fas.fa-comment")).toBeVisible();
    await expect.soft(section_root.locator(".fas.fa-map-marker-alt")).toBeVisible();
    await expect.soft(section_root.locator(".fas.fa-rocket")).toBeVisible();
    await expect.soft(section_root.locator(".fas.fa-hourglass-half")).toBeVisible();
    await expect.soft(section_root.locator(".fas.fa-tag")).toBeVisible();
    await expect.soft(eael_circle_item_1.locator(".eael-circle-btn-icon").getByText("Item 1")).toBeVisible();
    await expect.soft(eael_circle_item_1.locator(".eael-circle-btn-icon").getByText("Item 2")).toBeVisible();
    await expect.soft(eael_circle_item_1.locator(".eael-circle-btn-icon").getByText("Item 3")).toBeVisible();
    await expect.soft(eael_circle_item_1.locator(".eael-circle-btn-icon").getByText("Item 4")).toBeVisible();
    await expect.soft(eael_circle_item_1.locator(".eael-circle-btn-icon").getByText("Item 5")).toBeVisible();
    await expect.soft(eael_circle_item_1.locator(".eael-circle-btn-icon").getByText("Item 6")).toBeVisible();
    // Circle Item Click And Visibility check
    await eael_circle_item_1.locator(".fas.fa-leaf").hover();
    await expect
      .soft(eael_circle_item_1.locator(".eael-interactive-circle").getByText("item 1. You can highlight"))
      .toBeVisible();
    await eael_circle_item_1.locator(".fas.fa-comment").hover();
    await expect
      .soft(eael_circle_item_1.locator(".eael-interactive-circle").getByText("item 2. You can highlight"))
      .toBeVisible();
    await eael_circle_item_1.locator(".fas.fa-map-marker-alt").hover();
    await expect
      .soft(eael_circle_item_1.locator(".eael-interactive-circle").getByText("item 3. You can highlight"))
      .toBeVisible();
    await eael_circle_item_1.locator(".fas.fa-rocket").hover();
    await expect
      .soft(eael_circle_item_1.locator(".eael-interactive-circle").getByText("item 4. You can highlight"))
      .toBeVisible();
    await eael_circle_item_1.locator(".fas.fa-hourglass-half").hover();
    await expect
      .soft(eael_circle_item_1.locator(".eael-interactive-circle").getByText("item 5. You can highlight"))
      .toBeVisible();
    await eael_circle_item_1.locator(".fas.fa-tag").hover();
    await expect
      .soft(eael_circle_item_1.locator(".eael-interactive-circle").getByText("item 6. You can highlight"))
      .toBeVisible();
  });
});
