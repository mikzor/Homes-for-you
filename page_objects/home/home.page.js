
exports.HomePage = class HomesPage {
    constructor(page) {
       this.page = page;

       this.firstHousePrice = page.locator('.card-img-overlay').first();
       this.firstPrice = page.locator('.badge-secondary').first();
       this.firstImageCard = page.locator('.card-img-top').first();
       this.firstCityName = page.locator('.text-primary').first();
       this.firstCityAddress = page.locator('.card-body p').first();
       this.firstCardSquareFoot = page.locator('.card-body div div ').first();

       this.secondHousePrice = page.locator('.card-img-overlay').second();
       this.secondPrice = page.locator('.badge-secondary').second();
       this.secondImageCard = page.locator('.card-img-top').second();
       this.secondCityName = page.locator('.text-primary').second();
       this.secondCityAddress = page.locator('.card-body p').second();
       this.secondCardSquareFoot = page.locator('.card-body div div ').second();

       this.thirdHousePrice = page.locator('.card-img-overlay').third();
       this.thirdPrice = page.locator('.badge-secondary').third();
       this.thirdImageCard = page.locator('.card-img-top').third();
       this.thirdCityName = page.locator('.text-primary').third();
       this.thirdCityAddress = page.locator('.card-body p').third();
       this.thirdCardSquareFoot = page.locator('.card-body div div ').third();

    }
}



