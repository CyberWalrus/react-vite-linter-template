/* eslint-disable import/no-extraneous-dependencies */
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

import { CURRENT_FOLDER, DIF_FOLDER } from './constants';
import { saveFile } from './save-file';

export const calculateImgDivergences = (
    currentFilePath: string,
    currentScreenshotFile: Buffer,
    referenceScreenshotFile: Buffer,
) => {
    const difScreenshotFile = currentFilePath.replace(CURRENT_FOLDER, DIF_FOLDER);

    const currentScreenshot = PNG.sync.read(currentScreenshotFile);
    const referenceScreenshot = PNG.sync.read(referenceScreenshotFile);

    const { width, height } = currentScreenshot;

    const diff = new PNG({ height, width });

    const mismatchedPixels = pixelmatch(currentScreenshot.data, referenceScreenshot.data, diff.data, width, height, {
        threshold: 0.2,
    });

    saveFile(difScreenshotFile, PNG.sync.write(diff));

    return mismatchedPixels;
};
