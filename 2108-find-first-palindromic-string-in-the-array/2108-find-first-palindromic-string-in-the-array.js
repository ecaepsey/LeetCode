/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(var i = 0; i < words.length; i++) {
        if (fastestIsPalindrome(words[i])) {
            return words[i]
        }
        
    }
    
    
    return ""
};



function fastestIsPalindrome(str) {
  var len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1])
      return false;
  return true;
}
    
    
