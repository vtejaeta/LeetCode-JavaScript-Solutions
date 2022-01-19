/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let n = cost.length;
    
    let dpArray = new Array(n+1).fill(-1);
    
    return withDP(n, cost, dpArray);
};

let withDP = (n, cost, dpArray) => {
    if(n == 0) return 0;
    if(n == 1) return 0;
    
    if(dpArray[n] != -1) return dpArray[n];
    
    let oneStep = withDP(n-1, cost, dpArray) + cost[n - 1];
    let twoStep = withDP(n-2, cost, dpArray) + cost[n - 2];
    
    dpArray[n] = Math.min(oneStep, twoStep);
    
    return dpArray[n];
}