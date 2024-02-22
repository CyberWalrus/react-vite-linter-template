import type { StoreApi } from 'node_modules/zustand/vanilla';

export type ExtractState<S> = S extends {
    getState: () => infer T;
}
    ? T
    : never;
type ReadonlyStoreApi<T> = Pick<StoreApi<T>, 'getState' | 'subscribe'>;

export type WithReact<S extends ReadonlyStoreApi<unknown>> = S & {
    getServerState?: () => ExtractState<S>;
};
