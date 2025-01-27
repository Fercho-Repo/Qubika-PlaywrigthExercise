
// README.md file
# Qubika Sports Club Management E2E Automation

## Description
This project automates an end-to-end workflow for the Qubika Sports Club Management System using Playwright with the Page Object Model (POM) approach. The test includes creating a user via API, logging in, creating categories, and validating UI components.

## Features
1. Creates a user via API.
2. Automates the login and category creation workflows using POM.
3. Validates key elements on login, dashboard, and category pages.

## Project Structure
```
project/
├── pages/      # Page Object Model files
├── api/        # API utilities
├── tests/      # Test scripts
├── README.md   # Project documentation
├── playwright.config.js # Playwright configuration
├── package.json # Node.js package definition
```

## Setup Instructions

### Prerequisites
- Install [Node.js](https://nodejs.org/).
- Install Playwright:
  ```bash
  npm i @playwright/test
  ```

### Clone the Repository
1. Clone the repository to your local system:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Install Playwright:
   ```bash
    npx playwright install
   ```

### Run the Tests
1. Execute the tests:
   ```bash
   npx playwright test
   ```
2. View test results in the terminal.

### Project Enhancements
- Modular POM design for maintainability.
- API and UI workflow validation.
- Logs detailed steps for debugging.

### Comments
- Ensure the API and UI endpoints are accessible before running the tests.
- Update selectors in page objects if the UI changes.

