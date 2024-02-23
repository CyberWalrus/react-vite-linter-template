import type { FC } from 'react';
import { Flex } from '@radix-ui/themes';

import { Controls } from './controls';
import { CounterInfo } from './counter-info';

export const Counter: FC = () => (
    <Flex
        align='center'
        direction='column'
        gap='4'
    >
        <CounterInfo />
        <Controls />
    </Flex>
);
