"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/team-member-carousel/";

test.describe("Team Member Carousel", () => {
  test.slow();
  let heading = "Team Member Carousel 241226";
  let widget;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    let headingLocator = page.getByRole("heading", { name: heading, exact: true });
    await headingLocator.scrollIntoViewIfNeeded();
    await expect.soft(headingLocator).toBeVisible();
    await headingLocator.click();

    widget = page.getByTestId("d09adfc");
  });

  test("Test Contents", async ({ page }) => {
    await widget.getByRole("heading", { name: "Team Member Zero" }).first().click();
    await expect(widget.getByRole("link", { name: "Team Member Zero" }).first()).toBeVisible();
    await expect(widget.getByRole("heading", { name: "Two Team Member" }).nth(1)).toBeVisible();
    await expect(widget.getByRole("img", { name: "Two Team Member" }).nth(1)).toBeVisible();
    await expect(widget.getByRole("heading", { name: "Two Web Designer" }).nth(1)).toBeVisible();
    await expect(widget.getByText("Two Enter member description").nth(1)).toBeVisible();

    await expect(widget).toMatchAriaSnapshot(`
      - group "2 / 3":
        - img "Two Team Member"
        - heading "Two Team Member" [level=3]
        - heading "Two Web Designer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
        - text: Two Enter member description here which
      - group "3 / 3":
        - img "Three Team Member"
        - heading "Three Team Member" [level=3]
        - heading "Three Testing Engineer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
        - text: Three Enter member description here
      - group "1 / 3":
        - link "Team Member Zero":
          - img "Team Member Zero"
        - heading "Team Member Zero" [level=3]
        - heading "Zero WordPress Developer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
          - listitem:
            - link "Linked in"
          - listitem:
            - link "Custom"
        - text: Zero Enter member description here which describes the position of member in company
      - group "2 / 3":
        - img "Two Team Member"
        - heading "Two Team Member" [level=3]
        - heading "Two Web Designer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
        - text: Two Enter member description here which
      - group "3 / 3":
        - img "Three Team Member"
        - heading "Three Team Member" [level=3]
        - heading "Three Testing Engineer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
        - text: Three Enter member description here
      - group "1 / 3":
        - link "Team Member Zero":
          - img "Team Member Zero"
        - heading "Team Member Zero" [level=3]
        - heading "Zero WordPress Developer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
          - listitem:
            - link "Linked in"
          - listitem:
            - link "Custom"
        - text: Zero Enter member description here which describes the position of member in company
      - group "2 / 3":
        - img "Two Team Member"
        - heading "Two Team Member" [level=3]
        - heading "Two Web Designer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
        - text: Two Enter member description here which
      - button "Go to slide 1"
      - button "Go to slide 2"
      - button "Go to slide 3"
      - button "Next slide"
      - button "Previous slide"
    `);

    await widget.locator("div.swiper-button-next").click();
    await expect(widget).toMatchAriaSnapshot(`
      - group "2 / 3":
        - img "Two Team Member"
        - heading "Two Team Member" [level=3]
        - heading "Two Web Designer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
        - text: Two Enter member description here which
      - group "3 / 3":
        - img "Three Team Member"
        - heading "Three Team Member" [level=3]
        - heading "Three Testing Engineer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
        - text: Three Enter member description here
      - group "1 / 3":
        - link "Team Member Zero":
          - img "Team Member Zero"
        - heading "Team Member Zero" [level=3]
        - heading "Zero WordPress Developer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
          - listitem:
            - link "Linked in"
          - listitem:
            - link "Custom"
        - text: Zero Enter member description here which describes the position of member in company
      - group "2 / 3":
        - img "Two Team Member"
        - heading "Two Team Member" [level=3]
        - heading "Two Web Designer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
        - text: Two Enter member description here which
      - group "3 / 3":
        - img "Three Team Member"
        - heading "Three Team Member" [level=3]
        - heading "Three Testing Engineer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
        - text: Three Enter member description here
      - group "1 / 3":
        - link "Team Member Zero":
          - img "Team Member Zero"
        - heading "Team Member Zero" [level=3]
        - heading "Zero WordPress Developer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
          - listitem:
            - link "Linked in"
          - listitem:
            - link "Custom"
        - text: Zero Enter member description here which describes the position of member in company
      - group "2 / 3":
        - img "Two Team Member"
        - heading "Two Team Member" [level=3]
        - heading "Two Web Designer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
        - text: Two Enter member description here which
      - button "Go to slide 1"
      - button "Go to slide 2"
      - button "Go to slide 3"
      - button "Next slide"
      - button "Previous slide"
    `);

    await widget.getByRole("button", { name: "Go to slide 3" }).click();
    await expect(widget).toMatchAriaSnapshot(`
      - group "2 / 3":
        - img "Two Team Member"
        - heading "Two Team Member" [level=3]
        - heading "Two Web Designer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
        - text: Two Enter member description here which
      - group "3 / 3":
        - img "Three Team Member"
        - heading "Three Team Member" [level=3]
        - heading "Three Testing Engineer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
        - text: Three Enter member description here
      - group "1 / 3":
        - link "Team Member Zero":
          - img "Team Member Zero"
        - heading "Team Member Zero" [level=3]
        - heading "Zero WordPress Developer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
          - listitem:
            - link "Linked in"
          - listitem:
            - link "Custom"
        - text: Zero Enter member description here which describes the position of member in company
      - group "2 / 3":
        - img "Two Team Member"
        - heading "Two Team Member" [level=3]
        - heading "Two Web Designer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
        - text: Two Enter member description here which
      - group "3 / 3":
        - img "Three Team Member"
        - heading "Three Team Member" [level=3]
        - heading "Three Testing Engineer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
        - text: Three Enter member description here
      - group "1 / 3":
        - link "Team Member Zero":
          - img "Team Member Zero"
        - heading "Team Member Zero" [level=3]
        - heading "Zero WordPress Developer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
          - listitem:
            - link "Linked in"
          - listitem:
            - link "Custom"
        - text: Zero Enter member description here which describes the position of member in company
      - group "2 / 3":
        - img "Two Team Member"
        - heading "Two Team Member" [level=3]
        - heading "Two Web Designer" [level=6]
        - list:
          - listitem:
            - link "Facebook"
          - listitem:
            - link "Twitter"
          - listitem:
            - link "Google+"
        - text: Two Enter member description here which
      - button "Go to slide 1"
      - button "Go to slide 2"
      - button "Go to slide 3"
      - button "Next slide"
      - button "Previous slide"
    `);
  });
});
