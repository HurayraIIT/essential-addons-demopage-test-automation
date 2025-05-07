# Essential Addons Demopage Test Automation

This repository contains automated tests for the Essential Addons For Elementor Demo Pages using Playwright. The tests verify the functionality and visibility of various Essential Addons widgets and components.

## Repository Information

- **Repository**: [HurayraIIT/essential-addons-demopage-test-automation](https://github.com/HurayraIIT/essential-addons-demopage-test-automation)
- **Description**: Testing the Essential Addons For Elementor Demo Pages Using Playwright
- **Created**: June 20, 2024

## Project Structure

- `src/pages/`: Page object models for different web pages
- `tests/`: Test specifications for various Essential Addons widgets
- `helpers/`: Helper functions for testing
- `global-setup.js`: Global setup configuration for tests
- `playwright.config.js`: Playwright configuration

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/HurayraIIT/essential-addons-demopage-test-automation.git
cd essential-addons-demopage-test-automation
```

2. Install Playwright:

```bash
npm init playwright@latest
```

3. Install all dependencies:

```bash
npm install
```

4. Or install dependencies individually:

```bash
# Install Playwright
npm install -D @playwright/test@latest

# Install dotenv for environment variables
npm install dotenv@latest

# Install Playwright Slack Report
npm install playwright-slack-report@latest

# Install WordPress e2e test Utils (if needed)
npm install @wordpress/e2e-test-utils-playwright
```

5. Install Playwright browsers:

```bash
npx playwright install --with-deps
```

### Environment Setup

Create a `.env` file in the root directory with the following variables:

```
BASE_URL=https://essential-addons.com/elementor/demos/
SLACK_WEBHOOK_URL=your_slack_webhook_url (optional for Slack reporting)
```

### Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test tests/woo-product-list.spec.js
```

Run tests with UI mode:

```bash
npx playwright test --ui
```

### Updating Dependencies

To update Playwright:

```bash
npm install -D @playwright/test@latest
```

After updating Playwright, update browsers:

```bash
npx playwright install --with-deps
```

### Additional Packages

The project uses the following additional packages:

- **dotenv**: For environment variable management
- **playwright-slack-report**: For Slack integration with test results
- **WordPress e2e test Utils For Playwright**: For WordPress-specific testing utilities
  Documentation: [WordPress E2E Test Utils](https://github.com/WordPress/gutenberg/tree/trunk/packages/e2e-test-utils-playwright)
