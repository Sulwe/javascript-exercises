const removeFromArray = function(arr, ...args) {
    for (const arg of args){
            const removedFrom = arr.filter(function(element){
                return element !== arg;

            });
                
            return removedFrom;
    };

};

// Do not edit below this line
module.exports = removeFromArray;
