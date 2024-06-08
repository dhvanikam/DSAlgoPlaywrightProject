const path = require("path");

module.exports = {
  default: {
    defaultTimeout: 10000,
    require: [
      'features/support/hooks.js',
      'features/step_definitions/*.spec.js'
    ],
    forceExit: true,
    //format: [path.resolve(__dirname, "reporter.js")],
    //format: ["html:cucumber-report.html"],
    format: ["html:reports/cucumber-report.html", "json:reports/cucumber-report.json",path.resolve(__dirname, "reporter.js")],
    retry: 1,
    parallel: 3

  },
};

