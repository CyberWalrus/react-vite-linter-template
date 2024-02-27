import { calculateImgDivergences } from '../calculate-img-divergences';
import { getFileBuffers } from '../get-file-buffers';
import { getMismatchedPixels } from '../get-mismatched-pixels';

// Mock the modules
vi.mock('../get-file-buffers', () => ({
    getFileBuffers: vi.fn(() => [Buffer.alloc(1), Buffer.alloc(1)]),
}));

vi.mock('../calculate-img-divergences', () => ({
    calculateImgDivergences: vi.fn(),
}));

describe('getMismatchedPixels', () => {
    it('should return 0 if one of the buffers is null', () => {
        vi.mocked(getFileBuffers).mockReturnValue([null, Buffer.from('')]);
        expect(getMismatchedPixels('dummy/path/file1.png')).toBe(0);
        vi.mocked(getFileBuffers).mockReturnValue([Buffer.from(''), null]);
        expect(getMismatchedPixels('dummy/path/file2.png')).toBe(0);
    });

    it('should return 0 if the mismatched pixels are less than 2000', () => {
        vi.mocked(getFileBuffers).mockReturnValue([Buffer.from('buffer1'), Buffer.from('buffer2')]);
        vi.mocked(calculateImgDivergences).mockReturnValue(1999);
        expect(getMismatchedPixels('dummy/path/file3.png')).toBe(0);
    });

    it('should return the number of mismatched pixels if they are 2000 or more', () => {
        vi.mocked(getFileBuffers).mockReturnValue([Buffer.from('buffer3'), Buffer.from('buffer4')]);
        vi.mocked(calculateImgDivergences).mockReturnValue(2000);
        expect(getMismatchedPixels('dummy/path/file4.png')).toBe(2000);

        vi.mocked(calculateImgDivergences).mockReturnValue(2500);
        expect(getMismatchedPixels('dummy/path/file5.png')).toBe(2500);
    });
});
