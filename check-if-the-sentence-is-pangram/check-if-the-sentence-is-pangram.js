/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    if(sentence.length < 26) return false;
    
    let hash = {}, count = 0;
    
    for(let char of sentence){
        hash[char] = 1;
    }
    
    for(let k in hash){
        count++;
    }
    
    return count == 26;
};