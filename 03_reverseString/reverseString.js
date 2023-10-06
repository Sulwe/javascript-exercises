const reverseString = function(string) {
    let splitString = string.split('');
    let splitReversed = splitString.reverse();
    let reversedString = splitReversed.join('');

    return reversedString;


};

// Do not edit below this line
module.exports = reverseString;
