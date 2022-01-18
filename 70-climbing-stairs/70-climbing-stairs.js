/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n == 0) return 1;
    if(n == 1) return 1;
    
    return main(n);
};

let main = (n) => {
    let prev = 1, prev2 = 1;
    
    for(let i=2;i<=n;i++){
        let current = prev + prev2;
        prev2 = prev;
        prev = current;
    }   
    
    return prev;
}