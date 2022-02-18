/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var newArray = []
    if (nums.indexOf(target) != - 1) {
        return nums.indexOf(target)
    } else {
        for(var i = 0; i < nums.length; i++) {
           
            if (nums[i] > target) {
               
                break
            }
              newArray.push(nums[i])
               
        }
          newArray.push(target)
        console.log(newArray)
        return newArray.indexOf(target)
    }
};