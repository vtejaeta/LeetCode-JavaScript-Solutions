/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let obj = {};
    
    for(let i = 0; i<numbers.length;i++) {
        let diff = target - numbers[i];
        if(obj[diff] != null) {
            return [obj[diff] + 1, i + 1];
        }else{
            obj[numbers[i]] = i;
        }
    }
};