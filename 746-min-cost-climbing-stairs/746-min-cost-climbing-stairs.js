/**
 * @param {number[]} cost
 * @return {number}
 */
// var minCostClimbingStairs = function(cost) {
//     let n = cost.length;
    
//     let dpArray = new Array(n+1).fill(-1);
    
//     return withDP(n, cost, dpArray);
// };

// let withDP = (n, cost, dpArray) => {
//     if(n == 0) return 0;
//     if(n == 1) return 0;
    
//     if(dpArray[n] != -1) return dpArray[n];
    
//     let oneStep = withDP(n-1, cost, dpArray) + cost[n - 1];
//     let twoStep = withDP(n-2, cost, dpArray) + cost[n - 2];
    
//     dpArray[n] = Math.min(oneStep, twoStep);
    
//     return dpArray[n];
// }

var minCostClimbingStairs = function(cost) {
    let n = cost.length;
    
      
    return tabulation(n, cost);
};

let tabulation = (n, cost) => {
    let prev2, prev;
    
    prev2 = 0;
    prev = 0;
    
    for(let i=2;i<=n;i++){
        let fs = prev + cost[i-1];
        let ss = prev2 + cost[i-2];
        
        let curr = Math.min(fs, ss);
        
        prev2 = prev;
        prev = curr;
    }
    
    return prev;
}