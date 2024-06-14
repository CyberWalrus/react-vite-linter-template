/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import cookie from 'js-cookie';
import { describe, expect, it } from 'vitest';

import { logError } from '$shared/core/logger';

import { readCookie } from '../lib/read';

describe('readCookie', () => {
    it('returns null if cookie not found', () => {
        // @ts-ignore
        cookie.get.mockReturnValueOnce(null);

        const result = readCookie<string, string, string>({ key: 'userToken' });
        expect(result).toBeNull();
    });

    it('returns parsed value if key not in schema', () => {
        const cookieValue = JSON.stringify({ test: 'value' });
        // @ts-ignore
        cookie.get.mockReturnValueOnce(cookieValue);

        const result = readCookie<string, string, string>({ key: 'nonSchemaKey' });
        expect(result).toEqual({ test: 'value' });
    });

    it('returns raw value if JSON parsing fails and key not in schema', () => {
        const cookieValue = 'raw-value';
        // @ts-ignore
        cookie.get.mockReturnValueOnce(cookieValue);

        const result = readCookie<string, string, string>({ key: 'nonSchemaKey' });
        expect(result).toEqual('raw-value');
    });

    it('returns parsed value for valid schema key', () => {
        const cookieValue = JSON.stringify('my-token');
        // @ts-ignore
        cookie.get.mockReturnValueOnce(cookieValue);

        const result = readCookie<string, string, string>({ key: 'userToken' });
        expect(result).toEqual('my-token');
    });

    it('returns null if validation fails for schema key', () => {
        const cookieValue = 123;
        // @ts-ignore
        cookie.get.mockReturnValueOnce(cookieValue);

        const result = readCookie<string, string, string>({ key: 'current-theme' });
        expect(result).toBeNull();
        expect(logError).toHaveBeenCalledWith('Error validate for cookie "current-theme"', expect.any(String));
    });
});
