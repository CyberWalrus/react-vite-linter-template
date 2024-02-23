/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-extraneous-dependencies
import { cleanup } from '@testing-library/react';

import '@testing-library/jest-dom';

window.HTMLElement.prototype.scrollIntoView = vi.fn();

process.env.BASE_URL = '/test/';
process.env.BASE_PATH = '/test/';

afterEach(() => {
    cleanup();
});
