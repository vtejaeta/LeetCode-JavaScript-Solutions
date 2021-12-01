/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0, ruleKeyHash = {"type":0,"color":1,"name":2};
    let index = ruleKeyHash[ruleKey];
    
    
    items.forEach(item => {
        if(item[index] == ruleValue){
            count++;
        }
    })
    
    return count;
};