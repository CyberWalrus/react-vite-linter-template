import { render } from '@testing-library/react';

import { Counter } from '../ui/counter';

describe.skip('Counter', () => {
    it('default', () => {
        const { baseElement } = render(<Counter />);

        expect(baseElement).toBeInTheDocument();
    });
});
