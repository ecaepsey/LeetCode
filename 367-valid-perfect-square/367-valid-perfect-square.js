/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    for(var i = 0; i <= num; i++) {
        if (i * i == num) {
            return true
        }
    }
    
    return false
};