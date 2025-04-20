"use strict";

import { expect, test } from "../global-setup";

test.describe("Advanced Google Map - Basic Map With Marker & Standard Theme", () => {
  let slug = "/dynamic-content-elements/advanced-google-map/";
  let map = "";
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.getByRole("heading", { name: "Map Type: Basic | Map Theme: Standard" }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: "Map Type: Basic | Map Theme: Standard" })).toBeVisible();

    map = page.locator("#eael-google-map-ab1ebd4");
  });

  test("All Sections Should Load", async () => {
    test.slow();
    await expect.soft(map).toBeVisible();

    await expect.soft(map.getByLabel("Show street map")).toBeVisible();
    await map.getByLabel("Show street map").click();

    await expect.soft(map.getByRole("menuitemcheckbox", { name: "Terrain" })).toBeVisible();

    await expect.soft(map.getByLabel("Show satellite imagery")).toBeVisible();
    await map.getByLabel("Show satellite imagery").click();

    await map.getByRole("menuitemcheckbox", { name: "Labels" }).click();
    await expect.soft(map.getByLabel("Drag Pegman onto the map to")).toBeVisible();

    await expect.soft(map.getByLabel("Toggle fullscreen view")).toBeVisible();
  });
});
