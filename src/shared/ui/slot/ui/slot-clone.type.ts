import type { ReactNode } from 'react';

/**
 * Props for a component that can slot in any ReactNode as `children`.
 */
export type SlotCloneProps = {
    /**
     * The child elements or components to be rendered within the slottable component.
     * This can include anything that is considered a valid ReactNode.
     */
    children: ReactNode;
};
