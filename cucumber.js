const common = {
  defaultTimeout: 10000,
  require: [
    'features/support/hooks.js',
    'features/step_definitions/*.spec.js'
  ],
  forceExit: true
}

module.exports = {

  default: {
    ...common,
    format: ["html:reports/cucumber-report.html",
      "json:reports/cucumber-report.json",
      './reporter.js'],
    retry: 1,
    parallel: 3,
    worldParameters: {
      ...common.worldParameters,
      browser: "chromium"
    }
  },
  profileWithFirefox: {
    ...common,
    format: ["html:reports/cucumber-report.html"],
    retry: 1,
    parallel: 1,
    worldParameters: {
      ...common.worldParameters,
      browser: "firefox"
    }
  },

  profileWithWebkit: {
    ...common,
    format: ['./reporter.js'],
    retry: 1,
    parallel: 1,
    "worldParameters": {
      ...common.worldParameters,
      "browser": "webkit"
    }
  }
};