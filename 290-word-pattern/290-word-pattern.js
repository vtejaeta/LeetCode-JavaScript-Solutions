/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let sArray = s.split(" "), obj = {};
    
    if(sArray.length != pattern.length) return false;
    
    for(let i = 0; i < pattern.length; i++){
        let key = pattern[i];
        if(obj[key] != null){
            if(obj[key] != sArray[i]){
                return false;                
            }
        }else{
            if(Object.values(obj).includes(sArray[i])){
                return false;
            }
            
            obj[key] = sArray[i];
        }
    }
    
    return true;
};