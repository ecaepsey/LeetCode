/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var sum =  String(n).split("").reduce((acc, cur) => {
        return acc + +cur
    },0)
    console.log(sum)
    
     var pruduct =  String(n).split("").reduce((acc, cur) => {
        return acc * +cur
    },1)
    console.log(pruduct)
    
    return pruduct - sum
};