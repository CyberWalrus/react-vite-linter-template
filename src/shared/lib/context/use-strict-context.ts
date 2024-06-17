import type { Context } from 'react';
import {
    Children,
    createContext,
    createElement,
    isValidElement,
    ReactNode,
    startTransition,
    useContext,
    useEffect,
    useState,
} from 'react';

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
