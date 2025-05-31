import { test, expect } from "@playwright/test";
import { invalidLoginData } from "../data/login-data";


const BASE_URL = "https://www.saucedemo.com";

invalidLoginData.forEach(({ username, password, errors }, index) => {
  test(`(${index + 1}) Negative Login`, async ({ page }) => {
    await page.goto(BASE_URL);
    await page.fill('[data-test="username"]', username);
    await page.fill('[data-test="password"]', password);
    await page.click('[data-test="login-button"]');

    await expect(page.locator('[data-test="error"]')).toHaveText(errors);
  });
});
