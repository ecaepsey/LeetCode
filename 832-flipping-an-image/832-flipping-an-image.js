/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
   let re = image.map((item) => {
        
        return item.reverse()
       
       
    })
   
   return re.map((item) => {
       return item.map((i) => {
           if (i == 0) {
               i = 1
           } 
           else {
               i = 0
           }
           
           return i
       })
   })
   
    
   
    console.log(re)
};