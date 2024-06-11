import { z } from 'zod';

export const stringToNumberOptionalSchema = z.preprocess((val) => {
    if (val === '' || val === undefined) {
        return undefined;
    }
    const number = Number(val);

    return Number.isNaN(number) ? undefined : number;
}, z.number().optional());
