import { cleanup } from '@testing-library/react';

import { envClient } from '$shared/api/env-client';

import '@testing-library/jest-dom';

vi.mock('zustand');
vi.mock('zustand/traditional');

window.HTMLElement.prototype.scrollIntoView = vi.fn();

envClient.VITE_BASE_URL = '/';
envClient.VITE_BASE_PATH = '/';
envClient.VITE_TEST_SERVER_BUILD = true;

afterEach(() => {
    cleanup();
});
