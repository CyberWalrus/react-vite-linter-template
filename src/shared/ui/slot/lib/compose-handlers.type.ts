export type GenericHandler<T extends unknown[] = unknown[]> = (...args: T) => void;
