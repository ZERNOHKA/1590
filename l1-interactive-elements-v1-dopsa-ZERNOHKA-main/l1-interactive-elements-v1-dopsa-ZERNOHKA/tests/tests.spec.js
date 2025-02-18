import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8080');
});

test('step1', async ({ page }) => {
  const h1 = page.locator('h1');
  const label = page.getByLabel('Введите выражение с двумя однозначными операндами:');
  await expect(h1).toHaveText('l1-interactive-elements-v1');
  await expect(label).toBeVisible();
});

test('step2', async ({ page }) => {
  const btn = await page.locator('button');
  await btn.click();
  const color = await btn.evaluate((el) => window.getComputedStyle(el).color);
  const backGround = await btn.evaluate((el) => window.getComputedStyle(el).backgroundColor);
  await expect(color).toBe('rgb(255, 255, 255)');
  await expect(backGround).toBe('rgb(97, 100, 103)');
});

test('step3', async ({ page }) => {
  const input = await page.locator('input');
  const sumbit = await page.locator('button');

  await input.fill('1*');
  await sumbit.click();
  let border = await input.evaluate((el) => window.getComputedStyle(el).border);
  await expect(border).toBe('3px solid rgb(255, 71, 71)');
  let error = await page.getByText('не хватает одного или нескольких операндов');
  await expect(error).toBeVisible();

  await input.clear();
  await input.fill('1@2');
  await sumbit.click();
  error = await page.getByText('в выражении должны использоваться только операторы +, -, /, *');
  await expect(error).toBeVisible();

  await input.clear();
  await input.fill('3*g');
  await sumbit.click();
  error = await page.getByText('операнды могут быть только числами');
  await expect(error).toBeVisible();

  await input.clear();
  await input.fill('');
  await sumbit.click();
  error = await page.getByText('в выражении должны использоваться только операторы +, -, /, *');
  await expect(error).toBeVisible();

  await input.clear();
  await input.fill('1+1');
  await sumbit.click();
  border = await input.evaluate((el) => window.getComputedStyle(el).border);
  await expect(border).toBe('1px solid rgb(214, 214, 231)');
  error = await page.getByText('не хватает одного или нескольких операндов');
  await expect(error).not.toBeVisible();
});

test('step4', async ({ page }) => {
  const input = await page.locator('input');
  const sumbit = await page.locator('button');
  await input.fill('2+3');
  await sumbit.click();
  let output = await page.getByText('5');
  await expect(output).toBeVisible();

  await input.clear();
  await input.fill('1*2');
  await sumbit.click();
  output = await page.getByText('2');
  await expect(output).toBeVisible();

  await input.clear();
  await input.fill('1-2');
  await sumbit.click();
  output = await page.getByText('-1');
  await expect(output).toBeVisible();

  await input.clear();
  await input.fill('9/3');
  await sumbit.click();
  output = await page.getByText('3');
  await expect(output).toBeVisible();

  await input.clear();
  await input.fill('39');
  await sumbit.click();
  output = await page.getByText('3');
  await expect(output).not.toBeVisible();

  await input.clear();
  await input.fill('*39');
  await sumbit.click();
  output = await page.getByText('3');
  await expect(output).not.toBeVisible();
});
