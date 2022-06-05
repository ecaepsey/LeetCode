/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    var output = []
    var index = 0
     if (nums.length === 1) return nums[0];
   
    for(var row = nums.length; row >= 1; row--) {
       
       index += 1
         var colIndex = 0
        var current = []
        for(var col = row; col > 0; col--) {
          
            colIndex += 1
            if (row == nums.length) {
                current = [...nums]
            } 
             else {
                  current.push((output[index-2][colIndex-1] + output[index-2][colIndex]) % 10 )
             }
            
            
            
            
        }
        
        output.push([...current])
        
    
        
    }
    
    return output[output.length-1].length ? output[output.length-1][0] : 0
};