# Loop Automation End-to-End Testing

![CI](https://github.com/Ema9336/loop-automation-tests/actions/workflows/ci.yml/badge.svg)

This repository contains a robust, scalable end-to-end testing solution for web and mobile applications, developed for **Loop Automation** (company). Built with **Playwright** and **TypeScript** and following the **Page Object Model (POM)** design pattern, it is designed for professional teams and individuals who require maintainable, reliable, and cross-browser automated testing.

---

## Features

---

## Test Tags (Smoke/Regression)

You can organize and run specific subsets of tests using tags such as `@smoke` and `@regression`. This is useful for CI pipelines and targeted test execution.

- **Tagging a test:**
  ```typescript
  test('Critical login flow' {tag: ["@smoke", "@regression"]}, async ({ page }) => { ... });
  ```
- **Running only smoke tests:**
  ```bash
  npx playwright test --grep @smoke
  ```
- **Running only regression tests:**

  ```bash
  npx playwright test --grep @regression
  ```

- Modern Playwright + TypeScript stack
- Page Object Model for maintainability and scalability
- Cross-browser and cross-platform support
- Automatic HTML reporting, screenshots, and video capture
- Trace files for advanced debugging
- Clean project structure for easy onboarding

---

## Project Structure

- `pages/` – Page Object classes
- `tests/` – Test specifications (web & mobile)
- `utils/` – Utility and helper functions
- `data/` – Test data files
- `fixtures/` – Shared test fixtures

---

## Getting Started

### 1. Installation

```bash
npm install
```

### 2. Running Tests

- **Run all tests:**
  ```bash
  npm run test
  ```
- **Run only web tests:**
  ```bash
  npm run test:web
  ```
- **Run only mobile tests:**
  ```bash
  npm run test:mobile
  ```
- **Run tests in headed mode:**
  ```bash
  npm run test:headed
  ```
- **Run a specific test file:**
  ```bash
  npx playwright test tests/web/web-user-authentication.spec.ts
  ```
- **Run tests in a specific browser:**
  ```bash
  npx playwright test --project=chromium
  npx playwright test --project=firefox
  npx playwright test --project=webkit
  ```

### 3. Reporting & Debugging

- **HTML report:**
  ```bash
  npm run test:report
  ```
- **Screenshots & videos:** Automatically captured on test failure
- **Trace files:** Captured on first retry for advanced debugging

---

## Using Page Objects

Import page objects and utilities using path aliases:

```typescript
import { LoginPage } from "pages/LoginPage";
import { helperFunction } from "utils/helper";
```

### Example Test

```typescript
import { test, expect } from "@playwright/test";
import { LoginPage } from "pages/LoginPage";

test("User can log in", async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login("user@example.com", "password123");
  await expect(page).toHaveURL("/dashboard");
});
```

---

## Adding New Tests

1. Create a new file in `tests/` ending with `.spec.ts`.
2. Use Page Objects from `pages/` to interact with the application.
3. Use helper functions from `utils/` for reusable actions.
4. Run your tests with `npm run test`.

---

## Best Practices

- Keep selectors and page logic in Page Object files, not in tests
- Reuse actions and utilities from `utils/`
- Store test data in `data/` for easy updates
- Use descriptive test names for clarity and maintainability
- Write atomic, independent tests for reliability

---

## References

- [Playwright Documentation](https://playwright.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
