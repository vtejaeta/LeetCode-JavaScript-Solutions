/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let missArr = [] , temp = 0;
    
    for(let i=1;i<=arr[arr.length-1] + k;i++) {
        if(arr[temp] !== i){
            missArr.push(i);
            if(missArr.length == k){
                return i;
            }
        }else{
            temp++;
        }
    }
    
    
};