const{Before,After,Status,AfterStep} = require('@cucumber/cucumber');


let browser;
let context;

// Before(/*{tags:"@array"},*/async function () {
//     console.log("i am first");


// });



Before(/*{tags:"@stack"},*/async function () {
  //     /**NEED STEP TO DELETE SCREENSHOTS FROM PREVIOUS TEST RUN */
    console.log("inside Before Hook");

  //   browser = await playwright.chromium.launch({
  //     headless: false,
  // });
  // context = await browser.newContext();
  // this.page =  await context.newPage();
  // this.pomanager = new POManager(this.page); 
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
    if(!browser || !context)
    {    
    //  await context.close();
    //  await browser.close();
    }
  });
