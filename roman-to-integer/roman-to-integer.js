/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let obj = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
    }, n = s.length, i = 0, final = 0;
    
    while(i < n){
        let count;
        if(s[i] == "I"){
           if(s[i+1] == "V") {
               count = 4;
               i += 2;
           }else if(s[i+1] == "X"){
               count = 9;
               i += 2;
           }else {
               count = obj[s[i]];
               i++;
           }
        }
        else if(s[i] == "X"){
            if(s[i+1] == "L") {
               count = 40;
                i += 2;
           }else if(s[i+1] == "C"){
               count = 90;
               i += 2;
           }else {
              count = obj[s[i]];
               i++;
           }
       }
        else if(s[i] == "C"){
            if(s[i+1] == "D") {
               count = 400;
                i += 2;
           }else if(s[i+1] == "M"){
               count = 900;
               i += 2;
           }else{
               count = obj[s[i]];
               i++;
           }
        }else {
            count = obj[s[i]];
            i++;
        }
        final += count;
    }
    
    return final;
};