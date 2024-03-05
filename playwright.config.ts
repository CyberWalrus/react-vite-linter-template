import type { PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv';

import { envBuild } from './src/shared/api/env-build';

dotenv.config();

const webServer = envBuild.E2E_PRODUCTION
    ? {}
    : ({
          webServer: {
              command: 'yarn test:server',
              reuseExistingServer: !process.env.CI,
              stderr: 'pipe',
              stdout: 'ignore',
          },
      } as const);

const config: PlaywrightTestConfig = {
    globalTimeout: 200000,
    outputDir: `./__screenshots-current__/${envBuild.E2E_BROWSER_NAME}`,
    reporter: 'list',
    testDir: './src/app/__e2e__/',
    timeout: 10000,
    use: {
        baseURL: envBuild.E2E_SERVER_URL,
        browserName: envBuild.E2E_BROWSER_NAME,
        headless: true,
        ignoreHTTPSErrors: true,
        locale: 'ru-RU',
        screenshot: 'on',
        testIdAttribute: 'data-test-id',
        viewport: { height: 720, width: 1280 },
    },
    ...webServer,
};

export default config;
