module.exports = {
  default: {
    defaultTimeout: 10000,
    require: [
      'features/support/hooks.js',
      'features/step_definitions/*.spec.js'
    ],
    forceExit: true,
<<<<<<< Updated upstream
    format: ["html:reports/cucumber-report.html", 
    "json:reports/cucumber-report.json",
    './reporter.js'],
    retry: 2,
=======
    //format: [path.resolve(__dirname, "reporter.js")],
    //format: ["html:cucumber-report.html"],
    format: ["html:reports/cucumber-report.html", "json:reports/cucumber-report.json", './reporter.js'],
    retry: 1,
>>>>>>> Stashed changes
    parallel: 3

  },
};

