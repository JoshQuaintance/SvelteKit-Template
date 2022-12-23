import type { PlaywrightTestConfig } from '@playwright/experimental-ct-svelte';
import { resolve } from 'node:path';

const config: PlaywrightTestConfig = {
    testDir: 'tests/component',
    testMatch: /.*\.test\.(js|ts|mjs)/,
    use: {
        ctViteConfig: {
            resolve: {
                alias: {
                    $lib: resolve('src/lib')
                }
            }
        }
    }
};

export default config;
