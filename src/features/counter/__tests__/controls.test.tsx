import { render } from '@testing-library/react';

import { Controls } from '../ui/controls';

describe.skip('Controls', () => {
    it('default', () => {
        const { baseElement } = render(<Controls />);

        expect(baseElement).toBeInTheDocument();
    });
});
