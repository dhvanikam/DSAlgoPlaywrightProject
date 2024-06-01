const{Before,After,Status,AfterStep} = require('@cucumber/cucumber');
const playwright = require('@playwright/test');
const { POManager } = require('../../pageObjects/POManager');

let browser;

Before({tags:"@array"},async function () {
    console.log("i am first");
    /*
    const browser = await playwright.chromium.launch({
      headless: false,
    });
    const context = await browser.newContext();
    this.page =  await context.newPage();
    this.pomanager = new POManager(this.page);*/
  });

  AfterStep( async function ({result}) {
    if (result.status === Status.FAILED) {
      const buffer = await this.page.screenshot();
    //await this.page.screenshot({ path: 'screenshot1.png' });
      await this.page.screenshot({ path: 'screenshotdir/screenshot1.png' });

      this.attach(buffer.toString('base64'), 'base64:image/png');
      console.log("Screenshot logged")
    }
    });

  After(async function () {
    // await context.close();
    //await browser.close();
    console.log("i am at last");
  });
