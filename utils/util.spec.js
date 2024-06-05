// @ts-check
module.exports = {

    convertObjectArrayToStringArray(objectArray){
        let strArr = [];

        const keysValues = Array.from(objectArray.values());

        for(const e of keysValues){
            strArr.push(String(e));
        }
        return strArr;
    },

    checkActualEveryErrMsgToEquate(expArray,expectedText){
        let arr = expArray;
        return arr.every((e) => e===expectedText); 
    },

    //to generate random number
    getRandomInt(max) 
    {
        return Math.floor(Math.random() * max);
    }

}