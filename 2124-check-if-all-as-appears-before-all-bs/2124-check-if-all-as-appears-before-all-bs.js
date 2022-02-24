/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
     
   
    
 
    
    
     if (s.indexOf("ba") !== -1) {
        return false
    }
    
    
      for(var i = 0; i < s.length; i++) {
        if (s[i + i] == "a" &&  s[i] == "b") {
            return false
        }
           return true
    
      }
    
   
     return true
    
   
   
  
};