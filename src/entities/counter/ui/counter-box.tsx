import type { FC } from 'react';

import type { CounterBoxProps } from './counter-box.type';
import { CounterInfo } from './counter-info';

export const CounterBox: FC<CounterBoxProps> = ({ children }) => (
    <div>
        <CounterInfo />
        {children}
    </div>
);
