import type { PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const { TEST_SERVER_URL, E2E_PRODUCTION, PRODUCTION_SERVER_URL, E2E_BROWSER_NAME } = process.env;

const browserName: 'chromium' | 'firefox' | 'webkit' =
    (E2E_BROWSER_NAME as unknown as 'chromium' | 'firefox' | 'webkit') ?? 'chromium';

const isProduction = E2E_PRODUCTION === 'true';

const url = isProduction ? PRODUCTION_SERVER_URL : TEST_SERVER_URL;

const webServer = isProduction
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
    outputDir: `./__screenshots-current__/${browserName}`,
    reporter: 'list',
    testDir: './src/app/__e2e__/',
    timeout: 10000,
    use: {
        baseURL: url,
        browserName,
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
