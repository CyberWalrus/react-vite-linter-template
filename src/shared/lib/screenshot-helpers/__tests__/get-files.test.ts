import mockFs from 'mock-fs';

import { getFiles } from '..';

describe('getFiles', () => {
    beforeEach(() => {
        mockFs({
            testDir: {
                'image.notpng': Buffer.from(''),
                'image3.png': Buffer.from(''),
                subDir: {
                    'image1.png': Buffer.from(''),
                    subSubDir: {
                        'image2.png': Buffer.from(''),
                    },
                    'text.txt': 'text content',
                },
            },
        });
    });

    afterEach(() => {
        mockFs.restore();
    });

    it('should return an array of png files from a directory recursively', () => {
        const pngFiles = getFiles('testDir');
        expect(pngFiles).toEqual([
            'testDir/image3.png',
            'testDir/subDir/image1.png',
            'testDir/subDir/subSubDir/image2.png',
        ]);
    });

    it('should return an empty array if there are no png files', () => {
        const pngFiles = getFiles('testDir/subDir/subSubDir');
        expect(pngFiles).toEqual(['testDir/subDir/subSubDir/image2.png']);
    });

    it('should ignore non-png files', () => {
        const pngFiles = getFiles('testDir');
        expect(pngFiles).not.toContain('testDir/image.notpng');
    });
});
