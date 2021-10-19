/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let obj = {};
    
    for(let el of arr) {      
      if(obj[el] !== undefined) {
        return true
      }
      obj[el / 2] = el;
      obj[el * 2] = el;
    }
  
    return false;
};