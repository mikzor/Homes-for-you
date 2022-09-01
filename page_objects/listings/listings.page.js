exports.ListingsPage = class ListingsPage {
    constructor(page) {
       this.page = page;
       this.moreInfoButton = page.locator('text=More Info').nth(1);
       this.houseTitle = page.locator('.display-4');
       this.listingCityName = page.locator('#showcase-inner p');
       this.listingLargeImage = page.locator('.col-md-9');
       this.listingMiniImages = page.locator('[class="row mb-5 thumbs"]');
       this.askingPrice = page.locator('.fields li >> nth=0');
       this.bedroom = page.locator('.fields li >> nth=1');
       this.bathroom = page.locator('.fields li >> nth=2');
       this.garage = page.locator('.fields li >> nth=3');
       this.squareFeet = page.locator('.fields li >> nth=4');
       this.lotSize = page.locator('.fields li >> nth=5');
       this.listingDate = page.locator('.fields li >> nth=6');
       this.realtorName = page.locator('.fields li >> nth=7');
       this.homeInformation = page.locator('.col-md-12 >> nth=1');
       this.realtorImage = page.locator('.card-img-top');
       this.propertyRealtorText = page.locator('.card-body h5');
       this.propertyRealtorName = page.locator('.card-body h6');
    }
}