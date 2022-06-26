/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
   var result = words.length
   
   for(var i = 0; i < words.length; i++) {
        for(var w = 0; w < words[i].length; w++) {
            var letter = words[i][w]
               if  (allowed.indexOf(letter) == -1) {
                   result -= 1
                   break
                   
               }
            
                
                
                
        }
       
   }
   
   return result
};