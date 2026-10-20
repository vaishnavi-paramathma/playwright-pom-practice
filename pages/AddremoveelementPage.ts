import {Locator, Page} from '@playwright/test';
import {AddremoveelementLocators} from '../locators/AddremoveelementLocator';

export class Addremoveelement {
  private readonly page: Page;
  private readonly locators: AddremoveelementLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new AddremoveelementLocators(page);
  }

  async clickelementlink(): Promise<void> {
    await this.locators.elementButton.click();
  }

  async addelement(): Promise<void> {
    await this.locators.addElement.click();
  }

  async deleteelement(index: number): Promise<void> {
    await this.locators.deleteElement.nth(index).click();
  }

  async getelementcount(): Promise<number> {
    return await this.locators.deleteElement.count();
  }

}