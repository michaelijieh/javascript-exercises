const removeFromArray = function(arrays, ...theArgs) {
    let newElenents = [];
    for (const array of arrays) {
        if(!theArgs.includes(array)) {
            newElenents.push(array)
            
        }
            
    } return newElenents
    
}

// Do not edit below this line
module.exports = removeFromArray
