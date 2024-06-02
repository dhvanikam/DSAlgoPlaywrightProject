const{Before,After,Status,AfterStep} = require('@cucumber/cucumber');
const playwright = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');

let browser;

Before(/*{tags:"@array"},*/async function () {
    console.log("i am first");

    /**NEED STEP TO DELETE SCREENSHOTS FROM PREVIOUS TEST RUN */

  });

  AfterStep( async function ({result}) {

    if (result.status === Status.FAILED) {
      const buffer = await this.page.screenshot();

      let timestamp = new Date().getTime();
      await this.page.screenshot({ path: "screenshotdir/screenshot1_"+timestamp+".png" });

      this.attach(buffer.toString('base64'), 'base64:image/png');
      console.log("Screenshot logged")
    }
    });

  After(async function () {
    // await context.close();
    //await browser.close();
    console.log("i am at last");
  });
