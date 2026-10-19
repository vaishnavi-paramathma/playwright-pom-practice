import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login', () => {
  test('valid credentials log the user into the secure area', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.loginAs('tomsmith', 'SuperSecretPassword!');

    await expect(loginPage.flashMessage).toContainText('You logged into a secure area!');
    await expect(page).toHaveURL(/\/secure/);
  });

  test('invalid credentials keep the user on the login page with an error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.loginAs('invalid-user', 'wrong-password');

    await expect(loginPage.flashMessage).toContainText('Your username is invalid!');
    await expect(page).toHaveURL(/\/login/);
  });
});