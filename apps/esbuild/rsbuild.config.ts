import { createConfig } from '@nx/angular-rsbuild';

export default () =>
  createConfig(
    {
      options: {
        browser: './src/main.ts',
        server: './src/main.server.ts',
        ssr: { entry: './src/server.ts' },
      },
    },
    {
      development: {
        options: {
          optimization: false,
          sourceMap: true,
        },
      },
    }
  );
