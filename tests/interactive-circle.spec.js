"use strict";
import { test, expect } from "../global-setup";

let slug = "/interactive-circle";
let heading = "Interactive Circle";

test.describe("Interactive Circle", () => {
  // Page Heading
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/interactive-circle/);
  });

  test("Test Section: Choose From Multiple Different Style Layouts", async ({ page }) => {

    const section_root = page.getByTestId('8caf97c')

    await section_root.getByRole("heading", { name: "Choose From Multiple Different Style Layouts" }).scrollIntoViewIfNeeded();
    await expect(section_root.getByRole("heading", { name: "Choose From Multiple Different Style Layouts" })).toBeVisible();
    await expect(section_root.getByText("Beautifully present your content in an attractive ")).toBeVisible();
    // Click Circle Item to Visibile Content 
    await expect(section_root.locator('.fas.fa-leaf')).toBeVisible();
    await expect(page.getByTestId('e1d6ade').locator('.eael-circle-btn-icon').getByText('Item 1')).toBeVisible();
    await section_root.locator('.fas.fa-leaf').click();
    await expect(section_root.locator('.eael-interactive-circle').getByText('Present your content in an attractive Circle layout item 1. You can highlight')).toBeVisible();


  });
});
