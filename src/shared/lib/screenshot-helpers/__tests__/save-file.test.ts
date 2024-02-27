import mockFs from 'mock-fs';

import { saveFile } from '../save-file';

describe('saveFile', () => {
    beforeEach(() => {
        mockFs();
    });

    afterEach(() => {
        mockFs.restore();
    });

    it('save the file', () => {
        const fileName = 'test/savedFile.png';
        const data = 'new data';
        const initialData = 'old data';

        mockFs({
            [fileName]: initialData,
        });

        const isTrue = saveFile(fileName, data);

        expect(isTrue).toBeTruthy();
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
