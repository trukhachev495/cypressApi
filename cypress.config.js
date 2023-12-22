const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "m2dcqm",
  e2e: {
    baseUrl: 'https://petstore.swagger.io/v2/user',
    // retries: {
    //   openMode:1,
    //   runMode:2
    // },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
