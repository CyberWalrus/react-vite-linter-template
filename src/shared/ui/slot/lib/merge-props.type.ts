import type { GenericHandler } from './compose-handlers.type';

/**
 * Represents CSS style properties with string or number values.
 */
type Styles = {
    [key: string]: string | number;
};

/**
 * A mapping of event names to their handler functions.
 *
 * @typeParam T - The event handler argument types.
 */
type EventHandlers<T extends unknown[] = unknown[]> = {
    [key: string]: GenericHandler<T>;
};

/**
 * Common properties for a React component, including optional `className`, `style`, and event handlers.
 *
 * @typeParam T - Additional custom props for the component.
 */
export type GenericProps<T extends Record<string, unknown> = Record<string, unknown>> = {
    className?: string;
    style?: Styles;
} & EventHandlers &
    T;
