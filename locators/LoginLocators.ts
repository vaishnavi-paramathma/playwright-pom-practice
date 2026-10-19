import { Locator, Page } from '@playwright/test';

/**
 * Element discovery for the login page of the-internet.
 *
 * Responsibility: WHERE the elements are — nothing else.
 * No navigation, no interactions, no assertions.
 * Creating a Locator performs zero browser work: locators are
 * lazy handles that only resolve when an action uses them.
 */
export class LoginLocators {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly flashMessage: Locator;

  constructor(page: Page) {
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.flashMessage = page.locator('#flash');
  }
}