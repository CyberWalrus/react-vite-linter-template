import { render } from '@testing-library/react';

import { Counter } from '../ui/counter';

describe('Counter', () => {
    it('Counter', () => {
        const { baseElement } = render(<Counter />);

        expect(baseElement).toBeInTheDocument();
    });
});
