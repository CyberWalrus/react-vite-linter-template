import mockFs from 'mock-fs';

import { CURRENT_FOLDER, REFERENCE_FOLDER } from '../constants';
import { getFileBuffers } from '../get-file-buffers';

vi.mock('../save-file', () => ({
    saveFile: vi.fn(),
}));

describe('getFileBuffers', () => {
    afterEach(() => {
        mockFs.restore();
    });

    it('successfully reads both files and returns their buffers', () => {
        const dummyBuffer1: Buffer = Buffer.from('current screenshot');
        const dummyBuffer2: Buffer = Buffer.from('reference screenshot');

        const currentFilePath = `${CURRENT_FOLDER}/test.png`;

        mockFs({
            [CURRENT_FOLDER]: {
                'test.png': dummyBuffer1,
            },
            [REFERENCE_FOLDER]: {
                'test.png': dummyBuffer2,
            },
        });

        const [currentBuffer, referenceBuffer] = getFileBuffers(currentFilePath);

        expect(currentBuffer).toStrictEqual(dummyBuffer1);
        expect(referenceBuffer).toStrictEqual(dummyBuffer2);
    });
    it('returns [null, null] if an error occurs while reading the current file', () => {
        const currentFilePath = `${CURRENT_FOLDER}/test.png`;

        expect(getFileBuffers(currentFilePath)).toEqual([null, null]);
    });

    it('saves the current file and returns [null, null] if an error occurs while reading the reference file', () => {
        const dummyBuffer = Buffer.from('current screenshot');
        const currentFilePath = `${CURRENT_FOLDER}/test.png`;

        mockFs({
            [CURRENT_FOLDER]: {
                'test.png': dummyBuffer,
            },
        });
        expect(getFileBuffers(currentFilePath)).toEqual([null, null]);
    });
});
