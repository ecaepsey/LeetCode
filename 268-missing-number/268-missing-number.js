/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var sorted = nums.sort((a, b) => a -b )
    console.log(sorted)
    var isSorted = false
    var find = 0
   for(var i = 0; i < nums.length; i++) {
       if (nums[i] == i) {
           isSorted = true
       }
       
       if (nums[i] != i) {
           isSorted = false
       }
       
       
       if (nums[i] != i) {
            find = i
           break;
       }
       
       if (isSorted) {
           find = sorted.length
       }
       
      
       
   }
    
    
    return find
};