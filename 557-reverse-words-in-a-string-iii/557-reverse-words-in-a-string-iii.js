/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var split = s.split(" ")
    var result = ""
    for(var i = 0; i<split.length; i++) {
        var stringReverse = split[i].split("").reverse().join("")
        console.log(stringReverse)
        if (i != 0) {
              result += " "
        }
        result += stringReverse
    }
    
    return result
};