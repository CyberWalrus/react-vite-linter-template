import { render } from '@testing-library/react';

import { Main } from '..';

vi.mock('react-dom/client', () => ({
    createRoot: vi.fn(() => ({
        render: vi.fn(),
    })),
}));

describe('Main', () => {
    it('default', () => {
        const { baseElement } = render(<Main />);

        expect(baseElement).toBeInTheDocument();
    });
});
