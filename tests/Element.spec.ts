import {test, expect} from '@playwright/test';
import {Addremoveelement} from '../pages/AddremoveelementPage';

test.describe('Add Remove Element', () =>{
    

    test('click add element once and delete the element', async({page}) =>{
        await page.goto('/');
        const element = new Addremoveelement(page);
        await element.clickelementlink();

        await element.addelement();
        expect(await element.getelementcount()).toBe(1)
        await element.deleteelement(0);
        expect(await element.getelementcount()).toBe(0)
    })

    test('click multiple add button and delete the button specifically', async({page}) =>{
        await page.goto('/');
        const element = new Addremoveelement(page);
        await element.clickelementlink();
        
        for (let i = 0; i < 3; i++){
            await element.addelement();
        }
        expect(await element.getelementcount()).toBe(3)
        await element.deleteelement(0);
        expect(await element.getelementcount()).toBe(2)
    })

})