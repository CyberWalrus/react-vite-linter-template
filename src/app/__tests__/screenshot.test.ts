/* eslint-disable import/no-extraneous-dependencies */
import type { ChildProcessWithoutNullStreams } from 'child_process';
import { spawn } from 'child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import pixelmatch from 'pixelmatch';
import type { Browser, Page } from 'playwright';
import { chromium } from 'playwright'; // Импортируем Playwright
import { PNG } from 'pngjs';

const BASE_URL = process.env.TEST_BASE_URL || 'http://localhost:4173';

const saveFile = (fileName: string, data: string | NodeJS.ArrayBufferView) => {
    const filePath = resolve(__dirname, fileName);

    const dir = dirname(filePath);

    if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
    }

    writeFileSync(filePath, data);
};

const getMismatchedPixels = (screenshotBuffer: Buffer, fileName: string) => {
    let isSaveFile = false;
    let screenshotFile: Buffer | null = null;
    try {
        screenshotFile = readFileSync(resolve(__dirname, `../__screenshots__/${fileName}`));
    } catch (error) {
        isSaveFile = true;
    }

    if (process.env.UPDATE_SCREENSHOTS === 'true' || isSaveFile || !screenshotFile) {
        saveFile(`../__screenshots__/${fileName}`, screenshotBuffer);

        return 0;
    }

    const currentScreenshot = PNG.sync.read(screenshotBuffer);

    const referenceScreenshot = PNG.sync.read(screenshotFile);

    const { width, height } = currentScreenshot;
    const diff = new PNG({ height, width });

    const mismatchedPixels = pixelmatch(currentScreenshot.data, referenceScreenshot.data, diff.data, width, height, {
        threshold: 0.1,
    });

    if (mismatchedPixels !== 0) {
        saveFile(`../__screenshots-error__/${fileName}`, PNG.sync.write(diff));
    }

    return mismatchedPixels;
};

describe('Screenshot Test', () => {
    let browser: Browser;
    let page: Page;
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
        page = await browser.newPage();
        await page.goto(BASE_URL);
    });

    afterAll(async () => {
        await browser?.close();
        serverProcess.kill();
    });

    it('screenshot of the home', async () => {
        const screenshotBuffer = await page.screenshot();

        const mismatchedPixels = getMismatchedPixels(screenshotBuffer, 'home-desktop.png');
        expect(mismatchedPixels).toBe(0);
    });

    it('screenshot of the about', async () => {
        await page.goto(`${BASE_URL}/about`);
        const screenshotBuffer = await page.screenshot();

        const mismatchedPixels = getMismatchedPixels(screenshotBuffer, 'about-desktop.png');
        expect(mismatchedPixels).toBe(0);
    });

    it('screenshot of the 404', async () => {
        await page.goto(`${BASE_URL}/404`);
        const screenshotBuffer = await page.screenshot();

        const mismatchedPixels = getMismatchedPixels(screenshotBuffer, '404-desktop.png');
        expect(mismatchedPixels).toBe(0);
    });
});
