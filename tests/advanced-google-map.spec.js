"use strict";

import { test, expect } from "../global-setup";

let slug = "/advanced-google-map";
let heading = "Advanced Google Map";

test.describe("Advanced Google Map - Basic Map With Marker & Standard Theme", () => {
  let map = "";
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/advanced-google-map/
    );

    await page.getByRole("heading", { name: "Basic Map With Marker & Standard Theme" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Basic Map With Marker & Standard Theme" })).toBeVisible();

    map = page.locator("#eael-google-map-5930a8e8");
  });

  test("All Sections Should Load", async () => {
    test.slow();
    await expect(map).toBeVisible();

    await expect(map.getByLabel("Zoom in", { exact: true })).toBeVisible({ timeout: 15000 });
    await map.getByLabel("Zoom in", { exact: true }).click();

    await expect(map.getByLabel("Zoom out", { exact: true })).toBeVisible();
    await map.getByLabel("Zoom out", { exact: true }).click();

    await expect(map.getByLabel("Show street map")).toBeVisible();
    await map.getByLabel("Show street map").click();

    await expect(map.getByRole("menuitemcheckbox", { name: "Terrain" })).toBeVisible();

    await expect(map.getByLabel("Show satellite imagery")).toBeVisible();
    await map.getByLabel("Show satellite imagery").click();

    await map.getByRole("menuitemcheckbox", { name: "Labels" }).click();
    await expect(map.getByRole("button", { name: "Tilt map" })).toBeVisible();
    await expect(map.getByLabel("WPDepeloper, Inc.")).toBeVisible();

    await expect(map.getByLabel("Drag Pegman onto the map to")).toBeVisible();

    await expect(map.getByLabel("Toggle fullscreen view")).toBeVisible();
  });
});