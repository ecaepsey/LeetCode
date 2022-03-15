/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    var dict = {}
   var count = 1
    for(var i = 0; i < arr.length; i += 1) {
        
        if (dict[arr[i]]) {
            ++dict[arr[i]]
        } else {
            dict[arr[i]] = 1
        }
    }
    
    var result = []
    
    for(var d in dict) {
        if (dict[d] == d) {
            result.push(dict[d])
        }
        
        
    }
    
    console.log(dict, result)
    
    if (!result.length) {
        return -1
    }
    
    
    return getMaxOfArray(result)
    
    
};

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}


