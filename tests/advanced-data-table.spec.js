"use strict";

import { test, expect } from "../global-setup";

test.describe("Advanced Data Table Style 01", () => {
  let slug = "https://essential-addons.com/elementor/advanced-data-table";
  let heading = "Advanced Data Table";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect
      .soft(page.getByRole("link", { name: "Documentation" }))
      .toHaveAttribute("href", /docs\/advanced-data-table/);

    // Scroll to the section
    await page.getByText("Data Table Style 01").scrollIntoViewIfNeeded();
    await expect.soft(page.getByText("Data Table Style 01")).toBeVisible();
    await expect.soft(page.getByText("Insert Data straight from the Elementor Editor")).toBeVisible();
  });

  test("All sections should be present", async ({ page }) => {
    // Table section and search
    await expect.soft(page.locator(".ea-advanced-data-table-search-wrap")).toBeVisible();
    await expect.soft(page.getByPlaceholder("Search here . .")).toBeVisible();
    await expect.soft(page.locator(".ea-advanced-data-table-wrap-inner").first()).toBeVisible();

    // Table headers
    await expect.soft(page.getByRole("cell", { name: "ID", exact: true })).toBeVisible();
    await expect.soft(page.getByRole("cell", { name: "Name" })).toBeVisible();
    await expect.soft(page.getByRole("cell", { name: "Address" })).toBeVisible();
    await expect.soft(page.getByRole("cell", { name: "City" })).toBeVisible();
    await expect.soft(page.getByRole("cell", { name: "Country" })).toBeVisible();

    // Row 1
    await expect.soft(page.getByRole("cell", { name: "1", exact: true }).first()).toBeVisible();
    await expect.soft(page.getByRole("cell", { name: "Lars" })).toBeVisible();
    await expect.soft(page.getByRole("cell", { name: "P.O. Box 311, 6832 In Ave" })).toBeVisible();
    await expect.soft(page.getByRole("cell", { name: "Kalken" })).toBeVisible();
    await expect.soft(page.getByRole("cell", { name: "Mongolia" })).toBeVisible();

    // Row 2
    await expect.soft(page.getByRole("cell", { name: "2", exact: true }).first()).toBeVisible();
    await expect.soft(page.getByRole("cell", { name: "Anjolie" })).toBeVisible();
    await expect.soft(page.getByRole("cell", { name: "P.O. Box 991, 9320 Imperdiet" })).toBeVisible();
    await expect.soft(page.getByRole("cell", { name: "Pointe-aux-Trembles" })).toBeVisible();
    await expect.soft(page.getByRole("cell", { name: "Isle of Man" })).toBeVisible();

    // Table Footer
    await expect.soft(page.getByText("«1...2345»")).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "«" }).first()).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "1", exact: true }).first()).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "2" }).first()).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "3", exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "4", exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "5", exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "»" }).first()).toBeVisible();
  });

  test("Search Should Work", async ({ page }) => {
    // Search on Data Table Style 01
    let adt01 = page.getByTestId("5eb8945");

    // Initially the searched content should not be visible, instead the regular content should be visible
    await expect.soft(adt01.getByRole("cell", { name: "1", exact: true }).first()).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Lars", exact: true })).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "P.O. Box 311, 6832 In Ave" })).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Kalken", exact: true })).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Mongolia", exact: true })).toBeVisible();

    await expect.soft(adt01.getByRole("cell", { name: "22", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Brittany", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Ap #287-8358 Quisque Avenue" })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Gujranwala", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "India", exact: true })).not.toBeVisible();

    // Perform search and verify that only the searched content is visible
    await expect.soft(adt01.getByPlaceholder("Search here . . .")).toBeVisible();
    await adt01.getByPlaceholder("Search here . . .").fill("Brittany");
    await page.waitForTimeout(200);

    await expect.soft(adt01.getByRole("cell", { name: "1", exact: true }).first()).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Lars", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "P.O. Box 311, 6832 In Ave" })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Kalken", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Mongolia", exact: true })).not.toBeVisible();

    await expect.soft(adt01.getByRole("cell", { name: "22", exact: true })).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Brittany", exact: true })).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Ap #287-8358 Quisque Avenue" })).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Gujranwala", exact: true })).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "India", exact: true })).toBeVisible();

    // Clear the search and the searched content should not be visible again
    await adt01.getByPlaceholder("Search here . . .").clear();
    await page.waitForTimeout(200);

    await expect.soft(adt01.getByRole("cell", { name: "1", exact: true }).first()).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Lars", exact: true })).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "P.O. Box 311, 6832 In Ave" })).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Kalken", exact: true })).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Mongolia", exact: true })).toBeVisible();

    await expect.soft(adt01.getByRole("cell", { name: "22", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Brittany", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Ap #287-8358 Quisque Avenue" })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Gujranwala", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "India", exact: true })).not.toBeVisible();
  });

  test("Table Header Should Have Proper Style", async ({ page }) => {
    let adt01 = page.getByTestId("5eb8945");

    // Table Header style check of Data Table Style 01
    await expect.soft(adt01.locator("thead")).toHaveCSS("background-color", "rgb(44, 133, 254)");
    await expect.soft(adt01.getByRole("cell", { name: "ID", exact: true })).toHaveCSS("font-family", /Poppins/);
    await expect.soft(adt01.getByRole("cell", { name: "ID", exact: true })).toHaveCSS("color", "rgb(255, 255, 255)");
  });

  test("Pagination Should Work", async ({ page }) => {
    let adt01 = page.getByTestId("5eb8945");

    // For Page 1
    await expect.soft(adt01.getByRole("cell", { name: "1", exact: true }).first()).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Lars", exact: true })).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Mongolia", exact: true })).toBeVisible();

    await expect.soft(adt01.getByRole("cell", { name: "21", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Unity", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Tajikistan", exact: true })).not.toBeVisible();

    await expect.soft(adt01.getByRole("cell", { name: "41", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Elvis", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Belize", exact: true })).not.toBeVisible();

    // For Page 3
    await adt01.getByRole("link", { name: "3", exact: true }).click();
    await page.waitForTimeout(200);

    await expect.soft(adt01.getByRole("cell", { name: "1", exact: true }).first()).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Lars", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Mongolia", exact: true })).not.toBeVisible();

    await expect.soft(adt01.getByRole("cell", { name: "21", exact: true })).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Unity", exact: true })).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Tajikistan", exact: true })).toBeVisible();

    await expect.soft(adt01.getByRole("cell", { name: "41", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Elvis", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Belize", exact: true })).not.toBeVisible();

    // For page 5, (go to last page)
    await adt01.getByRole("link", { name: "»" }).click();
    await page.waitForTimeout(200);

    await expect.soft(adt01.getByRole("cell", { name: "1", exact: true }).first()).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Lars", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Mongolia", exact: true })).not.toBeVisible();

    await expect.soft(adt01.getByRole("cell", { name: "21", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Unity", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Tajikistan", exact: true })).not.toBeVisible();

    await expect.soft(adt01.getByRole("cell", { name: "41", exact: true })).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Elvis", exact: true })).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Belize", exact: true })).toBeVisible();

    // Back to first page
    await adt01.getByRole("link", { name: "«" }).click();
    await page.waitForTimeout(200);

    await expect.soft(adt01.getByRole("cell", { name: "1", exact: true }).first()).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Lars", exact: true })).toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Mongolia", exact: true })).toBeVisible();

    await expect.soft(adt01.getByRole("cell", { name: "21", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Unity", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Tajikistan", exact: true })).not.toBeVisible();

    await expect.soft(adt01.getByRole("cell", { name: "41", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Elvis", exact: true })).not.toBeVisible();
    await expect.soft(adt01.getByRole("cell", { name: "Belize", exact: true })).not.toBeVisible();
  });
});
