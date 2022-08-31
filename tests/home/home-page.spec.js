const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../page_objects/home/home.page');
let homePage; 


test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await page.goto('https://delekhomes.com/');
});

test.describe('Homepage', () => {
 test.only('Should see homes for sale and verify piece of data in every home card', async ({ page }) => {
  await homePage.firstHousePrice.innerText();
  await homePage.firstPrice.innerText();
  await homePage.firstImageCard.innerText();
  await homePage.firstCityName.innerText();
  await homePage.firstCityAddress.innerText();
  await homePage.firstCardSquareFoot.innerText();

  await homePage.secondHousePrice.innerText();
  await homePage.secondPrice.innerText();
  await homePage.secondImageCard.innerText();
  await homePage.secondCityName.innerText();
  await homePage.secondCityAddress.innerText();
  await homePage.secondCardSquareFoot.innerText();

  await homePage.thirdHousePrice.innerText();
  await homePage.thirdPrice.innerText();
  await homePage.thirdImageCard.innerText();
  await homePage.thirdCityName.innerText();
  await homePage.thirdCityAddress.innerText();
  await homePage.thirdCardSquareFoot.innerText();
 });

});
