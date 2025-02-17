import { render } from '@testing-library/react';

import { CounterControl } from '../ui/counter-control';

describe('CounterControl', () => {
    it('default', () => {
        const { baseElement } = render(<CounterControl />);

        expect(baseElement).toBeInTheDocument();
    });
});
