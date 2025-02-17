import type { Context } from 'react';
import { createContext, useContext } from 'react';

export function useStrictContext<GContext>(context: Context<GContext | null>) {
    const value = useContext(context);
    if (value === null) {
        throw new Error('Strict context not passed');
    }

    return value as GContext;
}

export function createStrictContext<GContext>() {
    return createContext<GContext | null>(null);
}
