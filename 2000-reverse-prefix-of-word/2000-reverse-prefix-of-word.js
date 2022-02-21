/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    var index = word.indexOf(ch)
    
    if (index == -1) {
        return word
    } else {
        var newword = ""
    
        
    
        
    for(var i = index; i >= 0; i--) {
        newword += word[i]
    }
        
    console.log(newword)
    
    newword += word.slice(index +1)
    }
    
    
    
    return newword
    
    
};