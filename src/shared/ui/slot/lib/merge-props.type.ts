import type { GenericHandler } from './compose-handlers.type';

type Styles = {
    [key: string]: string | number;
};

type EventHandlers<T extends unknown[] = unknown[]> = {
    [key: string]: GenericHandler<T>;
};

export type GenericProps<T extends Record<string, unknown> = Record<string, unknown>> = {
    className?: string;
    style?: Styles;
} & EventHandlers &
    T;
