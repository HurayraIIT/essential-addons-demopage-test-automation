"use strict";

import { test, expect } from "../global-setup";

let slug = "/advanced-menu";
let heading = "Advanced Menu";

test.describe("Advanced Menu - Style Default Skin & Horizontal Layout", () => {
  let menu = "";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/content-elements\/ea-advanced-menu/
    );

    menu = page.getByTestId("6a863ab4");
    await menu.scrollIntoViewIfNeeded();
  });

  test("All sections should be present", async ({ page }) => {
    await expect(menu).toBeVisible();

    await expect(menu.locator("#menu-item-4842").getByRole("link", { name: "Home" })).toBeVisible();
    await expect(menu.locator("#menu-item-4843").getByRole("link", { name: "Elements" })).toBeVisible();
    await expect(menu.locator("#menu-item-4859").getByRole("link", { name: "Support" })).toBeVisible();
    await expect(menu.locator("#menu-item-4861").getByRole("link", { name: "Blog" })).toBeVisible();
    await expect(menu.locator("#menu-item-4862").getByRole("link", { name: "Contact Us" })).toBeVisible();
    await expect(menu.locator("#menu-item-4843").getByRole("link", { name: "Elements" })).toBeVisible();

    // Submenu should be hidden
    await expect(menu.getByRole("link", { name: "Advanced Accordion for" })).toBeHidden();
    await expect(menu.getByRole("link", { name: "Advanced Menu" })).toBeHidden();

    // Hover the menu item to reveal submenu
    await menu.locator("#menu-item-4843").getByRole("link", { name: "Elements" }).hover();
    await expect(menu.getByRole("link", { name: "Advanced Accordion for" })).toBeVisible();
    await expect(menu.getByRole("link", { name: "Advanced Menu" })).toBeVisible();
  });
});
