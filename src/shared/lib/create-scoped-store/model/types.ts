import type { StoreApi } from 'zustand';
import type { UseBoundStoreWithEqualityFn } from 'zustand/traditional';

type Cast<T, U> = T extends U ? T : U;
type Write<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
type TakeTwo<T> = T extends {
    length: 0;
}
    ? [undefined, undefined]
    : T extends {
            length: 1;
        }
      ? [...Cast<T, unknown[]>, undefined]
      : T extends {
              length: 0 | 1;
          }
        ? [...Cast<T, unknown[]>, undefined]
        : T extends {
                length: 2;
            }
          ? T
          : T extends {
                  length: 1 | 2;
              }
            ? T
            : T extends {
                    length: 0 | 1 | 2;
                }
              ? T
              : T extends [infer A0, infer A1, ...unknown[]]
                ? [A0, A1]
                : T extends [infer A0, (infer A1)?, ...unknown[]]
                  ? [A0, A1?]
                  : T extends [(infer A0)?, (infer A1)?, ...unknown[]]
                    ? [A0?, A1?]
                    : never;
type WithDevtools<S> = Write<S, StoreDevtools<S>>;
type StoreDevtools<S> = S extends {
    setState: (...a: infer Sa) => infer Sr;
}
    ? {
          setState<
              A extends
                  | string
                  | {
                        type: string;
                    },
          >(
              ...a: [/* a */ ...TakeTwo<Sa>, /* action */ A]
          ): Sr;
      }
    : never;

export type Store<GState> = UseBoundStoreWithEqualityFn<WithDevtools<StoreApi<GState>>>;
