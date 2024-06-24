"use strict";
import { test, expect } from "../global-setup";

let slug = "/advanced-search";
let heading = "Advanced Search";

test.describe("Advanced Search - Stunning Advanced Live Search Bar", () => {
  let adv_search = "";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/advanced-search/);

    adv_search = page.getByTestId("5374321b");
    adv_search.scrollIntoViewIfNeeded();
  });

  test("All sections should be present", async ({ page }) => {
    await expect(adv_search).toBeVisible();
    await expect(adv_search.locator(".eael-adv-search-wrapper").first()).toBeVisible();

    await expect(adv_search.locator(".fas.fa-search")).toBeVisible();
    await expect(adv_search.getByPlaceholder("Enter Search Keyword")).toBeVisible();
    await expect(adv_search.getByRole("button", { name: "Search" })).toBeVisible();
  });

  test("Search with invalid string should return no result", async ({ page }) => {
    await expect(adv_search).toBeVisible();

    await adv_search.getByPlaceholder("Enter Search Keyword").click();
    await adv_search.getByPlaceholder("Enter Search Keyword").type("asdasdasdasdasd123123");
    await page.waitForTimeout(1500);

    // Verify the result
    await expect(adv_search.getByText("No Record Found")).toBeVisible();
    await expect(adv_search.locator(".eael-adv-search-close > .fas.fa-times")).toBeVisible();

    // Clear the search
    await adv_search.locator(".eael-adv-search-close > .fas.fa-times").click();
    await page.waitForTimeout(100);
    await expect(adv_search.getByText("No Record Found")).toBeHidden();
  });
});
