import { Locator, Page } from '@playwright/test';
import { AbtestingLocators } from '../locators/AbtestingLocators';
export class AbtestingPage {
  private readonly page: Page;
  private readonly locators: AbtestingLocators;

  constructor(page: Page){
    this.page = page;
    this.locators = new AbtestingLocators(page);
  }

  async clickAbTestingLink(): Promise<void> {
    await this.locators.abTesting.click();
  }

  async getAbHeaderText(): Promise<string> {
    return (await this.locators.abHeader.textContent()) ?? '';
  }

  async getAbBodyText(): Promise<string> {
    return (await this.locators.abBody.textContent()) ?? '';
  }

}