/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   var stack = []
    var characters = { '}': '{', ')': '(', ']': '['}
    
    for(var char of s) {
        if (!characters[char] ) {
            stack.push(char)
        }
        
        else if (stack.pop() != characters[char]) {
            return false
        }
    }
    
    return stack.length === 0
    
};