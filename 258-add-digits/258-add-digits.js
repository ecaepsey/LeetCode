/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    
   while(num.toString().length != 1)  {
       let numArr = num.toString().split("");
      num = numArr.reduce(function(a, b){
        return parseInt(a) + parseInt(b);
    }, 0);
    

   }
    
    return num
    
   
    
   
  
    
};