/**
 * Script to generate baseline styles for tests
 * Run with: node scripts/generate-style-baseline.js
 */

import { chromium } from '@playwright/test';
import dotenv from 'dotenv';
import WooCartPage from '../src/pages/WooCartPage.js';
import { saveStylesToFile } from '../src/utils/styleUtils.js';

// Load environment variables
dotenv.config();

async function generateBaseline() {
  console.log('Generating baseline styles...');

  // Launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Initialize the page object
    const wooCartPage = new WooCartPage(page);

    // Login as a customer
    console.log('Logging in as customer...');
    await wooCartPage.login();

    // Clear the cart to ensure a consistent starting state
    console.log('Clearing cart...');
    await wooCartPage.clearCart();

    // Try to add products to the cart
    console.log('Adding products to cart...');
    const addedProduct1 = await wooCartPage.addProductToCart("Hurayra Automation Product 01");
    console.log(`Added product 1: ${addedProduct1}`);

    if (addedProduct1) {
      // Try to add a second product
      const addedProduct2 = await wooCartPage.addProductToCart("Hurayra Automation Product 02");
      console.log(`Added product 2: ${addedProduct2}`);
    }

    // Capture all styles
    console.log('Capturing all styles...');
    const allStyles = await wooCartPage.captureAllStyles();

    // Save styles to file
    console.log('Saving styles to file...');
    saveStylesToFile(allStyles, 'woo-cart-styles-baseline');

    console.log('Baseline styles generated successfully!');
  } catch (error) {
    console.error('Error generating baseline styles:', error);
  } finally {
    // Close browser
    await browser.close();
  }
}

// Run the function
generateBaseline().catch(error => {
  console.error('Error in generate-style-baseline script:', error);
  process.exit(1);
});
