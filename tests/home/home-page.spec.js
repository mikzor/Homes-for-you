const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../page_objects/home/home.page');
let homePage; 


test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await page.goto('https://delekhomes.com/');
});

test.describe('Homepage', () => {
 test.only('Should see homes for sale ', async ({ page }) => {
   // await expect(homePage.housePrice).toBeVisible();
   // await expect(homePage.priceOne).toBeVisible();
  //  await expect(homePage.imageCardOne).toBeVisible();
  //  await expect(homePage.cityName).toBeVisible();
   await expect(homePage.cityBox).toBeVisible();
   await expect(homePage.cardSquareFoot).toBeVisible();
   await expect(homePage.cardBathrooms).toBeVisible();
});

test('Should be able second', async ({ page }) => {
  await expect(homePage.secondHousePrice).toBeVisible();
  await expect(homePage.secondPriceOne).toBeVisible();
  await expect(homePage.secondImageCardOne).toBeVisible();
  await expect(homePage.secondCityName).toBeVisible();
  await expect(homePage.secondCityBox).toBeVisible();
  await expect(homePage.secondCardSquareFoot).toBeVisible();
  await expect(homePage.secondCardBathrooms).toBeVisible();
});
test('Should be able third', async ({ page }) => {
  await expect(homePage.thirdHousePrice).toBeVisible();
  await expect(homePage.thirdPriceOne).toBeVisible();
  await expect(homePage.thirdImageCardOne).toBeVisible();
  await expect(homePage.thirdCityName).toBeVisible();
  await expect(homePage.thirdCityBox).toBeVisible();
  await expect(homePage.thirdCardSquareFoot).toBeVisible();
  await expect(homePage.thirdCardBathrooms).toBeVisible();
});

});
