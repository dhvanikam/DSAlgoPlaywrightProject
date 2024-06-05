const{Before,After,Status,AfterStep} = require('@cucumber/cucumber');
//const globalSetup = require('../../global-setup'); // Adjust the path if needed
const playwright = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');
let browser;
let context;

// Before(/*{tags:"@array"},*/async function () {
//     console.log("i am first");


// });

Before({timeout: 100*1000},async function () {
  //     /**NEED STEP TO DELETE SCREENSHOTS FROM PREVIOUS TEST RUN */
  //   console.log("inside Before Hook");
    this.browser = await playwright.chromium.launch({
      headless: true,
  });
  this.context = await this.browser.newContext(this.context);
  this.page =  await this.context.newPage();
  this.pomanager = new POManager(this.page);
  });


AfterStep(async function ({ result }) {

  if (result.status === Status.FAILED) {
    const buffer = await this.page.screenshot();

    let timestamp = new Date().getTime();
    await this.page.screenshot({ path: "screenshotdir/screenshot1_" + timestamp + ".png" });

    this.attach(buffer.toString('base64'), 'base64:image/png');
    console.log("Screenshot logged")
  }
});

After(async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});
