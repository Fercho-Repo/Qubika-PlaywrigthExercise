
class CategoryPage {
    constructor(page) {
      this.page = page;
      this.categoryList = '//h3[contains(text(), "Tipos de categorías")]';
      this.createCategoryButton = '//button[contains(text()," Adicionar")]';
      this.categoryNameInput = '//input[@placeholder="Nombre de categoría"]';
      this.saveButton = '//button[contains(text(),"Aceptar")]';
      this.subCategoryCheckBox = '//input[@id="customCheckMain"] | //span[@class="text-muted"]'
      this.subCategoryParent = '//input[@aria-autocomplete="list"]'
      this.createCategoryConfirmation = '//div[contains(text()," Tipo de categoría adicionada satisfactoriamente")]'
      this.labelSubCategory = '//label[@for="customCheckMain"]'
    }
  
    async validateCategoryPage() {
      await this.page.waitForSelector(this.categoryList);
    }
  
    async createCategory(categoryName) {
      await this.page.click(this.createCategoryButton);
      await this.page.fill(this.categoryNameInput, categoryName);
      await this.page.click(this.saveButton);
      await this.page.waitForSelector(this.createCategoryConfirmation);
    }
  
    async createSubCategory(categoryName, subCategoryName) {
      await this.page.click(this.createCategoryButton);
      await this.page.fill(this.categoryNameInput, subCategoryName);
      await this.page.waitForSelector(this.subCategoryCheckBox);
      await this.page.locator(this.labelSubCategory).click();
      await this.page.fill(this.subCategoryParent, categoryName);
      await this.page.keyboard.press('Enter');
      await this.page.click(this.saveButton);
      await this.page.waitForSelector(this.createCategoryConfirmation);
    }


  }
  
  module.exports = { CategoryPage };
  