/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let res = command.replaceAll("(al)","al");
    res = res.replaceAll("()","o");
    
    return res;
};