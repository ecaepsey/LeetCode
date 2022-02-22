/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var state = [0, 0]
    
    
    for(var i = 0; i < moves.length; i++) {
        if (moves[i] == "R") {
            state[1] += 1
        } else if (moves[i] == "L") {
            state[1] -= 1
        } else if (moves[i] == "U") {
            state[0] += 1
        } else if (moves[i] == "D") {
            state[0] -= 1
        }
    }
    
    
    if (state[0] == 0 && state[1] == 0) {
        return true
    }
    
    console.log(state)
    
    return false
};