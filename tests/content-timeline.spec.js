"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/content-timeline";
let heading = "Content Timeline";

test.describe("Content Timeline", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/content-timeline/);
  });

  test("Test Section: Center Layout With Custom Source", async ({ page }) => {
    await page.getByRole("heading", { name: "Center Layout With Custom Source" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Center Layout With Custom Source" })).toBeVisible();
    await expect(page.getByText("Choose custom source from ‘Timeline Content’ and style each section of it to make it look standout")).toBeVisible();
  });
});
