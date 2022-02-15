/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    var array = s.split(" ")
  
    
    var sorted = array.sort((a, b) => {
         var itemA = /\d+/.exec(a)
         var itemB = /\d+/.exec(b)
            
         return itemA - itemB
         
    })
    
    var newArray = sorted.map((item) => {
       return item.replace(/\d+/, "")
    })
    
    return newArray.join(" ")
};


