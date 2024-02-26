import { render } from '@testing-library/react';

import { PageLayout } from '..';

describe('PageLayout', () => {
    it('default', () => {
        const { baseElement } = render(<PageLayout />);

        expect(baseElement).toBeInTheDocument();
    });

    it('whit content', () => {
        const { baseElement } = render(
            <PageLayout
                footer='footer'
                header='header'
                title='title'
            >
                content
            </PageLayout>,
        );

        expect(baseElement).toBeInTheDocument();
    });
});
