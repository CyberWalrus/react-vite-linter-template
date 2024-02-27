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

    it('overwrites the file if it already exists', async () => {
        const fileName = 'test/savedFile.png';
        const data = 'new data';
        const initialData = 'old data';

        mockFs({
            [fileName]: initialData,
        });

        saveFile(fileName, data);

        const { readFileSync } = await import('fs');

        const filePath = resolve('', fileName);
        const fileContent = readFileSync(filePath, { encoding: 'utf8' });

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
