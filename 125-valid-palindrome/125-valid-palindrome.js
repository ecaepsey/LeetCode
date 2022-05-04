/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    s = s.replace(/[\W_]/g, '');
    var len = Math.floor(s.length / 2)
    
    for(var i = 0; i < len; i++) {
        if (s[i] != s[s.length  - i - 1]){
            return false
        }
    }
    
    return true
};