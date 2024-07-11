"use strict";

import path from "path";
import { test, expect } from "../global-setup";
import { evaluateNodeStructure, saveStructure, getStructure } from "../helpers/snapshot";

let slug = "/particle-effect";
let heading = "Particles";

test.describe("Particles - EA Particles Default Style 01", () => {
  let section = "";
  let canvas = "";

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Documentation" })).toHaveAttribute(
      "href",
      /docs\/extensions\/particles/
    );

    section = page.locator("#eael-section-particles-55c455f8");
    canvas = section.locator(".particles-js-canvas-el");
    await section.scrollIntoViewIfNeeded();
  });

  test("All sections should be present", async ({ page }) => {
    test.slow();

    await expect(section).toBeVisible();
    await expect(canvas).toBeVisible();

    // Validate section attributes
    await expect(section).toHaveAttribute("data-particle_enable", "true");
    await expect(section).toHaveAttribute("data-eael_ptheme_source", "presets");
    await expect(section).toHaveAttribute("data-preset_theme", "default");
    await expect(section).toHaveAttribute("data-particle_opacity", "0.5");
    await expect(section).toHaveAttribute("data-particle_speed", "6");
    await expect(section).toHaveAttribute("data-id", "55c455f8");
    await expect(canvas).toHaveAttribute("style", "width: 100%; height: 100%;");
  });

  test("Validate Section Style", async ({ page }) => {
    test.slow();

    await expect(section).toHaveAttribute(
      "data-custom_style",
      `{
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}`
    );
  });
});
