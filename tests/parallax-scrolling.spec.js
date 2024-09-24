"use strict";

import { test, expect } from "../global-setup";

let slug = "/parallax-scrolling";
let heading = "Parallax Effect";

test.describe("Parallax Effect - Scroll & Zoom Parallax Effect", () => {
  let section = "";
  let parallax_section = "";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/extensions\/ea-parallax/
    );

    section = page.getByTestId("119946dd");
    parallax_section = section.locator("#jarallax-container-0");

    await parallax_section.scrollIntoViewIfNeeded();
  });

  test("The sections should load", async ({ page }) => {
    test.slow();
    await expect(parallax_section).toBeVisible();

    await expect(parallax_section).toHaveAttribute(
      "style",
      "position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; z-index: -100;"
    );
    await expect(parallax_section.locator("div")).toHaveAttribute(
      "style",
      /background-position: 50% 50%; background-size: cover; background-repeat: no-repeat; background-image: url\("https:\/\/essential-addons.com\/wp-content\/uploads\/2020\/06\/BG-Image.png"\); position: absolute; top: 0px; left: 0px; width:\s*-?\d+(\.\d+)?px; height:\s*-?\d+(\.\d+)?px; overflow: hidden; pointer-events: none; transform-style: preserve-3d; backface-visibility: hidden; will-change: transform, opacity; margin-top:\s*-?\d+(\.\d+)?px; transform: translate3d\(0px,\s*-?\d+(\.\d+)?px, 0px\);/
    );
  });

  test("Page Scroll should trigger parallax effect", async ({ page }) => {
    test.slow();
    await expect(parallax_section).toBeVisible();

    // Scroll to page top
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeInViewport();

    // Assert parallax css values
    await expect(parallax_section.locator("div")).toHaveAttribute(
      "style",
      /background-position: 50% 50%; background-size: cover; background-repeat: no-repeat; background-image: url\("https:\/\/essential-addons.com\/wp-content\/uploads\/2020\/06\/BG-Image.png"\); position: absolute; top: 0px; left: 0px; width:\s*\d+(\.\d+)?px; height:\s*\d+(\.\d+)?px; overflow: hidden; pointer-events: none; transform-style: preserve-3d; backface-visibility: hidden; will-change: transform, opacity; margin-top:\s*-?\d+(\.\d+)?px; transform: translate3d\(0px,\s*-?\d+(\.\d+)?px, 0px\);/
    );

    // Scroll down
    await page.getByTestId("d509e6a").scrollIntoViewIfNeeded();
    await expect(page.getByTestId("d509e6a")).toBeInViewport();

    // Assert parallax css values
    await expect(parallax_section.locator("div")).toHaveAttribute(
      "style",
      /background-position: 50% 50%; background-size: cover; background-repeat: no-repeat; background-image: url\("https:\/\/essential-addons.com\/wp-content\/uploads\/2020\/06\/BG-Image.png"\); position: absolute; top: 0px; left: 0px; width:\s*\d+(\.\d+)?px; height:\s*\d+(\.\d+)?px; overflow: hidden; pointer-events: none; transform-style: preserve-3d; backface-visibility: hidden; will-change: transform, opacity; margin-top:\s*-?\d+(\.\d+)?px; transform: translate3d\(0px,\s*-?\d+(\.\d+)?px, 0px\);/
    );
  });
});
