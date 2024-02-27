import type { FC } from 'react';
import { Suspense } from 'react';
import { act, render, waitFor } from '@testing-library/react';

import { getDevtools } from '../ui/get-devtools';

describe('TanStackRouterDevtools', () => {
    it('default', () => {
        vi.stubEnv('NODE_ENV', 'test');
        const Devtools = getDevtools();
        const { baseElement } = render(<Devtools />);

        expect(baseElement).toBeInTheDocument();
    });

    it('process.env.NODE_ENV = production', async () => {
        vi.stubEnv('NODE_ENV', 'production');
        let Devtools: FC = () => null;

        await act(async () => {
            await import('@tanstack/router-devtools');
            Devtools = getDevtools();
        });

        const { baseElement } = render(
            <Suspense fallback='Loading...'>
                <Devtools />
            </Suspense>,
        );

        // Wait for the component to complete any suspending behavior
        await waitFor(() => {
            expect(baseElement).toBeInTheDocument();
        });
    });
});
