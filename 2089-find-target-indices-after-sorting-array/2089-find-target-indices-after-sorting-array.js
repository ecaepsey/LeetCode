/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    var sorted = nums.sort((a, b) => a - b)
    
     var indexes = [], i = -1;
        while ((i = sorted.indexOf(target, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
};