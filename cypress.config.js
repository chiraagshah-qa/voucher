const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.vouchercodes.co.uk/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportWidth: 1024,
  viewportHeight: 960,
  screenshotOnRunFailure: true
});
