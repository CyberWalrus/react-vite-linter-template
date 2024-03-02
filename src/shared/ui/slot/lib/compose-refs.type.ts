import type { Ref } from 'react';
/**
 * Type definition representing a union of the React reference and the undefined value.
 *
 * @typeParam T - The type of the HTML DOM element to be referenced with `React.Ref`.
 */
export type PossibleRef<T> = Ref<T> | undefined;
