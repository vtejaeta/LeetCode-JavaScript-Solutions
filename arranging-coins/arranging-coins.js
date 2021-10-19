/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 1, right = Math.floor(n/2)+1;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let sum = ((mid * (mid + 1)) / 2);
        
        
        if(sum == n){
            return mid;
        }else if(sum > n){
            right = mid - 1;
        }else {
            left = mid + 1;
        }
    }
    
    return right;
};