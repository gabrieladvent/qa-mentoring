import { test, expect } from "@playwright/test";

const BASE_URL = "https://www.saucedemo.com";

test("Logged-in user cannot access login page", async ({ page }) => {
  await page.goto(BASE_URL);
  await page.fill('[data-test="username"]', "standard_user");
  await page.fill('[data-test="password"]', "secret_sauce");
  await page.click('[data-test="login-button"]');

  await expect(page).toHaveURL(`${BASE_URL}/inventory.html`);

  await page.goto(`${BASE_URL}`);
  await expect(page).toHaveURL(`${BASE_URL}/inventory.html`);

  // this opsional only
  await expect(page.locator('[data-test="title"]')).toHaveText("Products");
  await expect(page.locator('[data-test="username"]')).toHaveCount(0);
});
