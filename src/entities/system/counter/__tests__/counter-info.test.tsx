import { render } from '@testing-library/react';

import { CounterInfo } from '../ui/counter-info';

describe('CounterInfo', () => {
    it('default', () => {
        const { baseElement } = render(<CounterInfo />);

        expect(baseElement).toBeInTheDocument();
    });
});
