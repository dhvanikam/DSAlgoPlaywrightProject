// @ts-check
module.exports = {

    async isELementVisible(locator){
        return await locator.isVisible();
    },

    async clickLocator(locator){
        await locator.click();
    }
}