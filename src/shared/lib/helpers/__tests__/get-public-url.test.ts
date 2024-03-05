import { getPublicURL } from '..';

describe('getPublicURL', () => {
    it('default', () => {
        expect(getPublicURL('')).toMatchInlineSnapshot('"/"');
    });

    it('/test.svg', () => {
        expect(getPublicURL('test.svg')).toMatchInlineSnapshot('"/test.svg"');
    });

    it('change process.env.VITE_BASE_URL to /test/', () => {
        const baseUrl = process.env.VITE_BASE_URL;
        process.env.VITE_BASE_URL = '/test/';
        expect(getPublicURL('test.svg')).toMatchInlineSnapshot('"/test/test.svg"');
        process.env.VITE_BASE_URL = baseUrl;
    });
});
