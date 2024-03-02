import { isValidElement, type ReactElement, type ReactNode } from 'react';

import { Slottable } from '../ui/slottable';

export const checkSlottable = <T>(child: ReactNode): child is ReactElement<T> =>
    isValidElement(child) && child.type === Slottable;
