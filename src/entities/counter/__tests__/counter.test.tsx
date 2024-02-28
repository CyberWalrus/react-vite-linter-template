import { render } from '@testing-library/react';

import { CounterBox } from '../ui/counter-box';

describe('CounterBox', () => {
    it('default', () => {
        const { baseElement } = render(<CounterBox>test</CounterBox>);

        expect(baseElement).toBeInTheDocument();
    });
});
