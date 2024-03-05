import { cleanup } from '@testing-library/react';

import '@testing-library/jest-dom';

vi.mock('zustand');
vi.mock('zustand/traditional');

window.HTMLElement.prototype.scrollIntoView = vi.fn();

process.env.VITE_BASE_URL = '/';
process.env.VITE_BASE_PATH = '/';
process.env.VITE_TEST_SERVER_BUILD = 'true';

afterEach(() => {
    cleanup();
});
