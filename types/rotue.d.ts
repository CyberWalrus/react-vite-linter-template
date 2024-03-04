import type { router } from '$app/router/app-router';

declare module '@tanstack/react-router' {
    type Register = {
        router: typeof router;
    };
}
