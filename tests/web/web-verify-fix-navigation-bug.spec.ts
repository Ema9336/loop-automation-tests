// tests/web/web-verify-fix-navigation-bug.spec.ts

// @smoke @regression @tc-2
import { test } from '../../fixtures/baseTest'; // baseTest has our page fixtures (dashboardPage, loginPage, etc.)
import { CREDENTIALS } from '../../utils/constants';

/**
 * Test Case 2:
 * Login to Demo App.
 * Navigate to "Web Application."
 * Verify "Fix navigation bug" is in the "To Do" column.
 * Confirm tag: "Bug".
 */

test.describe('Web Application - Fix Navigation Bug Task', () => {

  test('Verify "Fix navigation bug" task in To Do column with correct tag', { tag: ['@tc-2', '@smoke', '@regression'] }, async ({ loginPage, dashboardPage }) => {
    // Step 1: Navigate to Login Page
    await loginPage.navigate();

    // Step 2: Login using credentials from constants
    await loginPage.login(CREDENTIALS.email, CREDENTIALS.password);

    // Step 3: Navigate to "Web Application" project
    await dashboardPage.selectProject('Web Application');

    // Step 4: Verify the task exists in "To Do" column
    await dashboardPage.verifyTaskInColumn('Fix navigation bug', 'To Do');

    // Step 5: Verify the task has the correct tag
    await dashboardPage.verifyTags('Fix navigation bug', ['Bug']);
  });

});