const { test, expect } = require('@playwright/test');
const { KeywordPage } = require('../../page_objects/keyword/keyword.page');
let keywordPage; 


test.beforeEach(async ({ page }) => {
  keywordPage = new KeywordPage(page);
  await page.goto('https://delekhomes.com/');
});

test.describe('Searching with elements', () => {
 test('Should search by keyword ', async ({}) => {
    await expect(keywordPage.searchByKeyword).toBeEnabled();
});

test('Should search by city ', async ({}) => {
    await expect(keywordPage.searchByCity).toBeEnabled();
});

test('Should search by State ', async ({ page }) => {
   await expect(keywordPage.searchByState).toBeEnabled();
   await keywordPage.searchByState.click();
});

test('Should search by Bedrooms ', async ({ page }) => {
  await expect(keywordPage.searchByBedrooms).toBeEnabled();
  await keywordPage.searchByBedrooms.click();
});

test('Should search by Price ', async ({ page }) => {
  await expect(keywordPage.searchByPrice).toBeEnabled();
  await keywordPage.searchByPrice.click();
});
});