import type { FC } from 'react';
import { Flex } from '@radix-ui/themes';

import type { CounterBoxProps } from './counter-box.type';
import { CounterInfo } from './counter-info';

export const CounterBox: FC<CounterBoxProps> = ({ children }) => (
    <Flex
        align='center'
        direction='column'
        gap='4'
    >
        <CounterInfo />
        {children}
    </Flex>
);
