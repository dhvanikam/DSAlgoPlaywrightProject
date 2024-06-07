const path = require("path");

module.exports = {
  default: {
    defaultTimeout: 10000,
    require: [      
      'features/support/hooks.js',
      'features/step_definitions/*.spec.js'    
    ],
    forceExit: true,
    format:["html:reports/cucumber-report.html", "json:reports/cucumber-report.json"],    
    retry: 1,
    parallel: 3

  },
};

