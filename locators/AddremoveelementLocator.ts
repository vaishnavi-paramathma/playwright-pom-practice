import {Locator, Page} from '@playwright/test';

export class AddremoveelementLocators {
  readonly elementButton: Locator;
  readonly addElement: Locator;
  readonly deleteElement: Locator;

  constructor(page: Page) {
    this.elementButton = page.getByText('Add/Remove Elements');
    this.addElement = page.getByRole("button", {name: 'Add Element', exact: true});
    this.deleteElement = page.getByRole("button", {name: 'Delete', exact: true});
  }

}