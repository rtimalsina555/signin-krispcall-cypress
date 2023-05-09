const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    failOnStatusCode: false,
    baseUrl : 'https://supportqa.safefamilyapp.com/login',
    setupNodeEvents(on, config) {
     // implement node event listeners here
    },
  },

});
