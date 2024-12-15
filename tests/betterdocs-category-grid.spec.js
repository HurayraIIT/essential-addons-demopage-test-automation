"use strict";

import { test, expect } from "../global-setup";

let slug = "/documentation-elements/betterdocs-category-grid/";

test.describe("BetterDocs Category Grid - Layout One", () => {
  let heading = "Hurayra Automation 241215 One";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("718ace7");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - article:
        - img "betterdocs-category-grid-icon"
        - heading "Configurations" [level=1]
        - text: "2"
        - list:
          - listitem:
            - text: 
            - link "How Moments Shape Our Lives?"
          - listitem:
            - text: 
            - link "What Intricate Ecosystems Thrive Along the Banks of Rivers?"
        - link "Explore More-one "
      - article:
        - img "betterdocs-category-grid-icon"
        - heading "Getting Started" [level=1]
        - text: "5"
        - list:
          - listitem:
            - text: 
            - link "How Can SEO Strategies Adapt to Changing User Behaviors and Preferences?"
          - listitem:
            - text: 
            - link "How Does WordPress Adapt to Evolving Web Development Trends?"
          - listitem:
            - text: 
            - link "Why Are Rivers Vital Ecosystems for Biodiversity?"
          - listitem:
            - text: 
            - link "Why Are Smartwatches Considered Versatile Companions Tailored to Individual Needs?"
          - listitem:
            - text: 
            - link "Why Does Time Feel Different in Various Life Moments?"
        - link "Explore More-one "
      - article:
        - img "betterdocs-category-grid-icon"
        - heading "Installation" [level=1]
        - text: "2"
        - list:
          - listitem:
            - text: 
            - link "How Does WordPress Revolutionize Website Management for Beginners?"
          - listitem:
            - text: 
            - link "Why is Staying Updated on SEO Trends Crucial for Digital Marketers?"
        - link "Explore More-one "
      - article:
        - img "betterdocs-category-grid-icon"
        - heading "Setup Process" [level=1]
        - text: "1"
        - list:
          - listitem:
            - text: 
            - link "How Can Users Customize and Personalize Their Smartwatch Experience?"
        - link "Explore More-one "
      `);
  });
});

test.describe("BetterDocs Category Grid - Layout Two", () => {
  let heading = "Hurayra Automation 241215 Two";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("1a02fa1");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
    - article:
      - text: "2"
      - heading "Configurations" [level=2]
      - list:
        - listitem:
          - text: 
          - link "How Moments Shape Our Lives?"
        - listitem:
          - text: 
          - link "What Intricate Ecosystems Thrive Along the Banks of Rivers?"
      - link "Explore More-two "
    - article:
      - text: "5"
      - heading "Getting Started" [level=2]
      - list:
        - listitem:
          - text: 
          - link "How Can SEO Strategies Adapt to Changing User Behaviors and Preferences?"
        - listitem:
          - text: 
          - link "How Does WordPress Adapt to Evolving Web Development Trends?"
        - listitem:
          - text: 
          - link "Why Are Rivers Vital Ecosystems for Biodiversity?"
        - listitem:
          - text: 
          - link "Why Are Smartwatches Considered Versatile Companions Tailored to Individual Needs?"
        - listitem:
          - text: 
          - link "Why Does Time Feel Different in Various Life Moments?"
      - link "Explore More-two "
    - article:
      - text: "2"
      - heading "Installation" [level=2]
      - list:
        - listitem:
          - text: 
          - link "How Does WordPress Revolutionize Website Management for Beginners?"
        - listitem:
          - text: 
          - link "Why is Staying Updated on SEO Trends Crucial for Digital Marketers?"
      - link "Explore More-two "
    - article:
      - text: "1"
      - heading "Setup Process" [level=2]
      - list:
        - listitem:
          - text: 
          - link "How Can Users Customize and Personalize Their Smartwatch Experience?"
      - link "Explore More-two "
    `);
  });
});
