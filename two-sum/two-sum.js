/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};
    
    for(let i=0;i<nums.length;i++){
        let diff = target - nums[i];
        if(obj[nums[i]] != null){
            return  [obj[nums[i]], i];
        }else{
            obj[diff] = i;
        }
    }
};