import { render } from '@testing-library/react';

import { TechLink } from '..';

describe('TechLink', () => {
    it('default', () => {
        const { baseElement } = render(<TechLink />);

        expect(baseElement).toBeInTheDocument();
    });
});
