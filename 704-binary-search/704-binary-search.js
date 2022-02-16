/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
     var low = 0
    var high = nums.length - 1
       
    while (low <= high) {
       
        
         var mid = low + high
        var guess = nums[mid]
         
        if (guess == target) {
           
            return mid
        } 
        
        if (guess > target) {
            high = mid - 1
        }
        
        else {
            low = mid + 1
        }
        
     
       
       
        
        
       
    }

       return -1
    
    
 
    
    
    
    
};