/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    var five = 0
    
    var ten = 0
    
    
    for(var bill of bills) {
        if (bill == 5) {
            five += 1
        } else if (bill == 10) {
            if (!five) {
                return false
            }
            five -= 1
            ten += 1
        } else {
            if (ten && five) {
                ten -= 1
                five -= 1
            } else if (five >= 3) {
                five -= 3
            } else {
                return false
            }
        }
    }
    return true
};