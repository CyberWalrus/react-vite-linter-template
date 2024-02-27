import { render } from '@testing-library/react';

import { AppRouter } from '..';

describe('AppRouter', () => {
    it('default', () => {
        const { baseElement } = render(<AppRouter />);

        expect(baseElement).toBeInTheDocument();
    });
});
