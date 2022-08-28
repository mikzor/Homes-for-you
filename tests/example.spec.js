const { test, expect } = require('@playwright/test');
const { HomePage } = require('../page_objects/homesSale.page');
let homePage; 


test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await page.goto('https://delekhomes.com/');
});

test.describe('Houses Cards', () => {
 test('Should be able to examine atributes ', async ({ page }) => {
   await homePage.housePrice.click();
   await expect(homePage.priceOne).toBeVisible();
   await expect(homePage.imageCardOne).toBeVisible();
   await expect(homePage.cityName).toBeVisible();
   await expect(homePage.cityBox).toBeVisible();


});
});
