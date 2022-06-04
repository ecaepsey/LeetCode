/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var result = [[]]
   
    for(var num of nums) {
        var newSubsets = []
       for(var curr of result) {
            
           newSubsets.push([...curr, num])
            
           
        }
        for(var cur of newSubsets) {
            result.push(cur)
        }
        
        
    }
    
    console.log(result)
    return result
   
};