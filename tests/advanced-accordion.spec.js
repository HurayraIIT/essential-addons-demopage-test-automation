"use strict";
import { test, expect } from "../global-setup";

let slug = "/advanced-accordion";
let heading = "Advanced Accordion";

test.describe("Advanced Accordion", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    //await page.waitForSelector();
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/advanced-accordion/);
  });

  test("Test Section: Select Advanced Accordion Style", async ({ page }) => {
    await page.getByRole("heading", { name: "Select Advanced Accordion Style" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Select Advanced Accordion Style" })).toBeVisible();
    await expect(page.getByText("Select Accordion type to display content, enable toggle icon")).toBeVisible();
  });
});
