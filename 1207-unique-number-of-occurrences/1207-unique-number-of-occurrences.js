/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
   const counts = {};

    for (const num of arr) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }

    
    var result = Object.values(counts).filter((item, index) => Object.values(counts).indexOf(item) == index)
    
   
    return result.length == Object.values(counts).length
    
};