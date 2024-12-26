"use strict";

import { test, expect } from "../global-setup";

test.describe("Table of Contents - Live Demo Page", () => {
  let slug = "https://essential-addons.com/elementor/table-of-content";
  let heading = "Table of Contents";

  let toc = "";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByTestId("1dfd57b3").getByRole("heading", { name: heading, exact: true })).toBeVisible();

    toc = page.locator("#eael-toc");
  });

  test("The TOC Should load with all sections", async ({ page }) => {
    test.slow();

    await page.getByRole("heading", { name: "Table Of Contents Demo 1" }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: "Table Of Contents Demo 1" })).toBeVisible();
    await expect.soft(page.getByText("Choose the supported headers types of blogs like")).toBeVisible();

    await expect.soft(toc.getByRole("button", { name: " Table of Contents" })).toBeVisible();
    await toc.getByRole("button", { name: " Table of Contents" }).click();
    await expect.soft(toc.getByRole("heading", { name: "Table of Contents" })).toBeVisible();
    await expect.soft(toc.getByText("×", { exact: true })).toBeVisible();
    await expect.soft(page.locator("#eael-toc div").filter({ hasText: "Essential Addons" })).toBeVisible();
    await expect.soft(toc.locator("li").filter({ hasText: "Essential Addons Demo" })).toBeVisible();
    await expect.soft(toc.getByRole("link", { name: "Different Styles Of Table Of" })).toBeVisible();
    await expect.soft(toc.getByRole("link", { name: "EA Duplicator" })).toBeVisible();
    await expect.soft(toc.getByRole("link", { name: "EA Reading Progress Bar" })).toBeVisible();
    await expect.soft(toc.getByRole("link", { name: "The passage experienced a" })).toBeVisible();
    await expect.soft(toc.getByRole("link", { name: "Upgrade License" })).toBeVisible();
    await expect.soft(toc.getByRole("link", { name: "Print Invoice" })).toBeVisible();
    await expect.soft(toc.getByRole("link", { name: "Lorem ipsum, or lipsum as it" })).toBeVisible();
    await expect.soft(toc.getByRole("link", { name: "Profile" })).toBeVisible();
    await expect.soft(toc.getByRole("link", { name: "Subscription" })).toBeVisible();
    await expect.soft(toc.getByRole("link", { name: "EA Content Protection" })).toBeVisible();
    await expect.soft(toc.getByRole("link", { name: "EA Advanced Tooltip" })).toBeVisible();
    await expect.soft(toc.getByRole("link", { name: "The passage is attributed to" })).toBeVisible();
  });

  test("Page Scrolling should toggle TOC visibility", async ({ page }) => {
    test.slow();

    await page.getByRole("heading", { name: "Table Of Contents Demo 1" }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: "Table Of Contents Demo 1" })).toBeVisible();
    await expect.soft(page.getByText("Choose the supported headers types of blogs like")).toBeVisible();

    // TOC Should be visible
    await expect.soft(toc.getByRole("button", { name: " Table of Contents" })).toBeVisible();

    // Scroll To Page Top
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    // TOC Should be hidden
    await expect.soft(toc.getByRole("button", { name: " Table of Contents" })).toBeHidden();
  });

  test("TOC Anchors should trigger page scroll", async ({ page }) => {
    test.slow();

    await page.getByRole("heading", { name: "Table Of Contents Demo 1" }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: "Table Of Contents Demo 1" })).toBeVisible();
    await expect.soft(page.getByText("Choose the supported headers types of blogs like")).toBeVisible();

    // Open the TOC
    await expect.soft(toc.getByRole("button", { name: " Table of Contents" })).toBeVisible();
    await toc.getByRole("button", { name: " Table of Contents" }).click();

    await page.locator("li").filter({ hasText: "Different Styles Of Table Of" }).click();
    await expect.soft(page.getByRole("heading", { name: "Different Styles Of Table Of" })).toBeInViewport();

    await page.locator("li").filter({ hasText: "EA Duplicator" }).click();
    await expect.soft(page.getByRole("heading", { name: "EA Duplicator" })).toBeInViewport();

    await page.getByRole("link", { name: "EA Reading Progress Bar" }).click();
    await expect.soft(page.getByRole("heading", { name: "EA Reading Progress Bar" })).toBeInViewport();

    await page.getByRole("link", { name: "The passage experienced a" }).click();
    await expect.soft(page.getByRole("heading", { name: "The passage experienced a" })).toBeInViewport();

    await page.getByRole("link", { name: "Upgrade License" }).click();
    await expect.soft(page.getByRole("heading", { name: "Upgrade License" })).toBeInViewport();

    await page.getByRole("link", { name: "Print Invoice" }).click();
    await expect.soft(page.getByRole("heading", { name: "Print Invoice" })).toBeInViewport();

    await page.getByRole("link", { name: "EA Content Protection" }).click();
    await expect.soft(page.getByRole("heading", { name: "EA Content Protection" })).toBeInViewport();

    await page.getByRole("link", { name: "The passage is attributed to" }).click();
    await expect.soft(page.getByRole("heading", { name: "The passage is attributed to" })).toBeInViewport();

    await page.locator("li").filter({ hasText: "Different Styles Of Table Of" }).click();
    await expect.soft(page.getByRole("heading", { name: "Different Styles Of Table Of" })).toBeInViewport();
  });
});
