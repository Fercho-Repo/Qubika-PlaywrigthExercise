import { test, expect } from '@playwright/test';

test.describe('Qubika Automation Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to Qubika Website
    await page.goto('https://www.qubika.com');
  });

  test('Validate Home Page', async ({ page }) => {
    // Validate URL
    await expect(page).toHaveURL('https://qubika.com');

    // Validate Qubika logo is displayed
    const logo = page.locator('//a[@class="logo"]'); //
    await expect(logo).toBeVisible();
  });

  test('Validate Contact Form', async ({ page }) => {
    // Click 'Contact us' button
    const contactUsButton = page.locator('//a[@class="button rounded big-btn contact-us-modal-open" and contains(text(),"Contact Us")]'); //
    await contactUsButton.click();

    // Validate contact form fields
    const nameField = page.locator('//input[@name="firstname"]'); 
    const emailField = page.locator('//input[@name="lastname"]'); 
    const submitButton = page.locator('//input[@value="Submit"]'); //

    await expect(nameField).toBeVisible();
    await expect(emailField).toBeVisible();
    await expect(submitButton).toBeVisible();
  });

  test('Validate Error Messages', async ({ page }) => {
    // Click 'Contact us' button
    const contactUsButton = page.locator('//a[@class="button rounded big-btn contact-us-modal-open" and contains(text(),"Contact Us")]'); //
    await contactUsButton.click();

    // Click 'Get in touch' without filling any field
    const submitButton = page.locator('//input[@value="Submit"]');
    await submitButton.click();

    // Validate error messages
    const nameError = page.locator('//input[@name="firstname"]/ancestor::div[@class="input"]/following-sibling::ul/li/label[@class="hs-error-msg hs-main-font-element"]'); //
    const emailError = page.locator('//input[@name="lastname"]/ancestor::div[@class="input"]/following-sibling::ul/li/label[@class="hs-error-msg hs-main-font-element"]');  //

    await expect(nameError).toBeVisible();
    await expect(emailError).toBeVisible();

    // Validate 'Name' field is red
    const nameField = page.locator('//input[@name="firstname"]'); //
    const nameBorderColor = await nameField.evaluate((el) =>
      window.getComputedStyle(el).borderColor
    );
    expect(nameBorderColor).toBe('rgb(0, 0, 0)'); // Ensure it's red

    // Input 'Test name' into 'Name' field
    await nameField.fill('Test name');
    await submitButton.click();

    // Validate Name field no longer has an error
    await expect(nameError).not.toBeVisible();

    // Validate Email field error remains and is red
    await expect(emailError).toBeVisible();
    const emailField = page.locator('//input[@name="email"]');
    const emailBorderColor = await emailField.evaluate((el) =>
      window.getComputedStyle(el).borderColor
    );
    expect(emailBorderColor).toBe('rgb(0, 0, 0)');
  });
});
