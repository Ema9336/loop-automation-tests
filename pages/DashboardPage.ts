import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  private todoColumn: Locator;
  private inProgressColumn: Locator;
  private reviewColumn: Locator;
  private doneColumn: Locator;
  private projectButtons: Locator;

  constructor(private page: Page) {
    // Column containers by heading text
    this.todoColumn = page.locator('h2:has-text("To Do")').locator('..');        // Parent container
    this.inProgressColumn = page.locator('h2:has-text("In Progress")').locator('..');
    this.reviewColumn = page.locator('h2:has-text("Review")').locator('..');
    this.doneColumn = page.locator('h2:has-text("Done")').locator('..');

    // Project selection buttons in sidebar
    this.projectButtons = page.locator('nav button');
  }

  /**
   * Select a project from the sidebar
   */
  async selectProject(projectName: string) {
    await this.projectButtons.locator(`h2:has-text("${projectName}")`).click();
  }

  /**
   * Verify that a task exists in a specific column
   */
  async verifyTaskInColumn(taskName: string, columnName: string) {
    let column: Locator;

    switch (columnName) {
      case 'To Do':
        column = this.todoColumn;
        break;
      case 'In Progress':
        column = this.inProgressColumn;
        break;
      case 'Review':
        column = this.reviewColumn;
        break;
      case 'Done':
        column = this.doneColumn;
        break;
      default:
        throw new Error(`Column ${columnName} does not exist`);
    }

    const taskCard = column.locator(`h3:has-text("${taskName}")`);
    await expect(taskCard).toBeVisible();
  }

  /**
   * Verify tags for a specific task
   */
  async verifyTags(taskName: string, tags: string[]) {
    const taskCard = this.page.locator(`h3:has-text("${taskName}")`).locator('..');

    for (const tag of tags) {
      const tagLocator = taskCard.locator(`span:has-text("${tag}")`);
      await expect(tagLocator).toBeVisible();
    }
  }
}