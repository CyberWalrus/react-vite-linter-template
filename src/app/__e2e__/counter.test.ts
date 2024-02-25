import { expect, test } from '@playwright/test';

test('counter full test', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#app-start');
    await expect(page.getByTestId('counter-value')).toHaveText('0');
    await page.getByTestId('counter-increment').click();
    await expect(page.getByTestId('counter-value')).toHaveText('1');
    await page.getByTestId('counter-increment').click();
    await expect(page.getByTestId('counter-value')).toHaveText('2');
    await page.getByTestId('counter-increment').click();
    await expect(page.getByTestId('counter-value')).toHaveText('3');
    await page.getByTestId('counter-increment').click();
    await expect(page.getByTestId('counter-value')).toHaveText('4');
    await page.getByTestId('counter-decrement').click();
    await expect(page.getByTestId('counter-value')).toHaveText('3');
    await page.getByTestId('counter-decrement').click();
    await expect(page.getByTestId('counter-value')).toHaveText('2');
    await page.getByTestId('counter-clear').click();
    await expect(page.getByTestId('counter-value')).toHaveText('0');
});
