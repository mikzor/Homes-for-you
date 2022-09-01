exports.ListingsPage = class ListingsPage {
    constructor(page) {
       this.page = page;
       this.sixCards = page.locator('.col-md-6');
    }
}