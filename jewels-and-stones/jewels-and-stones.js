/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let stonesHash = {}, count = 0;
    
    for(let i in stones){
        if(stonesHash[stones[i]]){
           stonesHash[stones[i]] += 1;
       }else{
            stonesHash[stones[i]] = 1;               
       }
    }
    
    for(let i in jewels){
        if(stonesHash[jewels[i]]){
            count += stonesHash[jewels[i]];
        }
    }
    
    return count;
};