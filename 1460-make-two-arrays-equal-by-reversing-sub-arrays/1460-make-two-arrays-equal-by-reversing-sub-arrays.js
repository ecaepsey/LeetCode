/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    var sortedT = target.sort((a, b) => a - b)
    var sortedA = arr.sort((a, b) => a -b)
    
    
    
    for(var i = 0; i < target.length; i++) {
        
        if (target[i] != arr[i]) {
            return false
        }
    }
    
    return true
};