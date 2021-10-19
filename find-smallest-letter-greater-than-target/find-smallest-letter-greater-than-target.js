/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if(letters[0] > target || target >= letters[letters.length-1]){
        return letters[0];
    }
    
    let left = 0, right = letters.length-1;
    
    while(left < right){
        let mid = left + Math.floor((right-left) / 2);
        if(letters[mid] <= target){
            left = mid + 1;
        }else if(letters[mid] > target){
            right = mid;
        }
    }
    
    return letters[left];
};