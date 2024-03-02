/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { ReactNode } from 'react';
import { Children, cloneElement, forwardRef, isValidElement } from 'react';

import { checkSlottable } from '../lib/check-slottable';
import type { SlotProps } from './slot.type';
import { SlotClone } from './slot-clone';

/** Manages React children for slotted component rendering. */
export const Slot = forwardRef<HTMLElement, SlotProps>((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = Children.toArray(children);
    const slottable = childrenArray.find(checkSlottable);

    if (slottable) {
        const newElement = (slottable?.props as SlotProps)?.children;

        if (!newElement) return null;

        const newChildren = childrenArray.map((child) => {
            if (child === slottable) {
                if (Children.count(newElement) > 1) return Children.only(null);

                return isValidElement(newElement) ? (newElement?.props?.children as ReactNode) : null;
            }

            return child;
        });

        return (
            <SlotClone
                {...slotProps}
                ref={forwardedRef}
            >
                {isValidElement(newElement) ? cloneElement(newElement, undefined, newChildren) : null}
            </SlotClone>
        );
    }

    return (
        <SlotClone
            {...slotProps}
            ref={forwardedRef}
        >
            {children}
        </SlotClone>
    );
});
