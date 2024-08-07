"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/progress-bar";
let heading = "Progress Bar";

test.describe("Progress Bar", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/progress-bar/);
    });

    test("Test Section: Implement Unique Styles ", async ({ page }) => {
        await page.getByRole("heading", { name: "Implement Unique Styles " }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Implement Unique Styles " })).toBeVisible();
        await expect(page.getByText("Choose desired Layout ")).toBeVisible();
    });
});
