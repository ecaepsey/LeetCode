/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    var sorted = [...heights].sort((a, b) => a - b)
    var result = []
    for(var i = 0; i < heights.length; i++) {
      if (sorted[i] != heights[i]) {
          result.push(i)
      }
    }
    
    return result.length
};