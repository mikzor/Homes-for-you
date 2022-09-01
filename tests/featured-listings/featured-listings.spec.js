const { test, expect } = require('@playwright/test');
const { ListingsPage } = require('../../page_objects/featured-listings/featured-listings.page');
let homePage, listingsPage; 

test.beforeEach(async ({ page }) => {
  listingsPage = new ListingsPage(page);
  await page.goto('https://delekhomes.com/listings/');
});

test.describe('Featured Listings', () => {
 test('Should see 6 home cards ', async ({ page }) => {
    await expect(listingsPage.sixCards).toHaveCount(6);
});
});