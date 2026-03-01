import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

// Extend Playwright test to include our page objects
export const test = base.extend<{
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
}>({
  loginPage: async ({ page }, use) => {
    // Initialize the LoginPage
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    // Initialize the DashboardPage
    await use(new DashboardPage(page));
  },
});

export { expect } from '@playwright/test';