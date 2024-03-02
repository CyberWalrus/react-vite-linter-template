/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { ReactNode } from 'react';
import { Children, cloneElement, forwardRef, isValidElement } from 'react';

import { isSlottable } from '../lib/helpers';
import type { SlotProps } from './slot.type';

export const Slot = forwardRef<HTMLElement, SlotProps>((props, forwardedRef) => {
    const { children, ...slotProps } = props;
    const childrenArray = Children.toArray(children);
    const slottable = childrenArray.find(isSlottable);

    if (slottable) {
        const newElement = (slottable?.props as SlotProps)?.children;

        if (!newElement) {
            return null;
        }

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
