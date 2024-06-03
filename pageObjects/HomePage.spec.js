class HomePage{

    constructor(page){
        this.page = page;
        this.textLogo = page.locator(".navbar-brand");
        this.dropdownEle = page.locator(".dropdown");
        this.defaultDropdownOption = page.locator(".nav-link.dropdown-toggle");
        this.dropdownMenuSection = page.locator(".dropdown-menu.show");
        this.menuOptions = page.locator(".dropdown-menu.show a");
        this.errMsg = page.locator("div[role='alert']");

        this.registerLink = page.locator("//a[normalize-space()='Register']");
        this.signInLink = page.locator("//a[normalize-space()='Sign in']");
        this.dsIntroBtn = page.locator("//a[@href='data-structures-introduction']");
        this.arrayBtn = page.locator("//a[@href='array']");
        this.linkedListBtn = page.locator("a[href='linked-list']");
        this.stackBtn = page.locator("a[href='stack']");
        this.queueBtn = page.locator("a[href='queue']");
        this.treeBtn = page.locator("a[href='tree']");
        this.graphBtn = page.locator("a[href='graph']");
        this.signOut = page.locator("a[href='/logout']");
    }

    /*********** DropDown methods *****************/
    async isDropDOwnVisible(){
        return await this.dropdownEle.isVisible();
    }

    getDefaultDropDownOptionEle(){
        return this.defaultDropdownOption;
    }

    async clickOnDropDOwn(){
        await this.dropdownEle.click();
        return await this.dropdownMenuSection.isVisible();
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

    checkEveryOptionEquatesToValue(expArray,expectedText){
        let arr = expArray;
        return arr.every((e) => e===expectedText); 
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

        return String(count);
    }


    /*********** Link action methods *****************/

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
    }

    async clickGetStartedOf_LinkedList(){
        await this.linkedListBtn.click();
    }
    async clickGetStartedOf_Stack(){
        await this.stackBtn.click();
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

}

module.exports = {HomePage};