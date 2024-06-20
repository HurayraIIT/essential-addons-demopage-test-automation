// @ts-check
import { test, expect } from '@playwright/test';

test('Initial Test', async ({ page }) => {
  await page.goto("/simple-menu");

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole("heading", { name: "Simple Menu" })).toBeVisible();
});
