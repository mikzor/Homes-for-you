exports.KeywordPage = class KeywordPage {
    constructor(page) {
       this.page = page;
       this.searchByKeyword = page.locator("input[name='keywords']");
       this.searchByCity = page.locator("input[name='city']");
       this.searchByState = page.locator("select[name='state']");
       this.searchByBedrooms = page.locator("select[name='bedrooms']");
       this.searchByPrice = page.locator("select[name='price']");
      }
   }