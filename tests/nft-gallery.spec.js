"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/nft-gallery";
let heading = "NFT Gallery";

test.describe("NFT Gallery", () => {
  // Setup
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/ea-nft-gallery/);
  });

  test("Test Section: Display Your NFT Gallery In A Stunning Grid View", async ({ page }) => {
    await page.getByRole("heading", { name: "Display Your NFT Gallery In A Stunning Grid View" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Display Your NFT Gallery In A Stunning Grid View" })).toBeVisible();
    await expect(page.getByText("Grab the attention of your website visitors in an engaging way by showcasing your NFT gallery with a modern and stylish grid view layout.")).toBeVisible();
  });
});
