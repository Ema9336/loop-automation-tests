// @smoke @regression @tc-6
import { test } from '../../fixtures/baseTest';
import { CREDENTIALS } from '../../utils/constants';

/**
 * Test Case 6:
 * Login to Demo App.
 * Navigate to "Mobile Application".
 * Verify "App icon design" is in the "Done" column.
 * Confirm tag: "Design".
 */

test.describe('Mobile Application - App Icon Design Task', () => {

  test('Verify "App icon design" task in Done column with correct tag', { tag: ['@tc-6', '@smoke', '@regression'] }, async ({ loginPage, dashboardPage }) => {

    // Step 1: Navigate to Login Page
    await loginPage.navigate();

    // Step 2: Login
    await loginPage.login(CREDENTIALS.email, CREDENTIALS.password);

    // Step 3: Navigate to Mobile Application project
    await dashboardPage.selectProject('Mobile Application');

    // Step 4: Verify task is in "Done"
    await dashboardPage.verifyTaskInColumn('App icon design', 'Done');

    // Step 5: Verify correct tag
    await dashboardPage.verifyTags('App icon design', ['Design']);

  });

});