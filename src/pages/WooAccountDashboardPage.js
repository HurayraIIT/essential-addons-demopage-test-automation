/**
 * Page Object Model for WooCommerce Account Dashboard page
 * URL: https://eael.wpqa.site/woocommerce-elements/woo-account-dashboard/
 */

class WooAccountDashboardPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.url = 'https://eael.wpqa.site/woocommerce-elements/woo-account-dashboard/';

    // Preset 1 Locators
    this.preset1Heading = this.page.getByRole('heading', { name: 'Preset 1' });
    this.preset1Navigation = {
      dashboard: this.page.getByRole('link', { name: ' Dashboard' }).first(),
      orders: this.page.getByRole('link', { name: ' Orders' }).first(),
      downloads: this.page.getByRole('link', { name: ' Downloads' }).first(),
      addresses: this.page.getByRole('link', { name: ' Addresses' }).first(),
      accountDetails: this.page.getByRole('link', { name: ' Account Details' }).first(),
      logout: this.page.getByRole('link', { name: ' Logout' }).first()
    };

    // Preset 2 Locators
    this.preset2Heading = this.page.getByRole('heading', { name: 'Preset 2' });
    this.preset2Navigation = {
      dashboard: this.page.getByRole('link', { name: 'Dashboard', exact: true }),
      orders: this.page.getByRole('link', { name: 'Orders', exact: true }),
      downloads: this.page.getByRole('link', { name: 'Downloads', exact: true }),
      addresses: this.page.getByRole('link', { name: 'Addresses', exact: true }),
      accountDetails: this.page.getByRole('link', { name: 'Account Details', exact: true }),
      logout: this.page.getByRole('link', { name: 'Logout', exact: true })
    };

    // Preset 3 Locators
    this.preset3Heading = this.page.getByRole('heading', { name: 'Preset 3' });
    this.preset3Navigation = {
      dashboard: this.page.getByRole('link', { name: ' Dashboard' }).nth(1),
      orders: this.page.getByRole('link', { name: ' Orders' }).nth(1),
      downloads: this.page.getByRole('link', { name: ' Downloads' }).nth(1),
      addresses: this.page.getByRole('link', { name: ' Addresses' }).nth(1),
      accountDetails: this.page.getByRole('link', { name: ' Account Details' }).nth(1),
      logout: this.page.getByRole('link', { name: ' Logout' }).nth(1)
    };

    // User Information Locators
    this.userNameHeadings = this.page.getByRole('heading', { name: 'ACustomerF ACustomerL' });
    this.welcomeTexts = this.page.getByText('Welcome,');
    this.helloTexts = this.page.getByText(/Hello ACustomerF ACustomerL/);
    this.dashboardTexts = this.page.getByText(/From your account dashboard/);
  }

  /**
   * Navigate to the WooCommerce Account Dashboard page
   */
  async goto() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Check if Preset 1 section is visible
   * @returns {Promise<boolean>}
   */
  async isPreset1Visible() {
    return await this.preset1Heading.isVisible();
  }

  /**
   * Check if Preset 2 section is visible
   * @returns {Promise<boolean>}
   */
  async isPreset2Visible() {
    return await this.preset2Heading.isVisible();
  }

  /**
   * Check if Preset 3 section is visible
   * @returns {Promise<boolean>}
   */
  async isPreset3Visible() {
    return await this.preset3Heading.isVisible();
  }

  /**
   * Click on Dashboard link in Preset 1
   */
  async clickPreset1Dashboard() {
    await this.preset1Navigation.dashboard.click();
  }

  /**
   * Click on Orders link in Preset 1
   */
  async clickPreset1Orders() {
    await this.preset1Navigation.orders.click();
  }

  /**
   * Click on Downloads link in Preset 1
   */
  async clickPreset1Downloads() {
    await this.preset1Navigation.downloads.click();
  }

  /**
   * Click on Addresses link in Preset 1
   */
  async clickPreset1Addresses() {
    await this.preset1Navigation.addresses.click();
  }

  /**
   * Click on Account Details link in Preset 1
   */
  async clickPreset1AccountDetails() {
    await this.preset1Navigation.accountDetails.click();
  }

  /**
   * Click on Logout link in Preset 1
   */
  async clickPreset1Logout() {
    await this.preset1Navigation.logout.click();
  }

  /**
   * Click on Dashboard link in Preset 2
   */
  async clickPreset2Dashboard() {
    await this.preset2Navigation.dashboard.click();
  }

  /**
   * Click on Orders link in Preset 2
   */
  async clickPreset2Orders() {
    await this.preset2Navigation.orders.click();
  }

  /**
   * Click on Downloads link in Preset 2
   */
  async clickPreset2Downloads() {
    await this.preset2Navigation.downloads.click();
  }

  /**
   * Click on Addresses link in Preset 2
   */
  async clickPreset2Addresses() {
    await this.preset2Navigation.addresses.click();
  }

  /**
   * Click on Account Details link in Preset 2
   */
  async clickPreset2AccountDetails() {
    await this.preset2Navigation.accountDetails.click();
  }

  /**
   * Click on Logout link in Preset 2
   */
  async clickPreset2Logout() {
    await this.preset2Navigation.logout.click();
  }

  /**
   * Click on Dashboard link in Preset 3
   */
  async clickPreset3Dashboard() {
    await this.preset3Navigation.dashboard.click();
  }

  /**
   * Click on Orders link in Preset 3
   */
  async clickPreset3Orders() {
    await this.preset3Navigation.orders.click();
  }

  /**
   * Click on Downloads link in Preset 3
   */
  async clickPreset3Downloads() {
    await this.preset3Navigation.downloads.click();
  }

  /**
   * Click on Addresses link in Preset 3
   */
  async clickPreset3Addresses() {
    await this.preset3Navigation.addresses.click();
  }

  /**
   * Click on Account Details link in Preset 3
   */
  async clickPreset3AccountDetails() {
    await this.preset3Navigation.accountDetails.click();
  }

  /**
   * Click on Logout link in Preset 3
   */
  async clickPreset3Logout() {
    await this.preset3Navigation.logout.click();
  }
}

export default WooAccountDashboardPage;
