const { test, expect } = require('@playwright/test');
const { FeaturedPage } = require('../../page_objects/featured-listings/featured-listings.page');
let featuredPage; 

test.beforeEach(async ({ page }) => {
  featuredPage = new FeaturedPage(page);
  await page.goto('https://delekhomes.com/listings/');
});

test.describe('Featured Listings', () => {
 test('Should see 6 home cards ', async ({ page }) => {
    await expect(featuredPage.sixCards).toHaveCount(6);

    for (let i = 0; i < 5; i++){
    const imageOne = page.locator('.card-img-top >> nth=' + [i]);
    await expect(imageOne).toBeVisible();
    await page.locator('.badge-secondary >> nth=' + [i]).innerText();
    await page.locator('.text-primary >> nth=' + [i]).innerText();
    await page.locator('.text-primary >> nth=' + [i]).innerText();
    await page.locator('#listings p >> nth='+ [i]).innerText();
   } 
});
});