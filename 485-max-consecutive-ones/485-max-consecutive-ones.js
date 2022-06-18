/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var counter = [0,0]
    var  max = [0,0]
  
   for(var i = 0; i < nums.length; i++) {
        
       
       if (nums[i] == 1) {
           counter[0] += 1
           
         
       } else {
            counter[0] = 0
       }
       
       if (counter[0] > max[0]) {
           max[0] = counter[0]
       } 
      
       
   }
   
    return max[0]
    
    
};