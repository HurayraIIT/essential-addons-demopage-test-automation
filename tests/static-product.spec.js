"use strict";
import { test, expect } from "../global-setup";
let slug = "/content-elements/static-product/";

test.describe("Static Product Preset - 1", () => {
  let heading = "Default Style 241210";
  let sectionId = null;
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    sectionId = page.getByTestId("4aacb1e");
  });

  test("Test Content Tab", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Product 01 Name" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Product 01 Name" })).toBeVisible();
    await expect(page.getByText("Description of Product 01 Name")).toBeVisible();
    await expect(page.getByText("$71.5 (1.5 REVIEWS)")).toBeVisible();
    await expect(page.getByRole("link", { name: "View Details 01" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Add To Cart 01" })).toBeVisible();

    await expect(sectionId).toMatchAriaSnapshot(`
    - heading /Product 01 Name 241210/ [level=2]:
      - link /Product 01 Name 241210/
    - paragraph
    - paragraph: /Description of Product 01 Name 241210/
    - paragraph
    - text: /\\$71\\.5 \\(1\\.5 REVIEWS\\)/
    - link /View Details 01/
    - link /Add To Cart 01/
    `);
  });
});

test.describe("Static Product Preset - 2", () => {
  let heading = "Cart Button On Hover Image 241210";
  let sectionId = null;
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    sectionId = page.getByTestId("6dbd9a9");
  });

  test("Test Content Tab", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Product 02 Name" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Product 02 Name" })).toBeVisible();
    await expect(page.getByText("Description of Product 02 Name")).toBeVisible();
    await expect(page.getByText("$72.5 (2.5 REVIEWS)")).toBeVisible();
    await expect(page.getByRole("link", { name: "View Details 02" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Add To Cart 02" })).toBeVisible();

    await expect(sectionId).toMatchAriaSnapshot(`
    - link /Add To Cart 02/
    - heading /Product 02 Name 241210/ [level=2]:
      - link /Product 02 Name 241210/
    - paragraph
    - paragraph: /Description of Product 02 Name 241210/
    - paragraph
    - text: /\\$72\\.5 \\(2\\.5 REVIEWS\\)/
    - link /View Details 02/
    `);
  });
});

test.describe("Static Product Preset - 3", () => {
  let heading = "All Content On Hover Image 241210";
  let sectionId = null;
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    sectionId = page.getByTestId("3aa9c9e");
  });

  test("Test Content Tab", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Product 03 Name" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Product 03 Name" })).toBeVisible();
    await expect(page.getByText("Description of Product 03 Name")).toBeVisible();
    await expect(page.getByText("$73.5 (3.5 REVIEWS)")).toBeVisible();
    await expect(page.getByRole("link", { name: "View Details 03" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Add To Cart 03" })).toBeVisible();

    await expect(sectionId).toMatchAriaSnapshot(`
    - heading /Product 03 Name 241210/ [level=2]:
      - link /Product 03 Name 241210/
    - text: /\\$73\\.5 \\(3\\.5 REVIEWS\\)/
    - paragraph
    - paragraph: /Description of Product 03 Name 241210/
    - paragraph
    - link /View Details 03/
    - link /Add To Cart 03/
    `);
  });
});
