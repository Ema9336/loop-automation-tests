

// @smoke @tc-1
import { test } from '../../fixtures/baseTest'; // baseTest has our page fixtures (dashboardPage, loginPage, etc.)
import { CREDENTIALS } from '../../utils/constants';

/**
 * Test Case 1:
 * Login to Demo App.
 * Navigate to "Web Application".
 * Verify "Implement user authentication" is in the "To Do" column.
 * Confirm tags: "Feature" and "High Priority".
 */

test.describe('Web Application - User Authentication Task', () => {

  test('Verify "Implement user authentication" task in To Do column with correct tags', { tag: ['@tc-1', '@smoke'] }, async ({ loginPage, dashboardPage }) => {
    // Step 1: Navigate to Login Page
    await loginPage.navigate();

    // Step 2: Login using credentials from constants
    await loginPage.login(CREDENTIALS.email, CREDENTIALS.password);

    // Step 3: Navigate to "Web Application" project
    await dashboardPage.selectProject('Web Application');

    // Step 4: Verify the task exists in "To Do" column
    await dashboardPage.verifyTaskInColumn('Implement user authentication', 'To Do');

    // Step 5: Verify the task has the correct tags
    await dashboardPage.verifyTags('Implement user authentication', ['Feature', 'High Priority']);
  });

});