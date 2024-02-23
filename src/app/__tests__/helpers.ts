/* eslint-disable import/no-extraneous-dependencies */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import pixelmatch from 'pixelmatch';
import type { Page } from 'playwright';
import { PNG } from 'pngjs';

const saveFile = (fileName: string, data: string | NodeJS.ArrayBufferView) => {
    const filePath = resolve(__dirname, fileName);

    const dir = dirname(filePath);

    if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
    }

    writeFileSync(filePath, data);
};

export const getMismatchedPixels = async (page: Page, fileName: string) => {
    await page.waitForLoadState('domcontentloaded');
    await page.waitForSelector('#app-start');
    const content = await page.content();
    const screenshotBuffer = await page.screenshot();

    let isSaveFile = false;
    let screenshotFile: Buffer | null = null;
    try {
        screenshotFile = readFileSync(resolve(__dirname, `../__screenshots__/${fileName}.png`));
    } catch (error) {
        isSaveFile = true;
    }

    if (process.env.UPDATE_SCREENSHOTS === 'true' || isSaveFile || !screenshotFile) {
        saveFile(`../__screenshots__/${fileName}.png`, screenshotBuffer);

        return 0;
    }

    const currentScreenshot = PNG.sync.read(screenshotBuffer);

    const referenceScreenshot = PNG.sync.read(screenshotFile);

    const { width, height } = currentScreenshot;
    const diff = new PNG({ height, width });

    const mismatchedPixels = pixelmatch(currentScreenshot.data, referenceScreenshot.data, diff.data, width, height, {
        threshold: 0.5,
    });

    if (mismatchedPixels !== 0) {
        saveFile(`../__screenshots__/${fileName}.dif.png`, PNG.sync.write(diff));
        saveFile(`../__screenshots__/${fileName}.new.png`, screenshotBuffer);
        saveFile(`../__screenshots__/${fileName}.new.html`, content);
    }

    if (mismatchedPixels < 2000) {
        return 0;
    }

    return mismatchedPixels;
};
