import type { GenericHandler } from './compose-handlers.type';

export const composeHandlers =
    <T extends unknown[]>(slotHandler: GenericHandler<T>, childHandler: GenericHandler<T>): GenericHandler<T> =>
    (...args: T) => {
        childHandler(...args);
        slotHandler(...args);
    };
