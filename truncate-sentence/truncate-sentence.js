/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let ar = s.split(" ");
    
    ar = ar.slice(0,k);
    
    return ar.join(" ");
};