/* eslint-disable @typescript-eslint/unbound-method */
import { PNG } from 'pngjs';

import { calculateImgDivergences } from '../calculate-img-divergences';

const mocks = vi.hoisted(() => {
    class PNGmock {
        static sync = {
            read: vi.fn(() => ({
                data: Buffer.from(''),
                height: 720,
                width: 1280,
            })),
            write: vi.fn(() => Buffer.from([])),
        };

        height = 0;

        width = 0;

        constructor({ height, width }: { height: number; width: number }) {
            this.height = height;
            this.height = width;
        }
    }

    return {
        PNG: PNGmock,
    };
});

vi.mock('pngjs', () => ({
    PNG: mocks.PNG,
}));

vi.mock('../save-file', () => ({
    saveFile: vi.fn(),
}));

vi.mock('pixelmatch', () => ({
    default: vi.fn(() => 0),
}));

describe('calculateImgDivergences', () => {
    it('returns 1 for any given images', () => {
        const currentFilePath = 'path/to/current/image.png';
        const currentScreenshotFile = Buffer.from([]);
        const referenceScreenshotFile = Buffer.from([]);

        const divergenceValue = calculateImgDivergences(
            currentFilePath,
            currentScreenshotFile,
            referenceScreenshotFile,
        );

        expect(divergenceValue).toBe(0);

        expect(PNG.sync.read).toHaveBeenCalledTimes(2);
    });
});
