// @smoke @regression @tc-3
import { test } from '../../fixtures/baseTest';
import { CREDENTIALS } from '../../utils/constants';

/**
 * Test Case 3:
 * Login to Demo App.
 * Navigate to "Web Application".
 * Verify "Design system updates" is in the "In Progress" column.
 * Confirm tag: "Design".
 */

test.describe('Web Application - Design System Updates Task', () => {

  test('Verify "Design system updates" task in In Progress column with correct tag', { tag: ['@tc-3', '@smoke', '@regression'] }, async ({ loginPage, dashboardPage }) => {

    // Step 1: Navigate to Login Page
    await loginPage.navigate();

    // Step 2: Login
    await loginPage.login(CREDENTIALS.email, CREDENTIALS.password);

    // Step 3: Navigate to Web Application project
    await dashboardPage.selectProject('Web Application');

    // Step 4: Verify task is in "In Progress"
    await dashboardPage.verifyTaskInColumn('Design system updates', 'In Progress');

    // Step 5: Verify correct tag
    await dashboardPage.verifyTags('Design system updates', ['Design']);

  });

});