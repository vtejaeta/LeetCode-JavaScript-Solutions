/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let newMap = new Map();
    
    for(let el of nums1){
        if(!newMap.has(el)){
            newMap.set(el,1);
        }
    }
    
    return nums2.filter(el => {
        if(newMap.has(el)){
            newMap.delete(el);
            return true;
        }else{
            return false;
        }
    })
};