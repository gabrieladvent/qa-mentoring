# Automation Testing

This documentation explains how to set up and run automation testing using [Playwright](https://playwright.dev/).
# 🧪 Automation Testing Setup with Playwright

This documentation provides a guide to set up and run automated tests using [Playwright](https://playwright.dev/).

## 📦 Installation

We use [pnpm](https://pnpm.io/) as the package manager in this setup. You may also use `npm` or `yarn`—refer to the Playwright documentation if you prefer a different tool.

### Step-by-Step Installation

Run the following command to initialize a new Playwright project:

```bash
pnpm create playwright
```

You will be prompted with several setup questions. Below are the options selected during the setup:

```
Initializing project in '.'
✔ Do you want to use TypeScript or JavaScript? → JavaScript
✔ Where to put your end-to-end tests? → tests
✔ Add a GitHub Actions workflow? → No
✔ Install Playwright browsers? → Yes
✔ Install Playwright OS dependencies? → No

```

After the setup, your project structure should look like this:

```
my-project/
├── tests/
│   └── example.spec.js
├── playwright.config.js
├── package.json
└── ...
```

## 🚀 Running Tests

Here are some common commands to run your tests:

- Runs the end-to-end tests.

```bash
  pnpm exec playwright test
```

- Starts the interactive UI mode.

```bash
  pnpm exec playwright test --ui
```

- Runs the tests only on Desktop Chrome.

```bash
  pnpm exec playwright test --project=chromium
```

- Runs the tests in a specific file.

```bash
  pnpm exec playwright test example
```

- Runs the tests in debug mode.

```bash
  pnpm exec playwright test --debug
```

---

Feel free to customize this setup or extend it to suit your project’s testing requirements.
