class LoginPage {
    constructor(page) {
      this.page = page;
      this.emailInput = '//input[@formcontrolname="email"]';
      this.passwordInput = '//input[@formcontrolname="password"]';
      this.submitButton = '//button[@type="submit"]';
    }
  
    async navigateToLogin() {
      await this.page.goto('https://club-administration.qa.qubika.com/#/auth/login');
    }
  
    async validateLoginPage() {
      await this.page.waitForSelector(this.emailInput);
      await this.page.waitForSelector(this.passwordInput);
      await this.page.waitForSelector(this.submitButton);
    }
  
    async login(email, password) {
      await this.page.fill(this.emailInput, email);
      await this.page.fill(this.passwordInput, password);
      await this.page.click(this.submitButton);
    }
  }
  
  module.exports = { LoginPage };
  