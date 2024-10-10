"use strict";

import { test, expect } from "../global-setup";

let slug = "/content-elements/team-member/";
let heading = "Hurayra Automaiton Team Member 241010";

test.describe("Team Member https://qa1.site/go/3x13103", () => {
  let member01_loc = null;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();

    member01_loc = page.locator("#eael-team-member-64c09ad");
  });

  test("Test Content Tab", async ({ page }) => {
    // Using widget - member01_loc
    // Avatar should have image-01 and Resolution should be 768x768
    await expect(member01_loc.locator("img")).toHaveAttribute("src", /image-01-768x768\.png/);
    // Name should be "First Member 241010"
    await expect(page.getByText("First Member 241010")).toBeVisible();
    // Job position should be "preEssential Addons Demosuf"
    await expect(page.getByText("preEssential Addons Demosuf")).toBeVisible();
    // Description should be "First team member description here 241010. simple layout."
    await expect(page.getByText("First team member description here 241010. simple layout.")).toBeVisible();
    // Social profiles should be in order x, fb, lin
    let social01_loc = member01_loc.locator("ul");
    await expect(social01_loc.locator("li").nth(0).locator("a")).toHaveAttribute("href", "https://x.com/first241010");
    await expect(social01_loc.locator("li").nth(1).locator("a")).toHaveAttribute(
      "href",
      "https://facebook.com/first241010"
    );
    await expect(social01_loc.locator("li").nth(2).locator("a")).toHaveAttribute(
      "href",
      "https://linkedin.com/in/first241010"
    );
    // x icon should be 'bird'
    await expect(social01_loc.locator("li").nth(0).locator("svg")).toHaveClass("e-font-icon-svg e-fab-earlybirds");
    // x link should have no follow
    await expect(social01_loc.locator("li").nth(0).locator("a")).toHaveAttribute("rel", "nofollow");
    // x link should have custom attribute "foo241010|bar241010"
    await expect(social01_loc.locator("li").nth(0).locator("a")).toHaveAttribute("foo241010", "bar241010");
  });

  test("Test Style > Team Member Image Style", async ({ page }) => {
    // Using widget - member01_loc
    let image_loc = member01_loc.locator("img");
    // image width 91%
    // image height 301px
    await expect(image_loc).toHaveCSS("height", "301px");
    // margin 2 3 4 5
    await expect(image_loc).toHaveCSS("margin-top", "2px");
    await expect(image_loc).toHaveCSS("margin-right", "3px");
    await expect(image_loc).toHaveCSS("margin-bottom", "4px");
    await expect(image_loc).toHaveCSS("margin-left", "5px");
    // padding 1 2 3 4
    await expect(image_loc).toHaveCSS("padding-top", "1px");
    await expect(image_loc).toHaveCSS("padding-right", "2px");
    await expect(image_loc).toHaveCSS("padding-bottom", "3px");
    await expect(image_loc).toHaveCSS("padding-left", "4px");
    // border type solid
    await expect(image_loc).toHaveCSS("border-top-style", "solid");
    await expect(image_loc).toHaveCSS("border-right-style", "solid");
    await expect(image_loc).toHaveCSS("border-bottom-style", "solid");
    await expect(image_loc).toHaveCSS("border-left-style", "solid");
    // border width 5 6 7 8
    await expect(image_loc).toHaveCSS("border-top-width", "5px");
    await expect(image_loc).toHaveCSS("border-right-width", "6px");
    await expect(image_loc).toHaveCSS("border-bottom-width", "7px");
    await expect(image_loc).toHaveCSS("border-left-width", "8px");
    // border color #020202
    await expect(image_loc).toHaveCSS("border-top-color", "rgb(2, 2, 2)");
    await expect(image_loc).toHaveCSS("border-right-color", "rgb(2, 2, 2)");
    await expect(image_loc).toHaveCSS("border-bottom-color", "rgb(2, 2, 2)");
    await expect(image_loc).toHaveCSS("border-left-color", "rgb(2, 2, 2)");
    // rounded avatar
    await expect(image_loc).toHaveCSS("border-top-right-radius", "50%");
    await expect(image_loc).toHaveCSS("border-bottom-right-radius", "50%");
    await expect(image_loc).toHaveCSS("border-bottom-left-radius", "50%");
    await expect(image_loc).toHaveCSS("border-top-left-radius", "50%");
  });

  test("Test Style > Color & Typography", async ({ page }) => {
    // Using widget - member01_loc
    let name_loc = page.getByText("First Member 241010");
    let position_loc = page.getByText("preEssential Addons Demosuf");
    let description_loc = page.getByText("First team member description here 241010. simple layout.");

    // name color red
    await expect(name_loc).toHaveCSS("color", "rgb(255, 0, 0)");
    // font-family Verdana
    await expect(name_loc).toHaveCSS("font-family", /Verdana/);
    // font size 19
    await expect(name_loc).toHaveCSS("font-size", "19px");
    // weight 400
    await expect(name_loc).toHaveCSS("font-weight", "400");
    // transform uppercase
    await expect(name_loc).toHaveCSS("text-transform", "uppercase");
    // style normal
    await expect(name_loc).toHaveCSS("font-style", "normal");
    // decoration underline
    await expect(name_loc).toHaveCSS("text-decoration-line", "underline");
    // line height 21px
    await expect(name_loc).toHaveCSS("line-height", "21px");
    // letter spacing 2.1px
    await expect(name_loc).toHaveCSS("letter-spacing", "2.1px");
    // word spacing 1px
    await expect(name_loc).toHaveCSS("word-spacing", "1px");

    // position color green
    await expect(position_loc).toHaveCSS("color", "rgb(0, 255, 0)");
    // font-family Helvetica
    await expect(position_loc).toHaveCSS("font-family", /Helvetica/);
    // font size 22
    await expect(position_loc).toHaveCSS("font-size", "22px");
    // weight 500
    await expect(position_loc).toHaveCSS("font-weight", "500");
    // transform lowercase
    await expect(position_loc).toHaveCSS("text-transform", "lowercase");
    // style italic
    await expect(position_loc).toHaveCSS("font-style", "italic");
    // decoration overline
    await expect(position_loc).toHaveCSS("text-decoration-line", "overline");
    // line height 22px
    await expect(position_loc).toHaveCSS("line-height", "22px");
    // letter spacing 2.2px
    await expect(position_loc).toHaveCSS("letter-spacing", "2.2px");
    // word spacing 2px
    await expect(position_loc).toHaveCSS("word-spacing", "2px");

    // description color blue
    await expect(description_loc).toHaveCSS("color", "rgb(0, 0, 255)");
    // font-family Times New Roman
    await expect(description_loc).toHaveCSS("font-family", /Times New Roman/);
    // font size 23
    await expect(description_loc).toHaveCSS("font-size", "23px");
    // weight 600
    await expect(description_loc).toHaveCSS("font-weight", "600");
    // transform capitalize
    await expect(description_loc).toHaveCSS("text-transform", "capitalize");
    // style oblique
    //await expect(description_loc).toHaveCSS("font-style", "oblique");  // TODO: somehow playwright thinks this is italic
    // decoration line-through
    await expect(description_loc).toHaveCSS("text-decoration-line", "line-through");
    // line height 23px
    await expect(description_loc).toHaveCSS("line-height", "23px");
    // letter spacing 2.3px
    await expect(description_loc).toHaveCSS("letter-spacing", "2.3px");
    // word spacing 3px
    await expect(description_loc).toHaveCSS("word-spacing", "3px");
  });

  test("Test Style > Social Profiles Style", async ({ page }) => {
    // Using widget - member01_loc
    let social01_loc = member01_loc.locator("ul");
    let link_loc = social01_loc.locator("li").nth(0).locator("a");
    let svg_loc = social01_loc.locator("li").nth(0).locator("svg");

    // icon size 31
    await expect(svg_loc).toHaveCSS("height", "31px");
    await expect(svg_loc).toHaveCSS("width", "31px");
    await expect(svg_loc).toHaveCSS("line-height", "31px");

    // icon margin 2 3 4 5 -> can;t find it, overlapped with distance??
    // icon padding 1 2 3 4
    await expect(link_loc).toHaveCSS("padding-top", "1px");
    await expect(link_loc).toHaveCSS("padding-right", "2px");
    await expect(link_loc).toHaveCSS("padding-bottom", "3px");
    await expect(link_loc).toHaveCSS("padding-left", "4px");

    // icon distance 3 4 5 6
    await expect(social01_loc.locator("li").nth(0)).toHaveCSS("margin-top", "3px");
    await expect(social01_loc.locator("li").nth(0)).toHaveCSS("margin-right", "4px");
    await expect(social01_loc.locator("li").nth(0)).toHaveCSS("margin-bottom", "5px");
    await expect(social01_loc.locator("li").nth(0)).toHaveCSS("margin-left", "6px");

    // icon color ff00ff
    await expect(svg_loc).toHaveCSS("color", "rgb(255, 0, 255)");
    // background color
    await expect(link_loc).toHaveCSS("background-color", "rgb(255, 255, 0)");
    // border type dotted
    await expect(link_loc).toHaveCSS("border-top-style", "dotted");
    await expect(link_loc).toHaveCSS("border-right-style", "dotted");
    await expect(link_loc).toHaveCSS("border-bottom-style", "dotted");
    await expect(link_loc).toHaveCSS("border-left-style", "dotted");

    // border width 1 2 3 4
    await expect(link_loc).toHaveCSS("border-top-width", "1px");
    await expect(link_loc).toHaveCSS("border-right-width", "2px");
    await expect(link_loc).toHaveCSS("border-bottom-width", "3px");
    await expect(link_loc).toHaveCSS("border-left-width", "4px");

    // border color red
    await expect(link_loc).toHaveCSS("border-top-color", "rgb(255, 0, 0)");
    await expect(link_loc).toHaveCSS("border-right-color", "rgb(255, 0, 0)");
    await expect(link_loc).toHaveCSS("border-bottom-color", "rgb(255, 0, 0)");
    await expect(link_loc).toHaveCSS("border-left-color", "rgb(255, 0, 0)");

    // border radius 11
    await expect(link_loc).toHaveCSS("border-top-right-radius", "11px");
    await expect(link_loc).toHaveCSS("border-top-left-radius", "11px");
    await expect(link_loc).toHaveCSS("border-bottom-right-radius", "11px");
    await expect(link_loc).toHaveCSS("border-bottom-left-radius", "11px");

    // hover
    await svg_loc.hover();
    // hover icon color red
    await expect(svg_loc).toHaveCSS("color", "rgb(255, 0, 0)");
    // hover background green
    await expect(link_loc).toHaveCSS("background-color", "rgb(0, 255, 0)");
    // hover border blue
    await expect(link_loc).toHaveCSS("border-top-color", "rgb(0, 0, 255)");
    await expect(link_loc).toHaveCSS("border-right-color", "rgb(0, 0, 255)");
    await expect(link_loc).toHaveCSS("border-bottom-color", "rgb(0, 0, 255)");
    await expect(link_loc).toHaveCSS("border-left-color", "rgb(0, 0, 255)");
  });
});
