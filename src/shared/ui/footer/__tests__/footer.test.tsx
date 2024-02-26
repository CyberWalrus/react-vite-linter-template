import { render } from '@testing-library/react';

import { Footer } from '../ui/footer';

describe('Footer', () => {
    it('default', () => {
        const { baseElement } = render(<Footer />);

        expect(baseElement).toBeInTheDocument();
    });
});
