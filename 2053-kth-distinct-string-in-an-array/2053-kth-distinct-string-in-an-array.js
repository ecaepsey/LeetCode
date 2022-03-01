/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    var dict = {}
    
    
    for(var i in arr) {
        dict[arr[i]] = dict[arr[i]] ? dict[arr[i]] + 1 : 1
    }
    
    var result = []
    
    
    for(var d in dict) {
        if (dict[d] == 1) {
            result.push(d)
        }
    }
    
    if (!result[k-1]) {
        return ""
    }
    
    return result[k-1]
};