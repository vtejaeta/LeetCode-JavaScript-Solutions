/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(n==1) return 1;
    let trustArray = new Array(n+1).fill(0), res = -1;
    
    for(let item of trust){
        trustArray[item[0]]--;
        trustArray[item[1]]++;
    }
    
    for(let i=0;i<trustArray.length;i++){
        if(trustArray[i] == n-1){
            return i;
        }
    }
    
    return res;
};