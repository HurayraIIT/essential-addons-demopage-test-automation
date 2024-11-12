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

    // Add global lightbox close button handler
    page.on("popup", async () => {
      const closeButton = page.locator(
        ".dialog-lightbox-widget-content > .dialog-lightbox-close-button > .eicon-close"
      );
      if (await closeButton.isVisible()) {
        await closeButton.click();
      }
    });

    // Wrap the goto method to include waitUntil: 'domcontentloaded'
    const originalGoto = page.goto.bind(page);
    page.goto = async (url, options = {}) => {
      options.waitUntil = "domcontentloaded";

      // Adding a random string as query param to avoid caching
      let randomParam = Math.random().toString(36).substring(2);
      url += `?${randomParam}=${randomParam}`;

      return await originalGoto(url, options);
    };
    await use(page);
  },
});

export { expect } from "@playwright/test";
