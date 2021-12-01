/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let res = new Array(indices.length);
    
    indices.forEach((correctIndex, index) => {
        res[correctIndex] = s[index];
    })
    
    return res.join("");
    
};