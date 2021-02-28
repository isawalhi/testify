/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const chromium = require('chromium');
const execa = require('execa');

const findBrowser = () => {
  // the path is hard-coded for simplicity
  const browserPath = chromium.path;

  return execa(browserPath, ['--version']).then((result) => {
    // STDOUT will be like "Chromium 77.0.69.135"
    const [, version] = /Chromium (\d+\.\d+\.\d+\.\d+)/.exec(
      result.stdout,
    );
    const majorVersion = parseInt(version.split('.')[0]);

    return {
      name: 'chromium',
      channel: 'stable',
      family: 'chromium',
      displayName: 'Chromium',
      version,
      path: browserPath,
      majorVersion,
    };
  });
};

const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = async (on, config) => {
  // config.browsers.push({
  //   channel: 'stable',
  //   path: chromium.path,
  //   name: 'chromium',
  //   family: 'chromium',
  //   displayName: 'Fuck',
  //   version: '88',
  //   majorVersion: 88,
  // });
 await findBrowser().then((browser) => {
    // console.log(browser);
    config.browsers.push(browser);
  });
  on('before:browser:launch', (browser = {}, args) => {
    if (browser.name === 'chrome' || browser.name === 'chromium') {
      // In headless mode, Cypress fixes the scale factor to 1, and this forces
      // screenshots to be taken with an image size matching the viewport size
      // instead of the viewport size multiplied by the scale factor.
      //
      // Since we also want to run the image regression tests in development mode,
      // we need to set the device scale factor to 1 in chrome / chromium.
      //
      // See: https://github.com/cypress-io/cypress/issues/2102#issuecomment-521299946
      // See: https://github.com/cypress-io/cypress/blame/a7dfda986531f9176468de4156e3f1215869c342/packages/server/lib/cypress.coffee#L132-L137
      args.push('--force-device-scale-factor=3');
      args.push(...['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars', '--font-render-hinting=none']);
    } else if (browser.name === 'electron' && browser.isHeaded) {
      // eslint-disable-next-line no-console
      console.log(
        "There isn't currently a way of setting the device scale factor in Cypress when running headed electron so we disable the image regression commands.",
      );
    }

    return args;
  });
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  addMatchImageSnapshotPlugin(on, config);
  return config;
};
