/**
 * Custom Slack Layout for Playwright Test Results
 * Provides enhanced formatting with visual indicators and clear sections
 */

/**
 * Generate enhanced Slack message layout with visual hierarchy
 * @param {Object} summaryResults - Test summary results from Playwright
 * @returns {Array} Array of Slack Block Kit blocks
 */
export function generateEnhancedLayout(summaryResults) {
  const blocks = [];

  // Header with emoji
  blocks.push({
    type: "header",
    text: {
      type: "plain_text",
      text: ":ea-n: *Essential Addons For Elementor* Automation Test Results",
      emoji: true,
    },
  });

  // Test Summary Section
  const statusEmoji = summaryResults.failed === 0 ? "✅" : "❌";
  const passRate = Math.round(
    (summaryResults.passed / (summaryResults.passed + summaryResults.failed)) *
      100
  );

  blocks.push({
    type: "section",
    text: {
      type: "mrkdwn",
      text: `${statusEmoji} *Test Summary*\n✅ ${summaryResults.passed} passed | ❌ ${summaryResults.failed} failed | ⏩ ${summaryResults.skipped} skipped\n📊 Pass Rate: ${passRate}%`,
    },
  });

  // Divider
  blocks.push({
    type: "divider",
  });

  // Build Information Section (if meta data exists)
  if (summaryResults.meta && summaryResults.meta.length > 0) {
    let metaText = "*Build Information*\n";
    summaryResults.meta.forEach((item) => {
      metaText += `• ${item.key}: ${item.value}\n`;
    });

    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: metaText,
      },
    });

    blocks.push({
      type: "divider",
    });
  }

  // Failed Tests Section (if there are failures)
  if (summaryResults.failed > 0 && summaryResults.failedTests) {
    let failedText = `*Failed Tests (${summaryResults.failed} total)*\n`;

    // Show only the first 5 failures
    const failuresToShow = summaryResults.failedTests.slice(0, 5);
    failuresToShow.forEach((test) => {
      failedText += `❌ ${test.title || test.name}\n`;
    });

    // Show "and X more" if there are more failures
    if (summaryResults.failedTests.length > 5) {
      failedText += `\n_... and ${summaryResults.failedTests.length - 5} more failures_`;
    }

    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: failedText,
      },
    });

    blocks.push({
      type: "divider",
    });
  }

  // Action Section with Links
  blocks.push({
    type: "section",
    text: {
      type: "mrkdwn",
      text: "*Actions*",
    },
    accessory: {
      type: "button",
      text: {
        type: "plain_text",
        text: "📊 View Full Report",
        emoji: true,
      },
      url: "https://ea-report.obayedmamur.com/",
      action_id: "view_report",
    },
  });

  // Footer with timestamp
  blocks.push({
    type: "context",
    elements: [
      {
        type: "mrkdwn",
        text: `_Test run completed at ${new Date().toLocaleString()}_`,
      },
    ],
  });

  return blocks;
}

/**
 * Minimal clean layout - simple and concise
 * @param {Object} summaryResults - Test summary results from Playwright
 * @returns {Array} Array of Slack Block Kit blocks
 */
export function generateMinimalLayout(summaryResults) {
  const blocks = [];

  const statusEmoji = summaryResults.failed === 0 ? "✅" : "❌";

  blocks.push({
    type: "section",
    text: {
      type: "mrkdwn",
      text: `${statusEmoji} *Test Results*\n✅ ${summaryResults.passed} | ❌ ${summaryResults.failed} | ⏩ ${summaryResults.skipped}`,
    },
  });

  return blocks;
}

