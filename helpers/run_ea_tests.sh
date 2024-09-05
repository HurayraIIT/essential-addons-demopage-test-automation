#!/bin/bash

# Define variables
PROJECT_DIR="/home/hurayra/Github/essential-addons-demopage-test-automation"
REPORT_DIR="/var/www/html/playwright-report"
LOG_FILE="/home/hurayra/Github/run_ea_tests.log"

# Navigate to project directory
echo "Navigating to project directory..."
cd "$PROJECT_DIR" || { echo "Failed to navigate to $PROJECT_DIR"; exit 1; }

# Update the code
echo "Updating the code..."
git pull origin main >> "$LOG_FILE" 2>&1 || { echo "Git pull failed"; exit 1; }

# Update playwright browsers
echo "Updating Playwright browsers..."
npm install >> "$LOG_FILE" 2>&1 || { echo "NPM install failed"; exit 1; }
npx playwright install --with-deps >> "$LOG_FILE" 2>&1 || { echo "Playwright install failed"; exit 1; }

# Run the tests in the background
echo "Running Playwright tests..."
npx playwright test tests/a* --project=chromium --reporter=html >> "$LOG_FILE" 2>&1 &
PLAYWRIGHT_PID=$!

# Wait for Playwright tests to complete
wait $PLAYWRIGHT_PID || { echo "Playwright tests failed"; exit 1; }

# Manage report directory
echo "Managing report directory..."
mkdir -p "$REPORT_DIR"
if [ -d "$REPORT_DIR" ]; then
    rm -rf "$REPORT_DIR"/* || { echo "Failed to clean $REPORT_DIR"; exit 1; }
    cp -r "$PROJECT_DIR/playwright-report/"* "$REPORT_DIR/" || { echo "Failed to copy reports"; exit 1; }
    chmod -R 755 "$REPORT_DIR" || { echo "Failed to set permissions for $REPORT_DIR"; exit 1; }
else
    echo "$REPORT_DIR directory creation failed"; exit 1;
fi

echo "Script completed successfully"