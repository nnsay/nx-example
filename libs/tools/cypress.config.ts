/* eslint-disable @typescript-eslint/no-var-requires */
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';
import { nxE2EStorybookPreset } from '@nx/storybook/presets/cypress';

console.log(nxE2EPreset(__filename, { cypressDir: 'cypress' }));
console.log(nxE2EStorybookPreset(__dirname));
export default defineConfig({
  e2e: {
    //
    ...nxE2EPreset(__filename, { cypressDir: 'cypress' }),
    chromeWebSecurity: false,
    //

    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config;
      // return Object.assign(config, {
      //   module: {
      //     rules: [
      //       {
      //         test: /\.(js|ts|tsx)$/,
      //         loader: 'coverage-istanbul-loader',
      //         options: { esModules: true },
      //         enforce: 'post',
      //         include: require('path').join(__dirname, 'src'),
      //         exclude: [
      //           /\*\/stories\/\*/,
      //           /\.(e2e|spec)\.ts$/,
      //           /node_modules/,
      //           /(ngfactory|ngstyle)\.js/,
      //         ],
      //       },
      //     ],
      //   },
      // });
    },
  },
});
