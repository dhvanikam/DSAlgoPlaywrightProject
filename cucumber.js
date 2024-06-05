const path = require("path");

module.exports = {
  default: {
    defaultTimeout: 10000,
    require: [      
      'features/support/hooks.js',
      'features/step_definitions/*.spec.js'    
    ],
    forceExit: true,
    // format: [path.resolve(__dirname, "reporter.js")],
    format: ["html:cucumber-report.html"],
    retry: 1,
    //parallel: 3
  },
};

