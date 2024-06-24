"use strict";
import { test, expect } from "../global-setup";

let slug = "/particle-effect";
let heading = "Particles";

test.describe("Particles", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/extensions\/particles/
    );
  });

  test("Test Section: EA Particles Default Style 01", async ({ page }) => {
    await page.getByRole("heading", { name: "EA Particles Default Style 01" }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "EA Particles Default Style 01" })).toBeVisible();
    await expect(page.getByText("Go with the default or choose other styles")).toBeVisible();
  });
});
