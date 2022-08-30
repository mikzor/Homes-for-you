
exports.HomePage = class HomesPage {
    constructor(page) {
       this.page = page;

       //this.housePrice = page.locator('.card-img-overlay').nth(0);
     // this.priceOne = page.locator('.badge-secondary').nth(0);
      //  this.imageCardOne = page.locator('.card-img-top').nth(0);
      //  this.cityName = page.locator('.text-primary').nth(0);
       this.cityBox = page.locator(':right-of(.fa-map-marker)').nth(0);
      // this.cardSquareFoot = page.locator(':right-of(.fa-th-large)').nth(0);
       this.cardBathrooms = page.locator(':right-of(.fa-bed)').nth(0);

       this.secondHousePrice = page.locator('.card-img-overlay').nth(1);
       this.secondPriceOne = page.locator('.badge-secondary').nth(1);
       this.secondImageCardOne = page.locator('.card-img-top').nth(1);
       this.secondCityName = page.locator('.text-primary').nth(1);
       this.secondCityBox = page.locator('[class="fas fa-map-marker text-secondary"]').nth(1);
       this.secondCardSquareFoot = page.locator('.fa-th-large').nth(1);
       this.secondCardBathrooms = page.locator('.fa-bed').nth(1);

       this.thirdHousePrice = page.locator('.card-img-overlay').nth(2);
       this.thirdPriceOne = page.locator('.badge-secondary').nth(2);
       this.thirdImageCardOne = page.locator('.card-img-top').nth(2);
       this.thirdCityName = page.locator('.text-primary').nth(2);
       this.thirdCityBox = page.locator('[class="fas fa-map-marker text-secondary"]').nth(2);
       this.thirdCardSquareFoot = page.locator('.fa-th-large').nth(2);
       this.thirdCardBathrooms = page.locator('.fa-bed').nth(2);

       
      // this.stateButton = page.locator('[name="state]');

    }
}



