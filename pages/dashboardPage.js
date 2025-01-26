class DashboardPage {
    constructor(page) {
      this.page = page;
      this.dashboardTitle = '//i[@class="ni ni-button-power"]/ancestor::a[contains(text(),"Salir")]';
      this.categoryLink =   '//a[@href="#/category-type"]';   
    }
  
    async validateDashboard() {
      const expectedText = "Salir"
      //const locatorA = await page.locator(this.dashboardTitle);
      await this.page.waitForSelector(this.dashboardTitle);
     // await expect(locatorA).toHaveText(expectedText);
    }
  
    async navigateToCategoryPage() {
      await this.page.click(this.categoryLink);
    }
  }
  
  module.exports = { DashboardPage };
  