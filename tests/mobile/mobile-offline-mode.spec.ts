// @smoke @tc-5
import { test } from '../../fixtures/baseTest';
import { CREDENTIALS } from '../../utils/constants';

/**
 * Test Case 5:
 * Login to Demo App.
 * Navigate to "Mobile Application".
 * Verify "Offline mode" is in the "In Progress" column.
 * Confirm tags: "Feature" and "High Priority".
 */

test.describe('Mobile Application - Offline Mode Task', () => {

  test('Verify "Offline mode" task in In Progress column with correct tags', { tag: ['@tc-5', '@smoke'] }, async ({ loginPage, dashboardPage }) => {

    // Step 1: Navigate to Login Page
    await loginPage.navigate();

    // Step 2: Login
    await loginPage.login(CREDENTIALS.email, CREDENTIALS.password);

    // Step 3: Navigate to Mobile Application project
    await dashboardPage.selectProject('Mobile Application');

    // Step 4: Verify task is in "In Progress"
    await dashboardPage.verifyTaskInColumn('Offline mode', 'In Progress');

    // Step 5: Verify correct tags
    await dashboardPage.verifyTags('Offline mode', ['Feature', 'High Priority']);

  });

});