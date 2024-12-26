"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/testimonial-slider/";

test.describe("Testimonial Slider - Style One", () => {
  let heading = "Testimonial Slider 241226 - Style One";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("c52b769");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - group "2 / 3":
        - figure
        - text: Second testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Second User One
        - paragraph: Second Company One
      - group "3 / 3":
        - figure
        - text: Third testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Third User One
        - paragraph: Third Company One
      - group "1 / 3":
        - figure
        - text: First testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: First User One
        - paragraph: First Company One
      - group "2 / 3":
        - figure
        - text: Second testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Second User One
        - paragraph: Second Company One
      - group "3 / 3":
        - figure
        - text: Third testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Third User One
        - paragraph: Third Company One
      - group "1 / 3":
        - figure
        - text: First testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: First User One
        - paragraph: First Company One
      - group "2 / 3":
        - figure
        - text: Second testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Second User One
        - paragraph: Second Company One
      - button "Next slide"
      - button "Previous slide"
    `);
  });
});

test.describe("Testimonial Slider - Style Two", () => {
  let heading = "Testimonial Slider 241226 - Style Two";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("47bd712");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - group "2 / 3":
        - text:  Second testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Second User Two
        - paragraph: Second Company Two
        - figure
      - group "3 / 3":
        - text:  Third testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Third User Two
        - paragraph: Third Company Two
        - figure
      - group "1 / 3":
        - text:  First testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: First User Two
        - paragraph: First Company Two
        - figure
      - group "2 / 3":
        - text:  Second testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Second User Two
        - paragraph: Second Company Two
        - figure
      - group "3 / 3":
        - text:  Third testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Third User Two
        - paragraph: Third Company Two
        - figure
      - group "1 / 3":
        - text:  First testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: First User Two
        - paragraph: First Company Two
        - figure
      - group "2 / 3":
        - text:  Second testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Second User Two
        - paragraph: Second Company Two
        - figure
      - button "Next slide"
      - button "Previous slide"
    `);
  });
});

test.describe("Testimonial Slider - Style Three", () => {
  let heading = "Testimonial Slider 241226 - Style Three";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("b8ec920");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - group "2 / 3":
        - text:  Second testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Second User Three
        - paragraph: Second Company Three
      - group "3 / 3":
        - text:  Third testimonial description here. Edit and place your...
        - button "More Stuff"
        - figure
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Third User Three
        - paragraph: Third Company Three
      - group "1 / 3":
        - text:  First testimonial description here. Edit and place your...
        - button "More Stuff"
        - figure
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: First User Three
        - paragraph: First Company Three
      - group "2 / 3":
        - text:  Second testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Second User Three
        - paragraph: Second Company Three
      - group "3 / 3":
        - text:  Third testimonial description here. Edit and place your...
        - button "More Stuff"
        - figure
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Third User Three
        - paragraph: Third Company Three
      - group "1 / 3":
        - text:  First testimonial description here. Edit and place your...
        - button "More Stuff"
        - figure
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: First User Three
        - paragraph: First Company Three
      - group "2 / 3":
        - text:  Second testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Second User Three
        - paragraph: Second Company Three
      - button "Next slide"
      - button "Previous slide"
      `);
  });
});

test.describe("Testimonial Slider - Style Four", () => {
  let heading = "Testimonial Slider 241226 - Style Four";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("d2964c0");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - group "2 / 3":
        - figure
        - text:  Second testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Second User Four
        - paragraph: Second Company Four
      - group "3 / 3":
        - text:  Third testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Third User Four
        - paragraph: Third Company Four
      - group "1 / 3":
        - figure
        - text:  First testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: First User Four
        - paragraph: First Company Four
      - group "2 / 3":
        - figure
        - text:  Second testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Second User Four
        - paragraph: Second Company Four
      - group "3 / 3":
        - text:  Third testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Third User Four
        - paragraph: Third Company Four
      - group "1 / 3":
        - figure
        - text:  First testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: First User Four
        - paragraph: First Company Four
      - group "2 / 3":
        - figure
        - text:  Second testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Second User Four
        - paragraph: Second Company Four
      - button "Next slide"
      - button "Previous slide"
      `);
  });
});

