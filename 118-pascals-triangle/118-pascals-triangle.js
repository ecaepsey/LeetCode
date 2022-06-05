/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    var output = []
    for(var i = 1; i <= numRows; i++) {
        var cur = []
        
        for(var j = 0; j < i; j++) {
           if (j === 0 || j === i - 1) {
                cur.push(1);
            } else {
                cur.push((output[i-2][j-1] + output[i-2][j]));
            }
        }
        
        
        
        output.push([...cur])
    }
    
    return output
};