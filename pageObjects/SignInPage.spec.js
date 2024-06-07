
class SignInPage {
    
    constructor(page,pommanager) {
        this.page = page;
        this.pommanager=pommanager;
        this.username = page.locator("#id_username");
        this.password = page.locator("#id_password");
        this.loginButton = page.locator("input[value='Login']");
        this.registerLink_Down = page.getByRole('link', {name: 'Register!'});
        this.successLoginText = page.locator("div.alert.alert-primary");
        this.errorMsgText = page.locator("div.alert.alert-primary");
        
     }

    async clickRegisterLink(){
        await this.registerLink_Down.click();
        return this.pommanager.getRegisterPage();
     }

    //Valid Login
    async validLogin(username, password) 
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
        return this.pommanager.getHomePage();
    }

    async successLogin() 
    {
        if(await this.successLoginText.isVisible())
        {
           return this.successLoginText;
        }      
    }

    //Login with InValid Credentials
    async clickLoginWithInvalidCredentials(username, password) 
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();

        let actualErrText;

        if(await this.errorMsgText.isVisible()){
            actualErrText = await this.errorMsgText.textContent();
        }
        return actualErrText.trim();
    }

    //Login with All Empty Fields and Username alone Empty
    async clickLoginWithEmptyField(username, password) 
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    //Error Message Method for all Empty Fields and Only Username Empty
    async errorMsgForEmptyField()
    {
        await this.username.hover();
        this.tooltipText = await this.username.evaluate(Node => Node.validationMessage);
        //console.log('Tooltip Text: ' + this.tooltipText);
        return this.tooltipText.trim();
    }

    //Error Message Method for Only Password Empty
    async errorMsgForEmptyPassword()
    {
        await this.password.hover();
        this.tooltipText = await this.password.evaluate(Node => Node.validationMessage);
       // console.log('Tooltip Text: ' + this.tooltipText);
        return this.tooltipText.trim();
    }
}

module.exports = {SignInPage};