const { defineConfig } = require("cypress");
const { devServer } = require("@cypress/react/plugins/react-scripts");

module.exports = defineConfig({
  retries: {
    runMode: 3,
    openMode: 1,
    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer,
  },
});
