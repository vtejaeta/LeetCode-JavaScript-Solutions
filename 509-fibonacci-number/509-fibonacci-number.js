/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n <= 1) return n;
    
    let prev2 = 0, prev = 1;
    
    for(let i = 2; i <= n; i++){
        let curr = prev + prev2;
        prev2 = prev;
        prev = curr;
    }
    
    return prev;
};