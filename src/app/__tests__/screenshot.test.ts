/* eslint-disable import/no-extraneous-dependencies */
import type { ChildProcessWithoutNullStreams } from 'child_process';
import { spawn } from 'child_process';
import type { Browser } from 'playwright';
import { chromium } from 'playwright';

import { getMismatchedPixels } from './helpers';

const BASE_URL = process.env.TEST_BASE_URL || 'http://localhost:4173';

describe('Screenshot Test', () => {
    let browser: Browser;
    let serverProcess: ChildProcessWithoutNullStreams;

    beforeAll(async () => {
        serverProcess = spawn('yarn', ['preview'], {
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

        browser = await chromium.launch(); // Для запуска в headless-режиме
    });

    afterAll(async () => {
        await browser?.close();
        serverProcess.kill();
    });

    it('screenshot of the home', async () => {
        const page = await browser.newPage();
        await page.goto(BASE_URL);
        const screenshotBuffer = await page.screenshot();

        const mismatchedPixels = getMismatchedPixels(screenshotBuffer, 'home-desktop');
        expect(mismatchedPixels).toBe(0);
    });

    it('screenshot of the about', async () => {
        const page = await browser.newPage();
        await page.goto(`${BASE_URL}/about`);
        const screenshotBuffer = await page.screenshot();

        const mismatchedPixels = getMismatchedPixels(screenshotBuffer, 'about-desktop');
        expect(mismatchedPixels).toBe(0);
    });

    it('screenshot of the 404', async () => {
        const page = await browser.newPage();
        await page.goto(`${BASE_URL}/404`);
        const screenshotBuffer = await page.screenshot();

        const mismatchedPixels = getMismatchedPixels(screenshotBuffer, '404-desktop');
        expect(mismatchedPixels).toBe(0);
    });
});
