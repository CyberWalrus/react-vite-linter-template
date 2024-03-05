import { envClient } from '$shared/api/env-client';

import { getPublicURL } from '..';

describe('getPublicURL', () => {
    it('default', () => {
        expect(getPublicURL('')).toMatchInlineSnapshot('"/"');
    });

    it('/test.svg', () => {
        expect(getPublicURL('test.svg')).toMatchInlineSnapshot('"/test.svg"');
    });

    it('change VITE_BASE_URL to /test/', () => {
        const baseUrl = envClient.VITE_BASE_URL;
        envClient.VITE_BASE_URL = '/test/';
        expect(getPublicURL('test.svg')).toMatchInlineSnapshot('"/test/test.svg"');
        envClient.VITE_BASE_URL = baseUrl;
    });
});
