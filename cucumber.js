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
    format: ["html:reports/cucumber-report.html",'./reporter.js'],
    retry: 1,
    parallel: 3,
    worldParameters: {
      ...common.worldParameters,
      browser: "firefox"
    }
  },

  profileWithWebkit: {
    ...common,
    format: ['./reporter.js'],
    retry: 1,
    parallel: 2,
    "worldParameters": {
      ...common.worldParameters,
      "browser": "webkit"
    }
  }
  // phone: `--world-parameters '{"device": {"type":"phone","height":568,"width":320}}'`,
  // tablet: `--world-parameters '{"device": {"type":"tablet","height":1024,"width":768}}'`,
};

