"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/conditional-display";
let heading = "Conditional Display";

test.describe("Conditional Display", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.locator('h3.elementor-image-box-title')).toHaveText(heading);
  });
});
