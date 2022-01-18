/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n == 0) return 1;
    if(n == 1) return 1;
    
    let dpArray = new Array(n+1).fill(-1);    
        
    main(n, dpArray);
    return dpArray[n];
};

let main = (n, dpArray) => {
    if(n == 0) return 1;
    if(n == 1) return 1;
    
    if(dpArray[n] != -1) return dpArray[n];
    
    let left = main(n-1, dpArray);
    let right = main(n-2, dpArray);
    
    dpArray[n] = left + right;
    
    return dpArray[n];
}