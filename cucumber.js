const path = require("path");

module.exports = {
  default: {
    defaultTimeout: 10000,
    require: [      
      'features/support/hooks.js',
      'features/step_definitions/*.js'    
    ],
    forceExit: true,
    format: ["html:cucumber-report.html"]//Allure : [path.resolve(__dirname, "reporter.js")],
  },
};

