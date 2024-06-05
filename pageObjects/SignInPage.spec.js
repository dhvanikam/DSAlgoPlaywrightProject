
class SignInPage {
    
    constructor(page,pommanager) {
        this.page = page;
        this.pommanager=pommanager;
        this.username = page.locator("#id_username");
        this.password = page.locator("#id_password");
        this.loginButton = page.locator("input[value='Login']");
        this.successLoginText = page.locator("div.alert.alert-primary");
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
}
module.exports = {SignInPage};