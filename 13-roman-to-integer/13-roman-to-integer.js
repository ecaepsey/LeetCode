/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var number = 0
    var object = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    
    
    for(var i = 0; i < s.length; i++) {
        
        
        
        if (s[i] == "I" && s[i+1] == "V"  ) {
            number += 4
            i++
            
             
            
            
        } else if (s[i] == "I" && s[i+1] == "X"  ) {
              number += 9
               i++
          
           
            
        } 
        
        else if (s[i] == "X" && s[i+1] == "L"  ) {
            number += 40
             i++
        } 
        
        else if (s[i] == "X" && s[i+1] == "C") {
             
            number += 90
          
             i++
        } 
        
        else if (s[i] == "C" && s[i+1] == "D") {
             
            number += 400
            
             i++
        } 
        
        else if (s[i] == "C" && s[i+1] == "M") {
             number += 900
            i++
           
            
            
        } else {
            number += object[s[i]]
        }
       
         
        
        
        
        
    }
    
   return number
    
    
};