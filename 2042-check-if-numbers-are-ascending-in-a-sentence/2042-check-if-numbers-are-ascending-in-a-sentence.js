/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    var f = s.split(" ")
    var arr = f.filter((item) => typeof Number(item) == 'number' &&   isFinite(Number(item)) )
    console.log(arr)
    var isSorted = true
    for(var i = 0; i < arr.length; i++) {
        if (Number(arr[i]) >= Number(arr[i+1])) {
            isSorted = false
            break
        }
        
       
    }
    
     return isSorted
};