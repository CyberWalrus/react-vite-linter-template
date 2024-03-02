import type { PossibleRef } from './compose-refs.type';

/**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 *
 * @typeParam T - The type of the HTML DOM element to be referenced with `React.Ref`.
 */
const setRef = <T>(ref: PossibleRef<T>, value: T) => {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref !== null && ref !== undefined) {
        (ref as React.MutableRefObject<T>).current = value;
    }
};

/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 *
 * @typeParam T - The type of the HTML DOM element to be referenced with `React.Ref`.
 */
export const composeRefs =
    <T>(...refs: Array<PossibleRef<T>>) =>
    (node: T) =>
        refs.forEach((ref) => setRef(ref, node));
