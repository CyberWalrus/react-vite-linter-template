import type { FC } from 'react';

import { ClearButton, CounterInfo, DecrementButton, IncrementButton } from '$entities/counter';

export const Counter: FC = () => (
    <div>
        <DecrementButton />
        <ClearButton />
        <IncrementButton />
        <CounterInfo />
    </div>
);
