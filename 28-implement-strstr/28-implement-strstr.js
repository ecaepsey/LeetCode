/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack.indexOf(needle) != -1) {
        return haystack.indexOf(needle)
    }
    
    return -1
};