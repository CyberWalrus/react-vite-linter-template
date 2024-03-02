import { clsx } from 'clsx';

import { composeHandlers } from './compose-handlers';
import type { GenericHandler } from './compose-handlers.type';
import type { GenericProps } from './merge-props.type';

// Обновляем функцию mergeProps с дженериками
export const mergeProps = <TSlotProps extends GenericProps, TChildProps extends GenericProps>(
    slotProps: TSlotProps,
    childProps: TChildProps,
): TSlotProps & TChildProps => {
    const overrideProps: Partial<TSlotProps & TChildProps> = { ...childProps };

    Object.keys(childProps).forEach((propName) => {
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];

        const isHandler = /^on[A-Z]/.test(propName);

        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = composeHandlers(slotPropValue, childPropValue);

                return;
            }

            if (slotPropValue) {
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

        overrideProps[propName] = childPropValue;
    });

    return { ...slotProps, ...overrideProps };
};
