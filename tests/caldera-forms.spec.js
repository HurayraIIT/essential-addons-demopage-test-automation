"use strict";

import { test, expect } from "../global-setup";

let slug = "https://essential-addons.com/elementor/caldera-forms";
let heading = "Caldera Forms";

test.describe("Caldera Forms", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    // await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/caldera-forms/);
  });

  test("Test Section: Caldera Form 1 Style", async ({ page }) => {
    await page.getByRole("heading", { name: "Caldera Form 1 Style" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Caldera Form 1 Style" })).toBeVisible();
    await expect(
      page.getByText("Choose form type & style the form container as you want using EA Caldera Form")
    ).toBeVisible();

    await expect(page.locator(".eael-contact-form").first()).toBeVisible();
    await expect(page.getByText("First Name *")).toBeVisible();
    await expect(page.getByLabel("First Name *")).toBeVisible();
    await expect(page.getByText("Last Name *")).toBeVisible();
    await expect(page.getByLabel("Last Name *")).toBeVisible();
    await expect(page.getByText("Email Address *")).toBeVisible();
    await expect(page.getByLabel("Email Address *")).toBeVisible();
    await expect(page.getByText("Comments / Questions *")).toBeVisible();
    await expect(page.getByLabel("Comments / Questions *")).toBeVisible();
    await expect(page.locator("#fld_7908577_1-wrap div")).toBeVisible();
  });

  test("Test Section: Nurture With Colors", async ({ page }) => {
    await page.getByRole("heading", { name: "Nurture With Colors" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Nurture With Colors" })).toBeVisible();
    await expect(page.getByText("Create an engaging look with different colors")).toBeVisible();

    await expect(page.locator(".eael-contact-form-7-wrapper > .eael-contact-form").first()).toBeVisible();
    await expect(page.getByText("Your Name (required)").first()).toBeVisible();
    await expect(page.getByLabel("Your Name (required)").first()).toBeVisible();
    await expect(page.getByText("Your Email (required)").first()).toBeVisible();
    await expect(page.getByLabel("Your Email (required)").first()).toBeVisible();
    await expect(page.getByText("Subject").first()).toBeVisible();
    await expect(page.getByLabel("Subject").first()).toBeVisible();
    await expect(page.getByText("Your Message").first()).toBeVisible();
    await expect(page.getByLabel("Your Message").first()).toBeVisible();
    await expect(page.locator("p").filter({ hasText: "Send" }).first()).toBeVisible();
    await expect(page.getByLabel("Contact form").nth(1)).toBeVisible();
  });

  test("Test Section: Interactive Form Title", async ({ page }) => {
    await page.getByRole("heading", { name: "Interactive Form Title" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Interactive Form Title" })).toBeVisible();
    await expect(page.getByText("Give an interactive tittle to your form, change title color")).toBeVisible();

    await page.goto("https://essential-addons.com/caldera-forms/");
    await expect(
      page.getByText("Say Hello, On Our Support! Your Name (required) Your Email (required) Subject")
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Say Hello, On Our Support!" })).toBeVisible();
    await expect(page.getByLabel("Your Name (required)").nth(2)).toBeVisible();
    await expect(page.getByLabel("Your Email (required)").nth(2)).toBeVisible();
    await expect(page.getByLabel("Subject").nth(2)).toBeVisible();
    await expect(page.getByLabel("Your Message").nth(2)).toBeVisible();
    await expect(page.locator("p").filter({ hasText: "Send" }).nth(2)).toBeVisible();
  });
});
