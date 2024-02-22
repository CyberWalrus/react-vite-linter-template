import type { FC } from 'react';

import { Controls } from './controls';
import { CounterInfo } from './counter-info';

export const Counter: FC = () => (
    <div>
        <Controls />
        <CounterInfo />
    </div>
);
