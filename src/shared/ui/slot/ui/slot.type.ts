import type { HTMLAttributes, ReactNode } from 'react';

/**
 * Type definition for props of a component that accepts children and HTML attributes.
 * Suitable for components designed to pass additional attributes to an underlying HTML element.
 */
export type SlotProps = {
    /**  Optional children to be passed into the component. Can consist of any valid React nodes. */
    children?: ReactNode;
} & HTMLAttributes<HTMLElement>;
