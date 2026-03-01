// @smoke @tc-4
import { test } from '../../fixtures/baseTest';
import { CREDENTIALS } from '../../utils/constants';

/**
 * Test Case 4:
 * Login to Demo App.
 * Navigate to "Mobile Application".
 * Verify "Push notification system" is in the "To Do" column.
 * Confirm tag: "Feature".
 */

test.describe('Mobile Application - Push Notification Task', () => {

  test('Verify "Push notification system" task in To Do column with correct tag', { tag: ['@tc-4', '@smoke'] }, async ({ loginPage, dashboardPage }) => {

    // Step 1: Navigate to Login Page
    await loginPage.navigate();

    // Step 2: Login
    await loginPage.login(CREDENTIALS.email, CREDENTIALS.password);

    // Step 3: Navigate to Mobile Application project
    await dashboardPage.selectProject('Mobile Application');

    // Step 4: Verify task is in "To Do"
    await dashboardPage.verifyTaskInColumn('Push notification system', 'To Do');

    // Step 5: Verify correct tag
    await dashboardPage.verifyTags('Push notification system', ['Feature']);

  });

});