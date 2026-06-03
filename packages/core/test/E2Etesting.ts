import { test, expect } from '@playwright/test';

test('user navigation', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('h1')).toContainText('Home');
});