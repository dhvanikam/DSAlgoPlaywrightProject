const path = require("path");

module.exports = {
  default: {
    forceExit: true,
    format: ["html:cucumber-report.html"]//Allure : [path.resolve(__dirname, "reporter.js")],
  },
};