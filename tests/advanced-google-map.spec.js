"use strict";

import { test, expect } from "../global-setup";

test.describe("Advanced Google Map - Basic Map With Marker & Standard Theme", () => {
  let slug = "https://essential-addons.com/elementor/advanced-google-map";
  let heading = "Advanced Google Map";
  let map = "";
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect.soft(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect
      .soft(page.getByRole("link", { name: "Documentation" }))
      .toHaveAttribute("href", /docs\/advanced-google-map/);

    await page.getByRole("heading", { name: "Basic Map With Marker & Standard Theme" }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: "Basic Map With Marker & Standard Theme" })).toBeVisible();

    map = page.locator("#eael-google-map-5930a8e8");
  });

  test("All Sections Should Load", async () => {
    test.slow();
    await expect.soft(map).toBeVisible();

    await expect.soft(map.getByLabel("Zoom in", { exact: true })).toBeVisible({ timeout: 15000 });
    await map.getByLabel("Zoom in", { exact: true }).click();

    await expect.soft(map.getByLabel("Zoom out", { exact: true })).toBeVisible();
    await map.getByLabel("Zoom out", { exact: true }).click();

    await expect.soft(map.getByLabel("Show street map")).toBeVisible();
    await map.getByLabel("Show street map").click();

    await expect.soft(map.getByRole("menuitemcheckbox", { name: "Terrain" })).toBeVisible();

    await expect.soft(map.getByLabel("Show satellite imagery")).toBeVisible();
    await map.getByLabel("Show satellite imagery").click();

    await map.getByRole("menuitemcheckbox", { name: "Labels" }).click();
    await expect.soft(map.getByRole("button", { name: "Tilt map" })).toBeVisible();
    await expect.soft(map.getByLabel("WPDepeloper, Inc.")).toBeVisible();

    await expect.soft(map.getByLabel("Drag Pegman onto the map to")).toBeVisible();

    await expect.soft(map.getByLabel("Toggle fullscreen view")).toBeVisible();
  });
});
