import { isValidElement, type ReactElement, type ReactNode } from 'react';

import { Slottable } from '../ui/slottable';

export const isSlottable = <GChildren>(child: ReactNode): child is ReactElement<GChildren> =>
    isValidElement(child) && child.type === Slottable;
