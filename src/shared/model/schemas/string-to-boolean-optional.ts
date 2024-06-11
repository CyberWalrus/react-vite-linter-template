import { z } from 'zod';

export const stringToBooleanOptionalSchema = z.preprocess((value) => {
    if (typeof value === 'boolean') {
        return value;
    }

    if (typeof value !== 'string') {
        return undefined;
    }

    if (value.toLowerCase() === 'true') {
        return true;
    }

    if (value.toLowerCase() === 'false') {
        return false;
    }

    return undefined;
}, z.boolean().optional());
