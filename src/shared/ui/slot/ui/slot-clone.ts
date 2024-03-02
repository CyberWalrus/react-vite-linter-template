import { Children, cloneElement, forwardRef, isValidElement } from 'react';

import { mergeProps } from '../lib/merge-props';
import type { SlotCloneProps } from './slot-clone.type';

export const SlotClone = forwardRef<any, SlotCloneProps>(({ children, ...slotProps }, forwardedRef) => {
    if (isValidElement(children)) {
        return cloneElement(children, {
            ...mergeProps(slotProps, children.props),
            ref: forwardedRef ? composeRefs(forwardedRef, (children as any).ref) : (children as any).ref,
        });
    }

    return Children.count(children) > 1 ? Children.only(null) : null;
});
