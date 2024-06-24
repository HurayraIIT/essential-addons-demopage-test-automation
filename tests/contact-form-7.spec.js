"use strict";
import { test, expect } from "../global-setup";

let slug = "/contact-form-7";
let heading = "Contact Form 7";

test.describe("Contact Form 7", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/contact-form-7/);
  });

  test("Test Section: Contact Form 1 Style", async ({ page }) => {
    await page.getByRole("heading", { name: "Contact Form 1 Style" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Contact Form 1 Style" })).toBeVisible();
    await expect(page.getByText("Choose form type & style the form container as you want")).toBeVisible();
  });
});
