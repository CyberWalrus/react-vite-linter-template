import type { FC } from 'react';
import { Suspense } from 'react';
import { act, render, waitFor } from '@testing-library/react';

import { envClient } from '$shared/api/env-client';

import { getDevtools } from '../ui/get-devtools';

describe('TanStackRouterDevtools', () => {
    it('default', () => {
        const oldEnv = envClient.NODE_ENV;
        envClient.NODE_ENV = 'test';
        const Devtools = getDevtools();
        const { baseElement } = render(<Devtools />);

        expect(baseElement).toBeInTheDocument();
        envClient.NODE_ENV = oldEnv;
    });

    it('NODE_ENV = production', async () => {
        const oldEnv = envClient.NODE_ENV;
        envClient.NODE_ENV = 'production';
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

        await waitFor(() => {
            expect(baseElement).toBeInTheDocument();
        });
        envClient.NODE_ENV = oldEnv;
    });
});
