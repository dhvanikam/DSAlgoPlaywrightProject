
const elementUtil = require('../utils/elementUtil.spec');
const config = require('../../DSAlgoPlaywrightProject/playwright.config'); //Changes made by suba

class HomePage{

    constructor(page,pommanager){
        this.page = page;
        //dropdown locators
        this.pommanager = pommanager;
        this.textLogo = page.locator(".navbar-brand");
        this.dropdownEle = page.locator(".dropdown");
        this.defaultDropdownOption = page.locator(".nav-link.dropdown-toggle");
        this.dropdownMenuSection = page.locator(".dropdown-menu.show");
        this.menuOptions = page.locator(".dropdown-menu.show a");

        //error msg locator
        this.errMsg = page.locator("div[role='alert']");

        //link locators
        this.registerLink = page.locator("//a[normalize-space()='Register']");
        this.signInLink = page.locator("//a[normalize-space()='Sign in']");
        this.signOut = page.locator("a[href='/logout']");

        //get started buttons for each modules
        this.dsIntroBtn = page.locator("//a[@href='data-structures-introduction']");
        this.arrayBtn = page.locator("//a[@href='array']");
        this.linkedListBtn = page.locator("a[href='linked-list']");
        this.stackBtn = page.locator("a[href='stack']");
        this.queueBtn = page.locator("a[href='queue']");
        this.treeBtn = page.locator("a[href='tree']");
        this.graphBtn = page.locator("a[href='graph']");

        this.allGetStartedBtn = page.locator(".card-body.d-flex.flex-column a");

        //module name locator
        this.moduleTexts = page.locator('.card-title');
        
    }

    /*********** DropDown methods *****************/
    async isDropDOwnVisible(){
        return elementUtil.isELementVisible(this.dropdownEle);
        
    }

    getDefaultDropDownOptionEle(){
        return this.defaultDropdownOption;
    }

    async clickOnDropDOwn(){
        await elementUtil.clickLocator(this.dropdownEle);
        return elementUtil.isELementVisible(this.dropdownMenuSection);
    }

    async clickEachOptionAndGetErrMsg(){

        //get all the options in an array
        let menuArray = await this.menuOptions;
        const optionCount = await menuArray.count();

        //initializa an empty array
        let errMsgArray=[];        

        //iterate and click on each options and get the error msg
        for (let i=0; i<optionCount; i++){

            await menuArray.nth(i).click();
        
            if(await this.errMsg.isVisible()){
                let text = await this.errMsg.textContent()
                errMsgArray.push(text.trim());
            }
            
            //click on dropdown again
            //await clickOnDropDOwn(); //--> giving the error: ReferenceError: clickOnDropDOwn is not defined-->Team??
            await this.dropdownEle.click();

          } 
        
        return errMsgArray;
    }

    async getAllDropdownOptionMenuTexts(){

        let menuArray = await this.menuOptions;
        const optionCount = await menuArray.count();

        let optionMenuArray=[]; 
        for (let i=0; i<optionCount; i++){
            let text = await menuArray.nth(i).textContent();
            optionMenuArray.push(text.trim());
        }
        return optionMenuArray;
    }

    async getMenuOptionCount(){
        let menuArray = await this.menuOptions;
        const count = await menuArray.count();

        return count;
    }


    /*********** Link action methods *****************/

  async goToUrl() 
  {  
   await this.page.goto(config.use.baseURL);
  }

    async isRegisterLinkVisible(){
        return await this.registerLink.isVisible();
    }

    async clickRegisterLink(){
        await this.registerLink.click();
    }

    async isSignInLinkVisible(){
        return await this.signInLink.isVisible();
    }

    async clickSignInLink(){
        await this.signInLink.click();
        return this.pommanager.getLoginPage();
    }

    async isSignOutLinkVisible(){
        return await this.signOut.isVisible();
    }

    async clickSignOutLink(){
        await this.signOut.click();
    }
    
    

    /*********** Module methods *****************/

    async clickGetStartedOf_DataStructure(){
        await this.dsIntroBtn.click();
    }

    async clickGetStartedOf_Array(){
        await this.arrayBtn.click();
        return this.pommanager.getArrayPage(); //Added by Dhvani      
    }

    async clickGetStartedOf_LinkedList(){
        await this.linkedListBtn.click();
    }
    async clickGetStartedOf_Stack(){
        await this.stackBtn.click();
        return this.pommanager.getStackPage();
    }
    async clickGetStartedOf_Queue(){
        await this.queueBtn.click();
    }
    async clickGetStartedOf_Tree(){
        await this.treeBtn.click();
    }
    async clickGetStartedOf_Graph(){
        await this.graphBtn.click();
    }


    async getAllModuleNames(){

        let moduleArray = await this.moduleTexts;
        const moduleCount = await moduleArray.count();

        let moduleTextArray=[]; 
        for (let i=0; i<moduleCount; i++){
            let text = await moduleArray.nth(i).textContent();
            moduleTextArray.push(text.trim());
        }
        return moduleTextArray;
    }

    async getAllModuleCount(){
        return await this.moduleTexts.count();
    }

    async clickGetStartedBtnEachModuleAndGetErrMsg(){

        //get all getStarted Btns in an array
        let btnArray = await this.allGetStartedBtn;
        const btnCount = await btnArray.count();

        let errMsgArray=[];        

        for (let i=0; i<btnCount; i++){

            await btnArray.nth(i).click();
        
            if(await this.errMsg.isVisible()){
                let text = await this.errMsg.textContent()
                errMsgArray.push(text.trim());
            }

            //reinitialize
            btnArray = await this.allGetStartedBtn;

          } 
        
        return errMsgArray;
    }
}

module.exports = {HomePage};