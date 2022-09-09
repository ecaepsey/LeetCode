/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var sum = 0;
    var product = 1;
    var result = 0;
    var toString = '' + n
    for(var i = 0; i < toString.length; i++) {
        sum += +toString[i]
        product *= +toString[i]
        console.log(sum)
    }
    result = product - sum
    return result
};