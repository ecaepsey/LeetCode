/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    var count = 0
    for(var i = 0; i < nums.length; i++) {
        
        for(var j = 0; j < nums.length; j++) {
            
           if (nums[i] - nums[j] == k) {
               count += 1
           }
        }
    }
    
    console.log(count)
    return count
};