/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
   
    var startValue = 1
    
    while(true) {
        var total = startValue
        var isValid = true
        
        
        for(const num of nums) {
            total += num
            
            if (total < 1) {
                isValid = false
                break;
            }
        }
        
        if (isValid) {
            return startValue;
        } else {
            startValue += 1;
        }
        
        
    }
    
  
};