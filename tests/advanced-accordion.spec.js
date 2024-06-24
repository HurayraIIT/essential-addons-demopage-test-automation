"use strict";
import { test, expect } from "../global-setup";

let slug = "/advanced-accordion";
let heading = "Advanced Accordion";

test.describe("Advanced Accordion - 73d0d346", () => {
  let accordion1 = "";
  let item1 = "";
  let item2 = "";
  let item3 = "";

  let item1_icon_closed = "";
  let item1_icon_opened = "";
  let item1_title = "";
  let item1_angle = "";
  let item1_content = "";

  let item2_icon_closed = "";
  let item2_icon_opened = "";
  let item2_title = "";
  let item2_angle = "";
  let item2_content = "";

  let item3_icon_closed = "";
  let item3_icon_opened = "";
  let item3_title = "";
  let item3_angle = "";
  let item3_content = "";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/advanced-accordion/);

    accordion1 = page.getByTestId("73d0d346");
    await accordion1.scrollIntoViewIfNeeded();

    item1 = accordion1.locator(".eael-accordion-list").nth(0);
    item1_icon_closed = item1.locator(".fa-accordion-icon.far.fa-thumbs-up");
    item1_icon_opened = item1.locator(".fa-accordion-icon.fas.fa-minus");
    item1_title = item1.getByText("Font Awesome Icons Used");
    item1_angle = item1.locator(".fa-toggle.fas.fa-angle-right");
    item1_content = item1.getByText("Lorem ipsum dolor sit amet, consectetur");

    item2 = accordion1.locator(".eael-accordion-list").nth(1);
    item2_icon_closed = item2.locator(".fa-accordion-icon.far.fa-thumbs-up");
    item2_icon_opened = item2.locator(".fa-accordion-icon.fas.fa-minus");
    item2_title = item2.getByText("Free Demo Content Installations");
    item2_angle = item2.locator(".fa-toggle.fas.fa-angle-right");
    item2_content = item2.getByText("Netflix has struck a deal set");

    item3 = accordion1.locator(".eael-accordion-list").nth(2);
    item3_icon_closed = item3.locator(".fa-accordion-icon.far.fa-thumbs-up");
    item3_icon_opened = item3.locator(".fa-accordion-icon.fas.fa-minus");
    item3_title = item3.getByText("Visual Page Builder");
    item3_angle = item3.locator(".fa-toggle.fas.fa-angle-right");
    item3_content = item3.getByText("Lorem ipsum dolor sit amet");
  });

  test("Accordion Sections Should Load and first item should be open by default", async ({ page }) => {
    await expect(accordion1).toBeVisible();

    // Item 1 is opened by default
    await expect(item1_icon_closed).toBeHidden();
    await expect(item1_icon_opened).toBeVisible();
    await expect(item1_title).toBeVisible();
    await expect(item1_angle).toBeVisible();
    await expect(item1_content).toBeVisible();

    // Item 2 is closed
    await expect(item2_icon_closed).toBeVisible();
    await expect(item2_icon_opened).toBeHidden();
    await expect(item2_title).toBeVisible();
    await expect(item2_angle).toBeVisible();
    await expect(item2_content).toBeHidden();

    // Item 3 is closed
    await expect(item3_icon_closed).toBeVisible();
    await expect(item3_icon_opened).toBeHidden();
    await expect(item3_title).toBeVisible();
    await expect(item3_angle).toBeVisible();
    await expect(item3_content).toBeHidden();
  });

  test("Accordion Expand/Shrink Should Work", async ({ page }) => {
    await expect(accordion1).toBeVisible();

    // Click Item 2
    await item2_title.click();
    await page.waitForTimeout(300);

    // Item 1 should be closed
    await expect(item1_icon_closed).toBeVisible();
    await expect(item1_icon_opened).toBeHidden();
    await expect(item1_title).toBeVisible();
    await expect(item1_angle).toBeVisible();
    await expect(item1_content).toBeHidden();

    // Item 2 should be opened
    await expect(item2_icon_closed).toBeHidden();
    await expect(item2_icon_opened).toBeVisible();
    await expect(item2_title).toBeVisible();
    await expect(item2_angle).toBeVisible();
    await expect(item2_content).toBeVisible();

    // Item 3 should be closed
    await expect(item3_icon_closed).toBeVisible();
    await expect(item3_icon_opened).toBeHidden();
    await expect(item3_title).toBeVisible();
    await expect(item3_angle).toBeVisible();
    await expect(item3_content).toBeHidden();
  });
});
