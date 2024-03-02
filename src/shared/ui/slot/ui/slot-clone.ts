/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Children, cloneElement, forwardRef, isValidElement } from 'react';

import { composeRefs } from '../lib/compose-refs';
import { mergeProps } from '../lib/merge-props';
import type { SlotCloneProps } from './slot-clone.type';

export const SlotClone = forwardRef<unknown, SlotCloneProps>(({ children, ...slotProps }, forwardedRef) => {
    if (isValidElement(children)) {
        return cloneElement(children, {
            ...mergeProps(slotProps, children.props),
            // @ts-ignore
            ref: forwardedRef ? composeRefs(forwardedRef, children?.ref) : children?.ref,
        });
    }

    return Children.count(children) > 1 ? Children.only(null) : null;
});
