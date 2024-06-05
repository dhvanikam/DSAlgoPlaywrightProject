const {HomePage} = require('./HomePage.spec');
const {ArrayPage} = require('./ArrayPage.spec');
const {SignInPage} = require('./SignInPage.spec');
const{RegisterPage} = require('./RegisterPage.spec');


class POManager {
    constructor(page) {
        
        this.page = page;
        this.homePage = new HomePage(this.page,this);
        this.signInPage = new SignInPage(this.page,this);
        this.registerPage = new RegisterPage(this.page,this);      
        this.stackPage=null;
    //    this.queuePage = new QueuePage(this.page);
        this.arrayPage = new ArrayPage(this.page,this);

    }

    getHomePage() {
        return this.homePage;
        
    }

    getSignInPage() {
        return this.signInPage;
    }

    getRegisterPage() {
        return this.registerPage;
    }

     getStackPage()
    {    if(!this.stackPage)
        {
            const {StackPage}=require('./StackPage.spec'); 
            this.stackPage=new StackPage(this.page,this);
        }        
        return this.stackPage;
    }

    // getQueuePage() {
    //     return this.queuePage;
    // }

    getArrayPage(){
        return this.arrayPage;
    }

}
module.exports = {POManager};