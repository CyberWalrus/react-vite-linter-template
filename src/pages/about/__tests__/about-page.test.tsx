import { render } from '@testing-library/react';

import { AboutPage } from '../ui/about-page';

describe('AboutPage', () => {
    it('default', () => {
        const { baseElement } = render(<AboutPage />);

        expect(baseElement).toBeInTheDocument();
    });
});
