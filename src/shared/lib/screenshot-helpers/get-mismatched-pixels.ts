import { calculateImgDivergences } from './calculate-img-divergences';
import { getFileBuffers } from './get-file-buffers';

export const getMismatchedPixels = (currentFilePath: string) => {
    const [currentScreenshotFile, referenceScreenshotFile] = getFileBuffers(currentFilePath);

    if (!currentScreenshotFile || !referenceScreenshotFile) return 0;

    const mismatchedPixels = calculateImgDivergences(currentFilePath, currentScreenshotFile, referenceScreenshotFile);

    if (mismatchedPixels < 50) return 0;

    return mismatchedPixels;
};
