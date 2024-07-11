"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/lightbox-modal";
let heading = "Lightbox & Modal";

test.describe("Lightbox & Modal", () => {
    // Setup
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
        await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/lightbox-modal/);
    });

    test("Test Section: Popup Images On Button Trigger", async ({ page }) => {
        await page.getByRole("heading", { name: "Popup Images On Button Trigger" }).scrollIntoViewIfNeeded();
        await expect(page.getByRole("heading", { name: "Popup Images On Button Trigger" })).toBeVisible();
        await expect(page.getByText("Represent your amazing ")).toBeVisible();
    });
});
