/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 1, right = Math.floor(num / 2) + 1;
    
    while(left <= right){
        let middle = Math.floor((left + right) / 2);
        let square = middle * middle;
        
        if(square == num){
            return true;
        }else if(square < num) {
            left = middle + 1;
        }else{
            right = middle - 1;
        }
    }
    
    return false;
};