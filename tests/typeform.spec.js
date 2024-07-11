"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/typeform";
let heading = "TypeForm";

test.describe("TypeForm", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/typeform/);
  });

  test("Test Section: Embed Any Typeform You Want", async ({ page }) => {
    await page.getByRole("heading", { name: "Embed Any Typeform You Want" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Embed Any Typeform You Want" })).toBeVisible();
    await expect(page.getByText("Create beautiful form using Typeform ready")).toBeVisible();
  });
});
