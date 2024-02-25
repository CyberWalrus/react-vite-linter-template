import { expect, test } from '@playwright/test';

test.beforeEach('Open start URL', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#app-start');
});

test.describe('counter', () => {
    test('value', async ({ page }) => {
        await expect(page.getByTestId('counter-value')).toHaveText('0');
    });

    test('increment', async ({ page }) => {
        await page.getByTestId('counter-increment').click();
        await expect(page.getByTestId('counter-value')).toHaveText('1');
        await page.getByTestId('counter-increment').click();
        await expect(page.getByTestId('counter-value')).toHaveText('2');
        await page.getByTestId('counter-clear').click();
        await expect(page.getByTestId('counter-value')).toHaveText('0');
    });

    test('decrement', async ({ page }) => {
        await page.getByTestId('counter-decrement').click();
        await expect(page.getByTestId('counter-value')).toHaveText('-1');
        await page.getByTestId('counter-decrement').click();
        await expect(page.getByTestId('counter-value')).toHaveText('-2');
        await page.getByTestId('counter-clear').click();
        await expect(page.getByTestId('counter-value')).toHaveText('0');
    });
});
