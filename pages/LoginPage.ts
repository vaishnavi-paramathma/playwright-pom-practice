import { Locator, Page } from '@playwright/test';
import { LoginLocators } from '../locators/LoginLocators';

/**
 * Page object for the login page: flows and actions only.
 * Element discovery lives in LoginLocators; verification lives in the spec.
 */
export class LoginPage {
  private readonly page: Page;
  private readonly locators: LoginLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new LoginLocators(page);
  }

  /** Open the login page (path only — baseURL comes from the config). */
  async goto(): Promise<void> {
    await this.page.goto('/login');
  }

  /** Type credentials into the form (no submit). */
  async enterCredentials(username: string, password: string): Promise<void> {
    await this.locators.usernameInput.fill(username);
    await this.locators.passwordInput.fill(password);
  }

  /** Submit the login form. */
  async submit(): Promise<void> {
    await this.locators.loginButton.click();
  }

  /** Convenience flow shared by every login scenario: fill + submit. */
  async loginAs(username: string, password: string): Promise<void> {
    await this.enterCredentials(username, password);
    await this.submit();
  }

  /**
   * Assertion surface: specs read the flash banner through the page
   * object — they never import LoginLocators directly.
   */
  get flashMessage(): Locator {
    return this.locators.flashMessage;
  }
}