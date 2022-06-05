/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var findNumber = 0
    var object = {
        
    }
    
   for (const num of nums) {
        var count = 1
       object[num] = object[num] ? object[num] + 1: 1
    }
    
    const asArray = Object.entries(object);

const filtered = asArray.filter(([key, value]) => value == 1);


const justStrings = Object.fromEntries(filtered);
    
   return parseFloat(Object.keys(justStrings)[0])
    // return findNumber 
};