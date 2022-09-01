const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../page_objects/home/home.page');
let homePage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await page.goto('https://delekhomes.com/');
});

test.describe('Homes cards verification', () => {
  test('Should see first card and components', async ({ page }) => {
    await expect(homePage.firstHouseCard).toBeVisible();
    await homePage.firstPrice.innerText();
    await expect(homePage.firstImageCard).toBeVisible();
    await homePage.firstCityName.innerText();
    await homePage.firstCityAddress.innerText();
    await homePage.firstCardSquareFoot.innerText();
  });

  test('Should see 2nd card and components', async ({ page }) => {
    await expect(homePage.secondHouseCard).toBeVisible();
    await homePage.secondPrice.innerText();
    await expect(homePage.secondImageCard).toBeVisible();
    await homePage.secondCityName.innerText();
    await homePage.secondCityAddress.innerText();
    await homePage.secondCardSquareFoot.innerText();
  });

  test('Should see 3rd card and components', async ({ page }) => {
    await expect(homePage.thirdHousePrice).toBeVisible();
    await homePage.thirdPrice.innerText();
    await expect(homePage.thirdImageCard).toBeVisible();
    await homePage.thirdCityName.innerText();
    await homePage.thirdCityAddress.innerText();
    await homePage.thirdCardSquareFoot.innerText();
  });

});
