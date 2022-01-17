/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let sArray = s.split(" "), obj = {}, cache = [];
    
    if(sArray.length != pattern.length) return false;
    
    for(let i = 0; i < pattern.length; i++){
        let key = pattern[i];
        if(obj[key] != null){
            if(obj[key] != sArray[i]){
                return false;                
            }
        }else{
            if(cache.includes(sArray[i])){
                return false;
            }
            
            cache.push(sArray[i]);
            obj[key] = sArray[i];
        }
    }
    
    return true;
};