const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    "video": true,
    "viewportWidth":1920,
    "viewportHeight": 1080,
   // "defaultCommandTimeout": 20000,
    "pageLoadTimeout": 120000,
    "retries":{
      "openMode": 3,
      "runMode": 2
      
    },
    env:{
        
      "username" : "Admin234",
      "password": "admin123",
      "clienturl": "https://opensource-demo.orangehrmlive.com"

    },

    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
