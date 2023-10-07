const sumAll = function(x, y) {
    if (typeof(x) !== 'number' || typeof(y) !== 'number') {
        return "ERROR";
    }
    else if (x < 0 || y < 0){
        return "ERROR";
    }
    else if (x < y){
        let sum = 0;
        for (let i = x; i <= y; i++){
            sum += i;
        }
        return sum;
    }
    else {
        let sum = 0;
        for (let i = y; i <= x; i++){
            sum += i;
        }
        return sum;
    }
    

};

// Do not edit below this line
module.exports = sumAll;
