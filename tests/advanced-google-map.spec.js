"use strict";
import { test, expect } from "../global-setup";

let slug = "/advanced-google-map";
let heading = "Advanced Google Map";

test.describe("Advanced Google Map", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/advanced-google-map/);
  });

  test("Test Section: Basic Map With Marker & Standard Theme", async ({ page }) => {
    await page.getByRole("heading", { name: "Basic Map With Marker & Standard Theme" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Basic Map With Marker & Standard Theme" })).toBeVisible();
    await expect(page.getByText("Configure the basic map type, add marker icon and make it interactive for visitors")).toBeVisible();
  });
});
