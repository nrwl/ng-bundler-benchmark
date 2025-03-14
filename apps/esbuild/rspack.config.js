const { createConfig } = require('@nx/angular-rspack');

module.exports = () =>
  createConfig(
    {
      options: {
        root: __dirname,
        index: './src/index.html',
        browser: './src/main.ts',
        polyfills: ['zone.js'],
        tsConfig: './tsconfig.app.json',
        assets: [
          {
            glob: '**/*',
            input: './public',
          },
        ],
        styles: ['./src/styles.css'],
        server: './src/main.server.ts',
        ssr: { entry: './src/server.ts' },
      },
    },
    {
      development: {
        options: {
          optimization: false,
          extractLicenses: false,
          sourceMap: true,
        },
      },
    }
  );
