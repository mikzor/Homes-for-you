
exports.HomePage = class HomesPage {
    constructor(page) {
       this.page = page;
       this.firstHouseCard = page.locator('.card-img-overlay').first();
       this.firstPrice = page.locator('.badge-secondary').first();
       //Used image-overlay selector becasue website has bugs and crashing Image selector
       this.firstImageCard = page.locator('.card-img-overlay ').first();
       this.firstCityName = page.locator('.text-primary').first();
       this.firstCityAddress = page.locator('.card-body p').first();
       this.firstCardSquareFoot = page.locator('.card-body div div ').first();
       this.secondHouseCard = page.locator('.card-img-overlay >> nth=1');
       this.secondPrice = page.locator('.badge-secondary >> nth=1');
       this.secondImageCard = page.locator('.card-img-overlay >> nth=1');
       this.secondCityName = page.locator('.text-primary >> nth=1');
       this.secondCityAddress = page.locator('.card-body p >> nth=1');
       this.secondCardSquareFoot = page.locator('.card-body div div >> nth=6'); 
       this.thirdHousePrice = page.locator('.card-img-overlay >> nth=2');
       this.thirdPrice = page.locator('.badge-secondary >> nth=2');
       this.thirdImageCard = page.locator('.card-img-overlay >> nth=2');
       this.thirdCityName = page.locator('.text-primary >> nth=2');
       this.thirdCityAddress = page.locator('.card-body p >> nth=2');
       this.thirdCardSquareFoot = page.locator('.card-body div div >> nth=12 ');
    }
}