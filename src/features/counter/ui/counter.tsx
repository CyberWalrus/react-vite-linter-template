import type { FC } from 'react';

import { ClearButton } from './clear-button';
import { CounterInfo } from './counter-info';
import { DecrementButton } from './decrement-button';
import { IncrementButton } from './increment-button';

export const Counter: FC = () => (
    <div>
        <DecrementButton />
        <ClearButton />
        <IncrementButton />
        <CounterInfo />
    </div>
);
