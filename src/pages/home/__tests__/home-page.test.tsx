import { render } from '@testing-library/react';

import { HomePage } from '../ui/home-page';

describe('HomePage', () => {
    it('default', () => {
        const { baseElement } = render(<HomePage />);

        expect(baseElement).toBeInTheDocument();
    });
});
