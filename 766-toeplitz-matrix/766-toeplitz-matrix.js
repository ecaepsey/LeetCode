/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for(var rowIndex = 0; rowIndex < matrix.length; ++rowIndex) {
       for(var colIndex = 0; colIndex < matrix[0].length; ++colIndex) {
           if (rowIndex > 0 && colIndex > 0 && matrix[rowIndex-1][colIndex-1] != matrix[rowIndex][colIndex]) {
               return false
           } 
           
          
           
       }
        
        
        
    }
    
    return true
    
    
    
};