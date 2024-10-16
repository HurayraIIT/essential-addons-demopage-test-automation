"use strict";
import { test, expect } from "../global-setup";

let slug = "/simple-menu";
let heading = "Simple Menu";

// test.describe("Simple Menu", () => {
//   // Setup
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
//       "href",
//       /docs\/content-elements\/simple-menu/
//     );
//   });

//   test("Test Section: Style Default Skin & Horizontal Layout", async ({ page }) => {
//     await page
//       .getByTestId("3fcb4700")
//       .getByRole("heading", { name: "Style Default Skin & Horizontal Layout" })
//       .scrollIntoViewIfNeeded();
//     await expect(
//       page.getByTestId("3fcb4700").getByRole("heading", { name: "Style Default Skin & Horizontal Layout" })
//     ).toBeVisible();
//     await expect(
//       page.getByTestId("48313d59").getByText("Add drop down menu icon, animation effect, hover effect")
//     ).toBeVisible();
//   });
// });


test.describe("Simple Menu", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(slug);
    });

    test("Style Default Skin & Horizontal Layout Preset 1", async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Style Default Skin & Horizontal Layout Preset 1' });
        await heading.scrollIntoViewIfNeeded();
        await expect(heading).toBeVisible();
    });

});