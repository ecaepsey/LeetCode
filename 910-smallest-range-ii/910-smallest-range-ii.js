/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var smallestRangeII = function(nums, k) {
    var sort = nums.sort((a, b) => a-b)
    var len = sort.length
    var res = sort[len-1] - sort[0]
    
    
    for(var i = 0; i < len-1; i++) {
        var max = Math.max(sort[len-1] -k, sort[i] + k)
        var min = Math.min(sort[0] + k, sort[i+1] -k)
        
        res = Math.min(res, max - min)
    }
    
    return res
};

