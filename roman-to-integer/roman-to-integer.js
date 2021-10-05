/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let ret = 0;
    const dict = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    for (let i = 0; i < s.length; i++) {
      if (s[i + 1] && dict[s[i]] < dict[s[i + 1]]) {
        ret -= dict[s[i]];
      } else {
        ret += dict[s[i]];
      }
    }

    return ret;
};