test.describe("Testimonial Slider - Style Five", () => {
  let heading = "Testimonial Slider 241226 - Style Five";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("5e8f676");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - group "2 / 3":
        - text:  Second testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Second User Five
        - paragraph: Second Company Five
        - figure
      - group "3 / 3":
        - text:  Third testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Third User Five
        - paragraph: Third Company Five
        - figure
      - group "1 / 3":
        - text:  First testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: First User Five
        - paragraph: First Company Five
      - group "2 / 3":
        - text:  Second testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Second User Five
        - paragraph: Second Company Five
        - figure
      - group "3 / 3":
        - text:  Third testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Third User Five
        - paragraph: Third Company Five
        - figure
      - group "1 / 3":
        - text:  First testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: First User Five
        - paragraph: First Company Five
      - group "2 / 3":
        - text:  Second testimonial description here. Edit and place your...
        - button "More Stuff"
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - paragraph: Second User Five
        - paragraph: Second Company Five
        - figure
      - button "Next slide"
      - button "Previous slide"
      `);
  });
});

test.describe("Testimonial Slider - Style Six", () => {
  let heading = "Testimonial Slider 241226 - Style Six";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("e12cbd3");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - group "2 / 3":
        - text:  Second testimonial description here. Edit and place your...
        - button "More Stuff"
        - figure
        - paragraph: Second User Six
        - paragraph: Second Company Six
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
      - group "3 / 3":
        - text:  Third testimonial description here. Edit and place your...
        - button "More Stuff"
        - paragraph: Third User Six
        - paragraph: Third Company Six
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
      - group "1 / 3":
        - text:  First testimonial description here. Edit and place your...
        - button "More Stuff"
        - figure
        - paragraph: First User Six
        - paragraph: First Company Six
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
      - group "2 / 3":
        - text:  Second testimonial description here. Edit and place your...
        - button "More Stuff"
        - figure
        - paragraph: Second User Six
        - paragraph: Second Company Six
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
      - group "3 / 3":
        - text:  Third testimonial description here. Edit and place your...
        - button "More Stuff"
        - paragraph: Third User Six
        - paragraph: Third Company Six
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
      - group "1 / 3":
        - text:  First testimonial description here. Edit and place your...
        - button "More Stuff"
        - figure
        - paragraph: First User Six
        - paragraph: First Company Six
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
      - group "2 / 3":
        - text:  Second testimonial description here. Edit and place your...
        - button "More Stuff"
        - figure
        - paragraph: Second User Six
        - paragraph: Second Company Six
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
      - button "Next slide"
      - button "Previous slide"
      `);
  });
});

test.describe("Testimonial Slider - Style Seven", () => {
  let heading = "Testimonial Slider 241226 - Style Seven";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("9215d4f");
  });

  test("Test Contents", async ({ page }) => {
    await expect(widget).toMatchAriaSnapshot(`
      - group "2 / 3":
        - paragraph: Second User Seven
        - paragraph: Second Company Seven
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - text:  Second testimonial description here. Edit and place your...
        - button "More Stuff"
      - group "3 / 3":
        - paragraph: Third User Seven
        - paragraph: Third Company Seven
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - text:  Third testimonial description here. Edit and place your...
        - button "More Stuff"
      - group "1 / 3":
        - paragraph: First User Seven
        - paragraph: First Company Seven
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - text:  First testimonial description here. Edit and place your...
        - button "More Stuff"
      - group "2 / 3":
        - paragraph: Second User Seven
        - paragraph: Second Company Seven
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - text:  Second testimonial description here. Edit and place your...
        - button "More Stuff"
      - group "3 / 3":
        - paragraph: Third User Seven
        - paragraph: Third Company Seven
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - text:  Third testimonial description here. Edit and place your...
        - button "More Stuff"
      - group "1 / 3":
        - paragraph: First User Seven
        - paragraph: First Company Seven
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - text:  First testimonial description here. Edit and place your...
        - button "More Stuff"
      - group "2 / 3":
        - paragraph: Second User Seven
        - paragraph: Second Company Seven
        - list:
          - listitem
          - listitem
          - listitem
          - listitem
          - listitem
        - text:  Second testimonial description here. Edit and place your...
        - button "More Stuff"
      - button "Go to slide 1"
      - button "Go to slide 2"
      - button "Go to slide 3"
      - button "Next slide"
      - button "Previous slide"
      `);
  });
});
