/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  var sort1 = sortAlphabets(s)
  var sort2 = sortAlphabets(t)
  
  var length = 0
  
  if (sort1.length > sort2.lenght) {
      length = sort1.length
  } else {
        length = sort2.length
  }
  
    for(var i = 0; i < length; i++) {
        if (sort2[i] != sort1[i]) {
            return sort2[i]
        }
    }
};

var sortAlphabets = function(text) {
    return text.split('').sort().join('');
};