import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { dirname, resolve } from 'path';

export const saveFile = (fileName: string, data: string | NodeJS.ArrayBufferView, screenshotsDir = '') => {
    const filePath = resolve(screenshotsDir, fileName);

    const dir = dirname(filePath);

    if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
    }

    writeFileSync(filePath, data);

    return true;
};
