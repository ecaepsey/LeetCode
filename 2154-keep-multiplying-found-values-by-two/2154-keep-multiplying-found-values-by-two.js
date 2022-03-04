/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    var newOrig = original
    
    while(nums.indexOf(newOrig) != -1) {
        newOrig *= 2
    }
    
    return  newOrig
    
};