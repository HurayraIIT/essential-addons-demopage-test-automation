// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';
import { test } from './global-setup';
import { generateEnhancedLayout } from './scripts/slack-layout.js';

config();

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 4 : 4,
  timeout: 60 * 1000,

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
            layout: generateEnhancedLayout, // Use custom layout for enhanced formatting
            showInThread: true, // Keep main channel clean, show failures in threads
            maxNumberOfFailuresToShow: 5, // Limit to top 5 failures
            meta: [
              {
                key: "Report",
                value: "<https://ea-report.obayedmamur.com/ | 📂 View Full Report>",
              },
            ],
          },
        ],
        ["html"],
      ]
    : [["dot"], ["list"], ["html"]],

  use: {
    baseURL: process.env.BASE_URL ?? "https://eael.obayedmamur.com",
    testIdAttribute: "data-id",

    //screenshot: "on",
    trace: "retain-on-failure",
    video: "retain-on-failure",

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