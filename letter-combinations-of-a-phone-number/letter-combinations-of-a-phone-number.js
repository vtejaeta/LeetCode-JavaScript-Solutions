/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let hash = {2:"abc", 3:"def", 4:"ghi", 5:"jkl", 6:"mno", 7:"pqrs", 8:"tuv", 9:"wxyz"};
    
    if(digits == "") return [];
    
    if(digits.length == 1) return hash[digits].split("");
    
    let res = [];
    
    phoneCombinations(digits, hash, "", 0, res);
    
    return res;
};

function phoneCombinations(digits, hash, str, index, res){
    if(index == digits.length){
        res.push(str);
        return;
    }
    
    let letters = hash[digits[index]];
    
    for(let i = 0; i < letters.length;i++){
        phoneCombinations(digits,hash,str+letters[i],index+1,res);
    }
}