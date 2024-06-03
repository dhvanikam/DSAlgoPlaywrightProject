// @ts-check
module.exports = {
    
    convertObjectArrayToStringArray(objectArray){
        let strArr = [];

        const keysValues = Array.from(objectArray.values());

        for(const e of keysValues){
            strArr.push(String(e));
        }
        return strArr;
    }

}