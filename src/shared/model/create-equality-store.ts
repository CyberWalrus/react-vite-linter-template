import type { StoreApi } from 'zustand';
import { useStore } from 'zustand';

import { checkEquality } from '$shared/helpers';

import type { ExtractState, WithReact } from './create-equality-store.type';

export const createEqualityStore =
    <GState extends WithReact<StoreApi<unknown>>>(store: GState) =>
    <GValue>(
        selector: (state: ExtractState<GState>) => GValue,
        equalityFn: (a: GValue, B: GValue) => boolean = checkEquality,
    ): GValue =>
        useStore(store, selector, equalityFn);
