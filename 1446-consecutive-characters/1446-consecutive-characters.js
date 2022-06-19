/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    var count = 0
    var maxCount = 0
    var prev = ""
    
    for(var i = 0; i < s.length; i++) {
        if (s[i] == prev)  {
            count +=1
        } else {
            prev = s[i]
            count = 1
        }
        
        maxCount = Math.max(maxCount, count)
    }
    
    return maxCount
};

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}