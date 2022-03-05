/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   var dict = {}
   
   
   for(var i = 0; i < nums.length; i++) {
       dict[nums[i]] = dict[nums[i]] ? dict[nums[i]] + 1 : 1
       
   }
    
   
    
    for(var j in dict) {
        if (dict[j] == 1) {
            return j
        }
    }
    
    
};