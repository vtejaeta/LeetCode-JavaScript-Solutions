/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lptr = 0;
    
    for(let rptr = 0;rptr < nums.length; rptr++){
        if(nums[rptr] !== 0){
            let temp = nums[lptr];
            nums[lptr] = nums[rptr];
            nums[rptr] = temp;
            lptr++;
        }
    }
    
    return nums;
};