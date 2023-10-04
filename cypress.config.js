const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  e2e: {
  
    "excludeSpecPattern": "cypress/e2e/cypresshooks.cy.js",
    "video":true,
    "videoCompression": 51,
    "videosFolder": "cypress/Girish",
    "baseUrl" : "https://opensource-demo.orangehrmlive.com",
     "viewportWidth":1920,
     "viewportHeight": 1080,
    "defaultCommandTimeout": 20000,
    "pageLoadTimeout": 120000,
    "retries":{
      "openMode": 1,
      "runMode": 1
      
    },
    env:{
        
      "username" : "Admin",
      "password": "admin123",
      "clienturl": "https://opensource-demo.orangehrmlive.com"

    },

    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {downloadFile})
      // implement node event listeners here
    },
  },
});
