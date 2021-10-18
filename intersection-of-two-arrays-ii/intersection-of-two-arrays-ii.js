/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let newMap = new Map();
    
    for(let el of nums1) {
        if(newMap.has(el)){
            let count = newMap.get(el);
            newMap.set(el,++count);
        }else{
            newMap.set(el,1);
        }
    }
    
    return nums2.filter(el => {
        if(newMap.has(el)){
            let count = newMap.get(el);
            if(count > 0){
                newMap.set(el,--count);
                return true;
            }
        }else{
            return false;
        }
    })
};