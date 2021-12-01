/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let hash = {}, sArr = s.split(" "), res = "";
    
    for(let i of sArr){
        let num = i.slice(i.length-1,i.length);
        let str = i.slice(0, i.length-1);
        
        hash[num] = str;
    }
    
    
    for(let i = 0; i<sArr.length;i++){
        res += hash[i+1];
        if(i != sArr.length-1){
            res += " ";
        }
    }
    
    return res;
};