"use strict";

import { test, expect } from "../global-setup";

let slug = "/mailchimp";
let heading = "MailChimp";

// test.describe("MailChimp", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
//     await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute("href", /docs\/mailchimp/);
//   });

//   test("Test Section: Easy to Configure", async ({ page }) => {
//     await page.getByRole("heading", { name: "Easy to Configure" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Easy to Configure" })).toBeVisible();
//     await expect(
//       page.getByText("Connect your MailChimp account with just one click and display stunning Form")
//     ).toBeVisible();
//   });
// });
