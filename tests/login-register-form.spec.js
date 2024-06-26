"use strict";
import { test, expect } from "../global-setup";

let slug = "/login-register-form";
let heading = "Login Register Form";

test.describe("Login Register Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/login-register-form/);
  });

  test("Test Section: Login Form", async ({ page }) => {
    await page.getByRole("heading", { name: "Login Form" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Login Form" })).toBeVisible();
    await expect(page.getByText("Ceate login form using Essential Addons & let your users log in easily to ensure better user experience")).toBeVisible();
  });
});
