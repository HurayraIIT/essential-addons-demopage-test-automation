// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';

config();

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : 4,

  reporter: process.env.CI
    ? [
        [
          "./node_modules/playwright-slack-report/dist/src/SlackReporter.js",
          {
            slackWebHookUrl: process.env.SLACK_WEBHOOK_URL,
            sendResults: "always", // "always" , "on-failure", "off"
            maxNumberOfFailuresToShow: 0,
            meta: [
              {
                key: "Essential Addons Demo - Test Results",
                value: "<https://hurayraiit.github.io/essential-addons-demopage-test-automation/ | 🔗 Click Me!>",
              },
            ],
          },
        ],
        ["html"],
      ]
    : [["dot"], ["list"], ["html"]],

  use: {
    baseURL: process.env.BASE_URL,

    screenshot: "on",
    trace: "retain-on-failure",
    video: "on",

    ignoreHTTPSErrors: true,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});

