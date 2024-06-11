import { render } from '@testing-library/react';

import { TT } from '..';

describe('TT', () => {
    it('default', () => {
        const { getByText } = render(<TT>test</TT>);

        const element = getByText('test');

        expect(element).toBeInTheDocument();
    });
});
