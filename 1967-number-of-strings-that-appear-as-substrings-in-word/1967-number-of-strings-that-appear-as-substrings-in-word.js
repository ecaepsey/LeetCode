/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    var result = 0
   
    for(var i = 0; i < patterns.length; i++) {
        if (word.indexOf(patterns[i]) != -1) {
            result += 1
        }
    }
    
    
    
    
    return result

};