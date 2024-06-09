module.exports = {
  default: {
    defaultTimeout: 10000,
    require: [
      'features/support/hooks.js',
      'features/step_definitions/*.spec.js'
    ],
    forceExit: true,
    format: ["html:reports/cucumber-report.html", 
    "json:reports/cucumber-report.json",
    './reporter.js'],
    retry: 2,
    parallel: 3

  },
};

