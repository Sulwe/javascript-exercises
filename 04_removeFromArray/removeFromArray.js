const removeFromArray = function(arr, ...args) {
    const removedArray = [];

    arr.forEach(element => {
        if (!args.includes(element)){
            removedArray.push(element);
        }
        
    });
    return removedArray;

};

// Do not edit below this line
module.exports = removeFromArray;
