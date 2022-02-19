/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    var result = nums.map((item) => {
        return item * item
    })
    return result.sort((a, b) => {
        return a - b
    })
};