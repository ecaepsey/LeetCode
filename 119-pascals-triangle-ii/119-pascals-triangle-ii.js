/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var output = []
    
    
    for(var row = 1; row <= rowIndex+1; row++) {
        var current = []
        
        for(var col = 0; col < row; col++) {
            if (col == 0 || col === row - 1) {
                current.push(1)
            } else {
                current.push(output[row-2][col-1] + output[row-2][col])
            }
        }
        
        output.push([...current])
    }
    
    return output.pop()
};