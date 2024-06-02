const {HomePage} = require('./HomePage.spec');
const {LoginPage} = require('./LoginPage.spec');




class POManager {
    constructor(page) {
        this.page = page;
        this.homePage = new HomePage(this.page);
        this.loginPage = new LoginPage(this.page);
        this.stackPage=null;
        
    }

    getHomePage() {
        return this.homePage;
    }

    getLoginPage() {
        return this.loginPage;
    }

    getStackPage()
    {    if(!this.stackPage)
        {
            const {StackPage}=require('./StackPage.spec'); 
            this.stackPage=new StackPage(this.page);
        }        
        return this.stackPage;
    }



}
module.exports = {POManager};