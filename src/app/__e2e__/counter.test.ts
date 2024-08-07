import { expect, test } from '@playwright/test';

test.beforeEach('Open start URL', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
});

test.describe('counter', () => {
    test('increment', async ({ page }) => {
        await page.getByTestId('counter-increment').click();
        await expect(page.getByTestId('counter-value')).toHaveText('1');
    });

    test('increment 2', async ({ page }) => {
        await page.getByTestId('counter-increment').click();
        await page.getByTestId('counter-increment').click();
        await expect(page.getByTestId('counter-value')).toHaveText('2');
    });

    test('clear', async ({ page }) => {
        await page.getByTestId('counter-increment').click();
        await page.getByTestId('counter-increment').click();
        await page.getByTestId('counter-clear').click();
        await expect(page.getByTestId('counter-value')).toHaveText('0');
    });

    test('decrement', async ({ page }) => {
        await page.getByTestId('counter-decrement').click();
        await expect(page.getByTestId('counter-value')).toHaveText('-1');
        await page.screenshot({ animations: 'disabled' });

        await page.getByTestId('counter-decrement').click();
        await expect(page.getByTestId('counter-value')).toHaveText('-2');
        await page.screenshot({ animations: 'disabled' });
    });
});
