/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n == 1) return ["()"];
    
    let res = [];
    
    backtrack(res, "", 0, 0, n);
    
    return res;
};

function backtrack(res, str, open, close, max){
    if(str.length == max * 2){
        res.push(str);
        return;
    }
    
    if(open < max) backtrack(res,str+"(",open+1,close,max);
    if(close < open) backtrack(res, str+")",open, close+1,max);
}