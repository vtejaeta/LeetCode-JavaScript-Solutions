/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let ptr1 = 0, ptr2 = s.length - 1;
    
    while(ptr1 <= ptr2){
        let temp = s[ptr1];
        s[ptr1] = s[ptr2];
        s[ptr2] = temp;
        ptr1++;
        ptr2--;
    }
    
    return s;
};