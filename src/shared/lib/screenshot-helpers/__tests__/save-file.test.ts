import mockFs from 'mock-fs';
import { resolve } from 'path';

import { saveFile } from '../save-file';

describe('saveFile', () => {
    beforeEach(() => {
        mockFs();
    });

    afterEach(() => {
        mockFs.restore();
    });

    it('creates the directory and saves the file if directory does not exist', async () => {
        const fileName = 'test/savedFile.png';
        const screenshotsDir = 'screenshots';
        const data = 'some data';

        saveFile(fileName, data, screenshotsDir);

        const { readFileSync, existsSync } = await import('fs');
        const dirExists = existsSync(resolve(screenshotsDir, 'test'));

        expect(dirExists).toBe(true);

        const fileContent = readFileSync(resolve(screenshotsDir, fileName), { encoding: 'utf8' });
        expect(fileContent).toBe(data);
    });

    it('overwrites the file if it already exists', async () => {
        const fileName = 'test/savedFile.png';
        const data = 'new data';
        const initialData = 'old data';

        mockFs({
            [fileName]: initialData,
        });

        saveFile(fileName, data);

        const { readFileSync } = await import('fs');

        const fileContent = readFileSync(fileName, { encoding: 'utf8' });

        expect(fileContent).toBe(data);
    });

    it('throws an error if unable to save the file', () => {
        const fileName = '/not/allowed/savedFile.png';
        const data = 'some data';
        const screenshotsDir = '/';

        mockFs.restore();

        mockFs({
            '/not': mockFs.directory({
                mode: 0o444,
            }),
        });

        expect(() => {
            saveFile(fileName, data, screenshotsDir);
        }).toThrow();
    });
});
