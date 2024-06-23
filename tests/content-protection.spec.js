"use strict";
import { test, expect } from "../global-setup";

let slug = "/content-protection";
let heading = "Content Protection";

test.describe("Content Protection", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/extensions\/ea-content-protection/
    );
  });

  test("Test Section: Content Protection Style 01", async ({ page }) => {
    let section_top = page.getByTestId("d29d055");
    await section_top.getByRole("heading", { name: "Content Protection Style 01" }).scrollIntoViewIfNeeded();
    await expect(section_top.getByRole("heading", { name: "Content Protection Style 01" })).toBeVisible();
    await expect(section_top.getByText("Set password to protect any content/block.")).toBeVisible();
  });
});
