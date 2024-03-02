/* eslint-disable @typescript-eslint/ban-ts-comment */
import { clsx } from 'clsx';

import { composeHandlers } from './compose-handlers';
import type { GenericProps } from './merge-props.type';

/**
 * Merges two sets of properties (`slotProps` and `childProps`), combining event handlers,
 * styles, classNames, and other properties. Event handlers are composed so both handlers are called,
 * styles and classNames are merged, and other properties from `childProps` override those in `slotProps`.
 *
 * @typeParam T - Type of the slot properties.
 * @typeParam P - Type of the child properties.
 * @param slotProps - Base properties.
 * @param childProps - Overriding properties.
 * @returns Object containing merged properties of both `slotProps` and `childProps`.
 */
export const mergeProps = <T extends GenericProps, P extends GenericProps>(slotProps: T, childProps: P): T & P => {
    const overrideProps: Partial<T & P> = { ...childProps } as Partial<T & P>;

    Object.keys(childProps).forEach((propName) => {
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];

        const isHandler = /^on[A-Z]/.test(propName);

        if (isHandler) {
            if (slotPropValue && childPropValue) {
                // @ts-ignore
                overrideProps[propName] = composeHandlers(slotPropValue, childPropValue);

                return;
            }

            if (slotPropValue) {
                // @ts-ignore
                overrideProps[propName] = slotPropValue;

                return;
            }

            return;
        }

        if (propName === 'style') {
            overrideProps[propName] = { ...slotPropValue, ...childPropValue };

            return;
        }

        if (propName === 'className') {
            overrideProps[propName] = clsx(slotPropValue, childPropValue);

            return;
        }

        // @ts-ignore
        overrideProps[propName] = childPropValue;
    });

    return { ...slotProps, ...overrideProps } as T & P;
};
