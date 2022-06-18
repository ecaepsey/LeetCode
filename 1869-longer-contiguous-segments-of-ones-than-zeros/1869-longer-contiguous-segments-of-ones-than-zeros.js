/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
     var counter = [0,0]
   var  max = [0,0]
   var str = s.toString()
   for(var i = 0; i < str.length; i++) {
        if (str[i] == 1) {
             counter[0] += 1
            counter[1] = 0
        }
           
        else if (str[i] == 0) {
            counter[0] = 0
            counter[1] += 1
        }
       
        if (counter[0] > max[0]) {
            max[0] = counter[0]
       } else if (counter[1] > max[1]) {
            max[1] = counter[1]
       }
       
      
       
       
   }
   
    console.log(counter, max)
    
    return  max[1] < max[0]
       
};