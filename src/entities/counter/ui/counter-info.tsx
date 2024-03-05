import { useEffect } from 'react';
import { Text } from '@radix-ui/themes';

import { useCounterStore } from '../model/store';

export const CounterInfo = () => {
    const counter = useCounterStore(({ value }) => value);

    useEffect(() => {
        const id = setInterval(() => {
            console.log(window.screen);
        }, 2000);

        return () => {
            clearInterval(id);
        };
    }, []);

    return (
        <Text
            color='teal'
            data-test-id='counter-value'
        >
            {counter}
        </Text>
    );
};
