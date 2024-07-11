"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/fancy-chart";
let heading = "Fancy Chart";

test.describe("Fancy Chart", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/ea-fancy-chart/);
    });

    test("Test Section: Visualize Data With Different Type Of Dynamic Graphs Using EA Fancy Chart", async ({ page }) => {
        await page.getByRole("heading", { name: "Visualize Data With Different Type Of Dynamic Graphs Using EA Fancy Chart" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Visualize Data With Different Type Of Dynamic Graphs Using EA Fancy Chart" })).toBeVisible();
        // await expect(page.getByText("Morph your logos ")).toBeVisible();
    });
});
