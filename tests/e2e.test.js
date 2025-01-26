const { createUser } = require('../api/user');
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { DashboardPage } = require('../pages/dashboardPage');
const { CategoryPage } = require('../pages/categoryPage');

test.describe('Qubika Sports Club Management - E2E Tests', () => {
  test('End-to-End Workflow with API and UI Integration', async ({ page }) => {
    // Step 1: Provide the authentication token
    const authToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0LnF1YmlrYUBxdWJpa2EuY29tIiwiaWF0IjoxNzM3OTE0ODM1LCJleHAiOjE3MzgwMDEyMzV9.a2RVcHnzqMsYxxkTvp2s8CUuVbJSSgBJ07k3jN0vCdYum_y8bv77fxsfSzYeZcFKnwV43tgcFM7VHUIdsJuCxg';

    // Step 2: Create a User via API
    const user = await createUser(authToken);
    console.log('Created User:', user);

    // Step 3: Navigate to Login Page
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const categoryPage = new CategoryPage(page);

    await loginPage.navigateToLogin();
    await loginPage.validateLoginPage();

    // Step 4: Log in using the user's credentials
    await loginPage.login(user.email, '12345678');
    await dashboardPage.validateDashboard();

    // Step 5: Navigate to Categories and Validate
    await dashboardPage.navigateToCategoryPage();
    await categoryPage.validateCategoryPage();
    

    // Step 6: Create a New Category
    const categoryName = `Category_${Date.now()}`;
    await categoryPage.createCategory(categoryName);

    // Step 7: Create a Subcategory
    const subCategoryName = `SubCategory_${Date.now()}`;
    await categoryPage.createSubCategory("ThisIsParentCategoryTest", subCategoryName);
  });
});