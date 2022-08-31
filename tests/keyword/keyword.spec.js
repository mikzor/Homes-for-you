const { test, expect } = require('@playwright/test');
//const { HomePage } = require('../../page_objects/home/home.page');
const { KeywordPage } = require('../../page_objects/keyword/keyword.page');
let keywordPage; 


test.beforeEach(async ({ page }) => {
  keywordPage = new KeywordPage(page);
 // listingsPage = new ListingsPage(page);
  await page.goto('https://delekhomes.com/');
});

test.describe('Search bar', () => {
 test('Should search by keyword ', async ({}) => {
    await expect(keywordPage.searchByKeyword).toBeEnabled();
});

test('Should search by city ', async ({}) => {
    await expect(keywordPage.searchByCity).toBeEnabled();
});

test('Should search by State ', async ({ page }) => {
    await keywordPage.searchByState.click();
    await expect(keywordPage.searchByStateDisabled).toBeDisabled();

});

});