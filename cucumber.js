const path = require("path");

module.exports = {
  default: {
    defaultTimeout: 10000,
    require: [      
      'features/support/hooks.js',
      'features/step_definitions/*.js'    
    ],
    forceExit: true,
    format: ['Allure : [path.resolve(__dirname, "reporter.js)'],//["html:cucumber-report.html"],
    retry: 1,
    parallel: 3
  },
};

