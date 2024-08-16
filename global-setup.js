const { chromium } = require('@playwright/test');

async function globalSetup() {
 
  const browser = await chromium.launch({
    headless: false, // Change to true if you want to run headless
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto('https://dsportalapp.herokuapp.com/home');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Username:').click();
  await page.getByLabel('Username:').fill('suba');
  await page.getByLabel('Username:').press('Tab');
  await page.getByLabel('Password:').fill('suba@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.context().storageState({ path: 'loginauth.json' });

  await browser.close();
}


module.exports = globalSetup;
