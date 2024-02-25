/* eslint-disable import/no-extraneous-dependencies */
import type { ChildProcessWithoutNullStreams } from 'child_process';
import { spawn } from 'child_process';
import type { BrowserContext } from 'playwright';
import { chromium } from 'playwright';

import { getMismatchedPixels } from './helpers';

const serverUrl = process.env.TEST_SERVER_URL ?? '';

describe('Screenshot Test', () => {
    let browser: BrowserContext;
    let serverProcess: ChildProcessWithoutNullStreams;

    beforeAll(async () => {
        serverProcess = spawn('yarn', ['test:server'], {
            env: process.env,
            shell: true,
            stdio: ['inherit', 'pipe', 'pipe'],
        }) as unknown as ChildProcessWithoutNullStreams;
        await new Promise((res) => {
            serverProcess.stdout.on('data', (data) => {
                if (String(data).includes('Local')) {
                    res(undefined);
                }
            });
        });

        const preBrowser = await chromium.launch(); // Для запуска в headless-режиме
        browser = await preBrowser.newContext({
            baseURL: serverUrl,
        });
    });

    afterAll(async () => {
        await browser?.close();
        serverProcess.kill();
    });

    it('screenshot of the home', async () => {
        const page = await browser.newPage();
        await page.goto('/');

        const mismatchedPixels = await getMismatchedPixels(page, 'home-desktop');
        await page.close();
        expect(mismatchedPixels).toBe(0);
    });

    it('screenshot of the about', async () => {
        const page = await browser.newPage();
        await page.goto('/about');

        const mismatchedPixels = await getMismatchedPixels(page, 'about-desktop');
        expect(mismatchedPixels).toBe(0);
    });

    it('screenshot of the 404', async () => {
        const page = await browser.newPage();
        await page.goto('/404');

        const mismatchedPixels = await getMismatchedPixels(page, '404-desktop');
        expect(mismatchedPixels).toBe(0);
    });
});
