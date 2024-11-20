// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';
import { test } from './global-setup';

config();

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 4 : 4,
  timeout: 30 * 1000,

  expect: {
    timeout: 5_000,
    toMatchSnapshot: { maxDiffPixelRatio: 0.03 },
    toHaveScreenshot: { maxDiffPixelRatio: 0.03 },
  },

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
                value: "<https://hurayraiit.github.io/essential-addons-demopage-test-automation/ | 📂 Click Here!>",
              },
            ],
          },
        ],
        ["html"],
      ]
    : [["dot"], ["list"], ["html"]],

  use: {
    baseURL: process.env.BASE_URL,
    testIdAttribute: "data-id",

    //screenshot: "on",
    trace: "retain-on-failure",
    video: process.env.CI ? "retain-on-failure" : "off",

    ignoreHTTPSErrors: true,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], ...test },
    },
  ],
});