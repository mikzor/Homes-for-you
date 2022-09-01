const { test, expect } = require('@playwright/test');
const { ListingsPage } = require('../../page_objects/listings/listings.page');
let listingsPage; 

test.beforeEach(async ({ page }) => {
  listingsPage = new ListingsPage(page);
  await page.goto('https://delekhomes.com/');
});

test.describe('Should open listing upon clicking on More Info', () => {
    test('Data of the home listing page ', async ({}) => {
       await listingsPage.moreInfoButton.click();
       await listingsPage.houseTitle.innerText();
       await listingsPage.listingCityName.innerText();
       await expect(listingsPage.listingLargeImage).toBeVisible();
       await expect(listingsPage.listingMiniImages).toBeEnabled();
       await listingsPage.askingPrice.innerText();
       await listingsPage.bedroom.innerText();
       await listingsPage.bathroom.innerText();
       await listingsPage.garage.innerText();
       await listingsPage.squareFeet.innerText();
       await listingsPage.lotSize.innerText();
       await listingsPage.listingDate.innerText();
       await listingsPage.realtorName.innerText();
       await listingsPage.homeInformation.innerText();
       await expect(listingsPage.realtorImage).toBeVisible();
       await listingsPage.propertyRealtorText.innerText();
       await listingsPage.propertyRealtorName.innerText();
   });
   });