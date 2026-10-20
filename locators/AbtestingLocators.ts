import { Locator, Page } from '@playwright/test';

export class AbtestingLocators {
    readonly abTesting: Locator;
    readonly abHeader: Locator;
    readonly abBody: Locator;
    constructor(page: Page) {
        this.abTesting = page.getByText('A/B Testing');
        this.abHeader = page.locator('h3');
        this.abBody = page.locator('div.example p')
    }
}