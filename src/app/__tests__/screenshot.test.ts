import { CURRENT_FOLDER, getFiles, getMismatchedPixels } from '$shared/lib/screenshot-helpers';

describe('Screenshot Tests', { concurrent: true }, () => {
    const screenshotFiles = getFiles(CURRENT_FOLDER);

    screenshotFiles.forEach((filePath) =>
        it(filePath, () => {
            const mismatchedPixels = getMismatchedPixels(filePath);
            expect(mismatchedPixels).toBe(0);
        }),
    );
});
