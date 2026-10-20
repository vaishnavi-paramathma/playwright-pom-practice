import {test, expect} from '@playwright/test';
import {AbtestingPage} from '../pages/AbtestingPage';

test.describe('A/B Testing', () => {
    test('Should display the correct header and body text', async({page}) => {
        await page.goto('/');
        const abtestingPage = new AbtestingPage(page);
        await abtestingPage.clickAbTestingLink();
        
        const headerText = await abtestingPage.getAbHeaderText();
        const bodyText = await abtestingPage.getAbBodyText();
        
        expect(headerText).toBe('A/B Test Variation 1');
        expect(bodyText).toContain('Also known as split testing.');
    })
})