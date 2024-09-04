"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/content-protection";
let heading = "Content Protection";

test.describe("Content Protection - Password", () => {
  let root = "";
  let protected_section = "";

  let protected_section_message_heading = "";
  let protected_section_message_content = "";

  let protected_section_form_input = "";
  let protected_section_form_submit = "";

  let wrong_pass_error_section = " ";
  let wrong_pass_error_message = "Password does not match.";

  let content_section = "";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/extensions\/ea-content-protection/
    );

    root = page.getByTestId("795d6cb7");
    protected_section = root.locator(".eael-protected-content");
    protected_section_message_heading = protected_section.getByText("Want to take a look");
    protected_section_message_content = protected_section.getByText("Use 1234 to access the content");
    protected_section_form_input = protected_section.locator(".eael-password");
    protected_section_form_submit = protected_section.locator(".eael-submit");
    wrong_pass_error_section = protected_section.locator(".protected-content-error-msg");

    content_section = root.locator(".elementor-image-gallery");

    await root.scrollIntoViewIfNeeded();
  });

  test("Password section should be present and content should be hidden", async ({ page }) => {
    test.slow();
    await expect(root).toBeVisible();

    // Assert visibility of password section
    await expect(protected_section).toBeVisible();
    await expect(protected_section_message_heading).toBeVisible();
    await expect(protected_section_message_content).toBeVisible();
    await expect(protected_section_form_input).toBeVisible();
    await expect(protected_section_form_submit).toBeVisible();

    // Assert in-visibility of content section
    await expect(content_section).toBeHidden();
  });

  test("Wrong password should show error", async ({ page }) => {
    test.slow();
    await expect(root).toBeVisible();

    // Enter wrong password
    await protected_section_form_input.click();
    await protected_section_form_input.type("wrong_password");
    await protected_section_form_submit.click();
    
    // Wait for page to load
    await page.waitForTimeout(1000);
    await page.waitForLoadState("domcontentloaded");

    // Assert visibility of error
    await expect(wrong_pass_error_section).toBeVisible();
    await expect(page.getByText(wrong_pass_error_message)).toBeInViewport();
    await expect(page.getByText(wrong_pass_error_message)).toBeVisible();
  });

  test("Correct password should reveal the content", async ({ page }) => {
    test.slow();
    await expect(root).toBeVisible();

    // Enter Correct password
    await protected_section_form_input.click();
    await protected_section_form_input.type("1234");
    await protected_section_form_submit.click();

    // Wait for page to load
    await page.waitForTimeout(500);
    await page.waitForLoadState("domcontentloaded");

    // Assert visibility of content
    await expect(content_section).toBeVisible();
    await expect(content_section).toBeInViewport();
    await expect(page.getByRole('link', { name: 'Content Protection 102' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Content Protection 103' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Content Protection 104' })).toBeVisible();
  });
});

test.describe("Content Protection - Structure Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
  });

  const target_selectors = [
    {
      section_name: "Style 01",
      selector: ".elementor-element-57148cd9",
    },
    {
      section_name: "Style 02",
      selector: ".elementor-element-37675534",
    },
  ];

  target_selectors.forEach((target) => {
    test(target.section_name, async ({ page }) => {
      const selector = target.selector;
      await page.waitForSelector(selector);
      await page.locator(selector).scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);

      const filePath = path.join(__dirname, `../snapshots/${slug.substring(1)}-${selector.substring(1)}.json`);

      const nodeStructure = await page.evaluate(evaluateNodeStructure, selector);
      saveStructure(nodeStructure, filePath);

      const existingNodeStructure = getStructure(filePath);
      expect(nodeStructure).toEqual(existingNodeStructure);
    });
  });
});