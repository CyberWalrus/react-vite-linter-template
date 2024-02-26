/* eslint-disable import/no-extraneous-dependencies */
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

import { CURRENT_FOLDER, DIF_FOLDER } from './constants';
import { getFileBuffers } from './get-file-buffers';
import { saveFile } from './save-file';

export const getMismatchedPixels = (currentFilePath: string) => {
    const [currentScreenshotFile, referenceScreenshotFile] = getFileBuffers(currentFilePath);

    if (!currentScreenshotFile || !referenceScreenshotFile) return 0;

    const currentScreenshot = PNG.sync.read(currentScreenshotFile);

    const referenceScreenshot = PNG.sync.read(referenceScreenshotFile);

    const { width, height } = currentScreenshot;

    const diff = new PNG({ height, width });

    const mismatchedPixels = pixelmatch(currentScreenshot.data, referenceScreenshot.data, diff.data, width, height, {
        threshold: 0.2,
    });

    if (mismatchedPixels !== 0) {
        const difScreenshotFile = currentFilePath.replace(CURRENT_FOLDER, DIF_FOLDER);
        saveFile(difScreenshotFile, PNG.sync.write(diff));
    }

    if (mismatchedPixels < 2000) return 0;

    return mismatchedPixels;
};
