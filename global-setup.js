import { test as base } from "@playwright/test";

// Extend the default test fixture
export const test = base.extend({
  // Add custom fixtures here
  page: async ({ page }, use) => {
    // Set up the routes
    await page.route("**/notificationx/**", async (route) => await route.fulfill({}));
    await page.route("**/client.crisp.chat/**", async (route) => await route.fulfill({}));
    await page.route("**/client.relay.crisp.chat/**", async (route) => await route.fulfill({}));
    await page.route("**/tag.marinsm.com/**", async (route) => await route.fulfill({}));
    await page.route("**/static.hotjar.com/**", async (route) => await route.fulfill({}));
    await page.route("**/static.doubleclick.net/**", async (route) => await route.fulfill({}));
    await page.route("**/jnn-pa.googleapis.com/**", async (route) => await route.fulfill({}));
    await page.route("**/googleads.g.doubleclick.net/**", async (route) => await route.fulfill({}));
    await page.route("**/analytics.twitter.com/**", async (route) => await route.fulfill({}));
    await page.route("**/apis.google.com/**", async (route) => await route.fulfill({}));
    await page.route("**/play.google.com/**", async (route) => await route.fulfill({}));
    await page.route("**/www.googletagmanager.com/**", async (route) => await route.fulfill({}));

    // Wrap the goto method to include waitUntil: 'domcontentloaded'
    const originalGoto = page.goto.bind(page);
    page.goto = async (url, options = {}) => {
      options.waitUntil = "domcontentloaded";

      // Adding query param to bypass server cache
      url += "?foo=bar";

      return await originalGoto(url, options);
    };
    await use(page);
  },
});

export { expect } from "@playwright/test";
