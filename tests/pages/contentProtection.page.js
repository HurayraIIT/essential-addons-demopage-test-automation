class ContentProtectionPage {
  constructor(page) {
    this.page = page;
    // Password prompt elements
    this.passwordInput = page.locator('input[type="password"]');
    this.submitButton = page.locator('input[type="submit"], button:has-text("Submit"), button[type="submit"]');
    // Messages shown when access is denied or restricted
    this.unauthorizedText = page.locator('text=You do not have permission to see this content.').first();
    this.adminText = page.locator('text=Only Admin can view').first();
    // Content area after successful unlock. We rely on common data-testid or fallback text cues.
    this.contentContainer = page.locator('[data-testid="content-protected-area"]');
    this.contentAlternate = page.locator('text=/Protected Content|Protected content|Content is now visible|Access granted/i');
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async unlock(password) {
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  // Returns true if the protected content is visible via known selectors or text cues
  async isContentVisible() {
    try {
      if (await this.contentContainer.isVisible()) return true;
    } catch {
      // ignore
    }
    try {
      if (await this.contentAlternate.isVisible()) return true;
    } catch {
      // ignore
    }

    // Alternative approach: check if unauthorized text is no longer visible
    // and password form is also gone (indicating successful unlock)
    try {
      const unauthorizedVisible = await this.unauthorizedText.isVisible();
      const passwordFormVisible = await this.passwordInput.isVisible();

      // If both unauthorized text and password form are gone, content should be visible
      if (!unauthorizedVisible && !passwordFormVisible) {
        return true;
      }
    } catch {
      // ignore
    }

    return false;
  }

  async isAccessDeniedVisible() {
    return await this.unauthorizedText.isVisible();
  }

  async isAdminVisible() {
    return await this.adminText.isVisible();
  }
}

export default ContentProtectionPage;
