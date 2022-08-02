const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ra49i8",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
