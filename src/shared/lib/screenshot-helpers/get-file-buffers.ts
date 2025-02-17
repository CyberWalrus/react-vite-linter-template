import { readFileSync } from 'fs';

import { CURRENT_FOLDER, REFERENCE_FOLDER } from './constants';
import { saveFile } from './save-file';

export const getFileBuffers = (currentFilePath: string): [Buffer | null, Buffer | null] => {
    const referenceFilePath = currentFilePath.replace(CURRENT_FOLDER, REFERENCE_FOLDER);

    let currentScreenshotFile: Buffer | null = null;
    let referenceScreenshotFile: Buffer | null = null;

    try {
        currentScreenshotFile = readFileSync(currentFilePath);
    } catch {
        return [null, null];
    }

    try {
        referenceScreenshotFile = readFileSync(referenceFilePath);
    } catch {
        saveFile(referenceFilePath, new Uint8Array(currentScreenshotFile));

        return [null, null];
    }

    return [currentScreenshotFile, referenceScreenshotFile];
};
