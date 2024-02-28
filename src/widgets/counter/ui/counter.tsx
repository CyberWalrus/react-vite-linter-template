import type { FC } from 'react';

import { CounterBox } from '$entities/counter';
import { CounterControl } from '$features/counter-control';

export const Counter: FC = () => (
    <CounterBox>
        <CounterControl />
    </CounterBox>
);
