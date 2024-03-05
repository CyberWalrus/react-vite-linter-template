import { render } from '@testing-library/react';

import { InfoPage } from '../ui/info-page';

describe('InfoPage', () => {
    it('default', () => {
        const { baseElement } = render(<InfoPage />);

        expect(baseElement).toBeInTheDocument();
    });
});
