"use strict";

import { test, expect } from "../global-setup";

test.describe("Learndash Course List - Live Demo Page", () => {
  let slug = "https://essential-addons.com/learndash-course-list/";
  let heading = "LearnDash Course List";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true }).first();
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
  });

  test("Test Contents > Configure The Course List Layout In Advance", async ({ page }) => {
    let widget = page.getByTestId("362fe4a0");
    await widget.scrollIntoViewIfNeeded();
    await expect(widget).toMatchAriaSnapshot(`
      - link /LearnDash Course List \\d+/:
        - img /LearnDash Course List \\d+/
      - text: /\\$\\d+/
      - heading "Communication Master Class-Complete Guide To Be An Expert" [level=4]:
        - link "Communication Master Class-Complete Guide To Be An Expert"
      - paragraph: In iOS, interface elements layouts can configured change shape size …
      - link /LearnDash Course List \\d+/:
        - img /LearnDash Course List \\d+/
      - text: /\\$\\d+/
      - heading /CSS Master Course-The Complete Guide Of \\d+/ [level=4]:
        - link /CSS Master Course-The Complete Guide Of \\d+/
      - paragraph: In iOS, interface elements layouts can configured change shape size …
      - link /LearnDash Course List \\d+/:
        - img /LearnDash Course List \\d+/
      - text: /\\$\\d+/
      - heading "UI & UX Web Design Master Course-Strategy, Design & Development" [level=4]:
        - link "UI & UX Web Design Master Course-Strategy, Design & Development"
      - paragraph: In iOS, interface elements layouts can configured change shape size …
      `);
  });

  test("Test Contents > Beautifully Style Your LearnDash Course Layout", async ({ page }) => {
    let widget = page.getByTestId("151c1d90");
    await widget.scrollIntoViewIfNeeded();
    await expect(widget).toMatchAriaSnapshot(`
      - text: Affiliate Intermediate
      - link /LearnDash Course List \\d+ \\$\\d+/:
        - img /LearnDash Course List \\d+/
      - heading "Communication Master Class-Complete Guide To Be An Expert" [level=4]:
        - link "Communication Master Class-Complete Guide To Be An Expert"
      - text: Expert SEO
      - link /LearnDash Course List \\d+ \\$\\d+/:
        - img /LearnDash Course List \\d+/
      - heading /CSS Master Course-The Complete Guide Of \\d+/ [level=4]:
        - link /CSS Master Course-The Complete Guide Of \\d+/
      - text: Design Intermediate
      - link /LearnDash Course List \\d+ \\$\\d+/:
        - img /LearnDash Course List \\d+/
      - heading "UI & UX Web Design Master Course-Strategy, Design & Development" [level=4]:
        - link "UI & UX Web Design Master Course-Strategy, Design & Development"
      `);
  });

  test("Test Contents > Impress Your Visitors With Innovation", async ({ page }) => {
    let widget = page.getByTestId("13eb12cb");
    await widget.scrollIntoViewIfNeeded();

    await expect(widget).toMatchAriaSnapshot(`
      - link /LearnDash Course List \\d+/:
        - img /LearnDash Course List \\d+/
      - text: /\\$\\d+/
      - heading "Communication Master Class-Complete Guide To Be An Expert" [level=4]:
        - link "Communication Master Class-Complete Guide To Be An Expert"
      - paragraph: In iOS, interface elements layouts can configured change shape size …
      - link /LearnDash Course List \\d+/:
        - img /LearnDash Course List \\d+/
      - text: /\\$\\d+/
      - heading "UI & UX Web Design Master Course-Strategy, Design & Development" [level=4]:
        - link "UI & UX Web Design Master Course-Strategy, Design & Development"
      - paragraph: In iOS, interface elements layouts can configured change shape size …
      - link /LearnDash Course List \\d+/:
        - img /LearnDash Course List \\d+/
      - text: /\\$\\d+/
      - heading "Email & Affiliate Marketing Mastermind" [level=4]:
        - link "Email & Affiliate Marketing Mastermind"
      - paragraph: In iOS, interface elements layouts can configured change shape size …
      `);
  });

  test("Test Contents > Make It Standout The Way You Want", async ({ page }) => {
    let widget = page.getByTestId("6abec2d3");
    await widget.scrollIntoViewIfNeeded();

    await expect(widget).toMatchAriaSnapshot(`
      - text: Affiliate Intermediate
      - link /LearnDash Course List \\d+/:
        - img /LearnDash Course List \\d+/
      - heading "Communication Master Class-Complete Guide To Be An Expert" [level=4]:
        - link "Communication Master Class-Complete Guide To Be An Expert"
      - text: /\\$\\d+ 4 Nov \\d+/
      - link "Read More"
      - text: Design Intermediate
      - link /LearnDash Course List \\d+/:
        - img /LearnDash Course List \\d+/
      - heading "UI & UX Web Design Master Course-Strategy, Design & Development" [level=4]:
        - link "UI & UX Web Design Master Course-Strategy, Design & Development"
      - text: /\\$\\d+ 4 Nov \\d+/
      - link "Read More"
      - text: Expert Intermediate
      - link /LearnDash Course List \\d+/:
        - img /LearnDash Course List \\d+/
      - heading "Email & Affiliate Marketing Mastermind" [level=4]:
        - link "Email & Affiliate Marketing Mastermind"
      - text: /\\$\\d+ 4 Nov \\d+/
      - link "Read More"
      `);
  });

  test("Test Contents > Exclusively Change The Appearance", async ({ page }) => {
    let widget = page.getByTestId("6ca6018");
    await widget.scrollIntoViewIfNeeded();
    await expect(widget).toMatchAriaSnapshot(`
      - link /LearnDash Course List \\d+ \\$\\d+/:
        - img /LearnDash Course List \\d+/
      - heading /CSS Master Course-The Complete Guide Of \\d+/ [level=4]:
        - link /CSS Master Course-The Complete Guide Of \\d+/
      - paragraph: In iOS, interface elements layouts can configured change shape size …
      - link /LearnDash Course List \\d+ \\$\\d+/:
        - img /LearnDash Course List \\d+/
      - heading "Communication Master Class-Complete Guide To Be An Expert" [level=4]:
        - link "Communication Master Class-Complete Guide To Be An Expert"
      - paragraph: In iOS, interface elements layouts can configured change shape size …
      - link /LearnDash Course List \\d+ \\$\\d+/:
        - img /LearnDash Course List \\d+/
      - heading "Email & Affiliate Marketing Mastermind" [level=4]:
        - link "Email & Affiliate Marketing Mastermind"
      - paragraph: In iOS, interface elements layouts can configured change shape size …
      `);
    await expect(widget).toMatchAriaSnapshot(`
      - link /LearnDash Course List \\d+ \\$\\d+/:
        - img /LearnDash Course List \\d+/
      - heading /CSS Master Course-The Complete Guide Of \\d+/ [level=4]:
        - link /CSS Master Course-The Complete Guide Of \\d+/
      - paragraph: In iOS, interface elements layouts can configured change shape size …
      - link /LearnDash Course List \\d+ \\$\\d+/:
        - img /LearnDash Course List \\d+/
      - heading "Communication Master Class-Complete Guide To Be An Expert" [level=4]:
        - link "Communication Master Class-Complete Guide To Be An Expert"
      - paragraph: In iOS, interface elements layouts can configured change shape size …
      - link /LearnDash Course List \\d+ \\$\\d+/:
        - img /LearnDash Course List \\d+/
      - heading "Email & Affiliate Marketing Mastermind" [level=4]:
        - link "Email & Affiliate Marketing Mastermind"
      - paragraph: In iOS, interface elements layouts can configured change shape size …
      `);
  });
});
