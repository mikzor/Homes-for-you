
exports.HomePage = class HomesPage {
    constructor(page) {
       this.page = page;
       this.housePrice = page.locator('.card-img-overlay').nth(0);
       this.priceOne = page.locator('.badge-secondary').nth(0);
       this.imageCardOne = page.locator('.card-img-top').nth(0);
       this.cityName = page.locator('.text-primary').nth(0);
       this.cityBox = page.locator('[class="fas fa-map-marker text-secondary"]').nth(0);

    }
}



