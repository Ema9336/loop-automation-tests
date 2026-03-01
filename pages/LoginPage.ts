import { Page } from '@playwright/test';
import { BASE_URL } from '../utils/constants';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto(BASE_URL);
  }

  async login(email: string, password: string) {
    await this.page.locator('#username').fill(email);
    await this.page.locator('#password').fill(password);
    await this.page.getByRole('button', { name: 'Sign in' }).click();
  }
}