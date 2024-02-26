import { render } from '@testing-library/react';

import { BaseIcon } from '..';

describe('BaseIcon', () => {
    it('default', () => {
        const { baseElement } = render(<BaseIcon src='' />);

        expect(baseElement).toBeInTheDocument();
    });
});
