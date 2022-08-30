
exports.ListingsPage = class ListingsPage {
    constructor(page) {
       this.page = page;
       this.sixCards = page.locator('.col-md-6');
        const index = 0;
       this.firstCard = page.locator('.card').nth(0);
       this.firstCard = page.locator('.card').nth(1);
    //    this.firstCardImage = page.locator('.card-img-top >> nth=0');
    //    this.firstCardPrice = page.locator('.badge >> nth=0');
    //    this.firstCardPropertyName = page.locator('.text-primary >> nth=0');

    


    }
}