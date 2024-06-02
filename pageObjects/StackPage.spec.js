const { expect } = require('@playwright/test');
const config = require('../playwright.config.js');


class StackPage{

  constructor(page)
  {
    this.page=page;
    //locators
    this.username=page.locator('[name="username"]');
    this.password=page.locator("[name='password']");
    this.submitButton=page.locator("[type='submit']");
    this.successLoginText = page.locator("div.alert.alert-primary");
    this.dropDown=page.locator('[data-toggle="dropdown"]');
    this.stackOption=page.locator('[href="/stack"]');
    this.operationInStackLink=page.locator('[href="operations-in-stack"]');
    this.implementationInStackLink=page.locator('[href="implementation"]');
    this.applicationsInStackLink=page.locator('[href="stack-applications"]');
    this.tryEditorLink=page.locator('[href="/tryEditor"]');
    this.tryEditorTextarea=page.locator("//textarea[@tabindex='0']");
    this.tryEditorButton=page.locator('[type="button"]');
    this.textOutput=page.locator('[id="output"]');
    this.signOut=page.locator('[href="/logout"]');
  }

  async goToUrl()
  {  
   await this.page.goto(config.use.baseURL);
  }
  async loginValidCredentials(username,password)
  {
    await this.username.fill(username);
    await this.password.fill(password);      
    await this.submitButton.click();   
    await this.page.waitForLoadState('networkidle');
  }  
  async successLoginTextCheck(successLoginTextStr) {
    const successText= await this.successLoginText.textContent();  
     expect(await successText).toContain(successLoginTextStr) ;    
 }
 async selectStackOption()
 { 
  try{
  await this.dropDown.click();    
  await this.stackOption.click();   
  await this.page.waitForLoadState('networkidle');
  const expectedUrl="https://dsportalapp.herokuapp.com/stack/";
  // await this.verifyUrl(expectedUrl);
  const currentUrl = await this.page.url();
    if (currentUrl !== expectedUrl) {
      throw new Error(`URL mismatch: expected ${expectedUrl}, but got ${currentUrl}`);
    }
  } catch (error) {
    console.error(`Error in selectStackOption: ${error.message}`);
    throw error;
  }
  }

 async verifyStackPageUrl()
 {
  await this.page.waitForTimeout(3000);
  const title=await this.page.title();
  return title;
 }

async clickMenuOption(menuoption)
{ 
  const expectedUrl = `https://dsportalapp.herokuapp.com/stack/${menuoption}/`;
  await this.page.locator(`[href="${menuoption}"]`).click();
  await this.verifyUrl(expectedUrl);    
}
async enterCodeInTryEditor(pythonCode){
  await this.tryEditorLink.click();
  await this.tryEditorTextarea.fill(pythonCode);
  await this.tryEditorButton.click();
  const actualOutput=await this.textOutput.textContent()
  return actualOutput;
}



async verifyUrl(expectedUrl)
{
    const currentUrl = await this.page.url();
    expect(currentUrl).toBe(expectedUrl); 
}

async enterInvalidCodeInTryEditor(invalidPythonCode)
{
  await this.tryEditorLink.click();
  await this.tryEditorTextarea.fill(invalidPythonCode);
}
async acceptAlert()
{
  this.page.on("dialog", async (dialog)=>
  {
    const message = dialog.message();
    console.log(message);
    await dialog.accept();
  })
  
  await this.tryEditorButton.click();
  
}

async logOut()
{
  await this.page.goBack();
  await this.signOut.click();
}

}

module.exports={StackPage};