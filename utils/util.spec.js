// @ts-check
class util{

    constructor(){};

    convertObjectArrayToStringArray(objectArray){

        let strArr = [];

        const keysValues = Array.from(objectArray.values());

        for(const e of keysValues){
            strArr.push(String(e));
        }
    }

    //return strArr; --> getting error:
    /**Unexpected token. A constructor, method, accessor, or property was expected. */

}