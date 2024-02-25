/* eslint-disable import/no-extraneous-dependencies */
import type { PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const { TEST_SERVER_URL } = process.env;

const config: PlaywrightTestConfig = {
    testDir: './src/app/__e2e__/',
    use: {
        baseURL: TEST_SERVER_URL,
        browserName: 'chromium',
        headless: true,
        locale: 'ru-RU',
        screenshot: 'only-on-failure',
        testIdAttribute: 'data-test-id',
    },
    webServer: {
        command: 'yarn test:server',
        reuseExistingServer: !process.env.CI,
        stderr: 'pipe',
        stdout: 'ignore',
    },
};

export default config;
