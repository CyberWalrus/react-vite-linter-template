import type { FC } from 'react';

import { CounterBox } from '$entities/system/counter';
import { CounterControl } from '$features/system/counter-control';

export const Counter: FC = () => (
    <CounterBox>
        <CounterControl />
    </CounterBox>
);
