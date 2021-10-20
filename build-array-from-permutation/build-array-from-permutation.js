/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let result = [];
    
    for(let index in nums) {
        result.push(nums[nums[index]]);
    }
    
    return result;
};