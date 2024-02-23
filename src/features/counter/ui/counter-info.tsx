import { Text } from '@radix-ui/themes';

import { useCounterStore } from '../model/store';

export const CounterInfo = () => {
    const counter = useCounterStore(({ value }) => value);

    return <Text color='teal'>{counter}</Text>;
};
