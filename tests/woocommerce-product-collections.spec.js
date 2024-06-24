"use strict";
import { test, expect } from "../global-setup";

let slug = "/woocommerce-product-collections";
let heading = "Woo Product Collection";

test.describe("Woo Product Collection", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/dynamic-content-elements\/ea-woo-product-collections/
    );
  });

  test("Test Section: Woo Product Grid With Category", async ({ page }) => {
    await page.getByRole("heading", { name: "Woo Product Grid With Category" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Woo Product Grid With Category" })).toBeVisible();
    await expect(page.getByText("Choose your preferred category from ‘Collection Type")).toBeVisible();
  });
});
