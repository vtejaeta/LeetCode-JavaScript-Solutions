/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let left = 0, right = arr.length - 1;
    
    while(left <= right) {
        let mid = left + Math.floor((right-left) / 2);
        
        if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid+1]){
            return mid;
        }else if(arr[mid] < arr[mid - 1]){
            right = mid - 1;
        }else if(arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        }
    }
};